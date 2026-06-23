import React from 'react'
import LeftTextContent from './LeftTextContent'
import RightContent from './RightContent'

const Page1Content = () => {
    return (
        <div className=' flex items-center justify-betweenpy-4 px-18 py-8 gap-10 h-[90vh]'>
            <LeftTextContent />
            <RightContent />
        </div>
    )
}

export default Page1Content