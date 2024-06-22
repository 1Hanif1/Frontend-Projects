/* eslint-disable react/prop-types */

export function NavigationBar({
  onClickNext,
  prevHidded = false,
  onClickPrev = () => null,
  isFinalSubmit = false
}) {
  return <div className={`fixed bottom-0 bg-white px-5 lg:px-0 py-3 lg:py-0 lg:static w-full mt-auto flex ${prevHidded ? "justify-end" : "justify-between"} items-center`}>
          <div className={prevHidded ? 'hidden' : `text-cool-gray font-medium cursor-pointer hover:text-marine-blue text-lg lg:text-base`} onClick={onClickPrev}>Go Back</div>
          
          {isFinalSubmit ? 
            <div className='font-medium text-white bg-purplish-blue px-7 py-3 rounded-lg cursor-pointer hover:opacity-90 text-lg lg:text-base' onClick={onClickNext}>Confirm</div>
            :
            <div className='font-medium text-white bg-marine-blue px-7 py-3 rounded-lg cursor-pointer hover:opacity-90 text-lg lg:text-base' onClick={onClickNext}>Next Step</div>
          }
  </div>;
}
  