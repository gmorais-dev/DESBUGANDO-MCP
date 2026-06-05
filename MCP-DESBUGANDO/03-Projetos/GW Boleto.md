---
tags:
  - projeto
  - boleto
  - java
  - jar
aliases:
  - gw-boleto
---

# GW Boleto

Biblioteca Java para boletos, codigo de barras, linha digitavel, CNAB 240/400, remessa, retorno, contas a pagar, extratos e PDF.

## Estrutura

- `lib/src/main/java/br/com/gwsistemas/gwboleto/`: classes base.
- `lib/src/main/java/br/com/gwsistemas/gwboleto/bancos/`: bancos como `SicrediGW`, `ItauGW`, `SicoobGW`, `CaixaEconomicaGW`.
- `lib/src/main/java/br/com/gwsistemas/gwboleto/arquivos/cnab240/`: layouts CNAB 240.
- `lib/src/main/java/br/com/gwsistemas/gwboleto/arquivos/cnab400/`: layouts CNAB 400.
- `resources/`: manuais e exemplos por banco.
- `lib/build.gradle`: build Gradle.

## Build e artefato

- Gradle.
- Encoding ISO-8859-1.
- JAR final: `lib/build/libs/gwboleto.jar`.
- Nome do artefato: `gwboleto.jar`.

## Relacao com Webtrans

O [[Webtrans]] consome `gwboleto.jar` para fluxos de boleto.

Ao corrigir:

1. Validar build da lib.
2. Comparar ou substituir o JAR consumido pelo [[Webtrans]].
3. Verificar copia no WAR explodido se o Tomcat ja estiver com deploy antigo.

## Fluxo de investigacao

- Para linha digitavel/codigo de barras: partir do banco em `bancos/*GW.java`.
- Para remessa/retorno: partir do pacote CNAB e banco correspondente.
- Para divergencia em runtime: comparar bytecode/hash do JAR usado pelo consumidor.

## Relacionados

- [[Libs complementares]]
- [[Webtrans]]
