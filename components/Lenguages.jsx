import { Link } from "@/navigation"


export const Lenguages = () => {


    return (
        <>
            <div className='flex gap-2 text-white font-extralight'>
                <Link href="/" locale="en">English</Link>
                <Link href="/" locale="es">Castellano</Link>
                <Link href="/" locale="cat">Català</Link>
            </div>
        </>
    )
}
