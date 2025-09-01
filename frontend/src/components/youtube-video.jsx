import React from "react";

const YoutubeVideo = () => {
  return (
    <>
      <section className="bg-gray-900 text-white py-12 px-4" id="top-space">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-w-16 h-100 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <iframe
              src="https://www.youtube.com/embed/s7CopnLJASo"
              title="YouTube video"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
              Learn With Interactive Tutorials
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
              Watch our step-by-step tutorials and start building modern web
              applications today with ease and confidence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default YoutubeVideo;
