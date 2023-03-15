import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const SectionLeft = (props) => {
  return (
    <div className="grid gap-6 lg:gap-12 grid-cols-1 lg:grid-cols-2 mx-auto w-full px-6">
      <div className="m-auto sm:text-center lg:text-left order-last lg:order-first">
        {props.contentServiceDetails[0].title !== undefined ? (
          <h3
            className="text-2xl md:text-4xl lg:text-4xl tracking-tight font-semibold text-gray-900"
            dangerouslySetInnerHTML={{ __html: props.contentServiceDetails[0].title }}
          ></h3>
        ) : (
          ""
        )}
        <div
          className="mt-6 mb-6 text-base text-left font-body text-gray-600 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"
          dangerouslySetInnerHTML={{ __html: props.contentServiceDetails[0].description }}
        ></div>
        {props.contentServiceDetails[0].icons !== undefined ? (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {props.contentServiceDetails[0].icons.map((contentService) => (
              <div key={contentService.name} className="relative bg-white">
                <dt>
                  <FontAwesomeIcon
                    icon={contentService.icon}
                    className="absolute flex h-6 w-6 text-brandColor transition-all duration-300 ease-in-out group-hover:text-white mt-1"
                    aria-hidden="true"
                  />
                  <p className="ml-6 text-gray-600">{contentService.name}</p>
                </dt>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {props.contentServiceDetails[0].link !== undefined ? (
          <div className="rounded-md mt-12">
            <a
              href={props.contentServiceDetails[0].link}
              className="px-8 py-3 border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 text-lg md:px-10"
            >
              {props.contentServiceDetails[0].linkText}
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="mx-auto w-full text-center lg:text-right">
        <Image
          className="w-auto rounded-3xl"
          src={props.contentServiceDetails[0].image}
          width={props.contentServiceDetails[0].width}
          height={props.contentServiceDetails[0].height}
          quality="100"
        />
      </div>
    </div>
  );
};

export default SectionLeft;
