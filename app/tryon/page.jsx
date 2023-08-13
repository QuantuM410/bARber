"use client"
import React, { useEffect } from "react";
import * as deepar from "deepar";
import Carousel from "../../components/carousel.js";


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
                console.error(error);
                return;
            }

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
            {/* Add your UI elements here */}
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
            <div
                className="fixed-fullscreen screen"
                id="permission-denied-screen"
                style={{ display: 'none' }}
            >
                <div className="permission-denied-text-container">
                    <div className="permission-denied-text text-black" id="camera_denied">
                        <p>Please reload and allow camera access to use this app.</p>
                        <a
                            className="permission-denied-button text-black"
                            href="https://www.deepar.ai/projects"
                            target="__blank"
                        >
                            Discover more
                        </a>
                    </div>
                </div>
            </div>
            <canvas className="deepar" id="deepar-canvas"></canvas>
            <div className="carousel" id="carousel">

                {/* Add carousel slides here */}

            </div>
            {/* Other UI elements */}
        </div>
    );
};

export default TryOnPage;
