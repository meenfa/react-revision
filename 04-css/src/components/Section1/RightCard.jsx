import React from 'react'
import 'remixicon/fonts/remixicon.css'
const RightCard = () => {
  return (
    <div className='h-full w-60 overflow-hidden relative rounded-2xl'>
        <img className='h-full w-full object-cover' src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D' alt='' />
        {/* https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D */}
        {/* https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D */}
        <div className='absolute top-2 left-2 h-full w-full p-6 flex flex-col justify-between'>
            <h2 className='w-8 h-8 rounded-full bg-gray-200 tems-center'>1</h2>
            <div>
                <p className='text-base text-left text-gray-200'>
                    Lorem ipsum dolor sit,orem ipsum dolor si amet consectetur adipisicing elit.
                </p>

                <div>
                    <button>Satisfied</button>
                    <button> <i class="ri-arrow-right-line"></i>   </button>
                </div>
            </div>
        </div>
    
    
    </div>
  )
}

export default RightCard