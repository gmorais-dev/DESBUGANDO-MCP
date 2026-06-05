# MCP do Workspace VsCodeProject

Servidor MCP local, via `stdio`, para expor o contexto do agente global e consultas Git somente leitura.

## Escopo

Este MCP e propositalmente read-only. Ele nao implementa ferramentas para:

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

## Instalar dependencias

Na pasta do servidor:

```bash
cd /home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server
npm install
```

## Executar localmente

```bash
npm start
```

O processo usa `stdio`, entao normalmente ele sera iniciado pelo cliente MCP.

## Configuracao do cliente MCP

Exemplo:

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

## Resources expostos

- `context://global/preflight`
- `context://global/rules`
- `context://global/git-github-rules`
- `context://global/workspace`
- `context://global/libs`
- `context://project/webtrans`
- `context://project/gw-base-webtrans`
- `context://project/gw-boleto`
- `context://project/gw-consulta-situacao`
- `context://project/gw-pagbem`
- `context://project/gw-api-relatorio`
- `context://webtrans/architecture`
- `context://webtrans/agente-codex`

## Tools expostas

- `list_projects`
- `read_context`
- `repo_info`
- `git_status`
- `git_last_commit`

As tools de Git sempre retornam o repositorio acessado, a branch vista e o ultimo autor do commit observado quando o diretorio e um repositorio Git.
