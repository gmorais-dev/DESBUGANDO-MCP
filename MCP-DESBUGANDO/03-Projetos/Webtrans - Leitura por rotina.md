---
tags:
  - projeto
  - webtrans
  - obsidian
  - rotina
aliases:
  - Webtrans por rotina
  - Leitura por rotina do Webtrans
---

# Webtrans - Leitura por rotina

Use esta nota quando a rotina do `webtrans` estiver nomeada no pedido e for
necessario decidir quais `.md` do cofre `Obsidian WebTrans` devem ser lidos
antes de analisar o codigo.

## Base obrigatoria

Sempre ler primeiro:

- `webtrans/ARCHITECTURE.md`
- `webtrans/.github/agente-codex.md`
- `webtrans/Obsidian WebTrans/Brain-WebTrans.md`
- `webtrans/Obsidian WebTrans/Regras/00-Regras-Invariantes.md`

## Mapa por rotina

| Rotina pedida | Ler sempre |
|---|---|
| CT-e, CTRC, conhecimento, documento de transporte, duplicata, anexo CT-e | `webtrans/Obsidian WebTrans/Documentacao/02-trans-rotinas.md`, `webtrans/Obsidian WebTrans/Documentacao/Telas/01-telas-conhecimento.md` |
| Manifesto, MDF-e, romaneio, carga, operacao de carga, viagem, rota, carta frete | `webtrans/Obsidian WebTrans/Documentacao/02-trans-rotinas.md`, `webtrans/Obsidian WebTrans/Documentacao/Telas/05-telas-operacional.md` |
| Coleta | `webtrans/Obsidian WebTrans/Documentacao/02-trans-rotinas.md`, `webtrans/Obsidian WebTrans/Documentacao/Telas/02-telas-coleta.md` |
| Financeiro, despesa, venda, contas a pagar, contas a receber, fatura, baixa por fatura, mov banco, conciliacao, boleto, CNAB, retorno | `webtrans/Obsidian WebTrans/Documentacao/03-financeiro-rotinas.md`, `webtrans/Obsidian WebTrans/Documentacao/Telas/03-telas-financeiro.md`, `webtrans/Obsidian WebTrans/Documentacao/Telas/09-telas-processos.md` |
| Usuario, filial, permissao, grupo de usuario, parametros, configuracao tecnica ou funcional | `webtrans/Obsidian WebTrans/Documentacao/04-configuracoes-gerais-usuarios-filiais.md`, `webtrans/Obsidian WebTrans/Documentacao/Telas/06-telas-configuracoes.md` |
| Cliente, fornecedor, veiculo, motorista, proprietario, cidade, cadastros principais | `webtrans/Obsidian WebTrans/Documentacao/04-configuracoes-gerais-usuarios-filiais.md`, `webtrans/Obsidian WebTrans/Documentacao/Telas/04-telas-cadastros.md` |
| CFOP, especie, fpag, plano de contas, plano de custo, unidade de custo, historico, area, funcao, marca, servico, tipo de produto, NCM, porto, terminal, aeroporto, agencia | `webtrans/Obsidian WebTrans/Documentacao/Telas/07-telas-auxiliares.md` |
| Consulta, localizar, listagem, pesquisa, popup de busca | `webtrans/Obsidian WebTrans/Documentacao/Telas/08-telas-consultas.md`, `webtrans/Obsidian WebTrans/Documentacao/Telas/12-telas-listagens.md` |
| Processo, baixa, importacao, arquivo, protocolo, separacao, rateio, movimentacao complementar | `webtrans/Obsidian WebTrans/Documentacao/Telas/09-telas-processos.md`, `webtrans/Obsidian WebTrans/Documentacao/Telas/13-telas-complementares.md` |
| Relatorio, impressao, Jasper, PDF, sub-relatorio | `webtrans/Obsidian WebTrans/Regras/04-Regras-Reports.md`, `webtrans/Obsidian WebTrans/Documentacao/Telas/10-telas-relatorios.md` |
| gwTrans, tela nova, tela moderna, cadastro/listagem em `web/gwTrans/` | `webtrans/Obsidian WebTrans/Documentacao/Telas/11-telas-gwtrans.md` |
| Integracao externa, CIOT, PagBem, Sefaz, email, webservice, API externa | `webtrans/Obsidian WebTrans/Documentacao/09-integracoes-externas.md` |
| Integracao GWeb x WebTrans, base compartilhada, comunicacao entre sistemas | `webtrans/Obsidian WebTrans/Documentacao/10-comunicacao-gweb-webtrans.md` |

## Complementos

Ler tambem quando necessario:

- `webtrans/Obsidian WebTrans/Documentacao/05-regras-de-negocio-consolidadas.md`
- `webtrans/Obsidian WebTrans/Documentacao/06-glossario-do-sistema.md`
- `webtrans/Obsidian WebTrans/Documentacao/07-pendencias-e-lacunas.md`
- `webtrans/Obsidian WebTrans/Regras/01-Regras-DAO-Schema.md`,
  `webtrans/Obsidian WebTrans/Regras/02-Regras-Java.md` e
  `webtrans/Obsidian WebTrans/Regras/03-Regras-JSP.md`, se a rotina evoluir
  para implementacao

## Regra pratica

1. Se o pedido nomear uma tela, consulta, listagem ou relatorio, abrir o `.md`
   de `Documentacao/Telas/` correspondente alem do modulo funcional.
2. Se o pedido nomear uma regra sem tela clara, abrir o `.md` do modulo
   (`02-trans-rotinas`, `03-financeiro-rotinas` ou
   `04-configuracoes-gerais-usuarios-filiais`) e completar com `05`, `06` e
   `07` quando houver ambiguidade.
3. Se houver parte do cofre que dependa de `mcp-postgres` ou
   `postgres-readonly`, ignorar essa parte quando esse MCP nao estiver
   disponivel e seguir por `gw-base-webtrans`, `web/WEB-INF/consultas/`,
   `resources/report/` e pelo fluxo `Controlador -> BO -> DAO`.
4. Se ainda restar duvida, usar `08-indice-para-obsidian.md` como mapa de
   navegacao e continuar a leitura do cofre antes de entrar no codigo.

## Relacionados

- [[Webtrans]]
- [[Leitura obrigatoria]]
- [[Mapa de conexoes]]
