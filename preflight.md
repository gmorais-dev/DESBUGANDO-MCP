# Preflight Obrigatorio do Agente Global

Este arquivo deve ser lido antes de qualquer acao em `/home/dev27/Documentos/VsCodeProject`.

O objetivo e dar ao agente global o mesmo tipo de ancoragem que o `webtrans` possui com `ARCHITECTURE.md` e `.github/agente-codex.md`: antes de responder, consultar, editar, executar comando ou acessar Git/GitHub, o agente deve entender o workspace, o projeto alvo, as permissoes e os documentos locais obrigatorios.

## Ordem obrigatoria de leitura

1. `global-mcp-agent/preflight.md`
2. `global-mcp-agent/rules.md`
3. `global-mcp-agent/workspace-context.md`
4. `global-mcp-agent/git-github-rules.md`
5. `global-mcp-agent/libs.md`, quando envolver bibliotecas ou JARs locais.
6. Arquivo especifico em `global-mcp-agent/projects/`, conforme o projeto alvo.
7. Documentos obrigatorios do projeto alvo.

## Documentos obrigatorios por projeto

### Workspace e Webtrans

Antes de qualquer acao no workspace, leia:

- `webtrans/ARCHITECTURE.md`
- `webtrans/.github/agente-codex.md`

Antes de qualquer acao no `webtrans`, esses dois arquivos continuam sendo obrigatorios e prevalecem sobre regras genericas.

### Projetos BASE

Antes de qualquer acao em projeto BASE, especialmente `gw-base-webtrans`, leia:

- `gw-base-webtrans/AGENTS.md`
- `global-mcp-agent/projects/gw-base-webtrans.md`

## Permissoes globais

Sem permissao explicita do usuario, o agente pode:

- ler arquivos;
- listar diretorios;
- buscar texto no projeto;
- consultar branch atual;
- listar branches;
- ler historico de commits;
- ler diff/status;
- consultar PRs, issues e repositorios no GitHub para entender contexto;
- montar explicacoes, planos e queries para revisao manual.

Sem permissao explicita do usuario, o agente nao pode:

- editar arquivos de projeto;
- criar, trocar ou deletar branch;
- fazer commit;
- fazer push;
- fazer pull;
- fazer merge;
- fazer rebase;
- executar SQL contra banco;
- conectar diretamente ao banco do usuario;
- alterar PRs, labels, assignees, reviews ou estado de merge;
- reverter mudancas locais.

## Git e GitHub

Toda atividade de Git/GitHub deve seguir modo plano:

1. consultar primeiro;
2. informar o contexto encontrado;
3. pedir autorizacao antes de qualquer mudanca de estado.

Ao acessar qualquer repositorio, informe:

- repositorio acessado;
- branch vista;
- ultimo autor do commit observado.

Quando o usuario autorizar criacao de branch, usar o padrao:

```text
webtrans-saas-fix-numero_da_demanda
```

Se o numero da demanda nao estiver claro, perguntar antes.

## Projetos BASE e SQL

Em projetos BASE:

- nunca executar SQL direto na base;
- nunca gerar SQL por execucao de comando contra o banco;
- nunca rodar comando direto na base do usuario;
- consultar somente os arquivos SQL versionados do projeto;
- montar a query e enviar para o usuario executar manualmente;
- priorizar performance, filtros indexaveis e colunas explicitas.

## Conduta de analise

Antes de propor correcao:

1. identificar o projeto alvo;
2. ler o contexto global e local;
3. rastrear o fluxo real no codigo, SQL, JAR, HTML, log ou diff;
4. separar causa de fonte, causa de artefato e causa de runtime/deploy;
5. explicar a evidencia encontrada;
6. pedir permissao antes de alterar qualquer arquivo quando a regra local exigir.

## Prioridade de regras

Quando houver conflito:

1. regras explicitas do usuario no prompt atual;
2. regras locais do projeto alvo;
3. este preflight global;
4. demais documentos do agente global.
