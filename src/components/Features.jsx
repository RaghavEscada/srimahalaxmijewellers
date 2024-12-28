import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Crafting Legacies 💎</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Welcome to <span className="text-yellow-500"> Sri Mahalaxmi Gold & Diamond Jewellers</span>
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Dive into a world where creativity meets innovation, crafting impactful digital solutions that connect, inspire, and leave a lasting legacy.
        </p>

      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/x.mp4"
          title={
            <p className="text-slate-800">
              Extraordinary craft in Jewellery
            </p>
          }
          description={<span className="text-black font-semibold">We move like a merchant sleek and agile, working with clients and partners around the world to craft innovative jewellery  that leave a lasting, borderless impact." </span>}
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-2 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/b.mp4"
            title={
              <>
               Exquisite work ethics
              </>
            }
            description="A relentless work ethic driving innovation and growth"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/z.mp4"
            title={
              <>
                Bespoke collection
              </>
            }
            description="Driven by impactful designs and excellence."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-2 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/y.mp4"
            title={
              <>
                Excellence for Every Occasion
              </>
            }
            description="Crafting exceptional stone arts with creativity and precision."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 bg-black">
  <div className="flex size-full flex-col justify-between bg-blue-700 p-5">
    <h1 className="bento-title special-font max-w-full text-white">
      Talk to Us
    </h1>

    <TiLocationArrow className="m-5 scale-[5] self-end text-white" />

    {/* CTA Button to WhatsApp */}
    <a href="https://wa.me/9100592011?text=Hello, I am interested in purchasing exquisite jewelry from your collection. Could you help me with the details?" target="_blank" rel="noopener noreferrer">
      <button className="bg-slate-900 text-white text-xl px-10 py-4 rounded-full mt-5 shadow-lg transform transition-transform hover:scale-105 hover:bg-green-600">
        <p className="font-semibold"> Let's get Shopping with Elegance. </p>
      </button>
    </a>
  </div>
</BentoTilt>




      </div>
    </div>
  </section>
);

export default Features;
