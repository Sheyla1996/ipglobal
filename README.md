# Prueba técnica IPGlobal

La prueba técnica consiste en una webapp sobre un listado de películas obtenido de TheMovieDB. Para el desarrollo de la prueba se debía usar React 18 y Typescript. La prueba debia constar de una página inicial o una página '/search' con un listado de películas y un buscador. Tambíen deberia existir una ruta con las películas que se han valorado en '/mylist' y un detalle de cada película con la información de esta y un formulario para valorar la película.

Debido a que el el paso de la API Key de la API ha cambiado su forma de pasarsela, no me funcionaba la API, por lo que decidí añadirle mocks para que funcionará. Al conocer el cambio de la forma de pasar el API Key he vuelto a usar los datos reales, y aún así he dejado los mocks por si se quisieran usar.

Para la parte de estilos he decidido usar TailwindCSS, en la parte de componentes he decidido crear los mios propios con la inclusión de Storybook. En cuanto a los test, he decidido el uso de Vitest junto a React Testing Library. Además del uso de variables de entorno. Por último para manejar el estado de la web he usado ReduxJS Toolkit.

## Librerias utilizadas

* React 18
* TailwindCSS
* Storybook
* Vitest
* React Testing Library
* Jest
* Dotenv
* ReduxJS Toolkit
* Redact Redux

## Cómo levantar la web

En la raiz del proyecto se pueden ejecutar los siguientes comandos

### `npm run dev` o `yarn dev`

Inicia el proyecto en modo desarrollo

### `npm run test` o `yarn test`

Ejecuta los test del proyecto

### `npm run storybook` o `yarn storybook`

Ejecuta el storybook de los componentes

### `npm run lint` o `yarn lint`

Ejecuta el lint del proyecto