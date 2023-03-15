import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const navFooterOne = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const navFooterTwo = [
  { name: "Privacy policy", href: "/privacy-policy" },
  { name: "Terms and conditions", href: "/terms-and-conditions" },
  { name: "Refund and cancellations", href: "/refund-and-cancellation-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
];

const Footer = () => {
  return (
    <div className="bg-gray-50 bg-opacity-30 pt-16 pb-5 w-full">
      <div className="relative z-10 mb-6 ml-5 lg:ml-0 mr-5 lg:mr-0">
        <div className="grid gap-3 lg:gap-8 grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto ">
          <div className="col-span-2 lg:col-span-1 order-1">
            <div className="flex justify-start items-center gap-1">
              <Image className="h-20 w-auto sm:h-10" src="/images/logo.png" alt="logo" width={400} height={400} />
              <h1 className="text-2xl">Navkar</h1>
            </div>
            <p className="mt-3 mb-3 lg:mb-6 text-base text-left font-body text-gray-500 max-w-3xl mx-auto">
              Social media marketing and management services for businesses and individuals.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-1 order-3 lg:order-3">
            <h4 className="mb-3 lg:mb-3">Important links</h4>
            <ul className="list-none font-body text-gray-500">
              {navFooterTwo.map((nav) => (
                <li key={nav.name} className="mb-1">
                  <a href={nav.href}>{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-1 order-2 lg:order-2">
            <h4 className="mb-3 lg:mb-3">Quick links</h4>
            <ul className="list-none font-body text-gray-500">
              {navFooterOne.map((nav) => (
                <li key={nav.name} className="mb-1">
                  <a href={nav.href}>{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1 order-4">
            <h4 className="mb-3 lg:mb-3">Contact</h4>
            <div className="pb-3">
              <FontAwesomeIcon icon={faPhoneAlt} className="absolute flex font-light h-5 w-5 m-auto text-gray-500" aria-hidden="true" />
              <p className="ml-8 font-body text-gray-500">
                <a href="tel:+917350012365">+91 73500 12365</a>
              </p>
            </div>
            <div className="pb-3">
              <FontAwesomeIcon icon={faEnvelope} className="absolute flex font-light h-5 w-5 m-auto text-gray-500" aria-hidden="true" />
              <p className="ml-8 font-body text-gray-500 leading-5">
                <a href="mailto:sales@sociozest.com">sales@sociozest.com</a>
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute flex font-light h-5 w-5 m-auto text-gray-500" aria-hidden="true" />
              <p className="ml-8 font-body text-gray-500 leading-5">A203, Dreamville, S.N. 35/4/2, Kalpedal, Hadapsar, Pune-411028</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 ml-5 lg:ml-0 mr-5 lg:mr-0">
        <div className="max-w-7xl mx-auto text-center font-body text-gray-500 border-t pt-4">
          &copy;{new Date().getFullYear()} SocioZest | A service by Algoreal Inventions LLP. (LLPIN - AAN-9319) | All right reserved
        </div>
      </div>

      <a
        href="https://wa.me/+918668965904?text=Hi!%20I%20want%20to%20boost%20the%20growth%20of%20my%20business%20on%20social%20media."
        className="text-3xl p-1 h-12 w-12 ai-chat-icon fixed bottom-4 right-4 shadow rounded-full z-50 visible  text-center"
      >
        <Image className="" src={"/images/whatsapp.png"} width={100} height={100} />
      </a>
    </div>
  );
};

export default Footer;
