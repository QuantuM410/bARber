"use client";
import React, { useState, useEffect } from 'react';
import { BiMouse } from "react-icons/bi";

const LandingPage = () => {
    const handleScrollClick = () => {
        const nextPageOffset = window.innerHeight;
        const scrollTarget = nextPageOffset - 1;
        window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth',
        });
    };

    return (
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

            <div className='absolute w-full'>
                <div className='bg-[#000000] text-white py-16'>
                    <div className='container mx-auto text-center'>
                        <div className='mb-16 transform transition-transform hover:scale-105'>
                            <h2 className='text-3xl font-semibold'>Register your salon</h2>
                            <p className='mt-4 text-lg'>
                                Register your salon with bARber to reach more customers and showcase your services.<br />
                                You'll gain access to our advanced management tools, connect with clients, and more.
                            </p>
                            <button className='mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300'>
                                Get Started
                            </button>

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
                        </div>
                        <div className='mb-16 transform transition-transform hover:scale-105'>
                            <h2 className='text-3xl font-semibold'>Try-on new hairstyles</h2>
                            <p className='mt-4 text-lg'>
                                Experiment with different hairstyles virtually to find your perfect look.<br />
                                Our cutting-edge virtual try-on technology allows you to see yourself in different styles before making a change.
                            </p>
                            <button className='mt-8 px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300'>
                                Try Now
                            </button>
                        </div>
                        {/* About Us section */}
                        {/* <div className='mb-16 transform transition-transform hover:scale-105'>
                            <h2 className='text-3xl font-semibold'>About Us</h2>
                            <p className='mt-4 text-lg'>
                                We are dedicated to revolutionizing the way people experience hairstyling. 
                                Our team is committed to bringing you the latest trends and technologies in the world of beauty.
                            </p>
                        </div> */}

                        {/* Contacts section */}
                        {/* <div className='mb-16 transform transition-transform hover:scale-105'>
                            <h2 className='text-3xl font-semibold'>Contact Us</h2>
                            <p className='mt-4 text-lg'>
                                Have questions or feedback? Reach out to us at contact@barber.com.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage