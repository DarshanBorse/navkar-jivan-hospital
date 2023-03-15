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
  {
    img: "https://cdn.sanity.io/images/cijrdavx/production/279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png?w=1920&q=75&fit=clip&auto=format",
    alt: "post",
    category: "TRAVEL",
    decs: "14 Architectural Design Ideas for a Spacious Interior",
    name: "Erika Oliver",
    profile: "https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=640&q=75&fit=clip&auto=format",
    date: "October 19, 2022",
  },
  {
    img: "https://cdn.sanity.io/images/cijrdavx/production/c366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg?w=1920&q=75&fit=clip&auto=format",
    alt: "post",
    category: "PERSONAL GROWTH",
    decs: "3 Meaningful Ways to Practice Self-Care as an Introvert",
    name: "Mario Sanchez",
    profile: "https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=1920&q=75&fit=clip&auto=format",
    date: "October 23, 2022",
  },
  {
    img: "https://cdn.sanity.io/images/cijrdavx/production/e60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg?w=1920&q=75&fit=clip&auto=format",
    alt: "post",
    category: "DESIGN LIFESTYLE",
    decs: "The Rise of Artificial Intelligence and the Future of Humans",
    name: "Mario Sanchez",
    profile: "https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=1920&q=75&fit=clip&auto=format",
    date: "October 18, 2022",
  },
];

const Blog = () => {
  return (
    <div className="pt-12 lg:pt-28 pb-12 lg:pb-28 xs:mx-5">
      <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 grid-cols-1 ">
          {post.map((data) => (
            <Post data={data} key={data.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
