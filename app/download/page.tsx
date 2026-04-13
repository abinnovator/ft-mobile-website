import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-[#fef7ef] min-h-screen font-(family-name:--font-satoshi)">
      <Navbar />
      <div className='flex flex-col md:flex-row gap-12 md:gap-36 bg-[#fef7ef] px-6 sm:px-10 md:px-52 py-16 md:py-28 items-center md:items-start'>
        <div className='w-full md:w-auto flex justify-center md:justify-start'>
          <Image src={'/iPhone.png'} alt='mockup' width={354} height={723} className='w-[220px] sm:w-[280px] md:w-[354px] h-auto' />
        </div>
        <div className='flex flex-col pt-2 md:pt-10 gap-6 md:gap-10 text-center md:text-start items-center md:items-start'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl max-w-[650px]'>Download Flavortown <span className='text-[#338EDA]'>For Mobile</span></h1>
            <p className='text-base sm:text-lg md:text-2xl max-w-[717px]'>V1.3(Added Achievements)</p>
            <div className='w-full max-w-md flex flex-col rounded-2xl bg-white border-[#AAAAAA] border-2 py-4 px-4 sm:px-6 md:px-10 gap-4'>
                <div className="flex flex-row justify-between items-center gap-4" ><h1>Android</h1><Link href="/V1.apk" download className="cursor-pointer"><Button>Download</Button></Link></div>
                <div className="flex flex-row justify-between items-center gap-4"><h1>iOS</h1><Button disabled className="cursor-pointer">Coming Soon</Button></div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default page
