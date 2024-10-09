import Userleftpage from '@/components/Userleftpage'
import Userrightpage from '@/components/Userrightpage'
import React from 'react'

const page = () => {
  return (
    <div className='flex max-[800px]:flex-col'>
      <div className='flex max-[800px]:pb-4  max-[800px]:w-full'>
        <Userleftpage />

      </div>

      <div className='w-full min-[800px]:px-4'>
        <Userrightpage />

      </div>
    </div>
  )
}

export default page