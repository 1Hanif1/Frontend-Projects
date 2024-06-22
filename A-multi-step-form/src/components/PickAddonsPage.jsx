/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavigationBar } from "./NavigationBar";
import iconCheckmark from 'assets/images/icon-checkmark.svg'

function PickAddonsPage({duration, updateForm, data, handleClickPrev}) {
    const [addOnOne, setAddOnOne] = useState({
        service: 'Online service',
        cost: duration === "monthly" ? 1 : 10,
        selected: data ? data[0].selected ? true : false : false
    })
    const [addOnTwo, setAddOnTwo] = useState({
        service: 'Larger storage',
        cost: duration === "monthly" ? 2 : 20,
        selected: data ? data[1].selected ? true : false : false
    })
    const [addOnThree, setAddOnThree] = useState({
        service: 'Customizable profile',
        cost: duration === "monthly" ? 2 : 20,
        selected: data ? data[2].selected ? true : false : false
    })

    const handleAddOnSubmit = function () {
        const addOnData = [
            addOnOne,
            addOnTwo,
            addOnThree
        ]

        updateForm({
            page: "add_ons",
            data: addOnData
        })
    }


    return <>
    <div className="bg-white lg:bg-none p-5 lg:p-0 rounded-xl lg:rounded-none w-11/12 mx-auto lg:mx-0 lg:w-full">
        <h1 className='font-bold text-3xl mb-2 text-marine-blue'>Pick add-ons</h1>
        <p className='text-base text-cool-gray mb-10 font-medium'>Add-ons help enhance your gaming experience.</p>
        <div>
            <div className={`border flex items-center p-3 lg:p-5 rounded-xl mb-5 cursor-pointer hover:border-purplish-blue 
            ${addOnOne && addOnOne.selected ? `bg-alabaster border-purplish-blue` : ''}`
        } 
            onClick={() => {
                setAddOnOne(addOn => {
                    return {...addOn, selected: addOn.selected ? false : true};
                })
            }}
            >
                <div className={` flex justify-center items-center size-4 lg:size-6 border rounded ${addOnOne && addOnOne.selected ? `bg-purplish-blue` : ''}`}>
                    <img src={iconCheckmark}/>
                </div>
                <div className="ml-5">
                    <p className=" font-bold text-marine-blue">
                        Online service
                    </p>
                    <p className="font-base text-cool-gray text-xs lg:text-base">
                        Access to multiplayer games
                    </p>
                </div>
                {duration === 'monthly' ?
                    <span className="ml-auto text-purplish-blue text-sm lg:text-base">+$1/mo</span> : 
                    <span className="ml-auto text-purplish-blue text-sm lg:text-base">+$10/yr</span>
                }
            </div>
            <div className={`border flex items-center p-3 lg:p-5 rounded-xl mb-5 cursor-pointer hover:border-purplish-blue 
            ${addOnTwo.selected ? `bg-alabaster border-purplish-blue` : ''}`
        }
            onClick={() => {
                setAddOnTwo(addOn => {
                    return {...addOn, selected: addOn.selected ? false : true};
                })
            }}
            >
                <div className={` flex justify-center items-center size-4 lg:size-6 border rounded ${addOnTwo?.selected ? `bg-purplish-blue` : ''}`}>
                    <img src={iconCheckmark}/>
                </div>
                <div className="ml-5">
                    <p className=" font-bold text-marine-blue">
                        Larger storage
                    </p>
                    <p className="font-base text-cool-gray text-xs lg:text-base">
                        Extra 1TB of cloud save
                    </p>
                </div>
                {duration === 'monthly' ?
                    <span className="ml-auto text-purplish-blue text-sm lg:text-base">+$2/mo</span> : 
                    <span className="ml-auto text-purplish-blue text-sm lg:text-base">+$20/yr</span>
                }
            </div>
            <div className={`border flex items-center p-3 lg:p-5 rounded-xl mb-5 cursor-pointer hover:border-purplish-blue 
            ${addOnThree?.selected ? `bg-alabaster border-purplish-blue` : ''}`
        }
            onClick={() => {
                setAddOnThree(addOn => {
                    return {...addOn, selected: addOn.selected ? false : true};
                })
            }}
            >
                <div className={` flex justify-center items-center size-4 lg:size-6 border rounded ${addOnThree.selected ? `bg-purplish-blue` : ''}`}>
                    <img src={iconCheckmark}/>
                </div>
                <div className="ml-5">
                    <p className=" font-bold text-marine-blue">
                        Customizable profile
                    </p>
                    <p className="font-base text-cool-gray text-xs lg:text-base">
                        Custom theme on your profile
                    </p>
                </div>
                {duration === 'monthly' ?
                    <span className="ml-auto text-purplish-blue text-sm lg:text-base">+$2/mo</span> : 
                    <span className="ml-auto text-purplish-blue text-sm lg:text-base">+$20/yr</span>
                }
            </div>
        </div>
    </div>
    <NavigationBar onClickPrev={handleClickPrev} onClickNext={handleAddOnSubmit}/>
    </>
}

export default PickAddonsPage;