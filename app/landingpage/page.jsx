"use client";
import React, { useState, useEffect } from 'react';
import { BiMouse } from "react-icons/bi";
import Link from 'next/link';


const LandingPage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScrollClick = () => {
        const nextPageOffset = window.innerHeight;
        const scrollTarget = nextPageOffset - 1;
        window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth',
        });
    };

    const handleSection2ScrollClick = () => {
        setScrollPosition(window.innerHeight);
        window.scrollTo({
            top: 2 * window.innerHeight - 1, // Scroll to the beginning of section 3
            behavior: 'smooth',
        });
    };

    const handleSection3ScrollClick = () => {
        setScrollPosition(window.innerHeight);
        window.scrollTo({
            top: 0, // Scroll to the beginning of section 3
            behavior: 'smooth',
        });
    };



    return (
        // first section
        <div className='relative h-screen'>
            <div className='h-screen inset-0 z-0'>
                <img
                    src='/assets/landing-pagebg.jpg'
                    alt='Background'
                    className='w-full h-full object-cover opacity-70 bg-no-repeat'
                />
                <div className='absolute inset-0 bg-black opacity-60'></div>
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
                <div className='absolute inset-x-0 top-0 flex justify-center'>
                    <img
                        src='/assets/image.png'
                        alt='Logo'
                        className='h-48 w-48 object-contain'
                    />
                </div>
                <h1 className='text-[#f0f0f0] text-center text-6xl font-semibold '>
                    Welcome to bARber
                </h1>
                <p className='position-relative mt-2 text-white text-center font-medium'>Welcome to bARber, where you can transform your look in seconds.<br />
                    Try on a wide range of stunning hairstyles in real-time using our cutting-edge virtual try-on technology.<br />
                    Discover your perfect style today!</p>

                <div
                    className="animate-bounce cursor-pointer text-white text-2xl flex items-center justify-center mb-4 absolute bottom-0 w-full h-16"
                    onClick={handleScrollClick}
                >
                    <BiMouse className="h-14 w-14 text-white hover:cursor-pointer" />

                </div>
            </div>

            <div
                className={`absolute bottom-0 h-16 w-full bg-gradient-to-t from-[#000000] }`}
            />
            {/* second section */}
            <div className='absolute w-full'>
                <div className='bg-[#000000] text-white py-16'>
                    <div className='container mx-auto text-center'>
                        <div className='mb-16 transform transition-transform hover:scale-105'>
                            <h2 className='text-3xl font-semibold'>Register your salon</h2>
                            <p className='mt-4 text-lg'>
                                Register your salon with bARber to reach more customers and showcase your services.<br />
                                You'll gain access to our advanced management tools, connect with clients, and more.
                            </p>
                            <Link href="/register">
                                <button className='mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300'>
                                    Get Started
                                </button>
                            </Link>
                            <div
                                className={`absolute bottom--2 h-8 w-full bg-gradient-to-t from-[#1b1b24] }`}
                            />


                        </div>
                        <div className='mb-16 transform transition-transform hover:scale-105'>
                            <h2 className='text-3xl font-semibold'>Book an appointment</h2>
                            <p className='mt-4 text-lg'>
                                Easily book appointments at your favorite salons with our user-friendly platform.<br />
                                Browse through available time slots, choose your preferred stylist, and secure your spot hassle-free.
                            </p>
                            <button className='mt-8 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300'>
                                Book Now
                            </button>
                            <div
                                className={`absolute bottom--2 h-8 w-full bg-gradient-to-t from-[#1b1b24] }`}
                            />

                        </div>
                        <div className='relative mb-16 transform transition-transform hover:scale-105 '>
                            <div className='relative z-10'>
                                <h2 className='text-3xl font-semibold'>Try-on new hairstyles</h2>
                                <p className='mt-4 text-lg'>
                                    Experiment with different hairstyles virtually to find your perfect look.<br />
                                    Our cutting-edge virtual try-on technology allows you to see yourself in different styles before making a change.
                                </p>
                                <button className='mt-8 px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300'>
                                    Try Now
                                </button>
                            </div>

                            <div
                                className={`absolute bottom--2 h-8 w-full bg-gradient-to-t from-[#1b1b24] }`}
                            />
                        </div>

                        <div
                            className="animate-bounce cursor-pointer text-white text-2xl flex items-center justify-center mb-4 bottom-0 w-full h-16"
                            onClick={handleSection2ScrollClick}
                        >
                            <BiMouse className="h-14 w-14 text-white hover:cursor-pointer" />
                        </div>
                        {/* third section */}
                        <div className='flex justify-center items-center h-screen'>
                            <div className="container grid grid-cols-1 md:grid-cols-2 gap-14">
                                <div className="bg-gradient-to-br from-blue-800 to-purple-600 py-12 rounded-lg transform transition-transform hover:scale-105">
                                    <div className="container mx-auto">
                                        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                                        <div className="border-4 w-20 border-white mx-auto my-3 rounded-lg" />
                                        <p className="text-lg mb-6">
                                            Welcome to bARber, your ultimate destination for all things hair and style. Our mission is to revolutionize the salon experience by connecting customers with top-notch salons and providing innovative tools for exploring new looks.
                                            Whether you're looking to register your salon and expand your client base or try on new hairstyles virtually, bARber has you covered. Our platform is designed to bring convenience, creativity, and confidence to your hair journey.
                                        </p>
                                        <p className="text-lg">
                                            Join us in exploring the endless possibilities of hair transformation and express yourself like never before.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-indigo-800 to-teal-600 py-12 rounded-lg transform transition-transform hover:scale-105">
                                    <div className="container mx-auto">
                                        <h2 className="text-3xl text-white font-semibold mb-4">Contact Us</h2>
                                        <div className="border-4 w-20 border-white mx-auto my-3 rounded-lg" />
                                        <p className="text-lg mb-2">Have questions or need assistance? Reach out to us:</p>
                                        <br />
                                        <p className="text-lg">
                                            Email: info@barber.com<br />
                                            Phone: (123) 456-7890<br />
                                            Address: 1234 Salon Street, City, Country
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="animate-bounce cursor-pointer text-2xl flex items-center justify-center h-16"
                            onClick={handleSection3ScrollClick}
                        >
                            <BiMouse className=" h-14 w-14 text-white hover:cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LandingPage