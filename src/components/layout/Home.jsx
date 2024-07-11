import React from 'react';
import Image from '../../assets/backgroundHome.png';


const Home = () => {
  return (
    <section id="about" className="relative bg-[#f5f5f5] bg-no-repeat bg-top md:bg-center bg-contain h-[calc(100vh-20rem)] md:h-[calc(100vh-24rem)]" style={{backgroundImage: `url(${Image})`}}>
      <div className="absolute inset-0 flex flex-col justify-start md:justify-end items-center">
        <div className="container mx-auto px-10 py-20 max-w-5xl">
          <div className="flex flex-col items-center justify-center text-center gap-6 md:gap-10">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-[#282828]">
              Hello, I'm <span className="font-bold">Namra Mahak</span>, a <span className="font-bold">front-end developer</span> based in the United Kingdom.
              <span className="font-bold"> I build functional and scalable front-end products</span> with exceptional user experience.
            </h1>
            <div className="flex justify-center bg-[#111] bg-opacity-70 bg-blur">
              <a href="#contact" className="inline-flex text-[#ffffff] border-[#f5f5f5] border py-2 md:py-5 px-6 md:px-14 focus:outline-none text-lg backdrop-blur-sm">View Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
