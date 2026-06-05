# Projeto: gw-boleto

## Papel

Biblioteca Java para boletos, codigo de barras, linha digitavel, CNAB 240/400, remessa, retorno, contas a pagar, extratos e geracao de PDF.

## Estrutura

- `lib/src/main/java/br/com/gwsistemas/gwboleto/`: classes base da biblioteca.
- `lib/src/main/java/br/com/gwsistemas/gwboleto/bancos/`: implementacoes por banco, como `SicrediGW`, `ItauGW`, `SicoobGW`, `CaixaEconomicaGW`.
- `lib/src/main/java/br/com/gwsistemas/gwboleto/arquivos/cnab240/`: layouts CNAB 240.
- `lib/src/main/java/br/com/gwsistemas/gwboleto/arquivos/cnab400/`: layouts CNAB 400.
- `resources/`: manuais e arquivos de exemplo por banco.
- `lib/build.gradle`: build Gradle da biblioteca.

## Build e artefato

- Gradle.
- Encoding ISO-8859-1.
- JAR final: `lib/build/libs/gwboleto.jar`.
- Nome do artefato: `gwboleto.jar`.

## Relacao com Webtrans

O `webtrans` consome `gwboleto.jar` para fluxos de boleto. Ao corrigir esta lib:

1. Validar build da lib.
2. Comparar/substituir o JAR consumido por `webtrans`.
3. Verificar a copia no WAR explodido se o Tomcat ja estiver com deploy antigo.

## Fluxo de investigacao

- Para linha digitavel/codigo de barras: partir do banco especifico em `bancos/*GW.java`.
- Para remessa/retorno: partir do pacote CNAB e banco correspondente.
- Para divergencia em runtime: comparar bytecode/hash do JAR usado pelo consumidor.
