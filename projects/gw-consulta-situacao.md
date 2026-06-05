# Projeto: gw-consulta-situacao

## Papel

Biblioteca Java para consulta e parsing de situacao de documentos e pessoas, incluindo CTe, NFe, NFSe e Pessoa Juridica.

## Estrutura

- `src/main/java/br/com/gwsistemas/consultarSituacao/`: base da biblioteca.
- `cte/`: consulta e parser de CTe.
- `nfe/`: consulta e parser de NFe.
- `nfse/`: consulta de NFSe.
- `pessoa/`: consulta de Pessoa Juridica na Receita.
- `imagem/`: retorno de imagens.
- `exception/`: excecoes de dominio.

## Build

- Gradle.
- Toolchain Java 8.
- Encoding ISO-8859-1.
- Publicacao Maven configurada.
- Depende de `gw-eutil`, `gw-nfe`, `gw-cte` como projetos Gradle.
- Usa `jsoup` para parsing HTML.
- JAR final configurado: `gwConsultaSituacao.jar`.

## Fluxo de investigacao

- Para bugs de parsing, comparar primeiro o HTML real recebido.
- Preferir parser DOM/Jsoup a extracao por `indexOf`.
- Para erros de build, verificar se os projetos irmaos `gw-eutil`, `gw-nfe`, `gw-cte` estao disponiveis no settings/local.

## Relacao com libs

O artefato `gwConsultaSituacao.jar` aparece em `gw-lib` e pode ser consumido pelo legado. Confirmar a versao do JAR em runtime quando o sintoma persistir.
