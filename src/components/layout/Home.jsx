import React from 'react';
import Ticker from 'react-ticker';
import 'remixicon/fonts/remixicon.css';
import Profile from '../../assets/Profile.png';
import Vector from '../../assets/Vector.png';
import Chrome from '../../assets/Chrome.png'

const Home = () => {
  return (
    <section id="about" className="relative bg-[#f5f5f5] h-[calc(100vh-20rem)] md:h-[calc(100vh-24rem)]">
      <div className="absolute inset-0 flex flex-col justify-start md:justify-end items-center">
        <div className="container mx-auto px-10 py-20 max-w-5xl">
          <div className="flex flex-col items-center justify-center text-center gap-6 md:gap-10">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-[#282828]">
              Hello, I'm Namra Mahak 
              <span>
                <button className='size-10 bg-[#fff] rounded-full shadow-md'><img className='size-8 rounded-full' src={Profile} alt="Profile Picture" />
                </button>
              </span>, a front-end developer 
                <span>
                <button className='size-10'><img className='size-8' src={Vector} alt="Profile Picture" />
                </button>
              </span>from Newcastle Upon Tyne, UK. I build functional and scalable front-end products for web 
              <span>
                <button className='size-10 bg-[#fff] rounded-3xl shadow-md'><img className='size-8 rounded-full' src={Chrome} alt="Profile Picture" />
                </button>
              </span>  and 
              <span>
                <button className='size-10 bg-[#fff] rounded-full shadow-md'><img className='size-8 rounded-full' src={Profile} alt="Profile Picture" />
                </button>
              </span> mobile.
            </h1>
            <div className="flex justify-center gap-6 md:gap-12">
              <button className='rounded-full bg-[#111] bg-blur'>
                <a href="#contact" className="inline-flex text-[#ffffff] py-2 md:py-5 px-6 md:px-14 text-lg">Send email</a>
              </button>
              <button className='rounded-full bg-[#111] bg-blur'>
              <a href="#contact" className="inline-flex text-[#ffffff] py-2 md:py-5 px-6 md:px-14 text-lg">See work</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-[#f5f5f5] py-2">
        <Ticker speed={5}>
          {() => (
            <div className='flex items-center gap-2 md:gap-8 whitespace-nowrap py-4 md:py-16'>
              <i className="ri-gemini-fill text-2xl"></i>
              <p className='text-2xl'>HTML</p>
              <i className="ri-gemini-fill text-2xl"></i>
              <p className='text-2xl'>CSS</p>
              <i className="ri-gemini-fill text-2xl"></i>
              <p className='text-2xl'>JAVASCRIPT</p>
              <i className="ri-gemini-fill text-2xl"></i>
              <p className='text-2xl'>BOOTSTRAP</p>
              <i className="ri-gemini-fill text-2xl"></i>
              <p className='text-2xl'>TAILWIND</p>
              <i className="ri-gemini-fill text-2xl"></i>
              <p className='text-2xl'>REACT</p>
              <i className="ri-gemini-fill text-2xl"></i>
              <p className='text-2xl'>NODE JS</p>
              <i className="ri-gemini-fill text-2xl"></i>
              <p className='text-2xl'>VERSION CONTROL</p>
              <i className="ri-gemini-fill text-2xl"></i>
              <p className='text-2xl'>DEVOPS</p>
              <i className="ri-gemini-fill text-2xl"></i>
              <p className='text-2xl'>MANAGEMENT</p>
            </div>
          )}
        </Ticker>
      </div>
    </section>
  );
};

export default Home;
