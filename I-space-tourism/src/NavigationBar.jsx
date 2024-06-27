import IconHamburger from "assets/shared/icon-hamburger.svg";
import IconCross from "assets/shared/icon-close.svg";
import IconLogo from "assets/shared/logo.svg";

export function NavigationBar() {
  return <nav className="absolute w-full flex justify-between items-center
  px-7 py-7 lg:px-14 lg:pr-0 text-base">
    <figure className=" hover:animate-spin">
      <img src={IconLogo} alt="Logo" />
    </figure>
    <div className="md:hidden">
      <img src={IconHamburger} alt="hamburger" />
    </div>
    {/* <div className=" z-10 absolute hidden lg:block w-5.5/12 h-[0.1vh] bg-white/50 left-40 md:hidden"></div> */}
    <div className="font-barlow text-white absolute backdrop-blur-2xl bg-white/5 right-0 top-0 h-screen md:h-max w-7/12 md:w-8/12 lg:w-max flex-col md:px-10 lg:static lg:px-0 hidden md:flex">
      <img className="absolute right-7 top-10 md:hidden" src={IconCross} alt="close" />
      <div className=" mt-28 md:mt-0 uppercase tracking-[.27em] text-base md:flex justify-between items-center lg:w-max">
        <div className="mb-10 flex md:relative md:my-10 lg:ml-28 lg:mr-20 cursor-pointer">
          <span className="font-bold ml-7 mr-5 tracking-[.27em] md:hidden lg:ml-0 lg:mr-2 lg:block">00</span>Home
          <span className="ml-auto w-1 md:absolute md:w-full md:h-1 -bottom-10 bg-white block"></span>
        </div>
        <div className="mb-10 flex md:relative md:my-10 lg:mr-20 cursor-pointer">
          <span className="font-bold ml-7 mr-5 tracking-[.27em] md:hidden lg:ml-0 lg:mr-2 lg:block">01</span>Destination<span className="ml-auto w-1 md:absolute md:w-full md:h-1 -bottom-10 bg-white block"></span>
        </div>
        <div className="mb-10 flex md:relative md:my-10 lg:mr-20 cursor-pointer">
          <span className="font-bold ml-7 mr-5 tracking-[.27em] md:hidden lg:ml-0 lg:mr-2 lg:block">02</span>Crew<span className="ml-auto w-1 md:absolute md:w-full md:h-1 -bottom-10 bg-white block"></span>
        </div>
        <div className="mb-10 flex md:relative md:my-10 lg:mr-40 cursor-pointer">
          <span className="font-bold ml-7 mr-5 tracking-[.27em] md:hidden lg:ml-0 lg:mr-2 lg:block">03</span>Technology<span className="ml-auto w-1 md:absolute md:w-full md:h-1 -bottom-10 bg-white block"></span>
        </div>
      </div>
    </div>
  </nav>;
}
