import React from 'react';
import JourneyTable from '../elements/JourneyTable'; 
import { JourneyData } from '../data'; 

const About = () => {
    return (
        <>
            <div className="flex w-full mb-20">
                <i className="ri-shining-fill text-[#282828] sm:text-4xl text-3xl font-medium"></i>
                <h1 className="sm:text-4xl text-3xl font-medium mb-4 text-[#282828]">About Me</h1>
            </div>
            <div>
                <p>Hello, I’m Namra Mahak, a frontend developer based in United Kingdom. I build functional and scalable frontend products with exceptional user experience. Hello, I’m Namra Mahak, a frontend developer based in United Kingdom. I build functional and scalable frontend products with exceptional user experience. Hello, I’m Namra Mahak, a frontend developer based in United Kingdom. I build functional and scalable frontend products with exceptional user experience. Hello, I’m Namra Mahak, a frontend developer based in United Kingdom. I build functional and scalable frontend products with exceptional user experience.</p>
            </div>
            <div>
                <h1 className="sm:text-4xl text-3xl font-medium mb-4 text-[#282828]">Journey So Far</h1>
                <div className="container mx-auto p-4">
                    <JourneyTable data={JourneyData} />
                </div>
            </div>
            <div>
                <h2 className='text-xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#4B9EB1] to-[#EB6E57]'>"Your career is like a garden. It can hold an assortment of life's energy that yields a bounty for you. You do not need to grow just one thing in your garden. You do not need to do just one thing in your career."</h2>
            </div>
        </>
    );
}

export default About;
