import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-[#f5f5f5]">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        {/* TITLE */}
        <div className="flex w-full mb-20">
            <i class="ri-shining-fill text-[#282828] sm:text-4xl text-3xl font-medium"></i>
            <h1 className="sm:text-4xl text-3xl font-medium mb-4 text-[#282828]">Featured Projects</h1>
        </div>
        {/* CARDS */}
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-[#fff] opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;