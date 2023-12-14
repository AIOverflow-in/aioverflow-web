import { Carousel } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section
      className="container px-6 py-8 mx-auto lg:py-16 bg-transparent"
      id="about"
    >
      <div className="lg:flex lg:items-center lg:-mx-4">
        <div className="lg:w-1/2 lg:px-4">
          <h3 className="text-xl font-medium text-gray-50 md:text-2xl lg:text-3xl">
            We create awesome software with{" "}
            <span className="text-sec">Generative AI</span> capabilities.
          </h3>

          <p className="mt-6 text-gray-200 ">
            At AIOverflow, we're dedicated to turning your technological dreams
            into reality. From conceptualization to implementation, we stand by
            your side, providing a range of services tailored to meet your
            unique needs
          </p>

          <div class="mt-4 md:mt-8">
            <Link
              to="/contact"
              class="inline-block rounded bg-prim px-12 py-3 text-xl font-medium text-white transition hover:bg-sec focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </Link>
          </div>
        </div>

        <div className="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
          <Carousel className="rounded-xl">
            <img
              src="https://drive.google.com/uc?export=view&id=1SNQQ73gp4tbY7o52qAxDXFe5zoWngCaN"
              alt="Patient Management System"
              className="h-full w-full object-cover"
            />
            <img
              src="https://drive.google.com/uc?export=view&id=1Zp6gko4KpOZrDfXq3qd7mkHaEXkwqsSR"
              alt="HealthTech Startup Landing Page"
              className="h-full w-full object-cover"
            />
            <img
              src="https://drive.google.com/uc?export=view&id=1VpkmLWE2Bmt71RJWQNga3Fk1_aIiwoCF"
              alt="Hello Doc"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
