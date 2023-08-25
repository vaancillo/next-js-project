import Navbar from "../components/Navbar"

export const metadata = {
  title: 'ecommerce con nextjs',
  description: 'Esta es la pagina principal de mi tienda',
  keywords: 'tienda, ecommerce, nextjs',
  colorScheme: 'dark'
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
