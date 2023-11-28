
import Link from "next/link"

export const Languages = () => {

    return (
        <div className="bg-red-500 z-[1000] sticky top-5 left-full mr-16 sm:mr-[85px] lg:mr-2 rounded-xl px-2 flex gap-2">
            <Link href="/es" locale='es'>Es</Link>
            <Link href="/en" locale='en'>En</Link> 
        </div>
    )
}
