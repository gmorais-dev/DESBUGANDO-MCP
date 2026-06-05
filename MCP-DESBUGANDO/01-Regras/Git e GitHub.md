---
tags:
  - git
  - github
  - regras
aliases:
  - Regras de Git
---

# Git e GitHub

Toda atividade de Git/GitHub deve ser conduzida em modo plano.

## Modo plano

1. Consultar primeiro.
2. Informar o contexto encontrado.
3. Pedir autorizacao antes de qualquer mudanca de estado.

## Consultas permitidas

Sem alterar estado, e permitido:

- ver branch atual;
- listar branches;
- ler historico de commits;
- ler status do working tree;
- ler diff;
- consultar PRs, issues e repositorios no GitHub;
- abrir arquivos do repositorio para entender contexto.

## Acoes bloqueadas sem autorizacao

- `git push`
- `git pull`
- `git merge`
- `git rebase`
- `git cherry-pick`
- `git reset`
- `git checkout` ou `git switch` para mudar branch
- criar ou deletar branch
- criar commit ou tag
- resolver conflitos aplicando mudancas
- alterar labels, assignees, reviews ou estado de merge em PR

## Ao acessar repositorio

Sempre informar:

- repositorio acessado;
- branch vista;
- ultimo autor do commit observado.

## Padrao de branch autorizado

Quando o usuario autorizar criacao de branch no fluxo [[Webtrans]], usar:

```text
webtrans-saas-fix-numero_da_demanda
```

Se o numero da demanda nao estiver claro, perguntar antes.

## Relacionados

- [[Preflight obrigatorio]]
- [[Regras operacionais]]
- [[Workspace VsCodeProject]]
