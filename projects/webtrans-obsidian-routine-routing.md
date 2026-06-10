# Webtrans Obsidian Routine Routing

## Objetivo

Este contexto diz como transformar o nome da rotina pedida pelo usuario em
leitura direcionada do vault `Obsidian WebTrans`.

## Leitura-base sempre obrigatoria

- `webtrans/ARCHITECTURE.md`
- `webtrans/.github/agente-codex.md`
- `webtrans/Obsidian WebTrans/Brain-WebTrans.md`
- `webtrans/Obsidian WebTrans/Regras/00-Regras-Invariantes.md`

## Roteamento por dominio

| Sinal do pedido | Ler primeiro |
|---|---|
| CT-e, CTRC, conhecimento, duplicata do conhecimento, anexo CT-e | `Documentacao/02-trans-rotinas.md`, `Documentacao/Telas/01-telas-conhecimento.md` |
| Manifesto, MDF-e, romaneio, rota, viagem, carta frete, operacao de carga | `Documentacao/02-trans-rotinas.md`, `Documentacao/Telas/05-telas-operacional.md` |
| Coleta | `Documentacao/02-trans-rotinas.md`, `Documentacao/Telas/02-telas-coleta.md` |
| Despesa, venda, contas a pagar, contas a receber, baixa por fatura, mov banco, conciliacao, retorno, boleto, CNAB | `Documentacao/03-financeiro-rotinas.md`, `Documentacao/Telas/03-telas-financeiro.md`, `Documentacao/Telas/09-telas-processos.md` |
| Usuario, filial, permissao, parametro, configuracao tecnica/funcional | `Documentacao/04-configuracoes-gerais-usuarios-filiais.md`, `Documentacao/Telas/06-telas-configuracoes.md` |
| Cliente, fornecedor, veiculo, motorista, cidade, proprietario | `Documentacao/04-configuracoes-gerais-usuarios-filiais.md`, `Documentacao/Telas/04-telas-cadastros.md` |
| CFOP, especie, fpag, plano de contas, plano de custo, unidade de custo, historico, tipo de produto, NCM, porto, terminal | `Documentacao/Telas/07-telas-auxiliares.md` |
| Consulta, localizar, popup, pesquisa, listagem | `Documentacao/Telas/08-telas-consultas.md`, `Documentacao/Telas/12-telas-listagens.md` |
| Processo, baixa, importacao, lote, arquivo, protocolo, rateio, separacao | `Documentacao/Telas/09-telas-processos.md`, `Documentacao/Telas/13-telas-complementares.md` |
| Relatorio, impressao, Jasper, sub-relatorio | `Regras/04-Regras-Reports.md`, `Documentacao/Telas/10-telas-relatorios.md` |
| gwTrans, tela moderna, `web/gwTrans/` | `Documentacao/Telas/11-telas-gwtrans.md` |
| Integracao externa, PagBem, CIOT, Sefaz, e-mail, API | `Documentacao/09-integracoes-externas.md` |
| GWeb, base compartilhada, comunicacao entre sistemas | `Documentacao/10-comunicacao-gweb-webtrans.md` |

## Ajustes por intencao

### Quando a pergunta e funcional

Reforcar:

- `Documentacao/05-regras-de-negocio-consolidadas.md`
- `Documentacao/06-glossario-do-sistema.md`
- `Documentacao/07-pendencias-e-lacunas.md`, se houver ambiguidade

### Quando a pergunta e de implementacao

Reforcar:

- `Regras/01-Regras-DAO-Schema.md`
- `Regras/02-Regras-Java.md`
- `Regras/03-Regras-JSP.md`
- `Arquitetura/01-Padroes-Codigo.md`

### Quando a pergunta e de processo analitico

Reforcar:

- `Comandos/consultar-contexto.md`
- `Comandos/explorar.md`
- `Comandos/impacto.md`
- `Agentes/webtrans-explorer.md`
- `Agentes/webtrans-impact.md`

### Quando a pergunta depende de banco

Se houver partes do vault que pressuponham `mcp-postgres` ou
`postgres-readonly`, ignorar essa dependencia quando ela nao existir e seguir
por:

- `gw-base-webtrans/resource/`
- `gw-base-webtrans/changes/`
- `web/WEB-INF/consultas/`
- `resources/report/`
- fluxo real `Controlador -> BO -> DAO`
