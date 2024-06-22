/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import { useState} from "react";
import { NavigationBar } from "./NavigationBar";
export function PersonalInfoPage({
  updateForm,
  data
}) {
  const [username, setUsername] = useState(data ? data.username : "");
  const [email, setEmail] = useState(data ? data.email : "");
  const [phoneNumber, setPhoneNumber] = useState(data ? data.phoneNumber : "");
  const [inputError, setInputError] = useState({});

  const handleFormSubmit = function () {
    if (!username) {
      return setInputError({
        error: "Please enter a valid name",
        input: "1"
      });
    }

    if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return setInputError({
        error: "Please enter a valid email",
        input: "2"
      });
    }

    if (!phoneNumber || !/^[0-9\-\(\)\s\/\.]+$/.test(phoneNumber)) {
      return setInputError({
        error: "Please enter a valid phone number",
        input: "3"
      });
    }

    const userInfo = {
      page: "your_info",
      data: {
        username,
        email,
        phoneNumber
      }
    };
    setInputError({});
    updateForm(userInfo);
  };

  return <><div className="bg-white lg:bg-none p-5 lg:p-0 rounded-xl lg:rounded-none w-11/12 mx-auto lg:mx-0 lg:w-full">
    <h1 className=' font-bold text-3xl mb-2 text-marine-blue'>
      Personal info
    </h1>
    <p className=' text-base text-cool-gray mb-10 font-medium'>
      Please provide your name, email address, and phone number.
      </p>
    <div className="block mb-5">
      <label className="flex justify-between items-center mb-1 text-marine-blue font-medium w-full" htmlFor="name"><span>Name</span> <span className='font-bold text-strawberry-red'>{inputError?.input == "1" ? inputError?.error : ''}</span></label>
      <input id="name_input" className={`block w-full border-2 p-3 rounded-lg font-medium outline-none focus:border-purplish-blue ${inputError?.input == "1" ? "border-strawberry-red" : ""}`} name="name" type='text' placeholder='e.g. Haruki Murakami' value={username} onChange={e => setUsername(e.target.value)} />
    </div>
    <div className="block mb-5">
      <label className="flex justify-between items-center mb-1 text-marine-blue font-medium w-full" htmlFor="email"><span>Email</span> <span className='font-bold text-strawberry-red'>{inputError?.input == "2" ? inputError?.error : ''}</span></label>
      <input id="email_input" className={`block w-full border-2 p-3 rounded-lg font-medium outline-none focus:border-purplish-blue ${inputError?.input == "2" ? "border-strawberry-red" : ""}`} name="email" type='text' placeholder='e.g. haruki@murakami.com' value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    <div className="block mb-5">
      <label className="flex justify-between items-center mb-1 text-marine-blue font-medium w-full" htmlFor="phone"><span>Phone Number</span> <span className='font-bold text-strawberry-red'>{inputError?.input == "3" ? inputError?.error : ''}</span></label>
      <input id="phone_input" className={`block w-full border-2 p-3 rounded-lg font-medium outline-none focus:border-purplish-blue ${inputError?.input == "3" ? "border-strawberry-red" : ""}`} name="phone" type='text' placeholder='e.g. 12345 67890' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
    </div>
  </div>
  <NavigationBar prevHidded={true} onClickNext={handleFormSubmit} />
  </>;
}
  