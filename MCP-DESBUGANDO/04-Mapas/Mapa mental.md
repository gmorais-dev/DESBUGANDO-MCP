---
tags:
  - mapa
  - obsidian
  - mcp
aliases:
  - Mind map
---

# Mapa mental

```mermaid
mindmap
  root((MCP Desbugando))
    Entrada
      Bem-vindo
      Como usar este cofre
      Leitura obrigatoria
    Regras
      Preflight obrigatorio
      Regras operacionais
      Git e GitHub
      Libs complementares
    MCP
      MCP vscodeproject-context
      Resources e Tools
      read-only
      stdio
    Workspace
      Workspace VsCodeProject
      Webtrans
        MVC Java EE
        Java 8
        ISO-8859-1
        JARs locais
      GW Base Webtrans
        SQL PostgreSQL
        sem execucao direta
      GW Boleto
        gwboleto.jar
      GW Consulta Situacao
        gwConsultaSituacao.jar
      GW PagBem
        gwPagBem.jar
      GW API Relatorio
        Lambda
        SQS
        S3
    Conexoes
      Webtrans consome Libs
      Base sustenta SQL
      Bibliotecas geram JARs
      MCP expoe contexto read-only
```

## Links do mapa

- [[Bem-vindo]]
- [[Como usar este cofre]]
- [[Leitura obrigatoria]]
- [[Preflight obrigatorio]]
- [[Regras operacionais]]
- [[Git e GitHub]]
- [[Libs complementares]]
- [[MCP vscodeproject-context]]
- [[Resources e Tools]]
- [[Workspace VsCodeProject]]
- [[Webtrans]]
- [[GW Base Webtrans]]
- [[GW Boleto]]
- [[GW Consulta Situacao]]
- [[GW PagBem]]
- [[GW API Relatorio]]

## Leitura visual

- O nucleo do cofre e [[Preflight obrigatorio]].
- [[Regras operacionais]] define como agir.
- [[Git e GitHub]] define quando parar e pedir permissao.
- [[MCP vscodeproject-context]] e [[Resources e Tools]] explicam a interface read-only.
- [[Workspace VsCodeProject]] conecta os projetos.
- [[Webtrans]] e o centro funcional, conectado a SQL e JARs.
