import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/ImageSlider'
import OnlineServices from '../components/OnlineServices'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className='w-full bg-fixed' style={{backgroundImage: `url("/images/home/1.jpg")`}}>
        <div className="w-full flex flex-col justify-center h-64 mt-32 font-black " >
            <div className='flex flex-col justify-center bg-red-500 md:p-10 bg-opacity-30 h-full'>
                <h1 className='text-3xl text-pink-500 font-sans md:text-5xl md:tracking-widest text-shadow-white-md'>CITY OF SANTA ROSA LAGUNA</h1>
                <h1 className='text-xl md:text-2xl text-yellow-500 font-sans tracking-widest pt-2 text-shadow-sm'>THE LION CITY OF THE SOUTH</h1>
                <div className='pt-5 text-white'>
                    <Link to={"./about"}><button className='p-2 rounded-xl text-white bg-pink-500 text-xs font-bold px-3'>READ MORE</button></Link>
                </div>
            </div>
        </div>
        <div className='flex flex-col text-gray-500 px-10 md:px-20 w-full pt-5 bg-white py-5'>
            <div className=' bg-white rounded-xl shadow-md leading-loose'>
                <div className='text-2xl md:text-3xl font-bold py-5'>WELCOME TO THE CITY OF SANTA ROSA!</div>
                <div className='flex flex-col md:flex-row p-3 justify-content-center align-center'>
                    <div className="text-gray-500 full md:w-1/2 text-center md:px-3">
                        <p><b>Santa Rosa</b>, officially known as the <b>City of Santa Rosa</b>, is a 1st class component city in the province of Laguna, Philippines. According to the 2020 census, it has a population of 414,812 people.
                        It is the second largest local government unit in Laguna after Calamba.
                        </p>
                        <p className='pt-5'>On August 28, 2019, President Rodrigo Duterte signed Republic Act No. 11395, which separated the city from the first district, allowing it to elect its separate representative beginning in the 2022 elections. However, for the purposes of electing Sangguniang Panlalawigan members, Santa Rosa will remain part of the province's first Sangguniang Panlalawigan District.</p>
                        <p className='pt-5'>Santa Rosa was initially known for the Coca-Cola and Toyota manufacturing plants in its industrial estates. Recently, it has become popular for being the site of Enchanted Kingdom, a local theme park, and several housing developments.</p>
                    </div>   
                    <div className="flex flex-row justify-content-end items-center full md:w-1/2 text-center md:px-3 ">
                        <ImageSlider/>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col justify-center h-64 font-black " >
            <div className='flex flex-col justify-center bg-red-500 md:p-10 bg-opacity-30 h-full'>
                <h1 className='text-3xl text-gray-50 font-sans md:text-5xl md:tracking-widest text-shadow-sm'>GET VACCINATED!</h1>
                <h1 className='text-xl md:text-2xl text-pink-500 font-sans tracking-widest pt-2'></h1>
                <div className='pt-5 text-white'>
                    <a href={"https://www.santarosacity.ph/SCVT/"} target="_blank"><button className='p-2 rounded-xl text-white bg-pink-500 text-xs font-bold px-3'>CLICK HERE!</button></a>
                </div>
            </div>
        </div>
        <div className='flex flex-col text-gray-500 px-10 md:px-20 w-full pt-5 bg-white py-5'>
            <div className=' bg-white rounded-xl shadow-md leading-loose'>
                <div className='text-2xl md:text-3xl font-bold py-5 underline'>ONLINE SERVICES</div>
                <OnlineServices></OnlineServices>
            </div>
        </div>
    </div>
  )
}

export default Home