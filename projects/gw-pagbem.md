# Projeto: gw-pagbem

## Papel

Biblioteca Java de integracao com PagBem.

## Estrutura

- `src/br/com/gwsistemas/gwpagbem/`: implementacao principal.
- `src/br/com/gwsistemas/gwpagbem/retorno/`: modelos de retorno.
- `resources/`: manual de integracao.
- `nbproject/`: configuracao NetBeans/Ant.
- `build.xml`: build Ant.
- `REGISTRO_CORRECAO_BUILD.md`: historico local da restauracao do build.

## Build

- Ant/NetBeans.
- Java 8.
- Encoding ISO-8859-1.
- Dependencias em `/home/dev27/Documentos/VsCodeProject/gw-pagbem-lib`.
- JAR local: `gw-pagbem/dist/gwPagBem.jar`.
- JAR de consumo: `/home/dev27/Documentos/VsCodeProject/gw-lib/gwPagBem.jar`.

## Validacao ja registrada

Comando historico:

```bash
ant -Dplatforms.JDK_1.8.home=/usr/lib/jvm/java-8-openjdk-amd64 jar
```

Resultado registrado: `BUILD SUCCESSFUL`.

## Cuidados

- Se o Ant compilar e o VS Code ainda mostrar imports vermelhos, tratar como classpath/cache do Java Language Server.
- Nao confundir `gw-pagbem-lib` com destino final de runtime.
- Se houver divergencia de runtime, suspeitar primeiro da diferenca entre JAR fonte/build e JAR consumido.
