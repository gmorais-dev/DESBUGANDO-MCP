#!/usr/bin/env node

import { execFile } from "node:child_process";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema
} from "@modelcontextprotocol/sdk/types.js";

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AGENT_ROOT = path.resolve(__dirname, "..");
const WORKSPACE_ROOT = path.resolve(AGENT_ROOT, "..");

const PROJECTS = Object.freeze({
  webtrans: "webtrans",
  "gw-base-webtrans": "gw-base-webtrans",
  "gw-boleto": "gw-boleto",
  "gw-consulta-situacao": "gw-consulta-situacao",
  "gw-pagbem": "gw-pagbem",
  "gw-api-relatorio": "gw-api-relatorio",
  "gw-lib": "gw-lib"
});

const RESOURCES = Object.freeze({
  "context://global/preflight": {
    name: "Preflight Obrigatorio do Agente Global",
    file: "preflight.md"
  },
  "context://global/rules": {
    name: "Regras Operacionais Globais",
    file: "rules.md"
  },
  "context://global/git-github-rules": {
    name: "Regras de Git e GitHub",
    file: "git-github-rules.md"
  },
  "context://global/workspace": {
    name: "Contexto do Workspace",
    file: "workspace-context.md"
  },
  "context://global/libs": {
    name: "Mapa de Libs Complementares",
    file: "libs.md"
  },
  "context://project/webtrans": {
    name: "Projeto webtrans",
    file: "projects/webtrans.md"
  },
  "context://project/gw-base-webtrans": {
    name: "Projeto gw-base-webtrans",
    file: "projects/gw-base-webtrans.md"
  },
  "context://project/gw-boleto": {
    name: "Projeto gw-boleto",
    file: "projects/gw-boleto.md"
  },
  "context://project/gw-consulta-situacao": {
    name: "Projeto gw-consulta-situacao",
    file: "projects/gw-consulta-situacao.md"
  },
  "context://project/gw-pagbem": {
    name: "Projeto gw-pagbem",
    file: "projects/gw-pagbem.md"
  },
  "context://project/gw-api-relatorio": {
    name: "Projeto gw-api-relatorio",
    file: "projects/gw-api-relatorio.md"
  },
  "context://webtrans/architecture": {
    name: "Webtrans ARCHITECTURE.md",
    absoluteFile: path.join(WORKSPACE_ROOT, "webtrans/ARCHITECTURE.md")
  },
  "context://webtrans/agente-codex": {
    name: "Webtrans agente-codex.md",
    absoluteFile: path.join(WORKSPACE_ROOT, "webtrans/.github/agente-codex.md")
  },
  "context://webtrans/obsidian-vault": {
    name: "Webtrans Obsidian Vault",
    file: "projects/webtrans-obsidian-vault.md"
  },
  "context://webtrans/obsidian-routine-routing": {
    name: "Webtrans Obsidian Routine Routing",
    file: "projects/webtrans-obsidian-routine-routing.md"
  },
  "context://webtrans/obsidian-reasoning": {
    name: "Webtrans Obsidian Reasoning Strategy",
    file: "projects/webtrans-obsidian-reasoning.md"
  }
});

const server = new Server(
  {
    name: "vscodeproject-context-mcp",
    version: "1.0.0"
  },
  {
    capabilities: {
      resources: {},
      tools: {}
    }
  }
);

function textResponse(value) {
  return {
    content: [
      {
        type: "text",
        text: typeof value === "string" ? value : JSON.stringify(value, null, 2)
      }
    ]
  };
}

function resourceFile(resource) {
  if (resource.absoluteFile) {
    return resource.absoluteFile;
  }
  return path.join(AGENT_ROOT, resource.file);
}

function ensureKnownProject(projectName) {
  if (!PROJECTS[projectName]) {
    throw new Error(`Projeto desconhecido: ${projectName}`);
  }
  return path.join(WORKSPACE_ROOT, PROJECTS[projectName]);
}

async function isGitRepository(repoPath) {
  try {
    const info = await stat(path.join(repoPath, ".git"));
    return info.isDirectory() || info.isFile();
  } catch {
    return false;
  }
}

async function runGit(repoPath, args) {
  if (!(await isGitRepository(repoPath))) {
    return null;
  }

  const { stdout } = await execFileAsync("git", ["-C", repoPath, ...args], {
    cwd: WORKSPACE_ROOT,
    timeout: 10000,
    maxBuffer: 1024 * 1024
  });

  return stdout.trim();
}

async function repoInfo(projectName) {
  const repoPath = ensureKnownProject(projectName);
  const exists = await isGitRepository(repoPath);

  if (!exists) {
    return {
      repositorio_acessado: repoPath,
      branch_vista: null,
      ultimo_autor_commit: null,
      observacao: "Diretorio sem repositorio Git detectado."
    };
  }

  const [branch, lastAuthor, lastCommit, status] = await Promise.all([
    runGit(repoPath, ["branch", "--show-current"]),
    runGit(repoPath, ["log", "-1", "--format=%an <%ae>"]),
    runGit(repoPath, ["log", "-1", "--format=%h %s"]),
    runGit(repoPath, ["status", "--short"])
  ]);

  return {
    repositorio_acessado: repoPath,
    branch_vista: branch || "(HEAD destacado ou branch nao identificada)",
    ultimo_autor_commit: lastAuthor || null,
    ultimo_commit: lastCommit || null,
    working_tree_tem_alteracoes: Boolean(status),
    regra: "Consulta read-only. Push, pull, merge, commit e troca/criacao de branch exigem permissao explicita."
  };
}

server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: Object.entries(RESOURCES).map(([uri, resource]) => ({
    uri,
    name: resource.name,
    mimeType: "text/markdown"
  }))
}));

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const resource = RESOURCES[request.params.uri];
  if (!resource) {
    throw new Error(`Resource nao registrado: ${request.params.uri}`);
  }

  const file = resourceFile(resource);
  const text = await readFile(file, "utf8");

  return {
    contents: [
      {
        uri: request.params.uri,
        mimeType: "text/markdown",
        text
      }
    ]
  };
});

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "list_projects",
      description: "Lista os projetos conhecidos pelo agente global.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false
      }
    },
    {
      name: "read_context",
      description: "Le um resource de contexto registrado pelo MCP.",
      inputSchema: {
        type: "object",
        properties: {
          uri: {
            type: "string",
            description: "URI do resource, por exemplo context://global/preflight"
          }
        },
        required: ["uri"],
        additionalProperties: false
      }
    },
    {
      name: "repo_info",
      description: "Retorna repositorio acessado, branch vista e ultimo autor do commit para um projeto conhecido.",
      inputSchema: {
        type: "object",
        properties: {
          project: {
            type: "string",
            enum: Object.keys(PROJECTS)
          }
        },
        required: ["project"],
        additionalProperties: false
      }
    },
    {
      name: "git_status",
      description: "Consulta read-only do git status --short de um projeto conhecido.",
      inputSchema: {
        type: "object",
        properties: {
          project: {
            type: "string",
            enum: Object.keys(PROJECTS)
          }
        },
        required: ["project"],
        additionalProperties: false
      }
    },
    {
      name: "git_last_commit",
      description: "Consulta read-only do ultimo commit de um projeto conhecido.",
      inputSchema: {
        type: "object",
        properties: {
          project: {
            type: "string",
            enum: Object.keys(PROJECTS)
          }
        },
        required: ["project"],
        additionalProperties: false
      }
    }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const args = request.params.arguments ?? {};

  switch (request.params.name) {
    case "list_projects": {
      const entries = await Promise.all(
        Object.entries(PROJECTS).map(async ([name, relativePath]) => {
          const repoPath = path.join(WORKSPACE_ROOT, relativePath);
          return {
            name,
            path: repoPath,
            git: await isGitRepository(repoPath)
          };
        })
      );
      return textResponse(entries);
    }

    case "read_context": {
      const resource = RESOURCES[args.uri];
      if (!resource) {
        throw new Error(`Resource nao registrado: ${args.uri}`);
      }
      return textResponse(await readFile(resourceFile(resource), "utf8"));
    }

    case "repo_info": {
      return textResponse(await repoInfo(args.project));
    }

    case "git_status": {
      const repoPath = ensureKnownProject(args.project);
      const info = await repoInfo(args.project);
      const status = await runGit(repoPath, ["status", "--short", "--branch"]);
      return textResponse({
        ...info,
        status: status || "(sem alteracoes reportadas pelo git status)"
      });
    }

    case "git_last_commit": {
      const repoPath = ensureKnownProject(args.project);
      const info = await repoInfo(args.project);
      const commit = await runGit(repoPath, ["log", "-1", "--format=%H%n%an <%ae>%n%ad%n%s", "--date=iso"]);
      return textResponse({
        ...info,
        commit
      });
    }

    default:
      throw new Error(`Tool nao registrada: ${request.params.name}`);
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
process.stdin.resume();
