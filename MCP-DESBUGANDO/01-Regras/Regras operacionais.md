---
tags:
  - regras
  - workspace
  - seguranca
aliases:
  - Regras Globais
---

# Regras operacionais

Esta nota resume as regras globais de seguranca, investigacao e edicao do workspace.

## Regra base

- Antes de qualquer acao, leia [[Preflight obrigatorio]].
- Antes de qualquer acao no workspace, considere obrigatorios:
  - `webtrans/ARCHITECTURE.md`
  - `webtrans/.github/agente-codex.md`

## Permissoes e seguranca

- Preserve alteracoes locais existentes.
- Nao reverta, limpe ou sobrescreva mudancas que nao foram solicitadas.
- Para [[Webtrans]], nao alterar codigo sem autorizacao explicita quando a regra local exigir.
- Para [[GW Base Webtrans]], leia `AGENTS.md` e nao execute comandos nem acesse banco sem permissao explicita.
- Nao conectar diretamente ao banco do usuario.

## Diagnostico

Prefira rastrear o fluxo real por:

- arquivos;
- logs;
- HTML;
- SQL;
- JAR;
- diff fornecido;
- runtime/deploy quando necessario.

Separe sempre:

- causa de codigo-fonte;
- causa de artefato;
- causa de runtime/deploy.

## Git e GitHub

Use [[Git e GitHub]].

- Consultas read-only sao permitidas.
- Mudancas de estado exigem permissao explicita.
- Sempre informe repositorio, branch e ultimo autor observado.

## SQL e projetos BASE

Em [[GW Base Webtrans]]:

- nunca gerar SQL executando comando direto contra a base;
- nunca rodar comando diretamente na base do usuario;
- consultar arquivos SQL versionados;
- entregar SQL para execucao manual pelo usuario.

## Encoding e legado Java

- [[Webtrans]] usa Java 8 e ISO-8859-1 em Java/JSP/XML.
- [[GW PagBem]] usa Ant/NetBeans, Java 8 e ISO-8859-1.
- [[GW Boleto]] compila com Gradle e encoding ISO-8859-1.
- [[GW Consulta Situacao]] compila com Gradle, toolchain Java 8 e ISO-8859-1.

## Fluxo recomendado

1. Identificar projeto alvo e artefato real.
2. Ler guia local do projeto.
3. Mapear entrada do fluxo.
4. Seguir chamada ate regra de negocio, persistencia, artefato externo ou JAR.
5. Explicar a causa com evidencia.
6. Fazer alteracao cirurgica e validar pelo build/teste adequado quando possivel.

## Nao confundir

- [[Libs complementares|gw-lib]] e pasta/repositorio de JARs consumidos.
- Corrigir fonte de biblioteca nao muda runtime ate o JAR consumido ser substituido.
- `gw-pagbem-lib` e dependencia local para compilar [[GW PagBem]], nao destino final de runtime.
- [[GW Base Webtrans]] nao e aplicacao Java; o fluxo esta em SQL, `resource/`, `changes/`, `scripts/` e `pgModeler/`.
