import axios from "axios";
import React, { useState } from "react";

function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirement: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOptionChange = (option) => {
    setFormData({
      ...formData,
      option,
    });
  };

  const handleFormSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await axios.post(
        process.env.REACT_APP_BACKEND + "ContactUs",
        formData
      );

      setLoading(false);

      // Handle success, e.g., show a success message
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Error submitting form:", error.message);
    }
    alert("Thank you for contacting us. Please check your email inbox");
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg text-gray-100">
              Ask any questions you may have and we will get back to you as soon
              as possible. We can discuss further details and arrange a meeting
              to discuss your requirements.
            </p>

            <div className="mt-8">
              <a
                href="mailto:aioverflow.ml@gmail.com"
                className="text-2xl font-bold text-prim"
              >
                aioverflow.ml@gmail.com
              </a>

              <address className="mt-2 not-italic">India</address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  id="name"
                />
              </div>

              <div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    id="email"
                  />
                </div>
              </div>

              {/* <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    className="peer sr-only"
                    id="option1"
                    type="radio"
                    tabIndex="-1"
                    onChange={() => handleOptionChange("Software")}
                    name="option"
                  />

                  <label
                    htmlFor="option1"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-prim peer-checked:border-prim peer-checked:bg-prim peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Software </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    id="option2"
                    type="radio"
                    tabIndex="-1"
                    onChange={() => handleOptionChange("AI")}
                    name="option"
                  />

                  <label
                    htmlFor="option2"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-prim peer-checked:border-prim peer-checked:bg-prim peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> AI </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    id="option3"
                    type="radio"
                    tabIndex="-1"
                    onChange={() => handleOptionChange("Mentorship")}
                    name="option"
                  />

                  <label
                    htmlFor="option3"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-prim peer-checked:border-prim peer-checked:bg-prim peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Mentorship </span>
                  </label>
                </div>
              </div> */}

              <div>
                <label className="sr-only" htmlFor="requirement">
                  Requirements
                </label>

                <textarea
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="How can AIOverflow help you?"
                  rows="8"
                  id="requirement"
                  name="requirement"
                  required
                  value={formData.requirement}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-prim hover:bg-sec px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
