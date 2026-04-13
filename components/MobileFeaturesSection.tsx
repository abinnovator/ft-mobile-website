import Image from 'next/image'
import React from 'react'

const MobileFeaturesSection = () => {
  return (
    <div className='flex flex-col pt-20 text-center gap-3 justify-center items-center'> 
    <Image src={'/iPhone.png'} alt='Iphone mockup' width={354} height={723} />
        <h1 className='text-3xl sm:text-4xl md:text-6xl max-w-[650px] leading-tight'>
            See your <span className='text-[#338EDA]'>cookies, achievements, hours</span>
        </h1>
        <p className='text-base sm:text-lg md:text-2xl max-w-[717px] mt-6 md:mt-8 text-gray-600'>In the home screen you can see your cookies, achievements, time logged today and total time logged.</p>
    </div>
  )
}

export default MobileFeaturesSection