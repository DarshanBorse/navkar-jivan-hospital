import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const navFooterOne = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Location", href: "/location" },
];



const Footer = () => {
  return (
    <div className="bg-gray-50 bg-opacity-30 pt-16 pb-5 w-full">
      <div className="relative z-10 mb-6 ml-5 lg:ml-0 mr-5 lg:mr-0">
        <div className="grid gap-3 lg:gap-8 grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto ">
          <div className="col-span-2 lg:col-span-1 order-1">
            <div className="flex justify-start items-center gap-1">
              <Image className="h-20 w-auto sm:h-10" src="/images/logo.png" alt="logo" width={400} height={200} />
              <h1 className="text-xl">Navkar Hospital</h1>
            </div>
            <p className="mt-3 mb-3 lg:mb-6 text-base text-left font-body text-gray-500 max-w-3xl mx-auto">
              A church is a hospital for sinners, not a museum for saints.
            </p>
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
                <a href="tel:+917350012365">+91 86689 65904</a>
              </p>
            </div>
            <div className="pb-3">
              <FontAwesomeIcon icon={faEnvelope} className="absolute flex font-light h-5 w-5 m-auto text-gray-500" aria-hidden="true" />
              <p className="ml-8 font-body text-gray-500 leading-5">
                <a href="mailto:sales@sociozest.com">navkar@gmail.com</a>
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute flex font-light h-5 w-5 m-auto text-gray-500" aria-hidden="true" />
              <p className="ml-8 font-body text-gray-500 leading-5">Navkar Hospital, Satana Road, Malegaon-423301</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 ml-5 lg:ml-0 mr-5 lg:mr-0">
        <div className="max-w-7xl mx-auto text-center font-body text-gray-500 border-t pt-4">
          &copy;{new Date().getFullYear()} Navkar-Jivan Hospital | All right reserved
        </div>
      </div>

      <Link
        href="https://wa.me/+918668965904?text=Hi!%20I%20want%20to%20boost%20your%20health."
        className="text-3xl p-1 h-12 w-12 ai-chat-icon fixed bottom-4 right-4 shadow rounded-full z-50 visible  text-center"
      >
        <Image className="" src={"/images/whatsapp.png"} width={100} height={100} />
      </Link>
    </div>
  );
};

export default Footer;
