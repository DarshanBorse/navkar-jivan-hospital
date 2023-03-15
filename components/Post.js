import React from "react";

const Post = (props) => {
  return (
    <div className="cursor-pointer group">
      <div className="relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105 aspect-video">
        <img src={props.data.img} alt={props.data.alt} />
      </div>

      <div>
        <div className="flex gap-3">
          <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">{props.data.category}</span>
        </div>

        <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
          <a href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration">
            <span className="bg-gradient-to-r from-rose-200 to-rose-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {props.data.decs}
            </span>
          </a>
        </h2>

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-5 h-5 rounded-full">
              <img className="rounded-full" src={props.data.profile} alt={props.data.alt} />
            </div>
            <span className="text-sm">{props.data.name}</span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
          <time className="text-sm" dateTime={props.data.date}>
            {props.data.date}
          </time>
        </div>
      </div>
    </div>
  );
};

export default Post;
