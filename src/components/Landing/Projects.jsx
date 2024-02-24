import React from "react";
import { projects } from "../../data";

const Projects = () => {
  return (
    <section className="text-gray-100">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-center text-4xl font-bold tracking-tight text-prim sm:text-5xl">
            Browse Our Projects
          </h2>

          <p className="mt-4 text-gray-100">
          From startups to established enterprises, our portfolio reflects a diverse range of successful collaborations.

          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isEvenPair = Math.floor(index + 1 / 2) % 2 === 0;
            const flexDirection = isEvenPair ? "row" : "row-reverse";
            const additionalClass = isEvenPair ? "lg:col-span-2" : "";

            return (
              <div
                key={index}
                className={`transition-all duration-500 hover:scale-105 ${additionalClass}`}
                style={{ flexDirection: flexDirection }}
              >
                <span className="text-white">{project.name}</span>
                <img
                  className="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                  src={project.imgUrl}
                  alt={project.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
