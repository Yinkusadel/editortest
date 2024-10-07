import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Homecard = () => {
    return (
        <section className='w-full '>
            <div className='h-96'>
                <Image
                    src='/images/naruto.png'
                    alt="naruto"
                    width={300} // Keep these for Next.js optimization
                    height={200} // Keep these for Next.js optimization
                    className='w-full max-h-full  object-fill' // Limit height to prevent overflow
                />
            </div>

            <div className='px-16 py-4 flex flex-col '>
                <div className='mt-6  relative w-[90%] h-20 flex items-center'>
                    <div>
                        <Link href="/" className="flex items-center gap-1">
                            <Image
                                src="/icons/logo.svg"
                                width={42}
                                height={42}
                                alt="Home logo"
                            />
                        </Link>

                        <Link href="/" className="absolute left-5 top-8">
                            <Image
                                src="/icons/avatar.svg"
                                width={32}
                                height={32}
                                alt="Avatar"
                            />
                        </Link>
                    </div>


                    <div className='ml-4'>
                        <h3>Ben Halpern</h3>
                        <span className='text-xs'>Posted on Aug29</span>
                    </div>
                </div>

                <div className='mt-2 flex'>
                {sidebarLinks.map((link) => {

                    return (
                        <div>
                            <Link
                                href={link.route}
                                key={link.label}
                                className='flex gap-4 items-center p-4 rounded-lg'
                            >
                                <Image
                                    src={link.imgUrl}
                                    alt={link.label}
                                    width={24}
                                    height={24}
                                />
                                {link.label}
                            </Link>
                        </div>

                    )
                })}
                </div>


                <div className='mt-2'>
                    <span className='text-5xl font-bold'>
                        Inrtoducing Dev ++
                    </span>
                </div>

            </div>


        </section>
    )
}

export default Homecard