import Link from "next/link"

export const metadata = {
    title: 'Tienda oficial',
}

export default function TiendaLayout ({ children }) {
  return (
    <div>
        <nav>
            <h3>Seccion tienda</h3>
            <ul>
                <li>
                    <Link href='/tienda/categorias'>Categorias</Link>
                </li>
                <li>
                    <Link href='/tienda/categorias/computadoras'>Productos</Link>
                </li>
            </ul>
        </nav>
        {children}
    </div>
  )
}
