<div style="text-align:center">

# Proyecto Coffee Manager

<div style="width:320px;margin:auto">

![Logo del Proyecto Coffee Manager](./coffee-manager-frontend-flutter/public/coffee-manager.jpeg)

</div>

</div>

<details style="font-size:1.2rem">
<summary style="font-size:1.5rem;font-weight:bold">Tabla de contenidos</summary>

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Backend](#backend)
  - [Nest.js](#nestjs)
- [Frontend](#frontend)
  - [Instalación](#instalación-frontend)
- [Subir cambios a Github](#subir-cambios-a-github)

</details>

## Descripción del Proyecto

Coffee Manager es una aplicación diseñada para gestionar una finca de café. Incluye funcionalidades CRUD para la gestión de usuarios, inventario, ventas y más. La arquitectura del proyecto está basada en microservicios utilizando Nest.js para el backend y ReactJS para el frontend.

## Backend

El Backend está desarrollado con Nest.js, un framework de Node.js para construir aplicaciones eficientes y escalables del lado del servidor.

### Nest.js

1. **Instalación y Configuración del Proyecto**:

    - Clonar el repositorio:

    ```sh
    git clone https://github.com/GEMS-INNOVATIONS/coffee-manager-backend.git
    cd coffee-manager
    ```

    - Instalar dependencias:

    ```sh
    npm install
    ```

    - Iniciar el servidor en modo desarrollo:

    ```sh
    npm run start:dev
    ```

2. **Estructura del Proyecto**:

    - `src/`: Contiene el código fuente de la aplicación.
    - `users.service.ts`: Servicio para la gestión de usuarios.
    - `users.controller.ts`: Controlador para las rutas de usuarios.
    - `dto/`: Contiene los Data Transfer Objects (`CreateUserDto` y `UpdateUserDto`).

## Frontend

El Frontend está desarrollado en Flutter.

### Instalación Front

1. Instala los paquetes de NPM

```sh
npm install
```

2. Ejecuta el proyecto

```sh
npm run dev
```

## Github

### Subir cambios a Github

1. Crea tu rama, debes estar sobre la rama main

```sh
git checkout -b "nombre-de-tu-rama"
```

2. Añade los archivos al stage

```sh
git add .
```

2. Haz commit de tus cambios

```sh
git commit -m "feat: add invoices form"
```

3. Sube los cambios a tu rama

```sh
git push origin "nombre-de-tu-rama"
```

4. Haz un pull request desde Github en la pestaña `Pull requests` debes seleccionar el botón `New pull request`

5. Selecciona desde qué rama vas a hacer merge hacia la `main`

6. Configura el PR

- Selecciona el `Reviewer` (quién va a revisar los cambios)
- Selecciona el `Assignees` (quién realizó los cambios)
- Selecciona el `Label` (etiquetas para categorizar)
- Llena la `Descripción` de la PR

¡Y listo! Ya tus cambios serán Mergeados por el `Reviewer` ❤️.