# Mapa de Libs Complementares

## `gw-lib`

Pasta/repositorio com JARs internos compartilhados pelo legado. Entre os JARs observados:

- `gwboleto.jar`
- `gwConsultaSituacao.jar`
- `gwPagBem.jar`
- `gwCte.jar`
- `gwNFe.jar`
- `gwMDFe.jar`
- `gwLayoutsEDI.jar`
- `gwReportBI.jar`
- `e-util.jar`
- diversos conectores e integracoes GW, como `gwBuonny.jar`, `gwPamcard.jar`, `gwRepom.jar`, `gwTicketFrete.jar`, `gwValeCard.jar`.

Regra critica: quando corrigir uma biblioteca, validar se o JAR consumido pelo runtime foi realmente atualizado. O fonte correto em `gw-boleto`, `gw-pagbem` ou `gw-consulta-situacao` nao garante que `webtrans` esteja usando o novo artefato.

## `gw-pagbem-lib`

Pasta local de dependencias usada para compilar `gw-pagbem`.

Origem observada:

- JARs de `gw-lib`;
- JARs exportados de `webtrans/libs-exportadas`.

Exemplos importantes:

- `gson-2.8.6.jar`
- `httpclient-4.5.13.jar`
- `httpcore-4.4.13.jar`
- `httpmime-4.5.12.jar`
- `log4j-api-2.17.0.jar`
- `log4j-core-2.17.0.jar`
- `postgresql-42.2.12.jar`
- `axis2-*.jar` na linha 1.5.6
- `groovy-all-2.4.19.jar`

## Cuidados de compatibilidade

- No legado, versoes de dependencias podem ser restritas por compatibilidade Java 8 e runtime antigo.
- Para `webtrans`, nao atualizar `postgresql` acima de `42.2.12`, `axis2` fora de `1.5.6` ou `groovy-all` fora de `2.4.19` sem revisao explicita.
- Preferir verificar classe e hash do JAR em runtime quando o sintoma persiste depois de corrigir fonte.
