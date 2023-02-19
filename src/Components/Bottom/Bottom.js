import { Pagination } from 'antd'
import React from 'react'

export default function Bottom() {
  return (
    <div className='flex items-center justify-end p-7 gap-12'>
      <div className='flex items-center gap-2'>
        <h2 className='text-[#9FA2B4] text-[14px] tracking-[0.3px]'>Rows per page:</h2>
        <input type={'number'} value={8} className="text-[#4B506D] text-[14px] w-[30px] h-[30px]"/>
      </div>
      <div className='flex items-center gap-8'>
        <p className='text-[14px] text-[#9FA2B4] text-right'>1-8 of 1240</p>
        <Pagination/>
      </div>
    </div>
  )
}
