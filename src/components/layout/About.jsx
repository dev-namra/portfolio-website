import React from 'react';
import JourneyTable from '../elements/JourneyTable'; 
import { JourneyData } from '../data'; 
import ImageTwo from '../../assets/backgroundAbout.png';

const About = () => {
    return (
        <section className='bg-[#f5f5f5] mt-4 md:mt-20'>
                <div className='container px-5 py-10 mx-auto lg:px-40'>
                    <div className="flex w-full">
                        <i className="ri-shining-fill text-[#282828] sm:text-4xl text-3xl font-medium"></i>
                        <h1 className="sm:text-4xl text-3xl font-medium mb-4 text-[#282828]">About Me</h1>
                    </div>
                </div>
                <div className='container px-5 mx-auto lg:px-40'>
                    <p className='w-4/5 text-base md:text-2xl font-darker-grotesque'>
                        Hello, I’m Namra Mahak, a frontend developer based in United Kingdom. I build functional and scalable frontend products with exceptional user experience. Hello, I’m Namra Mahak, a frontend developer based in United Kingdom. I build functional and scalable frontend products with exceptional user experience. Hello, I’m Namra Mahak, a frontend developer based in United Kingdom. I build functional and scalable frontend products with exceptional user experience. Hello, I’m Namra Mahak, a frontend developer based in United Kingdom. I build functional and scalable frontend products with exceptional user experience.
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <img className="max-w-full md:max-w-3/4 hidden md:block" src={ImageTwo} alt="Background Image" />
                    <div className="flex flex-col justify-between ml-6">
                        <h1 className="sm:text-4xl text-3xl font-medium mb-4 text-[#282828]">Journey So Far</h1>
                            <div className="pr-5 lg:pr-48">
                                <JourneyTable data={JourneyData} />
                            </div>
                            <h2 className='text-xl md:text-4xl text-right font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#4B9EB1] to-[#EB6E57] pr-5 lg:pr-48 mx-auto mt-4 md:mt-10'>
                                "Your career is like a garden. It can hold an assortment of life's energy that yields a bounty for you. You do not need to grow just one thing in your garden. You do not need to do just one thing in your career."
                            </h2>
                        
                    </div>
                </div>
        </section>
    );
}

export default About;
