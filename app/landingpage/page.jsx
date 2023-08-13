"use client";
import React, { useState, useEffect } from "react";
import { BiMouse } from "react-icons/bi";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import Link from "next/link";

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollClick = () => {
    const nextPageOffset = window.innerHeight;
    const scrollTarget = nextPageOffset - 1;
    window.scrollTo({
      top: scrollTarget,
      behavior: "smooth",
    });
  };

  const handleSection3ScrollClick = () => {
    setScrollPosition(window.innerHeight);
    window.scrollTo({
      top: 0, // Scroll to the beginning of section 3
      behavior: "smooth",
    });
  };

  return (
    // first section
    <div className="relative h-screen">
      <div className="h-screen inset-0 z-0">
        <img
          src="/assets/landing-pagebg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-70 bg-no-repeat"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <img
            src="/assets/image.png"
            alt="Logo"
            className="h-48 w-48 object-contain"
          />
        </div>
        <h1 className="text-[#f0f0f0] text-center text-6xl font-semibold ">
          Welcome to bARber
        </h1>
        <p className="position-relative mt-2 text-white text-center font-medium">
          Welcome to bARber, where you can transform your look in seconds.
          <br />
          Try on a wide range of stunning hairstyles in real-time using our
          cutting-edge virtual try-on technology.
          <br />
          Discover your perfect style today!
        </p>

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
      <div className="absolute w-full">
        <div className="bg-[#000000] text-white py-16">
          <div className="container mx-auto text-center">
            <div className="mb-16 transform transition-transform hover:scale-105">
              <h2 className="text-3xl font-semibold">Register your salon</h2>
              <p className="mt-4 text-lg">
                Register your salon with bARber to reach more customers and
                showcase your services.
                <br />
                You'll gain access to our advanced management tools, connect
                with clients, and more.
              </p>
              <div className="flex justify-center items-center gap-x-4">
                <Link href="/register">
                  <button className="mt-8 px-6 py-3 w-[142px] bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300">
                    Get Started
                  </button>
                </Link>
                <Link href="/login">
                  <button className="mt-8 px-6 py-3 w-[142px] bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300">
                    Login
                  </button>
                </Link>
              </div>
              <div
                className={`absolute bottom--2 h-8 w-full bg-gradient-to-t from-[#1b1b24] }`}
              />
            </div>
            <div className="mb-16 transform transition-transform hover:scale-105">
              <h2 className="text-3xl font-semibold">Book an appointment</h2>
              <p className="mt-4 text-lg">
                Easily book appointments at your favorite salons with our
                user-friendly platform.
                <br />
                Browse through available time slots, choose your preferred
                stylist, and secure your spot hassle-free.
              </p>
              <button className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300">
                Book Now
              </button>
              <div
                className={`absolute bottom--2 h-8 w-full bg-gradient-to-t from-[#1b1b24] }`}
              />
            </div>
            <div className="relative mb-16 transform transition-transform hover:scale-105 ">
              <div className="relative z-10">
                <h2 className="text-3xl font-semibold">
                  Try-on new hairstyles
                </h2>
                <p className="mt-4 text-lg">
                  Experiment with different hairstyles virtually to find your
                  perfect look.
                  <br />
                  Our cutting-edge virtual try-on technology allows you to see
                  yourself in different styles before making a change.
                </p>
                <Link href="/tryon">
                  <button className="mt-8 px-6 py-3 bg-purple-500 font-semibold text-white rounded-md hover:bg-purple-600 transition-colors duration-300">
                    Try Now
                  </button>
                </Link>
              </div>

              <div
                className={`absolute bottom--2 h-8 w-full bg-gradient-to-t from-[#1b1b24] }`}
              />
            </div>

            {/* third section */}
            <div className="flex justify-center items-center  bg-black">
              <div className="container mx-auto">

                {/* Contact Us Section */}
                <div class="container my-20 mx-auto text-center md:px-6">


                  <section class="mb-32">
                    <div class="w-full md:w-7/12 mx-auto md:px-3 lg:px-6">
                      <h2 class="mb-8 text-3xl font-bold">Frequently asked questions</h2>
                      <div className="border-4 w-20 border-white mx-auto my-3 mb-8 rounded-lg" />
                      <div class="mb-4">
                        <p class="font-bold text-primary text-xl mb-3">What is bARber?</p>
                        <p class="mb-9 text-neutral-500 dark:text-neutral-300">
                          bARber is an innovative platform that allows you to explore a variety
                          of hairstyles using augmented reality (AR) technology. You can virtually
                          try on different haircuts and styles before making a decision. Our
                          platform also enables you to easily book appointments with salons near
                          you and connect with talented stylists.
                        </p>
                      </div>

                      <div class="mb-4">
                        <p class="font-bold text-primary text-xl mb-3">How can I try on hairstyles using AR?</p>
                        <p class="mb-9 text-neutral-500 dark:text-neutral-300">
                          Trying on hairstyles with AR is simple. Download the bARber app, create
                          an account, and upload a photo of yourself. Browse through our extensive
                          collection of hairstyles and see how each one looks on you in real-time
                          using augmented reality. Experiment with different looks to find your
                          perfect style.
                        </p>
                      </div>

                      <div class="mb-4">
                        <p class="font-bold text-primary text-xl mb-3">Can I book appointments with local salons through bARber?</p>
                        <p class="mb-8 text-neutral-500 dark:text-neutral-300">
                          Yes, absolutely! bARber not only lets you explore hairstyles virtually but
                          also connects you with nearby salons. Once you've found the hairstyle you
                          love, you can book an appointment with a salon that offers that style. It's
                          a seamless way to get the look you desire and experience top-notch salon services.
                        </p>
                      </div>

                      <div class="mb-4">
                        <p class="font-bold text-primary mb-3 text-xl mb-3">How can salons register on bARber?</p>
                        <p class="text-neutral-500 dark:text-neutral-300">
                          If you own a salon, you can easily register on bARber to showcase your services
                          to a wide audience. Create an account, provide details about your salon, and make
                          yourself visible to potential clients. Manage your appointments, connect with
                          customers, and grow your business through our platform.
                        </p>
                      </div>

                    </div>

                    <div class="w-full md:w-5/12 mt-24 mx-auto md:px-3 lg:px-6">
                      <h2 className="text-3xl text-white font-semibold mb-4">Contact Us</h2>
                      <div className="border-4 w-20 border-white mx-auto my-3 mb-8 rounded-lg" />
                      <p class="mb-8 font-bold">
                        Didn't find your answer in the FAQ? Contact our sales department
                      </p>
                      <form>
                        <div class="relative mb-6" data-te-input-wrapper-init>
                          <input
                            type="text"
                            class="peer block w-full rounded border-0 bg-transparent py-2 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100"
                            id="nameInput"
                            placeholder="Name"
                          />
                        </div>
                        <div class="relative mb-6" data-te-input-wrapper-init>
                          <input
                            type="email"
                            class="peer block w-full rounded border-0 bg-transparent py-2 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100"
                            id="emailInput"
                            placeholder="Email address"
                          />
                        </div>
                        <div class="relative mb-6" data-te-input-wrapper-init>
                          <textarea
                            class="peer block w-full rounded border-0 bg-transparent py-2 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100"
                            id="messageInput"
                            rows="3"
                            placeholder="Your message"
                          ></textarea>
                        </div>
                        <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                          <input
                            class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                            type="checkbox"
                            value=""
                            id="copyCheckbox"
                            checked
                          />
                          <label
                            class="inline-block pl-[0.15rem] hover:cursor-pointer"
                            for="copyCheckbox"
                          >
                            Send me a copy of this message
                          </label>
                        </div>
                        <button
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          class="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </section>
                </div>

              </div>
            </div>

            <div
              className="animate-bounce cursor-pointer text-2xl flex items-center justify-center h-16"
              onClick={handleSection3ScrollClick}
            >
              <MdOutlineKeyboardDoubleArrowUp className=" h-14 w-14 text-white hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
