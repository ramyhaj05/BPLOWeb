import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const fadeImages  = [
    {
        url: "/images/home/1.jpg",
        caption: "City Hall of Santa Rosa"
    },
    {
        url: "/images/home/2.jpg",
        caption: "TOYOTA MOTORS"
    },
    {
        url: "/images/home/3.jpg",
        caption: "COCA-COLA COMPANY"
    },
    {
        url: "/images/home/4.jpg",
        caption: "ENCHANTED KINGDOM"
    }
]
const ImageSlider = () => {
  const FadeProperties = {
    indicators: true,
    arrows: false,
    duration: 2000,
    transitionDuration: 500,
    canSwipe:true
  }
  return (

    <>
    <div className="w-1/12 md:w-2/12"></div>
    <div className="slide-container w-10/12">
      <Fade {...FadeProperties}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade h-full" key={index}>
            <div className="image-container flex flex-col justify-center align-center h-full">
              <img src={fadeImage.url} alt={fadeImage.caption} className='rounded shadow-md'/>
            </div>
            <h1>{fadeImage.caption}</h1>
          </div>
        ))}
      </Fade>
    </div>
    </>
  )
}

export default ImageSlider