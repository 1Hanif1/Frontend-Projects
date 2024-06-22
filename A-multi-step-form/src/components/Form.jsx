import { useState } from "react";
import { SelectPlanPage } from './SelectPlanPage';
import { PersonalInfoPage } from './PersonalInfoPage';
import { SideBar } from './SideBar';
import PickAddonsPage from "./PickAddonsPage";
import Summary from "./Summary";
import ThankYou from "./ThankYou";

export function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const [duration, setDuration] = useState("monthly");
  const [userData, setUserData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false)
  const STEPS = [{
    number: "1",
    step: "YOUR INFO"
  }, {
    number: "2",
    step: "SELECT PLAN"
  }, {
    number: "3",
    step: "ADD-ONS"
  }, {
    number: "4",
    step: "SUMMARY"
  }];


  const handleChangeDuration = function () {
    setDuration(duration => duration === "monthly" ? "yearly" : "monthly");
  };

  const handleFormUpdate = function (pageData) {
    if (pageData.page == "your_info") {
      setUserData(data => {
        return { ...data,
          info: pageData.data
        };
      });
    }

    if (pageData.page == "select_plan") {
      setUserData(data => {
        return { ...data,
          plan: pageData.data
        };
      });
    }

    if (pageData.page == "add_ons") {
      setUserData(data => {
        return { ...data,
          addons: pageData.data
        };
      });
    }

    if(pageData.page == "submit") {
      console.log("FORM DATA", userData);
      // CALL API HERE TO SUBMIT DATA
      return setIsSubmitted(true);
    }

    setCurrentStep(currentStep + 1);
  };

  const handleChangePlan = function() {
    setCurrentStep(2)
  }

  const handleClickPrev = function () {
    setCurrentStep(currentStep - 1);
  };

  return <div className=' bg-magnolia lg:bg-white lg:flex'>
    
    <section className="flex w-full lg:w-max lg:p-7 lg:pr-10 bg-sidebar-mobile lg:bg-sidebar-desktop bg-bottom bg-no-repeat bg-cover lg:rounded-xl">
      <SideBar data={STEPS} currentStep={currentStep} />
    </section>

    <section 
    className='lg:px-16 py-7 lg:py-10 lg:pb-5 flex flex-col justify-between m-auto lg:m-0 lg:w-full -mt-24 lg:-mt-0 bg-none lg:bg-none min-h-screen lg:min-h-max'>
      
      {currentStep === 1 && <PersonalInfoPage updateForm={handleFormUpdate} data={userData.info} />}

      {currentStep === 2 && <SelectPlanPage duration={duration} changeDuration={handleChangeDuration} handleClickPrev={handleClickPrev} updateForm={handleFormUpdate} data={userData.plan} />}

      {currentStep === 3 && <PickAddonsPage duration={duration} updateForm={handleFormUpdate} data={userData.addons} handleClickPrev={handleClickPrev}/>}

      {!isSubmitted && currentStep === 4 && <Summary handleClickPrev={handleClickPrev} 
      duration={duration} data={userData} updateForm={handleFormUpdate}
      handleChangePlan={handleChangePlan}/>}

      {isSubmitted && <ThankYou />}
    
    </section>
  </div>;
}
  