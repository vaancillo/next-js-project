export default function TiendaLayout ({ children }) {
  return (
    <div>
        <nav>
            <h3>Seccion tienda</h3>
            <ul>
                <li>Categorias</li>
                <li>Productos</li>
            </ul>
        </nav>
        {children}
    </div>
  )
}
