import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoaded(true);
    setLoading(false);
  };

  useEffect(() => {
    if (loaded) {
      gsap.set("#video-frame", {
        clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
        borderRadius: "0% 0% 40% 10%",
      });
      gsap.from("#video-frame", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0% 0% 0% 0%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#video-frame",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });
    }
  }, [loaded]);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* Loader */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <video
          ref={videoRef}
          src="videos/d.mp4" // Replace with the desired video source
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
          
        />

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          Jewellery.
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Fine
            </h1>

            <p className="mb-5 max-w-96 font-bold text-blue-75 text-2xl"> {/* Changed max-w-64 to max-w-80 */}
  At{" "}
  <span className="font-extrabold text-gradient bg-clip-text text-transparent bg-yellow-600">
    Sri Mahalaxmi Gold & Diamond Jewellers
  </span>
  , we create innovative jewellery crafts that ignite creativity and
  drive elegance and sophistication. 
</p>


            <Button
              id="watch-trailer"
              title="Secunderabad📍 "
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
