---
tags:
  - projeto
  - webtrans
  - java
  - legado
aliases:
  - Projeto Webtrans
---

# Webtrans

Aplicacao Web Java EE principal do legado GW Sistemas, empacotada como WAR e executada em Tomcat.

## Documentos obrigatorios

Antes de qualquer acao:

- `webtrans/ARCHITECTURE.md`
- `webtrans/.github/agente-codex.md`

## Arquitetura

Padrao MVC Java EE:

```text
JSP/JavaScript -> Controlador -> BO -> DAO -> PostgreSQL/JAR/runtime
```

## Estrutura relevante

- `src/java/`: fontes Java.
- `src/java/nucleo/`: base legada, conexao, apoio, boleto, importacao, exportacao, webservice.
- `src/java/br/com/gwsistemas/`: pacotes modernos.
- `web/`: JSPs, JavaScript, assets e raiz web.
- `web/WEB-INF/web.xml`: registro de servlets.
- `web/WEB-INF/config.properties`: configuracao de ambiente.
- `web/WEB-INF/consultas/`: XMLs de listagem `vw_listar_*.xml`.
- `resources/report/`: fontes Jasper.
- `gw-lib/`, `libs-exportadas/`, `libs-jasper/`: JARs de runtime/build.

## Regras tecnicas

- Java 8.
- Encoding ISO-8859-1 em Java/JSP/XML.
- Sem `@WebServlet`; registrar servlet no `web.xml`.
- Retorno JSON via Gson.
- Controladores usam parametro `acao`.
- Novos pacotes devem preferir `br.com.gwsistemas.<modulo>`.

## Fluxo de investigacao

1. Identificar URL/JSP/acao.
2. Localizar servlet no `web.xml`.
3. Seguir `Controlador -> BO -> DAO`.
4. Verificar JSP e JavaScript se o bug for de tela.
5. Se envolver biblioteca, provar qual JAR esta no runtime.

## Validacao comum

- `./gradlew compileJava` quando a alteracao for Java.
- Validar Tomcat/runtime quando o problema pode estar em JAR, WAR explodido ou deploy.

## Conexoes

- Usa [[Libs complementares]].
- Depende do lado SQL de [[GW Base Webtrans]].
- Consome `gwboleto.jar` de [[GW Boleto]].
- Consome `gwConsultaSituacao.jar` de [[GW Consulta Situacao]].
- Consome `gwPagBem.jar` de [[GW PagBem]].

## Relacionados

- [[Preflight obrigatorio]]
- [[Regras operacionais]]
- [[Workspace VsCodeProject]]
