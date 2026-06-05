# Agente Global do Workspace VsCodeProject

Este projeto centraliza o contexto operacional usado por agentes e pelo MCP local
para ler o workspace `/home/dev27/Documentos/VsCodeProject` com seguranca.

Ele nao substitui os documentos dos projetos. O papel deste diretorio e dizer
qual contexto deve ser lido primeiro, quais limites operacionais existem e como
consultar informacoes basicas dos repositorios sem alterar estado.

## Leitura rapida

Para entender o projeto, leia nesta ordem:

1. `preflight.md`
2. `rules.md`
3. `workspace-context.md`
4. `git-github-rules.md`
5. `libs.md`, quando a tarefa envolver JARs ou bibliotecas locais
6. `projects/<projeto>.md`, conforme o projeto alvo
7. documentos obrigatorios do projeto alvo, quando existirem

Para qualquer acao no workspace, o preflight tambem exige a leitura dos
documentos do `webtrans`:

- `/home/dev27/Documentos/VsCodeProject/webtrans/ARCHITECTURE.md`
- `/home/dev27/Documentos/VsCodeProject/webtrans/.github/agente-codex.md`

## Estrutura

| Caminho | Uso |
|---|---|
| `AGENTS.md` | Instrucao de entrada para agentes neste diretorio. |
| `preflight.md` | Checklist obrigatorio antes de atuar no workspace. |
| `rules.md` | Regras globais de seguranca, Git, SQL, encoding e investigacao. |
| `git-github-rules.md` | Limites para Git/GitHub e obrigacao de reportar repo, branch e ultimo autor. |
| `workspace-context.md` | Mapa dos projetos do workspace e relacoes entre eles. |
| `libs.md` | Mapa de JARs internos e cuidados com artefatos locais. |
| `projects/` | Guias especificos por projeto. |
| `mcp-context.json` | Contexto estruturado consumivel por ferramentas. |
| `mcp-server/` | Servidor MCP local read-only. |

## Projetos mapeados

| Projeto | Papel |
|---|---|
| `webtrans` | Aplicacao Java EE principal, WAR legado em Tomcat. |
| `gw-base-webtrans` | Scripts SQL PostgreSQL, views, funcoes, triggers e migracoes. |
| `gw-boleto` | Biblioteca Java para boletos, CNAB, remessa, retorno e PDF. |
| `gw-consulta-situacao` | Biblioteca Java de consulta e parsing de situacao fiscal/documental. |
| `gw-pagbem` | Biblioteca Java de integracao PagBem, com build Ant/NetBeans. |
| `gw-api-relatorio` | API serverless de relatorios com Go, Java, Lambda, SQS e S3. |
| `gw-lib` | Pasta/repositorio de JARs internos consumidos pelo legado. |
| `gw-pagbem-lib` | Dependencias locais usadas para compilar `gw-pagbem`. |

## MCP local

O servidor MCP fica em `mcp-server/` e usa transporte `stdio`.

Ele expoe contexto e consultas Git somente leitura. Nao ha tools para editar
arquivos, executar SQL, trocar branch, criar branch, commit, push, pull, merge
ou alterar PRs.

### Resources principais

- `context://global/preflight`
- `context://global/rules`
- `context://global/git-github-rules`
- `context://global/workspace`
- `context://global/libs`
- `context://project/webtrans`
- `context://project/gw-base-webtrans`
- `context://project/gw-boleto`
- `context://project/gw-consulta-situacao`
- `context://project/gw-pagbem`
- `context://project/gw-api-relatorio`
- `context://webtrans/architecture`
- `context://webtrans/agente-codex`

### Tools expostas

- `list_projects`
- `read_context`
- `repo_info`
- `git_status`
- `git_last_commit`

As tools de Git retornam o repositorio acessado, a branch vista e o ultimo autor
do commit observado quando o diretorio e um repositorio Git.

## Instalacao do MCP para colaboradores

### Requisitos

- Node.js 20 ou superior.
- Acesso ao checkout `/home/dev27/Documentos/VsCodeProject/global-mcp-agent`.
- Dependencias npm instaladas em `mcp-server/`.

Confira a versao do Node:

```bash
node --version
```

### 1. Instalar dependencias

Na primeira configuracao da maquina, instale as dependencias do servidor MCP:

```bash
cd /home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server
npm install
```

Se o `npm install` falhar por DNS/rede, trate como problema de acesso externo da
maquina ou ambiente, nao como erro do MCP.

### 2. Validar o servidor

```bash
cd /home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server
npm run check
```

O comando deve finalizar sem erro. Ele valida a sintaxe de `server.js`.

### 3. Testar execucao manual

Quando precisar testar o processo diretamente:

```bash
cd /home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server
npm start
```

O servidor usa transporte `stdio`, entao normalmente ele fica aguardando o
cliente MCP. Para uso diario, ele deve ser iniciado pelo cliente, nao pelo
terminal manual.

### 4. Registrar no Codex

No Codex CLI, registre o MCP com caminho absoluto:

```bash
codex mcp add vscodeproject-context -- node /home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server/server.js
```

Depois, abra uma nova sessao do Codex e confirme que o servidor
`vscodeproject-context` aparece como MCP disponivel.

Se o comando for digitado com caminho quebrado ou incompleto, remova a entrada
incorreta no cliente e registre novamente usando o caminho absoluto completo em
uma unica linha.

### 5. Configurar em outros clientes MCP

Em clientes MCP que usam configuracao JSON, registre o servidor apontando para:

```text
node /home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server/server.js
```

Exemplo de configuracao:

```json
{
  "mcpServers": {
    "vscodeproject-context": {
      "command": "node",
      "args": [
        "/home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server/server.js"
      ]
    }
  }
}
```

### 6. Smoke test esperado

Apos registrar, uma chamada de leitura deve conseguir acessar, por exemplo:

- `context://global/preflight`
- `context://global/rules`
- `context://webtrans/architecture`

Uma chamada de tool deve conseguir executar consultas read-only como:

- `list_projects`
- `repo_info` para `webtrans`
- `git_status` para `webtrans`

O MCP esta instalado corretamente quando esses resources abrem e as tools
retornam contexto sem tentar alterar arquivos, Git ou banco de dados.

## Regras praticas para agentes

- Consulte primeiro, altere somente quando houver permissao explicita.
- Preserve alteracoes locais existentes.
- Ao acessar Git/GitHub, informe repositorio, branch e ultimo autor observado.
- Nao execute SQL contra banco do usuario.
- Em projetos BASE, entregue SQL para execucao manual pelo usuario.
- Em `webtrans`, respeite Java 8, ISO-8859-1 e o fluxo `JSP/JS -> Controlador -> BO -> DAO`.
- Em bibliotecas, diferencie fonte corrigido de JAR realmente consumido em runtime.

## Manutencao

Atualize este contexto quando mudar uma regra operacional, um projeto do
workspace, um fluxo de build, um artefato JAR relevante ou uma restricao de
Git/GitHub.

Ao alterar o servidor MCP, valide pelo menos:

```bash
cd /home/dev27/Documentos/VsCodeProject/global-mcp-agent/mcp-server
npm run check
```

Se novos resources ou tools forem adicionados em `mcp-server/server.js`,
atualize tambem esta documentacao e `mcp-server/README-MCP.md`.
