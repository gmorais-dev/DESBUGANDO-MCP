---
tags:
  - workspace
  - projetos
aliases:
  - Workspace
---

# Workspace VsCodeProject

Raiz do workspace:

```text
/home/dev27/Documentos/VsCodeProject
```

## Projetos principais

| Projeto | Papel |
|---|---|
| [[Webtrans]] | Aplicacao Web Java EE principal do legado GW Sistemas. |
| [[GW Base Webtrans]] | Scripts SQL PostgreSQL do Webtrans. |
| [[GW Boleto]] | Biblioteca Java para boletos, CNAB, remessa, retorno e PDF. |
| [[GW Consulta Situacao]] | Biblioteca Java para consulta/parsing de CTe, NFe, NFSe e Pessoa. |
| [[GW PagBem]] | Biblioteca Java de integracao PagBem. |
| [[GW API Relatorio]] | API serverless de relatorios com Go, Java, Lambda, SQS e S3. |
| [[Libs complementares|gw-lib]] | JARs internos compartilhados pelo legado. |

## Relacoes entre projetos

- [[Webtrans]] consome JARs locais e se relaciona com [[Libs complementares]].
- [[GW Boleto]] gera `gwboleto.jar`, consumido pelo [[Webtrans]].
- [[GW Consulta Situacao]] gera `gwConsultaSituacao.jar`, listado em `gw-lib`.
- [[GW PagBem]] gera `gwPagBem.jar`, copiado para `gw-lib/gwPagBem.jar`.
- [[GW Base Webtrans]] sustenta o lado PostgreSQL de boa parte dos fluxos do [[Webtrans]].
- [[GW API Relatorio]] e separado, mas compartilha dominio e bibliotecas Java GW.

## Estado local

O contexto original registra que alguns repositorios podem ter alteracoes locais existentes. Trate isso como trabalho do usuario ou de outro agente e nunca reverta sem pedido explicito.

## Lacunas conhecidas

- Nem todos os projetos possuem `ARCHITECTURE.md` ou `AGENTS.md`.
- Algumas regras foram inferidas por estrutura/build e devem ser confirmadas em tarefas especificas.
- A primeira versao do contexto foi estatica, sem builds nem testes.

## Relacionados

- [[Leitura obrigatoria]]
- [[Regras operacionais]]
- [[Mapa de conexoes]]
