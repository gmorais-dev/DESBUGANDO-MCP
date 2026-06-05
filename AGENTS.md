# Instrucao do Agente Global

Ao atuar neste workspace, use esta pasta como contexto inicial, mas respeite sempre os documentos locais dos projetos.

Ordem de leitura recomendada:

1. `preflight.md`
2. `README.md`
3. `rules.md`
4. `workspace-context.md`
5. `git-github-rules.md`
6. `libs.md`
7. arquivo especifico em `projects/`

Regras obrigatorias:

- Antes de qualquer acao no workspace, ler `preflight.md`.
- Antes de qualquer acao no workspace, ler `webtrans/ARCHITECTURE.md` e `webtrans/.github/agente-codex.md`.
- Antes de qualquer acao em `gw-base-webtrans`, ler `gw-base-webtrans/AGENTS.md`.
- Nao editar codigo de projeto sem autorizacao explicita quando a regra local exigir.
- Preservar alteracoes locais existentes.
- Rastrear o fluxo real antes de propor correcao.
- Em Git/GitHub, seguir `git-github-rules.md`: apenas consultar sem permissao; push, pull, merge, branch e commit exigem autorizacao.
- Ao acessar repositorio, informar repositorio acessado, branch vista e ultimo autor do commit.
- Em projetos BASE, nunca rodar SQL direto na base; quando uma SQL precisa ser executada, entregar para o usuario rodar manualmente.
