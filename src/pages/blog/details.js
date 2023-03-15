import React from "react";

const Details = () => {
  return (
    <>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-2 lg:py-8 !pt-0">
        <div className="max-w-screen-md mx-auto">
          <div className="flex justify-center">
            <span className="inline-block text-xs font-medium tracking-wider uppercase text-center mt-5 text-emerald-700">Personal Growth</span>
          </div>

          <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            The Rise of Artificial Intelligence and the Future of Humans
          </h1>

          <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-10 h-10">
                <img
                  alt="profile"
                  className="rounded-full"
                  src="https://cdn.sanity.io/images/cijrdavx/production/cd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg?rect=0,0,4480,3760&w=1920&q=75&fit=clip&auto=format"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">Joshua Wood</p>
                <div className="flex items-center space-x-2 text-sm">
                  <time className="text-gray-500 dark:text-gray-400" datetime="2022-10-18T13:47:00.000Z">
                    October 18, 2022
                  </time>
                  <span>2 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
        <img
          src="https://cdn.sanity.io/images/cijrdavx/production/e60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg?w=1920&q=75&fit=clip&auto=format"
          alt="profile"
          className="rounded-lg"
        />
      </div>

      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <article className="max-w-screen-md mx-auto">
          <div className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500">
            <p className="py-4">
              Sitting on a patio overlooking English Bay, I am eating dinner and talking with a woman I have met only hours earlier. A memorable evening for
              both of us, it will see us share some of the most difficult and personal memories we have. Details will be different, but the trajectory similar,
              in both our cases centered around death. Not one, not a few, but hundreds of deaths. For each of us.
            </p>

            <p className="py-4">
              Okay, one, don’t worry, we’re getting to the sunsets! And two, please be assured that despite what it sounds like, I do have appropriate
              boundaries. Because what I have just described is the life of an HIV researcher. In town for an annual research and treatment conference, it was
              three days of the latest science, prevention, and support findings. And meeting people like Leena, who, like myself, is a qualitative researcher,
              working exclusively with women who have contracted HIV from rape or abuse. While my field is HIV, PTSD, and stigma, we do share the same approach,
              which uses a narrative model of inquiry. Meaning, our data is the individual and community story of HIV. If you’re interested in reading more
              about what I do, check out the piece below.
            </p>
            <p className="py-4">
              Not surprisingly, we had a lot to talk about and found we had many things in common. Like, for example, sunrises and sunsets. For both of us,
              seeing them is inexplicably tied up in remembering loss from HIV. Something else she said really hit me. Originally from San Francisco, Leena
              talked about how HIV had literally torn her city apart. But then, oddly enough it became the shared history that helped it mend.
            </p>
            <p className="py-4">
              Last night as I watched the sunset you see above and below, I thought again of what Leena had told me about San Francisco, inspiring me to write
              the poem that follows below the next image.
            </p>
          </div>
        </article>
      </div>

      <hr className="text-white" />

      <div className="py-5 flex justify-center items-center gap-5">
        <button
          type="submit"
          className="inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-gray-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <ShareIcon className="w-4 h-4" />
          Share
        </button>
        <button
          type="submit"
          className="inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <LinkIcon className="w-4 h-4" />
          Copy link
        </button>
      </div>

      <hr className="text-white" />

      <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
        <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
          <div className="relative flex-shrink-0 w-24 h-24 mt-1">
            <span>
              <img
                src="https://cdn.sanity.io/images/cijrdavx/production/cd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg?rect=0,0,4480,3760&w=1920&q=75&fit=clip&auto=format"
                alt="profile"
                className="rounded"
              />
            </span>
          </div>

          <div>
            <div className="mb-3">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">About Joshua Wood</h4>
            </div>
            <div>
              <p>
                Joshua is a Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing
                in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale.
              </p>
            </div>
            <div className="mt-3">
              <a className="py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 " href="/author/joshua-wood">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
