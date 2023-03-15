import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [disable, setDisable] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const myRef = useRef(null);

  const formSubmit = (data, e) => {
    e.preventDefault();
    setDisable(true);
    if (data != null) {
      fetch("https://api.sendinblue.com/v3/smtp/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": process.env.SIB_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: "SocioZest Website", email: "support@sociozest.com" },
          to: [{ email: "saurabh@algoreal.com", name: "Saurabh Borse" }],
          subject: "New enquiry from website",
          htmlContent: "Name: " + data.name + "<br/>Phone: " + data.phone + "<br/>Email: " + data.email + "<br/>Mesage: " + data.message,
        }),
      }).then((res) => {
        if (res.status === 201) {
          //setQuery({ name: "", email: "", phone: "", message: "" })
          setDisable(false);
          setSuccessMessage(!successMessage);
          e.target.reset(); // reset after form submit
          reset();
          myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          setErrorMessage(!errorMessage);
        }
      });
    }
  };
  return (
    <div className="py-14 lg:py-20" id="contact" ref={myRef}>
      <div className="relative z-10 mx-auto ml-5 lg:ml-0 mr-5 lg:mr-0">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl lg:text-4xl tracking-tight font-bold text-gray-900 mb-6">{props.contactFormDetails[0].title}</h3>
          <hr className="w-36 h-1.5 rounded-md m-auto bg-gradient-to-l  from-brandColorLight to-brandColor animate-pulse" />
          <p className="mt-6 mb-6 text-base text-center font-body text-gray-500 max-w-3xl mx-auto">{props.contactFormDetails[0].description}</p>
        </div>
        <div className="mt-10 max-w-3xl mx-auto">
          <div id="successMessage" className="justify-center animate-fade-in-down" style={{ display: successMessage ? "block" : "none" }}>
            <p className="text-center font-body text-gray-500 w-full justify-center text-4xl">
              <FontAwesomeIcon icon={faCheckCircle} className="font-light h-12 w-12 text-brandColor mb-2 m-auto" />
            </p>
            <p className="text-center font-body text-gray-500 w-full justify-center">
              Great! We &#39; ve received your message.
              <br />
              We&#39;ll get back to you soon.
            </p>
          </div>
          <div id="errorMessage" className="justify-center mb-3 animate-fade-in-down" style={{ display: errorMessage ? "block" : "none" }}>
            <p className="text-center font-body text-gray-900 w-full justify-center">
              We&#39;re sorry, something went wrong at our end.
              <br />
              Please try again or <span className="text-brandColor">call us on +91 73500 12365</span>
            </p>
          </div>
          <form id="contactForm" onSubmit={handleSubmit(formSubmit)} style={{ display: successMessage ? "none" : "block" }}>
            <div className="grid grid-cols-1 gap-3 lg:gap-5">
              <label className="block">
                <input
                  type="text"
                  className="mt-1 font-body block w-full rounded-md border-gray-200 focus:border-brandColorLight focus:ring-0"
                  placeholder="Your name"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && <span class="ml-2 font-body text-sm text-red-500">Name is required</span>}
              </label>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
                <label className="block">
                  <input
                    className="mt-1 font-body block w-full rounded-md border-gray-200 focus:border-brandColorLight focus:ring-0"
                    placeholder="Email"
                    name="email"
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email?.type === "required" && <span class="ml-2 font-body text-sm text-red-500">Email is required</span>}
                  {errors.email && <span class="ml-2 font-body text-sm text-red-500">{errors.email.message}</span>}
                </label>
                <label className="block">
                  <input
                    type="text"
                    className="mt-1 font-body block w-full rounded-md border-gray-200 focus:border-brandColorLight focus:ring-0"
                    placeholder="Phone"
                    name="phone"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone?.type === "required" && <span class="ml-2 font-body text-sm text-red-500">Phone number is required</span>}
                </label>
              </div>
              <label className="block">
                <textarea
                  className="mt-1 font-body block w-full rounded-md border-gray-200 focus:border-brandColorLight focus:ring-0"
                  rows="3"
                  placeholder="Additional details"
                  name="message"
                  {...register("message")}
                ></textarea>
              </label>
              <div className="block">
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-brandColor focus:border-brandColorLight focus:ring-0"
                        name="terms"
                        {...register("terms", { required: true })}
                      />
                      <span className="ml-2 font-body text-gray-500">I authorise SocioZest to contact me using above details.</span>
                    </label>
                  </div>
                  {errors.terms?.type === "required" && (
                    <span class="ml-6 font-body text-sm text-red-500">
                      Relax! We don&#39;t sale your information. Selecting the box will allow us to contact you.
                    </span>
                  )}
                </div>
              </div>
              <label className="block">
                <button
                  disabled={disable}
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandColor hover:bg-brandColor md:py-4 md:text-xl md:px-10 float-right"
                >
                  Submit
                </button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
