# Regras Operacionais Globais

## Regra base do workspace

Antes de qualquer acao, leia primeiro:

- `global-mcp-agent/preflight.md`

Antes de qualquer acao em `/home/dev27/Documentos/VsCodeProject`, leia sempre:

- `webtrans/ARCHITECTURE.md`
- `webtrans/.github/agente-codex.md`

Esses arquivos definem o padrao principal do legado Webtrans, incluindo arquitetura MVC, Java 8, ISO-8859-1 e restricoes de edicao.

## Permissoes e seguranca

- Preserve alteracoes locais existentes. Nao reverta, limpe ou sobrescreva mudancas que nao foram solicitadas.
- Para `webtrans`, nao alterar codigo sem autorizacao explicita do usuario.
- Para `gw-base-webtrans`, leia `AGENTS.md` e nao execute comandos nem acesse banco sem permissao explicita.
- Nao conectar diretamente ao banco do usuario.
- Para diagnostico, prefira rastrear o fluxo real por arquivos, logs, HTML, SQL, JAR ou diff fornecido.
- Separar causa de codigo-fonte de causa de artefato/runtime/deploy. Em projetos com JAR local, validar qual JAR o consumidor carrega.

## Git e GitHub

- Para Git/GitHub, ler tambem `git-github-rules.md`.
- Trabalhar em modo plano antes de qualquer acao que altere estado.
- Sem permissao explicita, o agente so pode consultar repositorio, branch, historico, diff, PR, issue e arquivos.
- Ao acessar qualquer repositorio, informar repositorio acessado, branch vista e ultimo autor do commit observado.
- Criar branch apenas com autorizacao e seguindo `webtrans-saas-fix-numero_da_demanda`.
- `push`, `pull` e `merge` exigem permissao explicita do usuario.

## Projetos BASE e SQL

- Em projetos BASE, como `gw-base-webtrans`, nunca gerar SQL executando comandos diretos no terminal contra a base.
- Nunca rodar comandos diretamente na base do usuario.
- O agente pode consultar arquivos SQL do projeto e montar uma query para revisao.
- Se uma SQL precisa ser rodada para validar ou corrigir algo, entregar a SQL ao usuario para execucao manual.
- Queries sugeridas devem ser performaticas, explicitas e baseadas nos artefatos SQL versionados.

## Encoding e legado Java

- `webtrans` usa Java 8 e fontes Java/JSP/XML em ISO-8859-1.
- `gw-pagbem` usa Ant/NetBeans, Java 8 e ISO-8859-1.
- `gw-boleto` compila com Gradle e encoding ISO-8859-1.
- `gw-consulta-situacao` compila com Gradle, toolchain Java 8 e encoding ISO-8859-1.

## Fluxo recomendado de atuacao

1. Identificar projeto alvo e artefato real envolvido.
2. Ler o guia local do projeto, se existir.
3. Mapear entrada do fluxo: endpoint, servlet, lambda, controller, script SQL, BO, DAO ou classe publica de biblioteca.
4. Seguir a chamada ate regra de negocio, persistencia, artefato externo ou JAR consumido.
5. Explicar a causa com evidencia do projeto antes de propor correcao.
6. Para alteracao, manter escopo cirurgico e validar pelo build/teste adequado quando possivel.

## Nao confundir

- `gw-lib` e uma pasta/repositorio de JARs consumidos; alterar o fonte de uma biblioteca nao muda o runtime ate o JAR consumido ser substituido.
- `gw-pagbem-lib` e pasta local de dependencias para build do `gw-pagbem`, nao e o destino final de runtime.
- `gw-base-webtrans` nao e uma aplicacao Java; o fluxo esta em SQL, `resource/`, `changes/`, `scripts/` e `pgModeler/`.
