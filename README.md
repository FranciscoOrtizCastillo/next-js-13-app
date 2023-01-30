# Ejemplo de Next.js

https://www.reactjs.wiki/
https://github.com/midudev/preguntas-entrevista-react


## Creacion

```bash

# Instalar pnpm 
sudo npm install -g pnpm

# En Mac : brew install pnpm

pnpm create next-app    

# Responder :
.../share/pnpm/store/v3/tmp/dlx-27577    |   +1 +
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /home/ortiz/.local/share/pnpm/store/v3
  Virtual store is at:             ../.local/share/pnpm/store/v3/tmp/dlx-27577/node_modules/.pnpm
.../share/pnpm/store/v3/tmp/dlx-27577    | Progress: resolved 1, reused 0, downloaded 1, added 1, done
✔ What is your project named? … next-js-13-app
✔ Would you like to use TypeScript with this project? … No 
✔ Would you like to use ESLint with this project? … Yes
✔ Would you like to use `src/` directory with this project? … Yes
✔ Would you like to use experimental `app/` directory with this project? … No 
✔ What import alias would you like configured? … @/*
Creating a new Next.js app in /home/ortiz/proyectos/next-js-13-app.

Using pnpm.
.........


cd next-js-13-app
code .


```

## Pasos

- Borrar src/pages

- Editar next.config.js y añadir 

```
experimental: {
    appDir:true
  },
```

- Añadir carpeta app

- Instalar standard (JavaScript style guide, linter, and formatter)
```bash
pnpm install standard -D
```

- Añadir a .eslintrc.json :

```
"extends": ["./node_modules/standard/eslintrc.json","next/core-web-vitals"]
```

- Añadir app/page.jsx

    Las rutas ahora son por carpetas, pero solo renderiza los ficheros page.jsx o tsx, o js de cada carpeta. 
    Cualquier otro fichero no es una ruta.
    Para que sea una ruta tiene que ser una carpeta con un fichero page. 

    Todos los componentes ejecutados en la carpeta app son ejecutados en el servidor.

- Arrancar proyecto

```bash
pnpm run dev


pnpm run build
```

## Turbopack

Añadir en package.json :

>"dev": "next dev --turbo",

```bash
pnpm run dev

```

## Fuentes e Imagenes

pnpm install @next/font -E
