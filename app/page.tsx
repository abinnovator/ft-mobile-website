import FeaturesSection from "@/components/FeaturesSection";
import MobileFeaturesSection from "@/components/MobileFeaturesSection";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#fef7ef] h-screen font-sans">
      <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-4 motion-safe:duration-500 motion-reduce:animate-none">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center pt-30 gap-9 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-100 motion-reduce:animate-none">
        <h1 className="text-[#3b2517] font-black text-5xl md:text-7xl text-center">Access Flavortown,
        <br /> <span className="text-[#e85464]">right from your phone</span></h1>
        <p>Access your stats, projects devlogs and more</p>
      </div>

      <div className="cursor-pointer flex flex-row gap-10 items-center justify-center pt-10 motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-700 motion-safe:delay-200 motion-reduce:animate-none">
        <Link href={'/download'}><Button className="border-2 border-gray-400 px-10 py-7 rounded-full cursor-pointer bg-[#338EDA]">Download Now!</Button></Link>
      </div>
      <div className="hidden md:flex"><FeaturesSection /></div>
      <div className="flex md:hidden"><MobileFeaturesSection /></div>
    </div>
  );
}
