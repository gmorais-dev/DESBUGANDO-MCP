---
tags:
  - projeto
  - sql
  - base
  - postgresql
aliases:
  - gw-base-webtrans
---

# GW Base Webtrans

Repositorio de scripts PostgreSQL do [[Webtrans]]. Governa migracoes, funcoes, views, triggers, DML e modelos de banco.

## Documento obrigatorio

- `gw-base-webtrans/AGENTS.md`

## Regra critica

- Nao conectar diretamente ao banco do usuario.
- Nao executar comandos sem permissao explicita do usuario.
- Nunca gerar SQL por execucao direta no terminal contra a base.
- Nunca rodar nenhum comando direto na base.
- O agente pode consultar arquivos e estruturar queries.
- Se uma SQL precisa ser executada, enviar para o usuario rodar manualmente.

## Estrutura

- `changes/`: scripts em desenvolvimento.
- `changes/FIX/`: correcoes.
- `changes/RELEASE/`: novas funcionalidades.
- `changes/DML/`: manipulacao de dados.
- `changes/functions/`, `changes/triggers/`, `changes/views/`: artefatos SQL.
- `resource/`: base consolidada e templates.
- `pgModeler/`: modelos.
- `scripts/`: utilitarios.
- `rules/`: regras adicionais de versionamento/validacao.

## Fluxo de trabalho SQL

1. Identificar artefato ou tabela.
2. Buscar primeiro em `changes/`.
3. Se nao houver, buscar em `resource/`.
4. Para scripts novos, escolher `changes/FIX` ou `changes/RELEASE`.
5. Evitar `SELECT *`.
6. Priorizar filtros indexaveis.
7. Entregar query ao usuario sem executar no banco.

## Relacao com Webtrans

Quando o bug do [[Webtrans]] depender de tabela, trigger, view ou funcao, este projeto e a fonte de verdade do lado PostgreSQL.

## Relacionados

- [[Preflight obrigatorio]]
- [[Regras operacionais]]
- [[Workspace VsCodeProject]]
