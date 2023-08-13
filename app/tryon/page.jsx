import * as deepar from "deepar";
import React from 'react'

const deepAR = await deepar.initialize({
  licenseKey: "your_license_key_here",
  canvas: document.getElementById("deepar-canvas"),
  effect: "https://cdn.jsdelivr.net/npm/deepar/effects/aviators",
});

const page = () => {
  return (
    <div></div>
  )
}

export default page