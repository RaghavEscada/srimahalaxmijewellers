import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { FaWhatsapp, FaInstagram, FaFacebook, FaPinterest, FaYoutube } from "react-icons/fa"; // Importing the required icons

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-black sm:overflow-hidden">
        <div className="flex flex-col items-center text-center">
          {/* Jewelry Quote Section */}
          <p className="mb-10 font-general text-xl italic text-white">
            "Jewelry is not just an accessory, it’s a reflection of who we are and a symbol of the moments we cherish."
          </p>

          <p className="mb-10 font-general text-[10px] uppercase">
            Get your jewelry now and flaunt it for any occasion at an affordable price!
          </p>

          <AnimatedTitle
            title="Grab your jewelry now and shine on any occasion, all at great prices!"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] text-black"  // Explicitly defining black color
          />

          <Button
            title="gold & diamond"
            containerClass="mt-10 cursor-pointer"
            onClick={() => {
              const phoneNumber = "+91 91005 92011"; // Replace with your actual phone number
              const message = "Hello, I'd like to discuss more on my jewellery spree!"; // Predefined message
              const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

              // Open WhatsApp in a new window
              window.open(url, "_blank");
            }}
          />

          {/* Contact Icons Section */}
          <div className="mt-10 flex space-x-8">
            <a href="https://wa.me/91 91005 92011" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-3xl text-white cursor-pointer hover:text-green-500" />
            </a>
            <a href="https://www.instagram.com/mahalaxmijewellery/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-white cursor-pointer hover:text-pink-500" />
            </a>
            <a href="https://www.facebook.com/SriMahalaxmiJewellersandpearl" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-white cursor-pointer hover:text-blue-500" />
            </a>
            <a href="https://www.pinterest.com/srimahalaxmijewellers/" target="_blank" rel="noopener noreferrer">
              <FaPinterest className="text-3xl text-white cursor-pointer hover:text-red-500" />
            </a>
            <a href="https://www.youtube.com/c/SriMahalaxmiJewellersPearls" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-3xl text-white cursor-pointer hover:text-red-600" />
            </a>
          </div>

          {/* Certifications Section with new background and text styles */}
          <div className="mt-20 text-center bg-white py-10 px-4 rounded-lg">
            <h2 className="text-2xl font-bold text-black mb-8">Our Certifications</h2>
            <div className="grid grid-cols-3 gap-12 text-black">
              <div className="text-center">
                <img src="/img/geo.png" alt="Certification 1" className="mx-auto w-36 h-auto" />
                <p className="mt-4 text-black">International Gemological Institute</p>
              </div>
              <div className="text-center">
                <img src="/img/gia.png" alt="Certification 2" className="mx-auto w-36 h-auto" />
                <p className="mt-4 text-black">GIA Certified</p>
              </div>
              <div className="text-center">
                <img src="/img/mank.png" alt="Certification 3" className="mx-auto w-36 h-auto" />
                <p className="mt-4 text-black">Hallmarked Jewelry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
