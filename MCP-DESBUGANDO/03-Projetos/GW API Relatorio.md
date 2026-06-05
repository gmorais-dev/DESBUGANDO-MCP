---
tags:
  - projeto
  - relatorio
  - serverless
  - aws
aliases:
  - gw-api-relatorio
---

# GW API Relatorio

API serverless para geracao de relatorios em PDF, Word, Excel, HTML, VBI e exportacao de dados.

## Arquitetura

Componentes principais:

- Orquestradora Go em `go-api/cmd/orquestadora-fila/`.
- Worker Java em `java-api/lib/src/main/java/br/com/gwsistemas/relatorio/ApiReportHandler.java`.
- Core Java em `java-api/core/`.
- Biblioteca Java de relatorios em `java-api/lib/`.
- Infra AWS via `serverless.yml`.

## Fluxo principal

1. API Gateway chama a Lambda Go.
2. Go valida token/organizacao, calcula hash do relatorio e registra no banco.
3. Go envia mensagem para SQS FIFO.
4. Worker Java recebe evento SQS.
5. `ApiReportHandler` roteia por `tipo_geracao`:
   - `relatorio`: `RelatorioBO`;
   - `vbi`: `RelatorioVbiBO`;
   - `exportacao-dados`: `ExportacaoDadosBO`.
6. Resultado e gravado ou retornado via S3/presigned URL e status no banco.

## Infra

- Serverless Framework.
- AWS Lambda.
- API Gateway HTTP v2.
- SQS FIFO.
- S3.
- Worker Java 21 em runtime Lambda.
- Orquestradora Go com runtime `provided.al2`.

## Pontos de atencao

- Timeout HTTP do API Gateway fica limitado a 29s.
- Worker Java tem timeout de 900s.
- `VisibilityTimeout` da fila deve ser maior que o timeout do worker.
- Builds e deploys dependem dos artefatos:
  - `go-api/bin/orquestadora-fila.zip`
  - `java-api/lib/build/distributions/lib.zip`

## Fluxo de investigacao

- Para falha de endpoint: comecar por `serverless.yml` e handler Go.
- Para falha de geracao: seguir mensagem SQS ate `ApiReportHandler`.
- Para Word/RTF/Jasper: investigar `RelatorioBO` e exportadores Jasper no modulo Java.
- Para deploy: separar mudanca de codigo, build do zip e publicacao serverless.

## Relacionados

- [[Workspace VsCodeProject]]
- [[Webtrans]]
