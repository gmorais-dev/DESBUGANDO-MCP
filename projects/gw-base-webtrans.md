# Projeto: gw-base-webtrans

## Papel

Repositorio de scripts PostgreSQL do Webtrans. Governa migracoes, funcoes, views, triggers, DML e modelos de banco.

## Documento obrigatorio

- `gw-base-webtrans/AGENTS.md`

## Regra operacional critica

- Nao conectar diretamente ao banco do usuario.
- Nao executar comandos sem permissao explicita do usuario.
- Toda query deve ser montada a partir dos SQLs existentes.
- Alteracoes de arquivos ou Git tambem exigem permissao explicita.
- Nunca gerar SQL por execucao direta no terminal contra a base.
- Nunca rodar nenhum comando direto na base.
- O agente tem permissao somente para consultar arquivos e estruturar a query.
- Se uma SQL precisa ser executada, enviar a SQL ao usuario para execucao manual.

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

1. Identificar o artefato ou tabela.
2. Buscar primeiro em `changes/`.
3. Se nao houver, buscar em `resource/`.
4. Para scripts novos, escolher `changes/FIX` ou `changes/RELEASE`.
5. Evitar `SELECT *` e priorizar filtros indexaveis.
6. Entregar query para o usuario, sem executar no banco.

## Entrega de SQL

Quando a investigacao exigir SQL mais precisa:

- montar a SQL a partir de evidencias do projeto;
- explicar objetivo e parametros que o usuario deve substituir;
- nao executar;
- enviar para o usuario rodar manualmente.

## Relacao com Webtrans

Quando o bug do `webtrans` depender de tabela, trigger, view ou funcao, este projeto e a fonte de verdade do lado PostgreSQL.
