import { Link } from "react-router-dom";


export default function Signin() {
    return (
        <div className="sm:w-[50%] w-full">
            <div className="font-bold text-xl">Sign in to your Dribble account</div>
            <div className="mt-5">
                <div>Email</div>
                <div className="bg-gray-100 text-gray-400 px-2 py-2 rounded-lg"><input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="email" placeholder="enter your email" /></div>
            </div>
            <div className="mt-5">
                <div>Password</div>
                <div className="bg-gray-100 text-gray-400 px-2 py-2 rounded-lg"><input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="password" placeholder="6+ characters" /></div>
            </div>
            <div className="bg-pink-500 text-white fint-bold py-3 text-center rounded-lg sm:w-[150px] w-full my-2"><Link to={'/home'}>Sign in</Link></div>
            <div className="text-sm">This site is protected by reCAPTCHA and the Google <span className="text-blue-600">Privacy Policy</span> and <span className="text-blue-600">Terms of Service</span> apply.</div>
        </div>
    );
}