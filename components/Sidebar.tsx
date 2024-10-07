"use client"

import React from 'react'
import { sidebarLinks, sidebarMediaLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Sidebar = () => {
    const pathname = usePathname()

    return (
        <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  p-6 pt-28 text-black max-sm:hidden lg:w-[180px]">
            <div className="flex flex-1 flex-col gap-6 ">
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)

                    return (
                        <div>
                            <Link
                                href={link.route}
                                key={link.label}
                                className='flex gap-4 items-center p-4 rounded-lg justify-end'
                            >
                                <Image
                                    src={link.imgUrl}
                                    alt={link.label}
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </div>

                    )
                })}
                <DropdownMenu>
                    <DropdownMenuTrigger className='flex gap-4 items-center p-4 rounded-lg justify-end outline-none'>
                        <Image
                            src="/icons/option.svg"
                            width={32}
                            height={32}
                            alt="Avatar"
                        />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-64 absolute left-14 '>
                        <div className='flex p-2 justify-between'>
                            <DropdownMenuLabel>Copy Link</DropdownMenuLabel>
                            <Image
                                src="/icons/file.svg"
                                width={22}
                                height={22}
                                alt="Avatar"
                            />
                        </div>
                        <DropdownMenuSeparator />
                        {sidebarMediaLinks.map((medialink) => {
                            return (
                                <DropdownMenuItem>
                                    <Link
                                        href={medialink.route}
                                        key={medialink.label}
                                        className='flex gap-4 items-center p-4 rounded-lg justify-end'
                                    >
                                        {medialink.label}
                                    </Link>
                                </DropdownMenuItem>
                            )
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </section>
    )
}

export default Sidebar