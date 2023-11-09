import React from "react";

function Team() {
  return (
    <section className="text-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-center text-4xl font-bold tracking-tight text-prim sm:text-5xl">
            Meet the Team
          </h2>

          <p className="mt-4 text-gray-100">
            We're a dynamic duo, bringing a blend of skills and expertise to the
            table. Together, we form the backbone of AIOverflow, ensuring every
            project is infused with innovation and excellence.
          </p>
        </div>
        <div class="flex items-center justify-center flex-wrap gap-4 p-4">
          <div class="w-1/3 bg-gray-50 p-4 rounded-md text-center mx-auto">
            <img
              src="https://drive.google.com/uc?export=view&id=1_DzxybV0leHOo_ICvbsP_XUcnL1HW6F8"
              class="w-24 h-24 mx-auto rounded-full object-cover transition duration-200 hover:scale-110"
            />

            <div class="text-gray-900 text-lg font-bold">
              Subhanu Sankar Roy
            </div>

            <div class="text-sec font-bold">Co-Founder</div>

            <div class="text-gray-600">
              Subhanu is the creative visionary, responsible for crafting
              stunning user interfaces and seamless experiences. His expertise
              in software development and UI/UX design transforms ideas into
              visually captivating realities.
            </div>

            <div class="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
              <i class="fa-brands fa-twitter fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
              <i class="fa-brands fa-linkedin fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
              <i class="fa-brands fa-dribbble fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
            </div>
          </div>
          <div class="w-1/3 bg-gray-50 p-4 rounded-md text-center mx-auto">
            <img
              src="https://drive.google.com/uc?export=view&id=1f8WjNjbq0brWevbbrx91RUyTz9TffSeG"
              class="w-24 h-24 mx-auto rounded-full object-cover transition duration-200 hover:scale-110"
            />

            <div class="text-gray-900 text-lg font-bold">Chethan Reddy</div>

            <div class="text-sec font-bold">Co-Founder</div>

            <div class="text-gray-600">
              Chethan is the driving force behind the intricate world of machine
              learning and robust backend development. His passion for turning
              complex data into actionable insights is matched only by his
              dedication to teaching Data Science.
            </div>

            <div class="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
              <i class="fa-brands fa-twitter fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
              <i class="fa-brands fa-linkedin fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
              <i class="fa-brands fa-dribbble fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
