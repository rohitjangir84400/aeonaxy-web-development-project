import { useState } from "react";
import Signin from "../components/signin";
import Signup from "../components/signup";

export default function LandingPage() {
    const [isSignIn, setIsSignIn] = useState(false);

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    };
    return (
        <div className="flex md:flex-nowrap flex-wrap h-[100vh]">
            <div className="md:basis-1/3 basis-full bg-cover bg-center p-10 flex flex-col justify-between" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/gradient-spring-paper-style-flowers_23-2148424595.jpg?w=740&t=st=1712655868~exp=1712656468~hmac=09593cf2cc9f245179e5f6fa12355e93e351e2ba399ba4cc7e5378373c023eed')" }}>
                <div>
                    <div className="text-2xl font-bold text-amber-900">Dribble</div>
                    <div className="font-bold text-amber-900 mt-10 text-xl" >Discover the world's top <br /> Designers & Creatives</div>
                </div>
                <div>
                    <div className="text-sm text-amber-900">Art by <span className=" underline hover:cursor-pointer">Peter Tarks</span></div>
                </div>
            </div>
            <div className="md:basis-2/3 basis-full p-2">
                <div className="flex justify-end text-sm hover:cursor-pointer" onClick={toggleSignIn}>
                    {isSignIn ? 'Not a member? Sign Up' : 'Already a member? Sign In'}
                </div>
                <div className="flex justify-center py-5">
                    {isSignIn ? <Signin /> : <Signup />}
                </div>
            </div>
        </div>
    );
}