"use client"
import React, { useEffect } from "react";
import * as deepar from "deepar";
import Carousel from "../../components/carousel.js";
import { Bugfender } from "@bugfender/sdk";


const TryOnPage = () => {
    useEffect(() => {
        const initializeDeepAR = async () => {
            const canvas = document.getElementById("deepar-canvas");
            const dpr = window.devicePixelRatio || 1;
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);

            const effectList = [
                "effects/bleach_midpart_male.deepar",
                "effects/bright_bob_fem.deepar",
                "effects/long_hair.deepar",
                "effects/neon_top_bun.deepar",
            ];

            let deepAR = null;

            try {
                deepAR = await deepar.initialize({
                    licenseKey: "your_license_key_goes_here",
                    canvas,
                    effect: effectList[0],

                });
            } catch (error) {
                Bugfender.log(error);
                return;
            }

            var resizeCanvas = function () {
                const canvas = document.getElementById("deepar-canvas");
                const dpr = window.devicePixelRatio || 1;
                canvas.width = Math.floor(window.innerWidth * dpr);
                canvas.height = Math.floor(window.innerHeight * dpr);
            };

            window.addEventListener("resize", resizeCanvas);
            // Hide the loading screen.
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("ar-screen").style.display = "block";

            window.effect = effectList[0];

            const glassesCarousel = new Carousel("carousel");
            glassesCarousel.onChange = async (value) => {
                const loadingSpinner = document.getElementById("loading-spinner");

                if (window.effect !== effectList[value]) {
                    loadingSpinner.style.display = "block";
                    await deepAR.switchEffect(effectList[value]);
                    window.effect = effectList[value];
                }
                loadingSpinner.style.display = "none";
            };

            // Additional resize and event listeners can be added here
        };

        initializeDeepAR();
    }, []);

    return (
        <div className="tryon-page">
            <div className="fixed-fullscreen" id="loading-screen">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <img
                        id="initial-loading-logo"
                        style={{ maxWidth: '200px' }}
                        src="assets/logo.png"
                        className="animate-bounce"
                    />
                    <div
                        style={{
                            width: '100%',
                            height: '8px',
                            marginTop: '20px',
                            backgroundColor: 'rgb(55, 65, 81, 1)',
                            borderRadius: '100px',
                            overflow: 'hidden'
                        }}
                    >
                        <div id="loading-progress-bar"></div>
                    </div>
                    <img
                        id="initial-loading-text"
                        style={{ maxWidth: '140px', marginTop: '30px' }}
                        src="assets/loading.webp"
                    />
                </div>
            </div>

            <div id="ar-screen" class="relative">
                <canvas class="deepar w-full h-screen" id="deepar-canvas"></canvas>

                <div class="carousel absolute bottom-0 md:bottom-10 left-1/2 transform -translate-x-1/2" id="carousel">
                    <div class="carousel-center" id="carousel-center">
                        <div class="lds-ring" id="loading-spinner" style={{ display: 'none' }}>

                        </div>
                    </div>
                    <div class="carousel-slider flex flex-col md:flex-row justify-center items-center md:space-x-4">
                        <div class="slide mb-4 md:mb-0">
                            <img class="w-32 h-32 border-4 rounded-full" src="avatars/white.png" alt="Avatar" />
                        </div>
                        <div class="slide mb-4 md:mb-0">
                            <img class="w-32 h-32 border-4 rounded-full" src="avatars/brownhair.png" alt="Avatar" />
                        </div>
                        <div class="slide mb-4 md:mb-0">
                            <img class="w-32 h-32 border-4 rounded-full" src="avatars/blackhair.png" alt="Avatar" />
                        </div>
                        <div class="slide">
                            <img class="w-32 h-32 border-4 rounded-full" src="avatars/green.png" alt="Avatar" />
                        </div>
                    </div>
                </div>
            </div>






            {/* Other UI elements */}
        </div>
    );
};

export default TryOnPage;
