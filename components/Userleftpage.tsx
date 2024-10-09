import Image from 'next/image'
import Link from 'next/link'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useroverviewcontent, userpublicappscontent } from '@/constants'
import UserAccordion from './Useraccordion'

const Userleftpage = () => {
    return (
        <div className='w-96 flex flex-col items-center p-4 mx-4 max-[800px]:w-full bg-white max-[800px]:mx-0 max-[800px]:px-0'>
            {/* user avavtar row */}
            <div className='flex justify-between w-80'>
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/icons/logo.svg"
                        width={32}
                        height={22}
                        alt="Home logo"
                        className="max-sm:size-10"
                    />
                </Link>

                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/icons/avatar.svg"
                        width={32}
                        height={32}
                        alt="Home logo"
                        className="max-sm:size-10"
                    />
                    <p className='font-bold '>Adeleye jamiu</p>
                </Link>


                <DropdownMenu>
                    <DropdownMenuTrigger className='flex gap-4 items-center p-4 rounded-lg justify-end outline-none'>
                        <Image
                            src="/icons/straightoption.svg"
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
                                alt="file"
                            />
                        </div>
                        <DropdownMenuSeparator />

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>




            {/* accordion row */}
            <div className='flex flex-col '>
                <UserAccordion triggerText='OVERVIEW' content={
                    <div className='flex justify-between'>

                        {useroverviewcontent.map((overview) => {
                            return (
                                <div key={overview.label} className='flex flex-col justify-center items-center'>
                                    <div>{overview.label}</div>
                                    <span className='font-bold'>{overview.amount}</span>
                                </div>
                            )
                        })}
                    </div>

                } />

                <UserAccordion triggerText='PUBLIC APPS' content={
                    <div className='flex '>

                        {userpublicappscontent.map((app) => {
                            return (
                                <div key={app.label} className='flex flex-col justify-center items-center'>
                                    <Link href="/" className="flex items-center gap-1">
                                        <Image
                                            src={app.imgUrl}
                                            width={32}
                                            height={32}
                                            alt="Home logo"
                                            className="max-sm:size-10"
                                        />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                } />

                <UserAccordion triggerText='CONTACT' content={
                    <div>
                        bankai tensa zangetsu
                    </div>
                } />
            </div>



        </div>
    )
}

export default Userleftpage