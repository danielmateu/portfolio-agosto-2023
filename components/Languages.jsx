"use client"

import Link from "next/link"
import spain from '../public/assets/espana.png'
import reina from '../public/assets/reina.png'
import Image from "next/image"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export const Languages = () => {

    return (
        <div className="z-[1000] sticky top-6 left-full mr-16 sm:mr-[85px] lg:mr-2 rounded-xl px-2 flex items-center justify-center gap-2">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href="/es" locale='es'>
                            <Image
                                src={spain}
                                alt="Cambiar a castellano"
                                width={20}
                                height={20}
                                className="cursor-pointer hover:scale-110 transition-all"
                            />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Cambiar a castellano</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href="/en" locale='en'>
                            <Image
                                src={reina}
                                alt="Change language to english"
                                width={20}
                                height={20}
                                className="cursor-pointer hover:scale-110 transition-all"
                            />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Change to english</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>


        </div>
    )
}
