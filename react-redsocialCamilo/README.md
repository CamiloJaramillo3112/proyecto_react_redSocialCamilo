# Proyecto React Red Social Camilo

Proyecto en React basado en una plantilla estática tipo Facebook, convertido a componentes dinámicos con hooks.

## Descripción

Esta aplicación fue desarrollada en React a partir de una plantilla HTML estática.  
El objetivo fue transformar la estructura inicial en una aplicación funcional usando componentes reutilizables y hooks de React.

El proyecto permite simular una mini red social estilo Facebook, donde el usuario puede interactuar con publicaciones y comentarios.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- W3.CSS
- Font Awesome

## Hooks utilizados

- `useState`
- `useEffect`
- `useContext`

## Funcionalidades

- Conversión de plantilla HTML estática a React
- Estructuración por componentes
- Crear publicaciones
- Dar like a publicaciones
- Comentar publicaciones
- Responder comentarios
- Compartir publicaciones
- Persistencia de datos con `localStorage`

## Estructura del proyecto

```bash
src/
  components/
    Navbar.jsx
    LeftSidebar.jsx
    Feed.jsx
    RightSidebar.jsx
    Footer.jsx
    CreatePost.jsx
    Post.jsx
  context/
    UserContext.jsx
    PostContext.jsx
  App.jsx
  main.jsx
  index.css
```
