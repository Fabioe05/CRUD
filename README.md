n# C.R.U.D de Cursos

Este proyecto consiste en la elaboracion de un C.R.U.D (Create, Read, Update, Delete) de cursos, desarrollado utilizando *Node.js* y *Express*.

## Estructura de Datos

Los datos se manejan de forma local (en memoria) simulando una base de datos. La informacian esta estructurada en un archivo separado y exportada para su uso en las rutas.

La base de datos de cursos (objeto infoCursos) contiene al menos dos categori­as principales:

*   *programacion:* Cursos relacionados con lenguajes de programacian (ej. Python, JavaScript). Cada curso tiene: id, titulo, lenguaje, vistas, y nivel.
*   *matematicas:* Cursos relacionados con ciencias exactas (ej. Calculo, Algebra, Estada­stica). Cada curso tiene: id, titulo, tema, vistas, y nivel.

## Rutas y Endpoints

El servidor esta configurado para escuchar en un puerto definido por el entorno (process.env.PORT) o en el puerto 3000 por defecto.

El enrutamiento esta modularizado. En el archivo principal app.js, se definen las rutas base:

*   Ruta principal: / (Muestra un mensaje de bienvenida).
*   Ruta de cursos (general): /api/cursos
*   Ruta para programacian: /api/cursos/programacion (Asignada a routerProgramacion)
*   Ruta para matematicas: /api/cursos/matematicas (Asignada a routerMatematicas)

### API de Programacian (/api/cursos/programacion)

Este enrutador maneja las operaciones CRUD para la categori­a de programacian. Utiliza el middleware express.json() para procesar los cuerpos de las solicitudes en formato JSON.

*   *GET /*: Devuelve todos los cursos de programacian.
*   *GET /:lenguaje*: Devuelve los cursos que coincidan con un lenguaje especi­fico (ej. "python", "javascript"). Si se envi­a el query parameter ?ordenar=vistas, devuelve los resultados ordenados de mayor a menor cantidad de vistas. Si no hay coincidencias, retorna un estado 404.
*   *GET /:lenguaje/:nivel*: Devuelve los cursos que coincidan tanto con el lenguaje como con el nivel especificados en los parametros de la URL. Si no hay coincidencias, retorna un estado 204.
*   *POST /*: Agrega un nuevo curso al arreglo de programacian enviando un objeto JSON en el cuerpo de la solicitud (req.body).
*   *PUT /:id*: Actualiza un curso existente por completo, buscandolo por su id. Se debe enviar el objeto actualizado en req.body.
*   *PATCH /:id*: Actualiza propiedades especi­ficas de un curso existente, buscandolo por su id. Modifica solo los campos enviados en req.body.
*   *DELETE /:id*: Elimina un curso del arreglo, buscandolo por su id.

### API de Matematicas (/api/cursos/matematicas)

Este enrutador maneja las consultas para la categori­a de matematicas.

*   *GET /*: Devuelve todos los cursos de matematicas.
*   *GET /:tema*: Devuelve los cursos que coincidan con un tema especi­fico. Si no hay coincidencias, retorna un estado 404.
*   *GET /:tema/:nivel*: Devuelve los cursos que coincidan con el tema y el nivel especificados. Si no hay coincidencias, retorna un estado 404.

## 👨‍💻 Autor

* *Fabio Espinoza*
* [GitHub: Fabioe05](https://github.com/Fabioe05/CRUD)