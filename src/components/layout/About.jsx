import React from 'react';
import JourneyTable from '../elements/JourneyTable'; 
import { JourneyData } from '../data'; 


const About = () => {
    return (
        <section id="projects" className="bg-[#f5f5f5] mt-4 md:mt-20">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex w-full">
                        <i className="ri-shining-fill text-[#282828] sm:text-4xl text-3xl font-medium"></i>
                        <h1 className="sm:text-4xl text-3xl font-medium mb-4 text-[#282828]">About Me</h1>
                    </div>
                    <p className='w-4/5 text-base md:text-2xl font-darker-grotesque'>
                    After graduating in architecture, I worked as an Architect and Interior Designer for several years. After graduating in architecture, I worked as an Architect and Interior Designer for several years.In 2021, I came to United Kingdom to pursue my masters in BIM Project Management from Queen’s University, Belfast. Soon after, I started working as a VDC Automation Developer at Merit.
                    </p>
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
