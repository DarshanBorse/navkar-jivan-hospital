import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="max-w-7xl mx-auto lg:flex justify-between items-center bg-white rounded shadow xs:p-5">
      <Image src={"/images/doctor.png"} width={600} height={400} quality={100} priority={true} className="lg:w-auto xs:mb-10 mr-auto relative" />
      <div className="max-w-3xl">
        <FontAwesomeIcon icon={faQuoteLeft} className="w-14 h-14 text-brandColor" />
        <p className="pb-20">
          We look forward to supercharging the next phase of our growth with optimism and confidence, ready to seize the many opportunities ahead. Our growth
          strategy for the emerging digital future is built on five strategic objectives.”
        </p>
        <h1 className="font-medium ">C Vijayakumar</h1>
        <p>CEO & Managing Director | HCLTech</p>
      </div>
    </div>
  );
};

export default Card;
