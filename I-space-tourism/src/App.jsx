import { NavigationBar } from "./NavigationBar"
function Home() {
  return <div 
  className="
    min-h-screen min-w-full bg-home-mobile 
    md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover
    bg-bottom 
    text-barlow text-center lg:text-left
    px-7 md:px-28 lg:px-40 pt-32 md:pt-48 pb-20 lg:pb-40
    lg:grid grid-cols-2 items-center
  ">
    <div className="mb-20 md:mb-28 lg:mb-0 lg:w-9/12">
      <p className=" text-purp text-xl md:text-2xl lg:text-4xl tracking-widest">SO, YOU WANT TO TRAVEL TO</p>
      <p className=" text-wht font-bellefair text-8xl md:text-9xl lg:text-[10vw] my-7">SPACE</p>
      <p className=" text-purp text-xl md:text-2xl lg:text-3xl leading-relaxed">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </p>
    </div>

    <div className="cursor-pointer relative">
      <p className="bg-white text-bellefair mx-auto rounded-full size-40 md:size-60
      flex justify-center items-center text-2xl font-bellefair 
       transition-shadow shadow-circle-init hover:shadow-circle-final ">EXPLORE</p>
      </div>
  </div>
}

export default function App() {
  return <>
  <NavigationBar />
  <Home />
  </>
}