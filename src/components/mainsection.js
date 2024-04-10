import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Main(){
    return(
        <div className="flex justify-center text-center text-gray-500 py-20 px-3">
            <div>
                <div className='text-2xl font-bold text-black'>Please verify your email...</div>
                <div className='text-7xl text-gray-500 mt-5'><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className='mt-2'>Please verify your email address. We've sent a confirmation email to:</div>
                <div className='text-black font-bold mt-3'>account @refero.design</div>
                <div className='mt-3'>Click the confirmation link in that to begin using Dribbble</div>
                <div className='mt-3'>Didn't receive the email? Check ypur spam folder, it may have been caught by a filter. If <br/> ypu still don't see it, you can <span className='text-pink-500 font-bold'>resend the confirmation email</span>.</div>
                <div className='mt-3'>Wrong email address? <span className='text-pink-500 font-bold'>Change it.</span></div>
            </div>
        </div>
    );
}