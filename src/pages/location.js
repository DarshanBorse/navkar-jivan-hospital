import React from "react";
import Post from "../../components/Post";

const post = [
  {
    img: "https://cdn.sanity.io/images/cijrdavx/production/05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png?rect=0,0,800,468&w=1920&q=75&fit=clip&auto=format",
    alt: "post",
    category: "Technology",
    decs: "Architectural Engineering Wonders of the modern era for your Inspiration",
    name: "Mario Sanchez",
    profile: "https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=640&q=75&fit=clip&auto=format",
    date: "October 21, 2022",
  },
  {
    img: "https://cdn.sanity.io/images/cijrdavx/production/2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png?rect=0,279,987,607&w=1920&q=75&fit=clip&auto=format",
    alt: "post",
    category: "Lifestyle",
    decs: "5 Effective Brain Recharging Activities No One is Talking About",
    name: "Mario Sanchez",
    profile: "https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=640&q=75&fit=clip&auto=format",
    date: "October 21, 2022",
  },
];

const Location = () => {
  return (
    <>
      <div className="pt-12 lg:pt-28 pb-12 lg:pb-28 xs:mx-5">
        <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 grid-cols-1 ">
            {post.map((data) => (
              <Post data={data} key={data.img} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full pb-10">
        <iframe
          width={"100%"}
          height={"450px"}
          frameborder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d789.0038466782687!2d74.52035382582217!3d20.55303845460276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde9901b5f56e9b%3A0x26b143b8dc405cd!2sNavkar%20Multi%20Speciality%20Hospital!5e1!3m2!1sen!2sin!4v1678644760570!5m2!1sen!2sin&pb=!1m18!1m12!1m3!1d2247.785212506613!2d74.51675970831637!3d20.523518015488882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde99664ca072d7%3A0xea979473e79b6469!2sJeevan%20hospital!5e1!3m2!1sen!2sin!4v1678644999298!5m2!1sen!2sin"
        ></iframe>
      </div>
    </>
  );
};

export default Location;
