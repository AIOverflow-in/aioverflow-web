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
              src="https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/projects%2FRoboGems.png?alt=media&token=939118e1-37c4-45ee-bd8c-b0a179ff2863"
              alt="EdTech Landing Page"
              className="h-full w-full object-cover"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/projects%2FFitRofy.png?alt=media&token=4869edbb-05ac-4205-8984-722e1ec69d2d"
              alt="HealthTech Startup Landing Page"
              className="h-full w-full object-cover"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aioverflow-images.appspot.com/o/projects%2FHelloDoc.png?alt=media&token=7a4767a1-68db-47c5-8a92-c4bdf13f405a"
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
