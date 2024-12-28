import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { FaInstagram } from "react-icons/fa";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Sri Mahalaxmi Gold & Diamond Jewellers
        </p>

        <AnimatedTitle
          title="Crafting Bespoke legacies in the jewellery cosmos"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Fine Crated Bespoke Jewellery</p>
          <p className="text-gray-500">
            At Sri Mahalaxmi Gold & Diamond Jewellers, we blend creativity and strategy to deliver innovative and artistic jewellery
             that elevate brands and drive impactful apperance.
          </p>
        </div>

        {/* Instagram Button */}
        <button
  className="mt-5 px-6 py-3 bg-black text-white rounded-full flex items-center justify-center space-x-2 shadow-lg hover:bg-white hover:text-black transition-all duration-300"
  onClick={() => window.open('https://www.instagram.com/srimahalaxmijewellers/', '_blank')}
>
  <FaInstagram className="text-2xl" /> {/* Instagram Icon */}
  <span>Social Gallery</span>
</button>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/lxj.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
