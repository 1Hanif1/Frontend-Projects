import iconThankYou from 'assets/images/icon-thank-you.svg'
function ThankYou() {
    return <div className="bg-white lg:bg-none p-5 py-20 lg:p-0 rounded-xl lg:rounded-none w-11/12 mx-auto lg:mx-0 lg:w-full lg:h-full">
    <div className='flex flex-col justify-center items-center h-full mx-3 lg:mx-7'>
        <figure>
            <img src={iconThankYou} alt="Thank You" />
        </figure>
        <p className='text-3xl font-bold mt-6 mb-3 text-marine-blue'>Thank you!</p>
        <p className='text-center text-cool-gray'>
            Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.
        </p>
    </div>
    </div>
}

export default ThankYou;