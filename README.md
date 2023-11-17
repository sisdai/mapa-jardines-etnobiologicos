# conahcyt-mapa-jardines

Mapa de red de jardines etnobiológicos, que se incorpora en el sitio de wordpress de conahcyt

> **_Limitación de responsabilidad_**
>
> El presente es un proyecto en construcción, por tanto el equipo del Sisdai
> no es responsable del uso y contenido del presente recurso,
> toda vez que se trata de una versión en su modalidad prueba, y no de una
> versión liberada al público, por lo que una vez que sea lanzada la versión
> final,
> se invita a la persona usuaria a consultarla y validar sus requisitos.

**Cada vez que se haga un cambio, que se manda a despliegue hay que jalarlo a embed**

## Para mandar a dirección de repositorios

La dirección de repositorios es quien lo incorpora mediante un iframe, a ellos se les pasa el código compilado de la carpeta dist.

Para ello se tiene que:

- cambiar a la rama embed, (rama donde el código esta adecuado para incorporarse a un iframe,)
- ejecutar `npm run build`,
- a continuación el contenido de la carpeta dist prepararlo para mandar a Uber o a alguien de repositorios
- editar el archivo _dist/index.html_ y hacer que los recursos de js y ccs sean con una ruta relativa. por ejemplo si hay `/css/bundle.css` cambiar a `css/bundle.css`
- comprimir un zip de la carpeta dist y mandar a Repositorios

## Uso local

- clonar el repo

  ```bash
  git clone --single-branch --no-tags https://github.com/sisdai/mapa-jardines-etnobiologicos
  ```

- instalar las dependencias

  ```bash
  npm install
  ```

- levantar el repo

  ```bash
  npm run dev
  ```

## Licencia

**SOFTWARE LIBRE Y ESTÁNDARES ABIERTOS**

Sisdai y sisdai-proyecto-base están alineadas a las disposiciones establecidas
por
la Coordinación de Estrategia Digital Nacional (
DOF:06/09/2021) en donde se estipula que las "políticas y disposiciones tienen
como objetivo fortalecer el uso del software
libre y los estándares abiertos, fomentar el desarrollo de aplicaciones
institucionales con utilidad pública, lograr la
autonomía, soberanía e independencia tecnológicas dentro de la APF". En el
artículo 63 se explicita que "cuando se trate
de desarrollos basados en software libre, se respetarán las condiciones de su
licenciamiento original [...]".

## Contribuir

Para contribuir al proyecto, se pide que se haga tomando en cuenta la guía de
contribución
de [git](https://git-scm.com/book/es/v2/Git-en-entornos-distribuidos-Contribuyendo-a-un-Proyecto)
.
