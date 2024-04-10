import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Stepper() {
    const [location, setLocation] = useState('');
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (index) => {
        setSelectedOption(index);
    };
    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };


    const handlePreviousStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    return (
        <div>
            {step === 1 && (
                <div className="p-3">
                    <div className="font-bold text-pink-500">
                        <div>Dribbble</div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mt-5 sm:w-[50%] w-full">
                            <div className="text-2xl font-bold">Welcome! let's create your profile</div>
                            <div className="mt-3 text-gray-500 text-sm">Let other get to know you better! You can do these later</div>
                            <div className="mt-5">
                                <div className="font-bold">Add an avatar</div>
                                <div className="mt-2">

                                    <div className="flex items-center justify-center w-full">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-100 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-500 dark:bg-gray-300 hover:bg-gray-100 dark:border-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-300">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-800 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-800 dark:text-gray-800"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-800 dark:text-gray-800">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div>

                                </div>
                                <div className="mt-10 font-bold">Add your location</div>
                                <div className="border-b border-black mt-3"><input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} /></div>
                                {location === '' ? (
                                    <div className=" bg-pink-500 text-center py-3 opacity-50 rounded-lg text-white font-bold w-[100px] mt-10">next</div>
                                ) : (
                                    <div className=" bg-pink-500 text-center py-3 rounded-lg text-white font-bold w-[100px] mt-10" onClick={handleNextStep}>next</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="p-3">
                    <div className="font-bold text-pink-500 flex gap-x-10 items-center">
                        <div>Dribbble</div>
                        <div className="text-gray-500 bg-gray-200 rounded-lg px-3 py-1 cursor-pointer" onChange={handlePreviousStep}><FontAwesomeIcon icon={faAngleLeft} /></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mt-5 sm:w-[70%] w-full">
                            <div className="text-2xl font-bold">What brings you to Dribbble?</div>
                            <div className="mt-3 text-gray-500 text-sm">Select the option that best describe you. Don't worry, you can explore other options later.</div>
                            <div className="mt-20 gap-x-5 gap-y-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                                <div className={`border ${selectedOption === 0 ? 'border-pink-500' : ''} rounded-lg relative h-[230px]`}>
                                    <div className={`flex justify-center bg-transparent ${selectedOption === 0 ? 'mt-[-50px]' : ''}`}>
                                        <svg viewBox="0 0 1024 1024" className="icon h-[150px] w-[150px]" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M854.7 828.1H169.9c-38.9 0-70.5-31.6-70.5-70.5v-499c0-38.9 31.6-70.5 70.5-70.5h684.7c38.9 0 70.5 31.6 70.5 70.5v499c0.1 38.9-31.5 70.5-70.4 70.5z" fill="#FFFFFF"></path><path d="M885.2 258.1c0-16.5-13.5-30-30-30H169.4c-16.5 0-30 13.5-30 30v120.1h745.7V258.1z m-649.7 96.1c-28.2 0-51.2-23-51.2-51.2s23-51.2 51.2-51.2 51.2 23 51.2 51.2-22.9 51.2-51.2 51.2z m281.8-6.8H374.7c-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7h142.6c24.1 0 43.7 19.6 43.7 43.7s-19.6 43.7-43.7 43.7z" fill="#E6E6E6"></path><path d="M213.3 752.8h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H213.3c-8.5 0-15.4-6.9-15.4-15.4V524.6c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0.1 19.4 15.9 35.3 35.4 35.3z" fill="#06F3FF"></path><path d="M235.5 271.8c-17.2 0-31.2 14-31.2 31.2s14 31.2 31.2 31.2 31.2-14 31.2-31.2-14-31.2-31.2-31.2z" fill="#FFFFFF"></path><path d="M235.5 251.8c-28.2 0-51.2 23-51.2 51.2s23 51.2 51.2 51.2 51.2-23 51.2-51.2-22.9-51.2-51.2-51.2z m0 82.4c-17.2 0-31.2-14-31.2-31.2s14-31.2 31.2-31.2 31.2 14 31.2 31.2-14 31.2-31.2 31.2z" fill="#005BFF"></path><path d="M517.3 280.1H374.7c-13 0-23.7 10.6-23.7 23.7s10.6 23.7 23.7 23.7h142.6c13 0 23.7-10.6 23.7-23.7s-10.7-23.7-23.7-23.7z" fill="#FFFFFF"></path><path d="M517.3 260.1H374.7c-24.1 0-43.7 19.6-43.7 43.7s19.6 43.7 43.7 43.7h142.6c24.1 0 43.7-19.6 43.7-43.7s-19.6-43.7-43.7-43.7z m0 67.3H374.7c-13 0-23.7-10.6-23.7-23.7s10.6-23.7 23.7-23.7h142.6c13 0 23.7 10.6 23.7 23.7s-10.7 23.7-23.7 23.7z" fill="#005BFF"></path><path d="M855.2 188.1H169.4c-38.6 0-70 31.4-70 70v500c0 38.6 31.4 70 70 70h685.7c38.6 0 70-31.4 70-70v-500c0.1-38.6-31.3-70-69.9-70z m30 570c0 16.5-13.5 30-30 30H169.4c-16.5 0-30-13.5-30-30V398.2h745.7v359.9z m0-379.9H139.5V258.1c0-16.5 13.5-30 30-30h685.7c16.5 0 30 13.5 30 30v120.1z" fill="#005BFF"></path><path d="M459.9 624.6l-114.3-45.3 114.3-43.7v-46.5L296.1 560v39.5l163.8 71.2zM568.7 454.8h-34.4L475.1 702h33.8zM747.9 560.3l-164-70.9v45.8l114.4 44.5-114.4 45v46.2l164-71.4z" fill="#005BFF"></path></g></svg>
                                    </div>
                                    <div className="text-center font-bold">I'm looking to hire a designer</div>
                                    {selectedOption === 0 ? (
                                        <div className="text-center text-gray-500 text-sm">With over 7 million shots from a vast community of designers</div>
                                    ) : ('')}
                                    <div className="text-center absolute bottom-5 left-1/2"><input type="radio" className="" onClick={() => handleOptionChange(0)} checked={selectedOption === 0} /></div>
                                </div>
                                <div className={`border ${selectedOption === 1 ? 'border-pink-500' : ''} rounded-lg relative h-[230px]`}>
                                    <div className={`flex justify-center bg-transparent ${selectedOption === 1 ? 'mt-[-50px]' : ''}`}>
                                        <svg viewBox="0 0 1024 1024" className="icon h-[150px] w-[150px]" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M594.7 800.4H272.4c-10.7 0-19.4 8.7-19.4 19.4s8.7 19.4 19.4 19.4h322.3c10.7 0 19.4-8.7 19.4-19.4 0-10.8-8.7-19.4-19.4-19.4z" fill="#005BFF"></path><path d="M912.9 771.4v39H968c-8.1-22.7-29.7-39-55.1-39z" fill="#E6E6E6"></path><path d="M815.6 675.9V235.2c0-16.1-13.1-29.1-29.1-29.1H80.6c-16.1 0-29.1 13.1-29.1 29.1v440.7c0 16.1 13.1 29.1 29.1 29.1h705.9c16.1 0.1 29.1-13 29.1-29.1z m-43.9-42c0 16-13.1 29.1-29.1 29.1h-618c-16 0-29.1-13.1-29.1-29.1V277.3c0-16 13.1-29.1 29.1-29.1h618c16 0 29.1 13.1 29.1 29.1v356.6z" fill="#FFFFFF"></path><path d="M742.6 248.2h-618c-16 0-29.1 13.1-29.1 29.1v356.6c0 16 13.1 29.1 29.1 29.1h618c16 0 29.1-13.1 29.1-29.1V277.3c0-16-13.1-29.1-29.1-29.1z m-523.3 32.2c0-1.6 1.3-2.8 2.8-2.8h61.3c1.6 0 2.8 1.3 2.8 2.8v17.5c0 1.6-1.3 2.8-2.8 2.8h-61.3c-1.6 0-2.8-1.3-2.8-2.8v-17.5z m-30.3-3.5c6.6 0 11.9 5.3 11.9 11.9s-5.3 11.9-11.9 11.9c-6.6 0-11.9-5.3-11.9-11.9s5.4-11.9 11.9-11.9z m-39 0c6.6 0 11.9 5.3 11.9 11.9s-5.3 11.9-11.9 11.9c-6.6 0-11.9-5.3-11.9-11.9s5.3-11.9 11.9-11.9z m237.3 181.7c0 67.8-55.2 123-123 123s-123-55.2-123-123 55.2-123 123-123h9.7v113.3h113.3v9.7z m-90.1-38.7v-94.7c52.3 0 94.7 42.4 94.7 94.7h-94.7z m373.6 148.9H530.1c-5.4 0-9.7-4.3-9.7-9.7 0-5.4 4.3-9.7 9.7-9.7h140.7c5.4 0 9.7 4.3 9.7 9.7 0 5.3-4.3 9.7-9.7 9.7z m0-73.3H525.2c-5.4 0-9.7-4.3-9.7-9.7s4.3-9.7 9.7-9.7h145.6c5.4 0 9.7 4.3 9.7 9.7s-4.3 9.7-9.7 9.7z m0-73.4H461.2c-5.4 0-9.7-4.3-9.7-9.7s4.3-9.7 9.7-9.7h209.7c5.4 0 9.7 4.3 9.7 9.7s-4.4 9.7-9.8 9.7z m0-73.3H461.2c-5.4 0-9.7-4.3-9.7-9.7s4.3-9.7 9.7-9.7h209.7c5.4 0 9.7 4.3 9.7 9.7s-4.4 9.7-9.8 9.7z" fill="#E6E6E6"></path><path d="M254.6 355.5c-52.6 4.9-93.9 49.3-93.9 103.1 0 57.1 46.5 103.6 103.6 103.6 53.8 0 98.2-41.3 103.1-93.9H254.6V355.5z" fill="#FFFFFF"></path><path d="M274 335.6h-9.7c-67.8 0-123 55.2-123 123s55.2 123 123 123 123-55.2 123-123v-9.7H274V335.6z m93.4 132.8c-4.9 52.6-49.3 93.9-103.1 93.9-57.1 0-103.6-46.5-103.6-103.6 0-53.8 41.3-98.2 93.9-103.1v112.8h112.8z" fill="#005BFF"></path><path d="M297.2 325.2v94.7h94.7c0-52.3-42.4-94.7-94.7-94.7z" fill="#005BFF"></path><path d="M150 288.8m-11.9 0a11.9 11.9 0 1 0 23.8 0 11.9 11.9 0 1 0-23.8 0Z" fill="#FFFFFF"></path><path d="M189 288.8m-11.9 0a11.9 11.9 0 1 0 23.8 0 11.9 11.9 0 1 0-23.8 0Z" fill="#FFFFFF"></path><path d="M222.1 300.7h61.3c1.6 0 2.8-1.3 2.8-2.8v-17.5c0-1.6-1.3-2.8-2.8-2.8h-61.3c-1.6 0-2.8 1.3-2.8 2.8v17.5c0 1.6 1.3 2.8 2.8 2.8z" fill="#FFFFFF"></path><path d="M912.9 732.5c-47 0-86.3 33.5-95.3 77.8H701.9c-11.7 0-20.2-2.3-23.2-6.3-2-2.7-2-7-2-9v-51.1h109.9c37.5 0 67.9-30.5 67.9-67.9V235.2c0-37.5-30.5-67.9-67.9-67.9h-706c-37.5 0-67.9 30.5-67.9 67.9v440.7c0 37.5 30.5 67.9 67.9 67.9h557.2V795c0 4.8 0 19.3 9.9 32.4 10.9 14.4 29.1 21.7 54.2 21.7h308.2v-19.4c0-53.6-43.6-97.2-97.2-97.2zM80.6 705.1c-16.1 0-29.1-13.1-29.1-29.1V235.2c0-16.1 13.1-29.1 29.1-29.1h705.9c16.1 0 29.1 13.1 29.1 29.1v440.7c0 16.1-13.1 29.1-29.1 29.1H80.6z m832.3 105.2h-55.1c8-22.7 29.7-39 55.1-39s47.1 16.3 55.1 39h-55.1z" fill="#005BFF"></path><path d="M670.8 329.4H461.2c-5.4 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7h209.7c5.4 0 9.7-4.3 9.7-9.7s-4.4-9.7-9.8-9.7z" fill="#005BFF"></path><path d="M670.8 402.7H461.2c-5.4 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7h209.7c5.4 0 9.7-4.3 9.7-9.7s-4.4-9.7-9.8-9.7zM670.8 476.1H525.2c-5.4 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7h145.6c5.4 0 9.7-4.3 9.7-9.7s-4.3-9.7-9.7-9.7z" fill="#06F3FF"></path><path d="M670.8 549.4H530.1c-5.4 0-9.7 4.3-9.7 9.7 0 5.4 4.3 9.7 9.7 9.7h140.7c5.4 0 9.7-4.3 9.7-9.7 0-5.4-4.3-9.7-9.7-9.7z" fill="#005BFF"></path></g></svg>
                                    </div>
                                    <div className="text-center font-bold">I'm looking to hire a designer</div>
                                    {selectedOption === 1 ? (
                                        <div className="text-center text-gray-500 text-sm">With over 7 million shots from a vast community of designers</div>
                                    ) : ('')}
                                    <div className="text-center absolute bottom-5 left-1/2"><input type="radio" className="" onChange={() => handleOptionChange(1)} checked={selectedOption === 1} /></div>
                                </div>
                                <div className={`border ${selectedOption === 2 ? 'border-pink-500' : ''} rounded-lg relative h-[230px]`}>
                                    <div className={`flex justify-center bg-transparent ${selectedOption === 2 ? 'mt-[-50px]' : ''}`}>
                                        <svg viewBox="0 0 1024 1024" className="icon h-[150px] w-[150px]" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M878.3 192.9H145.7c-16.5 0-30 13.5-30 30V706c0 16.5 13.5 30 30 30h732.6c16.5 0 30-13.5 30-30V222.9c0-16.5-13.5-30-30-30z" fill="#FFFFFF"></path><path d="M145.7 736h732.6c16.5 0 30-13.5 30-30v-22.1H115.7V706c0 16.6 13.5 30 30 30z" fill="#E6E6E6"></path><path d="M878.3 152.9H145.7c-38.6 0-70 31.4-70 70V706c0 38.6 31.4 70 70 70h732.6c38.6 0 70-31.4 70-70V222.9c0-38.6-31.4-70-70-70z m30 531V706c0 16.5-13.5 30-30 30H145.7c-16.5 0-30-13.5-30-30V222.9c0-16.5 13.5-30 30-30h732.6c16.5 0 30 13.5 30 30v461zM678 871.1H346c-11 0-20-9-20-20s9-20 20-20h332c11 0 20 9 20 20s-9 20-20 20z" fill="#005BFF"></path><path d="M127.1 662.7c-2.7 0-5.4-1.1-7.3-3.2-3.7-4.1-3.5-10.4 0.6-14.1l236.5-219.6L463 541.9l258.9-290.7 183.7 196.3c3.8 4 3.6 10.4-0.4 14.1-4 3.8-10.3 3.6-14.1-0.4L722.3 280.8l-259 290.9L355.7 454 133.9 660c-2 1.8-4.4 2.7-6.8 2.7z" fill="#06F3FF"></path><path d="M156.4 541.9a82.7 82.8 0 1 0 165.4 0 82.7 82.8 0 1 0-165.4 0Z" fill="#D7E7FF"></path><path d="M179.8 541.9a59.3 59.3 0 1 0 118.6 0 59.3 59.3 0 1 0-118.6 0Z" fill="#B5CFF4"></path><path d="M208.9 541.9a30.2 30.3 0 1 0 60.4 0 30.2 30.3 0 1 0-60.4 0Z" fill="#005BFF"></path><path d="M580.9 329.9a82.7 82.8 0 1 0 165.4 0 82.7 82.8 0 1 0-165.4 0Z" fill="#D7E7FF"></path><path d="M604.3 329.9a59.3 59.3 0 1 0 118.6 0 59.3 59.3 0 1 0-118.6 0Z" fill="#B5CFF4"></path><path d="M633.4 329.9a30.2 30.3 0 1 0 60.4 0 30.2 30.3 0 1 0-60.4 0Z" fill="#005BFF"></path><path d="M719.3 539.6a46.3 46.4 0 1 0 92.6 0 46.3 46.4 0 1 0-92.6 0Z" fill="#D7E7FF"></path><path d="M732.4 539.6a33.2 33.2 0 1 0 66.4 0 33.2 33.2 0 1 0-66.4 0Z" fill="#B5CFF4"></path><path d="M748.7 539.6a16.9 17 0 1 0 33.8 0 16.9 17 0 1 0-33.8 0Z" fill="#005BFF"></path><path d="M436.8 720.1H275.2c-5 0-9-4-9-9s4-9 9-9h161.6c5 0 9 4 9 9 0 4.9-4.1 9-9 9zM220.6 720.1h-26.5c-5 0-9-4-9-9s4-9 9-9h26.5c5 0 9 4 9 9 0 4.9-4.1 9-9 9z" fill="#FFFFFF"></path></g></svg>
                                    </div>
                                    <div className="text-center font-bold">I'm looking to hire a designer</div>
                                    {selectedOption === 2 ? (
                                        <div className="text-center text-gray-500 text-sm">With over 7 million shots from a vast community of designers</div>
                                    ) : ('')}
                                    <div className="text-center absolute bottom-5 left-1/2"><input type="radio" className="" onChange={() => handleOptionChange(2)} checked={selectedOption === 2} /></div>
                                </div>


                            </div>
                            {selectedOption === null ? (
                                <div className=" bg-pink-500 text-center py-3 opacity-50 rounded-lg text-white font-bold w-[100px] mt-10">Finish</div>
                            ) : (
                                <div className=" bg-pink-500 text-center py-3 rounded-lg text-white font-bold w-[100px] mt-10"><Link to={'/home'}>Finish</Link></div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}