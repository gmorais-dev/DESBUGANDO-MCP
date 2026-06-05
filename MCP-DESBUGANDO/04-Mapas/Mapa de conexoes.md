---
tags:
  - mapa
  - conexoes
  - obsidian
aliases:
  - Conexoes do Cofre
---

# Mapa de conexoes

Esta nota existe para o grafo do Obsidian ficar explicito e navegavel.

## Entrada

- [[Bem-vindo]] aponta para [[Como usar este cofre]], [[Leitura obrigatoria]], [[Mapa mental]] e [[Mapa de conexoes]].
- [[Como usar este cofre]] aponta para [[Preflight obrigatorio]], [[Regras operacionais]], [[Git e GitHub]], [[Libs complementares]], [[Workspace VsCodeProject]] e [[MCP vscodeproject-context]].
- [[Leitura obrigatoria]] define a ordem entre [[Preflight obrigatorio]], [[Regras operacionais]], [[Workspace VsCodeProject]], [[Git e GitHub]], [[Libs complementares]] e projetos.

## Regras

- [[Preflight obrigatorio]] depende de [[Regras operacionais]] e [[Git e GitHub]].
- [[Regras operacionais]] reforca [[Preflight obrigatorio]], [[Git e GitHub]], [[Webtrans]], [[GW Base Webtrans]] e [[Libs complementares]].
- [[Git e GitHub]] governa qualquer acesso Git no [[Workspace VsCodeProject]].
- [[Libs complementares]] conecta [[Webtrans]] a [[GW Boleto]], [[GW Consulta Situacao]] e [[GW PagBem]].

## MCP

- [[MCP vscodeproject-context]] descreve instalacao, validacao e escopo.
- [[Resources e Tools]] conecta resources MCP com notas do cofre.
- [[Resources e Tools]] aponta para [[Preflight obrigatorio]], [[Regras operacionais]], [[Git e GitHub]], [[Workspace VsCodeProject]], [[Libs complementares]] e projetos.

## Projetos

- [[Workspace VsCodeProject]] e o hub dos projetos.
- [[Webtrans]] depende de [[GW Base Webtrans]] para SQL.
- [[Webtrans]] consome JARs descritos em [[Libs complementares]].
- [[GW Boleto]] produz `gwboleto.jar` para [[Webtrans]].
- [[GW Consulta Situacao]] produz `gwConsultaSituacao.jar` para [[Webtrans]].
- [[GW PagBem]] produz `gwPagBem.jar` para [[Webtrans]].
- [[GW API Relatorio]] compartilha dominio com [[Webtrans]], mas tem fluxo serverless separado.

## Arquivos-fonte adaptados

- `AGENTS.md` -> [[Leitura obrigatoria]]
- `README.md` -> [[Bem-vindo]], [[Como usar este cofre]], [[MCP vscodeproject-context]]
- `preflight.md` -> [[Preflight obrigatorio]]
- `rules.md` -> [[Regras operacionais]]
- `git-github-rules.md` -> [[Git e GitHub]]
- `workspace-context.md` -> [[Workspace VsCodeProject]]
- `libs.md` -> [[Libs complementares]]
- `mcp-server/README-MCP.md` -> [[MCP vscodeproject-context]], [[Resources e Tools]]
- `projects/webtrans.md` -> [[Webtrans]]
- `projects/gw-base-webtrans.md` -> [[GW Base Webtrans]]
- `projects/gw-boleto.md` -> [[GW Boleto]]
- `projects/gw-consulta-situacao.md` -> [[GW Consulta Situacao]]
- `projects/gw-pagbem.md` -> [[GW PagBem]]
- `projects/gw-api-relatorio.md` -> [[GW API Relatorio]]
