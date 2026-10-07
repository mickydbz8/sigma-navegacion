# SIGMA - Navegacion con Expo Router
## Descripcion

Sigma es una aplicacion movil de gestion de mantenimiento de equipos, desarrollada  como actividad de la materia  Desarrollo de Aplicaciones Moviles.

El objetivo de esta actividad es implementar la navegacion entre diferentes panatallas utilizando React Native, Expo Router y TypeScript.

##Tecnologias utilizadas
-React native
-Expo
-Expo Router 
-TypeScript
-Visual studio Code
-Android Studio
-Expo go

## Funcionalidades 
La aplicacion cuenta con:
-Pantalla principal  con el acceso a Equipos, Tareas y Nueva Tarea.
-El listado de equipos.
-Navegacion a detalle de un equipo.
-Ruta dinamica mediante `[id].tsx`.
-Listado de tareas de mantenimiento.
-Pantalla de Nueva Tarea.

## Estructura principal

-`app/_layout.tsx` : configuracion de navegacion.
-`app/index.tsx`: menu principal.
-`app/equipos.tsx` : listado de equipos.
-`app/equipos/[id].tsx` : detalle dinamico de cada equipo.
-`app/tareas.tsx` : listado de tareas.
-`app/nueva-tarea.tsx` : pantalla de Nueva Tarea.
-`data/equipos.ts` : datos de ejemplo de los equipos.

## Como ejecutar el proyecto
1-Clonar el repositorio.
2-Entrar en la carpeta del proyecto.
3-Instalar las dependencias con npm install.
4-Ejecutar Expo con npx expo start --go.
5-Para abrirlo en Android, iniciar un emulador desde Android Studio y presionar la letra a.
Tambien puede ejecutarse utilizando  Expo go en un  dispositivo compatible.

## Navegacion dinamica
En la pantalla de Equipos se utiliza  `Link` para seleccionar un equipo.
La ruta dinamica: `app/equipos/[id].tsx`.
Recibe el identificador mediante `useLocalSearchParams`.
Luego se utiliza `find()` para buscar el equipo correspondiente y mostrar sus datos.

## Capturas
Las capturas de funcionamiento  de la aplicacion se encuentrar en  la carpeta de `capturas`.

Asignatura:Desarrollo de Dispositivos Moviles
Actividad:Navegacion en Sigma
Estudiante:Micaela Roca.


