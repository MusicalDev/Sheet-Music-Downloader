import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const HowToUse = () => {
    return (
        <div id='howtouse' className='h-full w-full overflow-hidden flex items-center justify-center  flex-col text-light mt-20'>
            <div className='flex flex-col items-center justify-center gap-2 w-[90vw] lg:w-[50vw]'>
                <h1 className='text-5xl font-ovo my-24'>How to use</h1>



                <div className='w-full h-full my-4 '>
                    <div>
                        <div className='flex flex-col w-full h-auto bg-dark/30 justify-center items-center rounded-3xl shadow-lg backdrop-blur-md p-10'>
                            <p className='font-outfit text-2xl text-light'>Go to the following link:&nbsp;&nbsp; </p>
                            <a href="https://archives.nyphil.org/" target='blank' className='font-ovo text-2xl text-lighthover underline'> https://archives.nyphil.org/</a>
                        </div>
                    </div>

                </div>

                <div className='w-full h-full my-4'>
                    <div>
                        <div className='flex flex-col w-full h-auto bg-dark/30 justify-center items-center rounded-3xl shadow-lg backdrop-blur-md p-10'>
                            <p className='font-outfit text-2xl text-light pb-10'>Once you have found the music you want to download, open the developer tools in your web browser, inspect the image and take note of the required data. </p>
                            <Image 
                            src={assets.partitura1} 
                            priority 
                            className='' 
                            alt='partitura' />
                        </div>
                    </div>
                </div>


                <div className='w-full h-full my-4'>
                    <div>
                        <div className='flex flex-col w-full h-auto bg-dark/30 justify-center items-center rounded-3xl shadow-lg backdrop-blur-md p-10'>
                            <p className='font-outfit text-2xl text-light pb-10'>This is the information you need to start downloading. The score size can be modified according to your requirements (e.g., 600, 1200, 3000).</p>
                            <Image 
                            src={assets.data} 
                            priority 
                            className='' 
                            alt='get the data' />
                        </div>
                    </div>
                </div>

                <div className='w-full h-full my-4'>
                    <div>
                        <div className='flex flex-col w-full h-auto bg-dark/30 justify-center items-center rounded-3xl shadow-lg backdrop-blur-md p-10'>
                            <p className='font-outfit text-2xl text-light'>This web application is dedicated to our beloved orchestral archivist. I hope this makes your life a little easier.</p>

                        </div>
                    </div>
                </div>





            </div>

        </div>
    )
}

export default HowToUse