import React from "react";
import { servicesSection } from "../../data";

function Services() {
  return (
    <section className="text-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-center text-4xl font-bold tracking-tight text-prim sm:text-5xl">
            {servicesSection.title}
          </h2>

          <p className="mt-4 text-gray-100">{servicesSection.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesSection.services.map((service) => {
            return (
              <a
                className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-sec/90 hover:shadow-sec/20"
                href="/services/digital-campaigns"
              >
                <service.icon className="h-10 w-10 text-white bg-sec rounded-full p-2" />

                <h2 className="mt-4 text-xl font-bold text-white">
                  {service.title}
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  {service.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
