import { useRef } from "react";
import gsap from "gsap";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const handleMouseMove = (e, frameRef) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = (frameRef) => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  const createImageTile = (src, alt) => {
    const frameRef = useRef(null);

    return (
      <div className="relative w-full h-[600px] overflow-hidden rounded-lg"> {/* Further increased height */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            ref={frameRef}
            onMouseMove={(e) => handleMouseMove(e, frameRef)}
            onMouseLeave={() => handleMouseLeave(frameRef)}
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    );
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          our clients go wow!
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="excellency in every detail"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          {/* Grid of 6 images */}
          <div className="grid grid-cols-3 gap-2 mt-8">
            {createImageTile("/img/1.png", "Image 1")}
            {createImageTile("/img/2.png", "Image 2")}
            {createImageTile("/img/3.png", "Image 3")}
            {createImageTile("/img/4.png", "Image 4")}
            {createImageTile("/img/5.png", "Image 5")}
            {createImageTile("/img/6.png", "Image 6")}
          </div>
        </div>

        <div className="mt-8 flex w-full justify-center md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Discover timeless elegance and unmatched craftsmanship with our exquisite jewelry collection. From dazzling diamonds to luxurious gold and silver designs, we create pieces that captivate hearts and elevate your style. Perfect for every occasion, our curated collections promise to bring a sparkle to your moments.
            </p>

            <Button
              id="realm-btn"
              title="Gold & Diamond"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
