const Footer = () => {
  return (
    <footer className="w-screen bg-yellow-200 py-8 text-black font-bold">
      {/* Image at the top of the footer */}
      <div className="flex justify-center mb-4">
      <img
  src="/img/lmjrb.png"
  alt="Sri Mahalaxmi Gold & Diamond Jewellers Logo"
  className="w-10/12 h-auto" // Increase width to make the image bigger
/>

      </div>

      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        {/* Address Section */}
        <div className="text-center md:text-left">
          <p className="text-sm font-light">3-2-120 & 121, Mahankali Street,</p>
          <p className="text-sm font-light">Secunderabad, Telangana - 500003</p>
          <p className="text-sm font-light">India</p>
        </div>

        {/* Contact Info Section */}
        <div className="text-center md:text-left">
          <p className="text-sm font-light">+91 91005 92011</p>
          <p className="text-sm font-light">+91 96520 05510</p>
        </div>

        {/* Privacy Policy Section */}
        <div className="text-center md:text-right">
          <p className="text-sm font-light">Copyright © 2024 SRI MAHALAXMI GOLD & DIAMOND JEWELLERS</p>
          <p className="text-sm font-light">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
