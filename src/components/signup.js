import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className=" sm:w-[50%] w-full">
            <div className="font-bold text-xl">Sign up to Dribbble</div>
            <div className="flex gap-x-5 mt-7">
                <div>
                    <div>Name</div>
                    <div className="bg-gray-100 text-gray-400 px-2 py-2 rounded-lg"><input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="text" placeholder="Name" /></div>
                </div>
                <div>
                    <div>Username</div>
                    <div className="bg-gray-100 text-gray-400 px-2 py-2 rounded-lg"><input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="text" placeholder="Username" /></div>
                </div>
            </div>
            <div className="mt-5">
                <div>Email</div>
                <div className="bg-gray-100 text-gray-400 px-2 py-2 rounded-lg"><input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="email" placeholder="enter your email" /></div>
            </div>
            <div className="mt-5">
                <div>Password</div>
                <div className="bg-gray-100 text-gray-400 px-2 py-2 rounded-lg"><input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="password" placeholder="6+ characters" /></div>
            </div>
            <div className=" flex mt-5">
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-sm">Creating an account means you're okay with our <span className="text-blue-600">Term of Servie, Privacy Policy,</span> and our default <span className="text-blue-600">Notification Settings.</span></span>
            </div>
            <div className="bg-pink-500 text-white fint-bold py-3 text-center rounded-lg sm:w-[150px] w-full my-2"><Link to={'/stepper'}>Create Account</Link></div>
            <div className="text-sm">This site is protected by reCAPTCHA and the Google <span className="text-blue-600">Privacy Policy</span> and <span className="text-blue-600">Terms of Service</span> apply.</div>
        </div>
    );
}