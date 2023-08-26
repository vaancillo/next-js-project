"use client"
import { useRouter } from "next/navigation"

export const metadata = {
    title: 'Acerca de nosotros',
}

export default function AboutPage () {
    const router = useRouter()
    return (
        <section>
            <h1>About</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi impedit eligendi, iste sit dolorum non neque facere incidunt quidem velit quos dolore fuga, magni esse vel autem quae consequuntur animi repudiandae ut consectetur itaque! Aliquid molestias eveniet harum vitae natus tempora provident, incidunt iure cumque possimus in similique voluptatibus repudiandae neque itaque accusantium distinctio nulla beatae suscipit dolorem? Nisi eum exercitationem eius molestias quod beatae ducimus possimus odio dicta expedita adipisci quidem iure totam animi similique necessitatibus, earum corrupti! Debitis nesciunt, fuga accusamus dolorem rerum veniam in dolores at, deleniti, vel a nihil. Asperiores iste ad odit, enim harum praesentium.</p>
            <button className="bg-sky-400 px-3 py-2 rounded-md" onClick={() => {
                router.push('/')
            }}>Click</button>
        </section>
    )
}