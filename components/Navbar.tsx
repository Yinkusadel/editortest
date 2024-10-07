import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex fixed z-50 w-full px-6 py-4 lg:px-24 bg-white items-center justify-between">
            <div className='flex w-[60%] items-center'>

                <div className='flex justify-between max-sm:w-24 p-2'>
                    <Link href="/" className="hidden items-center gap-1 max-sm:flex">
                        <Image
                            src="/icons/hamburger.svg"
                            width={42}
                            height={22}
                            alt="Hamburger"
                            className="max-sm:size-10"
                        />
                    </Link>
                    <Link href="/" className="flex items-center gap-1">
                        <Image
                            src="/icons/logo.svg"
                            width={42}
                            height={42}
                            alt="Home logo"
                            className="max-sm:size-10"
                        />
                    </Link>
                </div>


                <div className='w-full flex  justify-between max-[800px]:hidden gap-5 p-2.5 sm:border sm:border-slate-gray h-12'>
                    <input type='text' placeholder='Find related posts...' className=' outline-none' />
                    <div className='flex max-sm:justify-end items-center text-sm  font-light'>
                        Powered by @ agolia
                    </div>
                </div>

            </div>


            <div className='flex w-[220px] items-center justify-between h-12'>
                <Link href="/" className="">
                    Log in
                </Link>

                <Link href="/" className="border-2 border-blue-600 p-2 text-blue-500 rounded">
                    Create account
                </Link>
            </div>



        </nav>
    )
}

export default Navbar