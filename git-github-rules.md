# Regras de Git e GitHub

## Modo de trabalho

- Toda atividade de Git/GitHub deve ser conduzida sob modo plano: explicar o plano antes de qualquer acao que altere estado.
- O agente tem liberdade apenas para consultar, inspecionar contexto, listar branches e olhar projetos/repositories do GitHub.
- Criacao de branch, commit, push, pull, merge, rebase, cherry-pick, tag ou qualquer mudanca de estado exige permissao explicita do usuario.

## Branches

- Ao criar branch, seguir o padrao:

```text
webtrans-saas-fix-numero_da_demanda
```

- Se a demanda nao tiver numero claro, pedir confirmacao antes de criar a branch.
- Nao criar branch com nome fora do padrao sem autorizacao explicita.

## Push, pull e merge

- Nunca fazer `push` sem permissao explicita.
- Nunca fazer `pull` sem permissao explicita.
- Nunca fazer `merge` sem permissao explicita.
- Nunca habilitar auto-merge sem permissao explicita.
- Antes de qualquer uma dessas acoes, informar repositorio, branch atual, branch alvo e risco esperado.

## Ao acessar repositorios

Sempre informar ao usuario:

- repositorio acessado;
- branch vista;
- ultimo autor do commit observado.

Essa regra vale para repositorios locais e consultas no GitHub.

## Consultas permitidas sem mudanca de estado

Permitido, desde que seja apenas leitura:

- ver branch atual;
- listar branches;
- ler historico de commits;
- ler status do working tree;
- ler diff;
- consultar PRs/issues/repositories no GitHub;
- abrir arquivos do repositorio para entender contexto.

## Acoes nao permitidas sem autorizacao

- `git push`
- `git pull`
- `git merge`
- `git rebase`
- `git cherry-pick`
- `git reset`
- `git checkout`/`git switch` para mudar branch
- criar/deletar branch
- criar commit/tag
- resolver conflitos aplicando mudancas
- alterar labels/assignees/review/merge state em PR sem pedido claro
