/* eslint-disable react/prop-types */
import { NavigationBar } from "./NavigationBar";

function Summary({handleClickPrev, duration, data, updateForm, handleChangePlan}) {
    const getTotalCost = function() {
        let sum = 0;
        sum += data.plan.cost;
        data.addons.forEach(addon => addon.selected ? sum += addon.cost : sum += 0)
        return sum;
    }


    const handleFormSubmit = function() {
        updateForm({
            page: 'submit'
        })
    }

    return <>
    <div className="bg-white lg:bg-none p-5 lg:p-0 rounded-xl lg:rounded-none w-11/12 mx-auto lg:mx-0 lg:w-full">
        <h1 className=' font-bold text-3xl mb-2 text-marine-blue'>
        Finishing up
        </h1>
        <p className='text-cool-gray mb-10 font-medium'>
        Double-check everything looks OK before confirming.
        </p>    
        <div className=" bg-alabaster p-5 rounded-xl">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <p className="font-bold text-marine-blue">{data.plan.plan} ({duration})</p>
                    <p className=" underline text-cool-gray cursor-pointer hover:font-bold" onClick={handleChangePlan}>Change</p>
                </div>
                <p className="font-bold text-marine-blue">
                    ${data.plan.cost}{duration === "monthly"?'/mo':'/yr'}
                </p>
            </div>
            <hr className="mb-3"/>
            {
                data.addons.map(
                    addon => {
                        if(addon.selected) return <div key={addon.service}
                        className="flex justify-between items-center mb-2 ">
                        <p className="text-cool-gray">{addon.service}</p>
                        <p className=" text-marine-blue">+${addon.cost}{duration === "monthly"?'/mo':'/yr'}</p>
                    </div>
                    }
                )
            }
        </div>
        <div className="p-5 flex justify-between items-center">
            <p className="text-cool-gray">Total (per {duration === "monthly" ? "month" : "year"})</p>
            <p className=" text-purplish-blue font-bold text-xl">${getTotalCost()}{duration === "monthly"?'/mo':'/yr'}</p>
        </div>
    </div>  
    <NavigationBar onClickPrev={handleClickPrev} isFinalSubmit={true} onClickNext={handleFormSubmit}/>
    </>
}

export default Summary;