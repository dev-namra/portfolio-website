import React from 'react';
import IconButton from '../elements/IconButton';


const Home = () => {
  return (
    <section id="about" className='bg-[#f5f5f5]'>
      <div className="container mx-auto flex px-10 py-20 flex-col items-center">
        <div className="flex flex-col mb-16 md:mb-0 items-center text-center w-3/4">
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-[#282828]">
            Hello, I am <span className="font-bold">Namra Mahak</span>, a <span className="font-bold">front-end developer</span> based in United Kingdom.<span className="font-bold">I build functional and scalable front-end products</span> with exceptional user experience.
          </h1>
          <div className="flex justify-center bg-[#111] bg-opacity-70 bg-blur">
            <a href="#contact" className="inline-flex text-[#ffffff] border-0 py-2 px-6 focus:outline-none rounded text-lg backdrop-blur-sm">View Resume</a>
          </div>
          <div>
            <p className="text-xl md:text-2xl mb-4 font-medium text-[#282828]">Stack:</p>
            <div className="flex flex-row gap-5">
              <IconButton iconClass="ri-html5-line" />
              <IconButton iconClass="ri-css3-line" />
              <IconButton iconClass="ri-javascript-line" />
              <IconButton iconClass="ri-bootstrap-line" />
              <IconButton iconClass="ri-tailwind-css-line" />
              <IconButton iconClass="ri-reactjs-line" />
              <IconButton iconClass="ri-nodejs-line" />
              <IconButton iconClass="ri-git-fork-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
