import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className='p-20 bg-gray-50'>
            <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-16 gap-y-10 text-gray-500'>
                <div>
                    <div className='text-xl text-pink-500 font-bold'>Dribbble</div>
                    <div className='mt-5'>Dribbble is the world's leading community for creatives to share, grow, and get hired.</div>
                    <div className='flex text-black mt-5 gap-x-5'>
                        <div className='hover:cursor-pointer'><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className='hover:cursor-pointer'><FontAwesomeIcon icon={faFacebook} /></div>
                        <div className='hover:cursor-pointer'><FontAwesomeIcon icon={faInstagram} /></div>
                        <div className='hover:cursor-pointer'><FontAwesomeIcon icon={faPinterest} /></div>
                    </div>
                </div>
                <div>
                    <div className='text-black font-bold'>For designers</div>
                    <div className='mt-5 flex flex-col gap-y-5'>
                        <div className='hover:cursor-pointer'>Go Pro!</div>
                        <div className='hover:cursor-pointer'>Explore design works</div>
                        <div className='hover:cursor-pointer'>Design blog</div>
                        <div className='hover:cursor-pointer'>Overtime podcast</div>
                        <div className='hover:cursor-pointer'>Playoffs</div>
                        <div className='hover:cursor-pointer'>Weekly Warm-up</div>
                        <div className='hover:cursor-pointer'>Refer a Friend</div>
                        <div className='hover:cursor-pointer'>Code of conduct</div>
                    </div>
                </div>
                <div>
                    <div className='text-black font-bold'>Hire designers</div>
                    <div className='mt-5 flex flex-col gap-y-5'>
                        <div className='hover:cursor-pointer'>Post a job opening</div>
                        <div className='hover:cursor-pointer'>Post a freelance project</div>
                        <div className='hover:cursor-pointer'>Search for designers</div>
                        <div className='text-black font-bold hover:cursor-pointer'>Brands</div>
                        <div className='hover:cursor-pointer'>Adertise with us</div>
                    </div>
                </div>
                <div>
                    <div className='text-black font-bold'>Company</div>
                    <div className='mt-5 flex flex-col gap-y-5'>
                        <div className='hover:cursor-pointer'>About</div>
                        <div className='hover:cursor-pointer'>Careers</div>
                        <div className='hover:cursor-pointer'>Support</div>
                        <div className='hover:cursor-pointer'>Medis kit</div>
                        <div className='hover:cursor-pointer'>testimonials</div>
                        <div className='hover:cursor-pointer'>API</div>
                        <div className='hover:cursor-pointer'>Term of Service</div>
                        <div className='hover:cursor-pointer'>Privacy policy</div>
                        <div className='hover:cursor-pointer'>Cookie policy</div>
                    </div>
                </div>
                <div>
                    <div className='text-black font-bold'>Directories</div>
                    <div className='mt-5 flex flex-col gap-y-5'>
                        <div className='hover:cursor-pointer'>Design jobs</div>
                        <div className='hover:cursor-pointer'>Designers for hire</div>
                        <div className='hover:cursor-pointer'>Freelance designers for hire</div>
                        <div className='hover:cursor-pointer'>Tags</div>
                        <div className='hover:cursor-pointer'>Places</div>
                        <div className='text-black font-bold hover:cursor-pointer'>Design assets</div>
                        <div className='hover:cursor-pointer'>Dribbble marketplace</div>
                        <div className='hover:cursor-pointer'>Creative market</div>
                        <div className='hover:cursor-pointer'>Fontspring</div>
                    </div>
                </div>
                <div>
                    <div className='text-black font-bold'>Design resources</div>
                    <div className='mt-5 flex flex-col gap-y-5'>
                        <div className='hover:cursor-pointer'>Freelancing</div>
                        <div className='hover:cursor-pointer'>Design hiring</div>
                        <div className='hover:cursor-pointer'>Design portfolio</div>
                        <div className='hover:cursor-pointer'>Design education</div>
                        <div className='hover:cursor-pointer'>Creative process</div>
                        <div className='hover:cursor-pointer'>Design industry trends</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-between mt-20 border-t pt-10 text-gray-500'>
                <div>© 2023 Dribbble. All rights reserved.</div>
                <div><span className='text-black font-bold '>20,501,853</span> shots dribbbled</div>
            </div>
        </div>
    );
}