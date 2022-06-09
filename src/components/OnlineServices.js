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
  return (

    <div className="">
      <div className="slide-container w-full">
        <Fade className>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade flex flex-col md:flex-row p-3 justify-content-center align-center" key={index}>
              <div className="image-container flex justify-center w-1/2">
                <img src={fadeImage.url} alt={fadeImage.caption} className='rounded shadow-md'/>
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