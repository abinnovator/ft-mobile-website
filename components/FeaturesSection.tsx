'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const FeaturesSection = () => {
  const [activeImage, setActiveImage] = useState('/iPhone.png')

  const features = [
    {
      id: 1,
      title: "See your cookies, achievements, hours",
      desc: "In the home screen you can see your cookies, achievements, time logged today and total time logged.",
      img: "/iPhone.png"
    },
    {
      id: 2,
      title: "Browse Through devlogs, projects, users",
      desc: "In the explore screen you can see community activity and recent updates.",
      img: "/Explore Page.png"
    },
    {
      id: 3,
      title: "View your projects and track progress",
      desc: "In the projects screen you can see all your projects and click for details.",
      img: "/Projects Page.png"
    }
  ]

  return (
    <div className='flex flex-col md:flex-row gap-12 md:gap-36 bg-[#fef7ef] px-6 sm:px-10 md:px-52 py-16 md:py-28 items-center md:items-start relative pb-20 md:pb-[50vh]'>
        
        <div className='w-full md:w-1/2 flex justify-center sticky top-10 md:top-[25%] h-fit z-10'>
            <div className="relative w-[220px] sm:w-[280px] md:w-[354px] h-[450px] md:h-[723px]">
              <Image 
                src={activeImage} 
                alt='mockup' 
                fill
                className='object-contain transition-opacity duration-700 ease-in-out' 
                priority
              />
            </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          {features.map((feature) => (
            <FeatureBlock 
              key={feature.id} 
              feature={feature} 
              onVisible={() => setActiveImage(feature.img)} 
            />
          ))}
        </div>
    </div>
  )
}

const FeatureBlock = ({ feature, onVisible }) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible()
        }
      },
      { 
        threshold: 0.3, 
        rootMargin: "-5% 0px -5% 0px" 
      } 
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [onVisible])

  return (
    <div ref={ref} className='flex flex-col min-h-[50vh] md:min-h-[100vh] py-12 md:py-32 justify-center text-center md:text-start items-center md:items-start'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl max-w-[650px] leading-tight'>
          {feature.title.split(',').map((part, i, arr) => (
            <span key={i}>
              {i === arr.length - 1 ? <span className='text-[#338EDA]'>{part}</span> : part + (i < arr.length - 1 ? ", " : "")}
            </span>
          ))}
        </h1>
        <p className='text-base sm:text-lg md:text-2xl max-w-[717px] mt-6 md:mt-8 text-gray-600'>
          {feature.desc}
        </p>
    </div>
  )
}

export default FeaturesSection