---
tags:
  - preflight
  - mcp
  - regras
aliases:
  - Preflight
---

# Preflight obrigatorio

O preflight ancora qualquer acao no workspace `/home/dev27/Documentos/VsCodeProject`.

## Objetivo

Antes de responder, consultar, editar, executar comando ou acessar Git/GitHub, o agente deve entender:

- o workspace;
- o projeto alvo;
- as permissoes;
- os documentos locais obrigatorios;
- as regras de Git, SQL, encoding e runtime.

## Ordem obrigatoria

1. [[Preflight obrigatorio]]
2. [[Regras operacionais]]
3. [[Workspace VsCodeProject]]
4. [[Git e GitHub]]
5. [[Libs complementares]], quando envolver bibliotecas ou JARs locais
6. Nota especifica do projeto alvo
7. Documentos obrigatorios do projeto alvo

## Pode fazer sem permissao explicita

- Ler arquivos.
- Listar diretorios.
- Buscar texto no projeto.
- Consultar branch atual.
- Listar branches.
- Ler historico, diff e status.
- Consultar PRs, issues e repositorios para entender contexto.
- Montar explicacoes, planos e queries para revisao manual.

## Nao pode fazer sem permissao explicita

- Editar arquivos de projeto.
- Criar, trocar ou deletar branch.
- Fazer commit, push, pull, merge ou rebase.
- Executar SQL contra banco.
- Conectar diretamente ao banco do usuario.
- Alterar PRs, labels, assignees, reviews ou estado de merge.
- Reverter mudancas locais.

## Git e GitHub

Toda acao de Git/GitHub deve seguir [[Git e GitHub]]:

1. consultar primeiro;
2. informar contexto encontrado;
3. pedir autorizacao antes de qualquer mudanca de estado.

Ao acessar repositorio, informar:

- repositorio acessado;
- branch vista;
- ultimo autor do commit observado.

## BASE e SQL

Em projetos BASE, especialmente [[GW Base Webtrans]]:

- nunca executar SQL direto na base;
- consultar somente arquivos SQL versionados;
- montar query para o usuario executar manualmente;
- priorizar filtros indexaveis e colunas explicitas.

## Antes de propor correcao

1. Identificar o projeto alvo.
2. Ler contexto global e local.
3. Rastrear o fluxo real no codigo, SQL, JAR, HTML, log ou diff.
4. Separar causa de fonte, artefato e runtime/deploy.
5. Explicar a evidencia encontrada.
6. Pedir permissao antes de alterar quando a regra local exigir.

## Relacionados

- [[Leitura obrigatoria]]
- [[Regras operacionais]]
- [[Git e GitHub]]
- [[Webtrans]]
- [[GW Base Webtrans]]
