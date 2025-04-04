import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='h-full w-full overflow-hidden flex items-center justify-center  flex-col text-light mt-20'>
            <div className='flex flex-col items-center justify-center gap-2 w-[90vw] lg:w-[50vw]'>
                <h1 className='text-5xl font-ovo my-24'>Contact</h1>

                <div className='w-full h-full my-4 '>
                    <div>
                        <div className='flex flex-col w-full h-auto bg-dark/30 justify-center items-center rounded-3xl shadow-lg backdrop-blur-md p-10'>
                            <p className='font-outfit text-2xl text-lighthover'> music.d3v@gmail.com </p>
                        </div>
                    </div>

                </div>

                <div className='w-full h-full my-4'>
                    <div>
                        <div className='flex flex-col w-full h-auto bg-dark/30 justify-center items-center rounded-3xl shadow-lg backdrop-blur-md p-10 mb-20'>
                            <p className='font-outfit text-2xl text-light'>If you have any concerns or would like to report a problem, please don't hesitate to contact me. We'll be in touch.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact