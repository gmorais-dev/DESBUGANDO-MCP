---
tags:
  - mcp
  - resources
  - tools
aliases:
  - Recursos MCP
---

# Resources e Tools

O MCP `vscodeproject-context` expoe recursos de contexto e ferramentas read-only.

## Resources globais

- `context://global/preflight` -> [[Preflight obrigatorio]]
- `context://global/rules` -> [[Regras operacionais]]
- `context://global/git-github-rules` -> [[Git e GitHub]]
- `context://global/workspace` -> [[Workspace VsCodeProject]]
- `context://global/libs` -> [[Libs complementares]]

## Resources por projeto

- `context://project/webtrans` -> [[Webtrans]]
- `context://project/gw-base-webtrans` -> [[GW Base Webtrans]]
- `context://project/gw-boleto` -> [[GW Boleto]]
- `context://project/gw-consulta-situacao` -> [[GW Consulta Situacao]]
- `context://project/gw-pagbem` -> [[GW PagBem]]
- `context://project/gw-api-relatorio` -> [[GW API Relatorio]]

## Resources obrigatorios do Webtrans

- `context://webtrans/architecture`
- `context://webtrans/agente-codex`
- `context://webtrans/obsidian-vault`
- `context://webtrans/obsidian-routine-routing`
- `context://webtrans/obsidian-reasoning`

Esses resources correspondem aos documentos obrigatorios do [[Webtrans]].

## Resources de raciocinio do Obsidian WebTrans

- `context://webtrans/obsidian-vault` -> mapa das pastas `Regras/`,
  `Arquitetura/`, `Comandos/`, `Agentes/`, `Documentacao/` e
  `Documentacao/Telas/`
- `context://webtrans/obsidian-routine-routing` -> matriz de leitura por
  rotina pedida
- `context://webtrans/obsidian-reasoning` -> estrategia de raciocinio por tipo
  de tarefa

## Tools expostas

- `list_projects`
- `read_context`
- `repo_info`
- `git_status`
- `git_last_commit`

## Contrato das tools Git

As tools de Git retornam:

- repositorio acessado;
- branch vista;
- ultimo autor do commit observado.

## Limite

As tools sao apenas de consulta. Para qualquer mudanca de Git/GitHub, seguir [[Git e GitHub]].
