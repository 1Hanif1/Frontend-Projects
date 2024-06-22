/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavigationBar } from "./NavigationBar";
import iconArcade from "assets/images/icon-arcade.svg"
import iconAdvance from "assets/images/icon-advanced.svg"
import iconPro from "assets/images/icon-pro.svg"

export function SelectPlanPage({
  duration,
  changeDuration,
  handleClickPrev,
  updateForm,
  data
}) {
  const [currentPlan, setCurrentPlan] = useState(data ? data : {});

  const handlePlanSelection = function (plan, duration, cost) {
    setCurrentPlan({
      plan,
      duration,
      cost: +cost
    });
  };

  const handleClickNext = function () {
    if(!currentPlan) return;
    updateForm({
      page: 'select_plan',
      data: currentPlan
    });
  };

  const handlePlanDurationChange = function () {
    if (currentPlan) {
      if (currentPlan.plan === "Arcade") {
        if (duration === "monthly") handlePlanSelection('Arcade', 'yearly', '90');else handlePlanSelection('Arcade', 'monthly', '9');
      }

      if (currentPlan.plan === "Advanced") {
        if (duration === "monthly") handlePlanSelection('Advanced', 'yearly', '120');else handlePlanSelection('Advanced', 'monthly', '12');
      }

      if (currentPlan.plan === "Pro") {
        if (duration === "monthly") handlePlanSelection('Pro', 'yearly', '150');else handlePlanSelection('Pro', 'monthly', '15');
      }
    }

    changeDuration();
  };

  return <><div className="bg-white lg:bg-none p-5 lg:p-0 rounded-xl lg:rounded-none w-11/12 mx-auto lg:mx-0 lg:w-full mb-20 lg:mb-0">
    <h1 className='font-bold text-3xl mb-2 text-marine-blue'>Select Your Plan</h1>
    <p className='text-base text-cool-gray mb-10 font-medium'>You have the option of monthly or yearly billing</p>
    <div className='lg:grid grid-cols-3 gap-5'>
      <div className={`
        flex items-center lg:block mb-5 lg:mb-0
        border p-5 rounded-lg cursor-pointer hover:border-purplish-blue 
        ${currentPlan?.plan === "Arcade" ? "bg-alabaster border-purplish-blue" : ""}`
      } 
        
        onClick={() => duration === 'monthly' ? handlePlanSelection('Arcade', duration, '9') : handlePlanSelection('Arcade', duration, '90')}>
        <figure className='mr-5 lg:mr-0 lg:mb-14'>
          <img src={iconArcade} alt="arcade" />
        </figure>
        <div className='font-medium'>
          <p className=" text-marine-blue">Arcade</p>
          {duration === "monthly" ? <>
              <p className=' text-cool-gray'>$9/mo</p>
            </> : <>
              <p className=' text-cool-gray'>$90/yr</p>
              <p className=" text-marine-blue">2 months free</p>
            </>}
        </div>
      </div>
      <div className={`flex items-center lg:block mb-5 lg:mb-0 border p-5 rounded-lg cursor-pointer hover:border-purplish-blue ${currentPlan?.plan === "Advanced" ? "bg-alabaster border-purplish-blue" : ""}`} onClick={() => duration === 'monthly' ? handlePlanSelection('Advanced', duration, '12') : handlePlanSelection('Advanced', duration, '120')}>
        <figure className='mr-5 lg:mr-0 lg:mb-14'>
          <img src={iconAdvance} alt="advance" />
        </figure>
        <div className='font-medium'>
          <p className=" text-marine-blue">Advanced</p>
          {duration === "monthly" ? <>
              <p className=' text-cool-gray'>$12/mo</p>
            </> : <>
              <p className=' text-cool-gray'>$120/yr</p>
              <p className=" text-marine-blue">2 months free</p>
            </>}
        </div>
      </div>
      <div className={` flex items-center lg:block mb-5 lg:mb-0 border p-5 rounded-lg cursor-pointer hover:border-purplish-blue ${currentPlan?.plan === "Pro" ? "bg-alabaster border-purplish-blue" : ""}`} onClick={() => duration === 'monthly' ? handlePlanSelection('Pro', duration, '15') : handlePlanSelection('Pro', duration, '150')}>
        <figure className='mr-5 lg:mr-0 lg:mb-14'>
          <img src={iconPro} alt="pro" />
        </figure>
        <div className='font-medium'>
          <p className=" text-marine-blue">Pro</p>
          {duration === "monthly" ? <>
              <p className=' text-cool-gray'>$15/mo</p>
            </> : <>
              <p className=' text-cool-gray'>$150/yr</p>
              <p className=" text-marine-blue">2 months free</p>
            </>}
        </div>
      </div>
    </div>
    <div className='w-full bg-alabaster font-medium flex items-center justify-center p-5 mt-10 rounded-xl'>
      <span className={duration === "monthly" ? `text-marine-blue` : `text-cool-gray`}>Monthly</span>
      <div onClick={handlePlanDurationChange} className={`mx-5 bg-marine-blue rounded-3xl p-1 w-10 cursor-pointer flex ${duration === "monthly" ? "justify-start" : "justify-end"}`}>
        <div className='size-3 bg-white rounded-full'></div>
      </div>
      <span className={duration === "yearly" ? `text-marine-blue` : `text-cool-gray`}>Yearly</span>
    </div>
  </div>
  <NavigationBar onClickPrev={handleClickPrev} onClickNext={handleClickNext} /> 
  </>;
}
  