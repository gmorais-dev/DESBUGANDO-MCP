# Contexto do Workspace

Raiz: `/home/dev27/Documentos/VsCodeProject`

## Pastas principais

| Pasta | Papel |
|---|---|
| `webtrans` | Aplicacao Web Java EE principal do legado GW Sistemas. |
| `gw-base-webtrans` | Base de scripts SQL PostgreSQL do Webtrans. |
| `gw-boleto` | Biblioteca Java para boletos, CNAB, remessa, retorno e PDF. |
| `gw-consulta-situacao` | Biblioteca Java para consulta/parsing de situacao de CTe, NFe, NFSe e Pessoa. |
| `gw-pagbem` | Biblioteca Java de integracao PagBem, com build Ant/NetBeans. |
| `gw-api-relatorio` | API serverless de relatorios com Go, Java, AWS Lambda, SQS e S3. |
| `gw-lib` | JARs internos compartilhados pelo legado. |
| `gw-pagbem-lib` | Dependencias locais usadas para compilar `gw-pagbem`. |

## Relacoes entre projetos

- `webtrans` consome JARs locais de `webtrans/gw-lib` e tambem se relaciona com os JARs versionados em `gw-lib`.
- `gw-boleto` gera `gwboleto.jar`, consumido pelo `webtrans` para boleto/linha digitavel/CNAB.
- `gw-consulta-situacao` gera `gwConsultaSituacao.jar`, listado entre os JARs internos em `gw-lib`.
- `gw-pagbem` gera `gwPagBem.jar`, copiado para `gw-lib/gwPagBem.jar`.
- `gw-base-webtrans` governa o lado PostgreSQL que sustenta boa parte dos fluxos do `webtrans`.
- `gw-api-relatorio` e um servico separado, mas compartilha dominio e bibliotecas Java GW.

## Estado local observado

Ha alteracoes locais existentes em alguns repositorios. O agente global deve tratar isso como trabalho do usuario ou de outro agente e nao reverter.

Projetos com alteracoes observadas durante a criacao deste contexto:

- `webtrans`
- `gw-base-webtrans`
- `gw-consulta-situacao`
- `gw-pagbem`
- `gw-api-relatorio`
- `gw-lib`

## Documentos locais encontrados

- `webtrans/ARCHITECTURE.md`
- `webtrans/.github/agente-codex.md`
- `webtrans/README.md`
- `webtrans/.github/TECH_LEAD_GUIDE.md`
- `webtrans/.github/WEBTRANS_BACKEND_REFERENCE.md`
- `gw-base-webtrans/AGENTS.md`
- `gw-base-webtrans/README.md`
- `gw-base-webtrans/rules/*.md`
- `gw-api-relatorio/README.md`
- `gw-pagbem/REGISTRO_CORRECAO_BUILD.md`

## Lacunas

- Nem todos os projetos possuem `ARCHITECTURE.md` ou `AGENTS.md`.
- Algumas regras foram inferidas por estrutura/build e devem ser confirmadas em tarefas especificas.
- Esta primeira versao nao executou builds nem testes; e um mapa de contexto estatico.
