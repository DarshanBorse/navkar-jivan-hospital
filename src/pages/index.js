import { CheckCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import {
  faSitemap,
  faCogs,
  faShieldAlt,
  faChevronUp,
  faSearchPlus,
  faCode,
  faUsers,
  faSync,
  faDesktop,
  faShoppingCart,
  faMousePointer,
  faCheck,
  faBezierCurve,
  faAnchor,
  faAlignLeft,
  faTachometerAlt,
  faSearchDollar,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "../../components/Contact";


let statistics = [
  {
    name: "5 Lacks +",
    desc: "Patients Treated",
    image: "/images/patient.png",
  },
  {
    name: "15 +",
    desc: "Years Of Experience",
    image: "/images/clinic.png",
  },
  {
    name: "5 +",
    desc: "Health Departments",
    image: "/images/hospital.png",
  },
  {
    name: "20 +",
    desc: "Beds",
    image: "/images/bed.png",
  },
];

const specialities = [
  {
    name: "Bone fracture",
    image: "/images/broken-arm.png",
  },
  {
    name: "Accident",
    image: "/images/dermatology.png",
  },
  {
    name: "Joint pain",
    image: "/images/pain.png",
  },
  {
    name: "Obesity",
    image: "/images/obesity.png",
  },
  {
    name: "Ledger",
    image: "/images/tooth.png",
  },
  {
    name: "Laparoscopy",
    image: "/images/laparoscopy.png",
  },
  {
    name: "Varicose veins",
    image: "/images/varicose-veins.png",
  },
  {
    name: "Endoscopy",
    image: "/images/endoscopy.png",
  },
  {
    name: "Proctology",
    image: "/images/tooth.png",
  },
  {
    name: "Cosmetic Gynecology",
    image: "/images/tooth.png",
  },
  {
    name: "Plastic surgery",
    image: "/images/botox.png",
  },
  {
    name: "Penclinic",
    image: "/images/tooth.png",
  },
  {
    name: "I.C.U",
    image: "/images/icu.png",
  },
  {
    name: "Digital X-ray",
    image: "/images/x-ray.png",
  },
  {
    name: "Pathology Lab",
    image: "/images/microscope.png",
  },
];

export default function Index() {
  return (
    <>
      <div className="pt-12 lg:pt-28 pb-12 lg:pb-28">
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <main className="grid gap-6 lg:gap-12 grid-cols-1 lg:grid-cols-2 mt-10 mx-auto w-full px-4 lg:px-0">
            <div className="m-auto text-left order-last lg:order-first">
              <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-gray-800 leading-10 lg:leading-12">
                Restore Your Health
              </h1>
              <p className="mt-3 text-base font-body text-gray-500 sm:mt-5 sm:text-lg w-full lg:max-w-xl mx-auto md:mt-5 md:text-xl lg:mx-0">
                You don&lsquo;t appreciate life until you get to the other side. Like
                lying in a hospital bed.{" "}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandColor hover:bg-rose-600 md:py-4 md:text-xl md:px-10"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="relative z-0 text-right ">
              <Image
                className="w-auto relative rounded-3xl"
                src="/images/medical.jpg"
                width={600}
                height={400}
                quality={100}
                priority={true}
              />
            </div>
          </main>
        </div>
      </div>

      <div className="py-12 lg:py-20  bg-brandColor bg-opacity-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 underline">
            Statistics
          </h1>

          <div className="grid lg:grid-cols-12  gap-x-28 lg:mx-auto mt-10 mx-5">
            {statistics.map((data, index) => (
              <div
                key={index}
                className="bg-white w-full lg:mx-auto my-5 lg:col-span-3  rounded p-5 hover:shadow cursor-pointer hover:scale-105 transition-all delay-100 ease-in-out"
              >
                <Image
                  src={data.image}
                  width={700}
                  height={700}
                  quality={100}
                  priority={true}
                  className=" w-24 mx-auto relative p-5"
                />
                <div className="text-center font-medium text-gray-800 text-2xl">
                  {data.name}
                </div>
                <div className="text-center">{data.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 lg:py-20 bg-white ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold text-center pb-10">
            Specialities at Navkar Hospital, Malegaon
          </h1>

          <div className="grid lg:grid-cols-12 mx-5 gap-x-20 gap-y-20 lg:mx-auto mt-10">
            {specialities.map((data, index) => (
              <div
                key={index}
                className="transform hover:-translate-y-3 hover:shadow-md  hover:scale-105 aspect-video transition-all duration-500 ease-in-out bg-gradient-to-tl from-brandColor to-rose-500 w-full mx-auto col-span-3 rounded p-5 cursor-pointer"
              >
                <Image
                  src={data.image}
                  width={600}
                  height={400}
                  quality={100}
                  priority={true}
                  className="w-24 mx-auto relative p-5"
                />
                <div className="text-center font-medium text-white  text-xl">
                  {data.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 lg:py-20 xs:px-5  bg-brandColor bg-opacity-5">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex justify-between items-center">
            <h1 className="text-2xl text-gray-900 font-medium">
              Navkar hospitals is a not-for-profit organization.
            </h1>

            <div className="mt-5 sm:mt-8 sm:flex justify-start ">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandColor hover:bg-rose-600 md:py-4 md:text-xl md:px-10"
                >
                  Make Donation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <Testimonials />
      </div>

      <div className="py-12 lg:py-20  bg-brandColor bg-opacity-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl text-gray-900 font-medium xs:text-center underline">
            Awards and Accreditations
          </h1>
          <p className="text-gray-900 pt-5 text-base xs:mx-5">
            Committed to providing compassionate, quality care with a
            patient-centric approach at an affordable cost, Navkar Hospital in
            Malegaon, Malegaon has been awarded and accredited by several
            national and international organisations:
          </p>
          <div className="grid grid-cols-12  text-gray-800 mt-5 text-sm gap-5 mx-5">
            <div className="lg:col-span-6 col-span-12">
              <div className="flex items-center justify-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-rose-500  rounded-full inline-block" />
                <p>
                  National Energy Conservation Award – bestowed by the
                  honourable President of India
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="flex items-center justify-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-rose-500  rounded-full inline-block" />
                <p>
                  NABH (National Accreditation Board of Hospitals) 1st hospital
                  in Malegaon to be accredited
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="flex items-center justify-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-rose-500  rounded-full inline-block" />
                <p>
                  {/* (National Accreditation Board for Testing and Calibration Laboratories) */}
                  NABL Only hospital in Malegaon with an SRL-NABL accredited
                  pathology laboratory
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="flex items-center justify-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-rose-500  rounded-full inline-block" />
                {/* (National Accreditation Board of Hospitals) */}
                <p>
                  NABH Nursing 1st hospital in Malegaon to be accredited for
                  excellence in nursing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
