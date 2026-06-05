---
tags:
  - libs
  - jars
  - runtime
aliases:
  - gw-lib
  - Bibliotecas locais
---

# Libs complementares

Esta nota mapeia JARs internos, dependencias locais e cuidados de runtime.

## gw-lib

Pasta/repositorio com JARs internos compartilhados pelo legado.

JARs importantes:

- `gwboleto.jar`
- `gwConsultaSituacao.jar`
- `gwPagBem.jar`
- `gwCte.jar`
- `gwNFe.jar`
- `gwMDFe.jar`
- `gwLayoutsEDI.jar`
- `gwReportBI.jar`
- `e-util.jar`
- conectores como `gwBuonny.jar`, `gwPamcard.jar`, `gwRepom.jar`, `gwTicketFrete.jar`, `gwValeCard.jar`

## Regra critica

Quando corrigir uma biblioteca, valide se o JAR consumido pelo runtime foi realmente atualizado.

Fonte correto em [[GW Boleto]], [[GW PagBem]] ou [[GW Consulta Situacao]] nao garante que [[Webtrans]] esteja usando o novo artefato.

## gw-pagbem-lib

Pasta local de dependencias usada para compilar [[GW PagBem]].

Origem observada:

- JARs de `gw-lib`;
- JARs exportados de `webtrans/libs-exportadas`.

Exemplos:

- `gson-2.8.6.jar`
- `httpclient-4.5.13.jar`
- `httpcore-4.4.13.jar`
- `httpmime-4.5.12.jar`
- `log4j-api-2.17.0.jar`
- `log4j-core-2.17.0.jar`
- `postgresql-42.2.12.jar`
- `axis2-*.jar` na linha 1.5.6
- `groovy-all-2.4.19.jar`

## Compatibilidade

No legado, versoes podem ser restritas por Java 8 e runtime antigo.

Para [[Webtrans]], nao atualizar sem revisao explicita:

- `postgresql` acima de `42.2.12`;
- `axis2` fora de `1.5.6`;
- `groovy-all` fora de `2.4.19`.

## Diagnostico recomendado

Quando o sintoma persistir depois de corrigir fonte:

1. Verificar qual JAR o consumidor carrega.
2. Comparar hash ou bytecode.
3. Validar runtime, WAR explodido ou deploy antigo.

## Relacionados

- [[Webtrans]]
- [[GW Boleto]]
- [[GW Consulta Situacao]]
- [[GW PagBem]]
