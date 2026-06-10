---
tags:
  - mcp
  - vscodeproject-context
  - servidor
aliases:
  - MCP do Workspace
---

# MCP vscodeproject-context

Servidor MCP local, via `stdio`, para expor o contexto do agente global e consultas Git somente leitura.

## Escopo

O MCP e propositalmente read-only.

Ele nao implementa ferramentas para:

- editar arquivos;
- criar branch;
- trocar branch;
- commit;
- push;
- pull;
- merge;
- rebase;
- executar SQL;
- alterar PR, labels, assignees ou reviews.

## Local

```text
/home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server
```

## Dependencias

```bash
cd /home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server
npm install
```

## Validacao

```bash
cd /home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server
npm run check
```

## Execucao manual

```bash
npm start
```

O processo usa `stdio`, entao normalmente deve ser iniciado pelo cliente MCP.

## Registro no Codex

```bash
codex mcp add vscodeproject-context -- node /home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server/server.js
```

## Configuracao JSON

```json
{
  "mcpServers": {
    "vscodeproject-context": {
      "command": "node",
      "args": [
        "/home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server/server.js"
      ]
    }
  }
}
```

## Smoke test

Depois do registro, confirme leitura de:

- `context://global/preflight`
- `context://global/rules`
- `context://webtrans/architecture`
- `context://webtrans/obsidian-vault`
- `context://webtrans/obsidian-routine-routing`
- `context://webtrans/obsidian-reasoning`

E tools read-only:

- `list_projects`
- `repo_info`
- `git_status`

## Relacionados

- [[Resources e Tools]]
- [[Preflight obrigatorio]]
- [[Git e GitHub]]
