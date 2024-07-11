import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#f5f5f5] mt-4 md:mt-20">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        {/* TITLE */}
        <div className="flex w-full mb-20 gap-2 md:gap-4">
          <i className="ri-shining-fill text-[#282828] sm:text-4xl text-3xl font-medium"></i>
          <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-[#282828]">Featured Projects</h1>
        </div>
        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative overflow-hidden bg-white border-4 border-gray-800 hover:border-green-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover object-center"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* View Project Button */}
                <a
                  href={project.link}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm"
                >
                  View Project
                </a>
                {/* GitHub Repo Button */}
                {project.github && (
                  <a
                    href={project.github}
                    className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
              <div className="p-6">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
