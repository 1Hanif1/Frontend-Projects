/* eslint-disable react/prop-types */

export function SideBar({
  data,
  currentStep
}) {
  return <div className='flex justify-center mt-14 lg:mt-0 items-center w-full lg:w-max lg:block mb-32 lg:mb-64 lg:mr-14'>
      {data.map(item => {
      return <div key={item.number} className='flex lg:grid grid-cols-navigation-item items-center lg:pb-5 lg:mb-3'>
          <div className={`mx-2 lg:mx-0 font-bold flex justify-center items-center rounded-full size-10 border lg:mr-3  ${item.number == currentStep ? "bg-light-blue text-black border-light-blue" : "border-white text-white"}`}>{item.number}</div>

          <div className='tracking-widest hidden lg:block'>
            <p className='text-sm text-pastel-blue'>STEP {item.number}</p>
            <p className='font-bold text-white w-max'>{item.step}</p>
          </div>
          </div>;
    })}
  </div>;
}
  