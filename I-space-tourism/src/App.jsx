import {useState} from 'react'
import { Home } from "./Home";
import { NavigationBar } from "./NavigationBar"
import { Destination } from "./Destination";

import ImageCommander from "assets/crew/image-douglas-hurley.png"

const CREW_DATA = {
  "commander": {
    "name": "",
    "description": "",
    "image": ImageCommander,
  }
}
function Crew() {
  return <div
    className="
    min-h-screen min-w-full bg-crew-mobile 
    md:bg-crew-tablet lg:bg-crew-desktop bg-no-repeat bg-cover
    bg-top 
    text-barlow text-center text-white
    tracking-wider
    px-7 lg:px-60 pt-28 md:pt-36 lg:pt-48 pb-10 md:pb-0
    lg:flex flex-col justify-between
    ">
    <p className="mb-10 text-xl tracking-widest md:text-left lg:text-3xl">
      <span className="text-white/40 mr-5">02</span> MEET YOUR CREW
    </p>
    <div className='md:flex flex-col-reverse lg:flex-row relative lg:h-full'>
      
      <figure className="w-full border-b-2 md:border-none uppercase  border-white/20 lg:flex justify-end lg:absolute lg:bottom-0 ">
          <img className='size-6/12 lg:size-[40%] mx-auto lg:mx-0' src={ImageCommander} alt="destination" />
        </figure>

      <div className='md:flex flex-col-reverse lg:w-6/12 z-10'>
        <div className='my-10 md:my-20 lg:my-40 lg:mb-20 flex justify-center lg:justify-start items-center'>
          <div className='size-3 md:size-4 mr-4 md:mr-7 rounded-full bg-white cursor-pointer'></div>
          <div className='size-3 md:size-4 mr-4 md:mr-7 rounded-full bg-white/20 cursor-pointer'></div>
          <div className='size-3 md:size-4 mr-4 md:mr-7 rounded-full bg-white/20 cursor-pointer'></div>
          <div className='size-3 md:size-4 mr-0 md:mr-0 rounded-full bg-white/20 cursor-pointer'></div>
        </div>
        <div className='lg:text-left'>
          <p className='uppercase font-bellefair text-3xl lg:text-5xl text-white/40 '>Commander</p>
          <p className='uppercase font-bellefair text-4xl md:text-6xl lg:text-7xl my-3 md:my-5 lg:my-7'>Douglas Hurley</p>
          <p className='text-lg text-purp md:text-xl lg:text-2xl md:w-8/12 lg:w-9/12 md:mx-auto lg:mx-0 leading-loose'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.  
          </p>
        </div>
      </div>
    </div>
  </div>
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("crew");
  return <>
  <NavigationBar page={currentPage}/>
  {currentPage == "home" && <Home />}
  {currentPage == "destination" && <Destination />}
  {currentPage == "crew" && <Crew />}
  </>
}