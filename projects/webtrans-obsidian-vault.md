# Webtrans Obsidian Vault

## Objetivo

Este contexto resume a pasta `webtrans/Obsidian WebTrans/` para que o MCP do
workspace entenda a funcao de cada grupo de `.md` antes de entrar no codigo.

Use este resource como mapa de orientacao do vault. Ele nao substitui a leitura
dos arquivos reais da rotina; ele diz quais pastas e notas devem ser abertas
para melhorar o raciocinio.

## Pastas do vault e papel no raciocinio

### Base do vault

- `AGENTS.md`: explica que o vault e uma fonte secundaria de verdade para
  agentes, em `UTF-8`, e define a hierarquia local de regras.
- `Brain-WebTrans.md`: visao executiva do sistema, stack, modulos e arquitetura.

### `Regras/`

Esta pasta e a camada de invariantes e contratos de implementacao:

- `00-Regras-Invariantes.md`: encoding, camadas, PreparedStatement, fechamento
  de conexoes, preservacao de padroes.
- `01-Regras-DAO-Schema.md`: responsabilidade de DAO e padroes de schema.
- `02-Regras-Java.md`: naming, camadas, erros e boas praticas Java.
- `03-Regras-JSP.md`: limites e padroes para JSP, JavaScript e AJAX.
- `04-Regras-Reports.md`: regras de JasperReports.

Quando a tarefa puder virar patch, esta e a primeira pasta a reforcar depois do
contexto funcional.

### `Arquitetura/`

Esta pasta descreve o modelo tecnico e de trabalho:

- `01-Padroes-Codigo.md`: contratos por camada e naming.
- `02-Banco-PostgreSQL.md`: convencoes de banco; se houver trechos dependentes
  de `postgres-readonly`, ignorar quando esse MCP nao existir e seguir pelos
  SQLs versionados.
- `03-MCP-Servers.md`: panorama dos MCPs do ecossistema WebTrans.
- `04-Template-Demanda.md`: estrutura esperada para demandas e validacao.

Use esta pasta para estabilizar o raciocinio tecnico antes de navegar em
detalhes funcionais.

### `Comandos/`

Esta pasta encapsula heuristicas operacionais do vault:

- `consultar-contexto.md`: forca leitura do contexto correto antes da resposta.
- `encoding.md`: reforca cuidados de `ISO-8859-1`.
- `explorar.md`: orienta exploracao read-only de modulo/fluxo.
- `impacto.md`: orienta analise de impacto.
- `implementar-tarefa.md`: orienta implementacao e revisao final.
- `mapear-relatorio.md`: orienta rastreio de Jasper.
- `plano-primeiro.md`: quando parar no plano.
- `schema.md`: como pensar estrutura de dados sem depender do banco vivo.

Pense nesta pasta como macros mentais para o agente.

### `Agentes/`

Esta pasta separa lentes especializadas:

- `webtrans-explorer.md`: rastreio ponta a ponta de funcionalidade.
- `webtrans-db-analyzer.md`: leitura de schema/relacao por artefatos.
- `webtrans-impact.md`: referencias e dependencias.
- `webtrans-implementer.md`: implementacao sob padrao WebTrans.
- `webtrans-reports-mapper.md`: mapeamento de relatorios Jasper.
- `webtrans-spec-reviewer.md`: revisao de aderencia a requisito/padrao.

Quando a pergunta estiver ambigua, escolher a lente correta reduz busca manual.

### `Documentacao/`

Esta pasta e a base funcional do produto:

- `00-visao-geral-do-sistema.md`: panorama funcional e tecnico.
- `01-modulos-e-rotinas.md`: mapa de modulos, classes principais e JSPs.
- `02-trans-rotinas.md`: transporte, CT-e, manifesto, coleta, viagem, rota.
- `03-financeiro-rotinas.md`: despesas, receitas, mov banco, CNAB e boletos.
- `04-configuracoes-gerais-usuarios-filiais.md`: usuarios, filiais e parametros.
- `05-regras-de-negocio-consolidadas.md`: regras consolidadas por dominio.
- `06-glossario-do-sistema.md`: termos, siglas e equivalencias.
- `07-pendencias-e-lacunas.md`: zonas de incerteza da documentacao.
- `08-indice-para-obsidian.md`: indice mestre do cofre.
- `09-integracoes-externas.md`: Sefaz, PagBem, e-mail, APIs e afins.
- `10-comunicacao-gweb-webtrans.md`: comunicacao e base compartilhada com GWeb.

### `Documentacao/Telas/`

Esta pasta e a ponte mais curta entre o pedido do usuario e o fluxo real na
aplicacao:

- `01-telas-conhecimento.md`: CT-e e documentos de transporte.
- `02-telas-coleta.md`: coletas.
- `03-telas-financeiro.md`: telas financeiras.
- `04-telas-cadastros.md`: cliente, fornecedor, veiculo, motorista etc.
- `05-telas-operacional.md`: viagem, carga, rota, carta frete etc.
- `06-telas-configuracoes.md`: filial, usuario, configuracoes.
- `07-telas-auxiliares.md`: CFOP, fpag, plano de contas, NCM etc.
- `08-telas-consultas.md`: consultas, localizar e popups de busca.
- `09-telas-processos.md`: baixas, importacoes, lote e processos.
- `10-telas-relatorios.md`: relatorios.
- `11-telas-gwtrans.md`: telas modernas de `web/gwTrans/`.
- `12-telas-listagens.md`: listagens da raiz.
- `13-telas-complementares.md`: telas complementares e operacoes acessorias.

## Regra pratica de uso

1. `Brain-WebTrans.md` e `00-Regras-Invariantes.md` formam a base minima.
2. A pergunta funcional deve ser roteada primeiro para `Documentacao/` e
   `Documentacao/Telas/`.
3. A pergunta de implementacao deve reforcar `Regras/` e `Arquitetura/`.
4. A pergunta sobre metodo de trabalho deve reforcar `Comandos/` e `Agentes/`.
5. Se um trecho do vault assumir `postgres-readonly`, ignorar essa dependencia
   quando ela nao existir e seguir por `gw-base-webtrans` e pelo codigo.
