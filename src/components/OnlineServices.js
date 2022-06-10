import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const fadeImages  = [
    {
        url: "/images/home/1.jpg",
        caption: "City Hall of Santa Rosa"
    },
    {
        url: "/images/home/bplo-Online.jpg",
        caption: "asda"
    }
]
const OnlineServices = () => {
  const FadeProperties = {
    indicators: true,
    arrows: false,
    duration: 7000,
  }
  return (

    <div className="h-1/4">
      <div className="slide-container w-full">
        <Fade className='h-full bg-red-100' {...FadeProperties}>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade flex flex-col md:flex-row p-3 justify-content-center align-center  h-full" key={index}>
              <div className="flex flex-col justify-center w-1/2 items-center">
                <img src={fadeImage.url} alt={fadeImage.caption} className='rounded shadow-md w-full self-center'/>
              </div>
              <div className='text-center w-1/2'>
                <h1>{fadeImage.caption}</h1>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  )
}

export default OnlineServices