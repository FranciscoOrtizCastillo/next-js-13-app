import { Counter } from "./Counter";

// Este layout siempre mantiene el estado, en las rutas anidadas que lo utilizan,
// por eso al añadir Counter, y navegar por sus rutas anidadas, siempre se mantiene el state

export default function PostsLayout({ children }) {
  return (
    <div>
        <h1>Layout de los Posts</h1>
        <Counter/>
        {children}
    </div>
  )
}
