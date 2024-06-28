import { useState } from 'react';
import ImageMoon from "assets/destination/image-moon.png";
import ImageMars from "assets/destination/image-mars.png";
import ImageEuropa from "assets/destination/image-europa.png";
import ImageTitan from "assets/destination/image-titan.png";

const DESTINATION_DATA = {
  "moon": {
    "name": "Moon",
    "image": ImageMoon,
    "description": " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "time": "3 days",
  },
  "mars": {
    "name": "Mars",
    "image": ImageMars,
    "description": "  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "distance": "225 mil. km",
    "time": "9 months",
  },
  "europa": {
    "name": "Europa",
    "image": ImageEuropa,
    "description": "  The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "distance": "628 mil. km",
    "time": "3 years",
  },
  "titan": {
    "name": "Titan",
    "image": ImageTitan,
    "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    "distance": "1.6 bil. km",
    "time": "7 years",
  }
};
export function Destination() {
  const [destination, setDestination] = useState("moon");
  return <div
    className="
  min-h-screen min-w-full bg-destination-mobile 
  md:bg-destination-tablet lg:bg-destination-desktop bg-no-repeat bg-cover
  bg-bottom 
  text-barlow text-center text-white
  tracking-wider
  px-7 lg:px-40 pt-28 md:pt-36 lg:pt-48 pb-10
  grid
  ">
    <p className="text-xl tracking-widest mb-10 md:text-left lg:text-3xl">
      <span className="text-white/40 mr-5">01</span> PICK YOUR DESTINATION
    </p>
    <div className="lg:grid grid-cols-2 gap-20">
      <figure className="size-40 md:size-60 lg:size-max mx-auto mb-10">
        <img src={DESTINATION_DATA[destination].image} alt="destination" />
      </figure>
      <div className="md:w-10/12 md:mx-auto lg:mx-0 lg:text-left">
        <div className="flex justify-center lg:justify-start items-center">
          <div onClick={() => setDestination('moon')} className={`h-10 relative mr-5 md:mr-10 text-xl cursor-pointer 
          after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 ${destination === 'moon' ? 'text-white' : `after:hidden text-purp`}`}>
            MOON
          </div>
          <div onClick={() => setDestination('mars')} className={`h-10 relative mr-5 md:mr-10 text-xl cursor-pointer
          after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 ${destination === 'mars' ? 'text-white' : `after:hidden text-purp`}`}>
            MARS
          </div>
          <div onClick={() => setDestination('europa')} className={`h-10 relative mr-5 md:mr-10 text-xl cursor-pointer
          after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 ${destination === 'europa' ? 'text-white' : `after:hidden text-purp`}`}>
            EUROPA
          </div>
          <div onClick={() => setDestination('titan')} className={`h-10 relative text-xl cursor-pointer
          after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-0 ${destination === 'titan' ? 'text-white' : `after:hidden text-purp`}`}>
            TITAN
          </div>
        </div>

        <p className="uppercase text-6xl font-bellefair mt-10 mb-2 lg:text-9xl">{DESTINATION_DATA[destination].name}</p>
        <p className="text-purp lg:text-xl">
          {DESTINATION_DATA[destination].description}
        </p>

        <hr className=" border-white/20 my-7 md:mt-10" />
        <div className="md:flex justify-center lg:justify-start items-center">
          <div className="md:mr-32 lg:text-xl">
            <p className="text-purp mb-1">AVG. DISTANCE</p>
            <p className="uppercase text-3xl font-bellefair mb-5 md:mb-0">{DESTINATION_DATA[destination].distance}</p>
          </div>
          <div className="lg:text-xl">
            <p className="text-purp mb-1">EST. TRAVEL TIME</p>
            <p className="uppercase text-3xl font-bellefair ">{DESTINATION_DATA[destination].time}</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
