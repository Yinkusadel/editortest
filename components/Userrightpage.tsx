import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UserAccordion from './Useraccordion'
import Usertable from '@/app/(root)/(home)/users/usertable/page'


const Userrightpage = () => {
    return (
        <div className='mx-4 max-[800px]:mx-0 bg-white w-full p-4  max-[800px]:px-0 '>
            <div className='flex justify-center flex-col item  mt-2 max-[800px]:items-center'>
                <Tabs defaultValue="account">
                    <TabsList>
                        <TabsTrigger value="account">Summary</TabsTrigger>
                        <TabsTrigger value="password">Userlogs</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <div className='border-t-2 py-2 mt-4'>
                            <UserAccordion triggerText='Waitlist entries' triggerClassName='w-[800px] relative max-[800px]:w-[450px] ' content={
                                <>
                                    <Usertable />
                                </>
                            } />
                        </div>
                        <div className='border-t-2 py-2 mt-4'>
                            <UserAccordion triggerText='Active products' triggerClassName='w-[800px] relative max-[800px]:w-[450px] ' content={
                                <>
                                    <Usertable />
                                </>
                            } />
                        </div>
                        <div className='border-t-2 py-2 mt-4'>
                            <UserAccordion triggerText='Payments ' triggerClassName='w-[800px] relative max-[800px]:w-[450px] ' content={
                                <>
                                    <Usertable />
                                </>
                            } />
                        </div>
                    </TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>

            </div>
        </div>
    )
}

export default Userrightpage