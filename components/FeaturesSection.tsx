import Image from 'next/image'

const FeaturesSection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-12 md:gap-36 bg-[#fef7ef] px-6 sm:px-10 md:px-52 py-16 md:py-28 items-center md:items-start pt-10'>
        <div className='w-full md:w-auto flex justify-center md:justify-start'>
            <Image src={'/iPhone.png'} alt='mockup' width={354} height={723} className='w-[220px] sm:w-[280px] md:w-[354px] h-auto' />
        </div>
        <div className='flex flex-col pt-2 md:pt-10 gap-6 md:gap-10 justify-center text-center md:text-start items-center md:items-start'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl text-center md:text-start max-w-[650px]'>See your <span className='text-[#338EDA]'>cookies, achievments, hours</span></h1>
            <p className='text-base sm:text-lg md:text-2xl max-w-[717px]'>In the home screen you can see your cookies, achievements, time logged today and total time logged.</p>
        </div>
    </div>
  )
}

export default FeaturesSection
