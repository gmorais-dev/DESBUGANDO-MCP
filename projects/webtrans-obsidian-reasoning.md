# Webtrans Obsidian Reasoning Strategy

## Objetivo

Este contexto traduz a estrutura do `Obsidian WebTrans` em estrategia de
raciocinio para o MCP-DESBUGANDO.

## Heuristica principal

Ler o vault em camadas, nao em ordem alfabetica:

1. Base e invariantes
2. Dominio funcional da rotina
3. Tela ou processo correspondente
4. Regras tecnicas da camada impactada
5. Fluxo real no codigo

## O que cada pasta responde melhor

| Pasta | Melhor resposta que ela da |
|---|---|
| `Documentacao/` | O que a rotina faz no negocio |
| `Documentacao/Telas/` | Como a rotina aparece para o usuario |
| `Regras/` | O que pode ou nao pode ser feito na implementacao |
| `Arquitetura/` | Como a solucao deve respeitar MVC, SQL e encoding |
| `Comandos/` | Qual abordagem analitica usar |
| `Agentes/` | Qual lente especializada reduz busca manual |

## Sequencia recomendada por tipo de tarefa

### Bug de tela

1. `Documentacao/Telas/<arquivo do dominio>.md`
2. `Documentacao/<modulo>.md`
3. `Regras/03-Regras-JSP.md`
4. codigo real em `web/` e `web/WEB-INF/web.xml`
5. `Controlador -> BO -> DAO`

### Bug de regra de negocio

1. `Documentacao/<modulo>.md`
2. `Documentacao/05-regras-de-negocio-consolidadas.md`
3. `Documentacao/06-glossario-do-sistema.md`, se nomes estiverem ambiguos
4. `Regras/02-Regras-Java.md`
5. `BO -> DAO`

### Bug ou mudanca de banco

1. `Documentacao/<modulo>.md`
2. `Documentacao/Telas/<arquivo do dominio>.md`, se houver reflexo visual
3. `Regras/01-Regras-DAO-Schema.md`
4. `gw-base-webtrans` para SQL versionado
5. DAO/consulta/relatorio consumidor no `webtrans`

### Relatorio

1. `Documentacao/Telas/10-telas-relatorios.md`
2. `Regras/04-Regras-Reports.md`
3. `Comandos/mapear-relatorio.md`
4. `resources/report/` e codigo chamador

### Analise de impacto

1. `Agentes/webtrans-impact.md`
2. `Comandos/impacto.md`
3. `Documentacao/01-modulos-e-rotinas.md`
4. referencias reais no codigo

## Regras de degradacao

- Se o vault tiver lacuna, usar `Documentacao/07-pendencias-e-lacunas.md` como
  sinal de baixa confianca e confirmar no codigo.
- Se a nota sugerir MCP de banco indisponivel, pular essa parte e usar artefatos
  versionados.
- Se a nota funcional conflitar com o codigo, prevalece o fluxo real provado no
  checkout atual.
