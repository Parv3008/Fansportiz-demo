import logo1 from "../../assets/img/logo1.svg";
import logo2 from "../../assets/img/logo2.svg";
import logo3 from "../../assets/img/logo3.svg";
import logo4 from "../../assets/img/logo4.svg";
import logo5 from "../../assets/img/logo5.svg";

import cornerTopLeft from "../../assets/img/logo-left.png";      // Add your actual image path
import cornerBottomRight from "../../assets/img/logo-bottom-right.png";  // Add your actual image path

export default function Logo() {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section
      id="next-section"
      className="relative py-12 md:py-20 bg-white text-center overflow-hidden"
    >
      {/* Corner Decorations */}
      <img
        src={cornerTopLeft}
        alt="Corner Top Left"
        className="absolute top-0 left-0 z-0 pointer-events-none"
      />
      <img
        src={cornerBottomRight}
        alt="Corner Bottom Right"
        className="absolute bottom-0 right-0 z-0 pointer-events-none"
      />

      {/* Logo Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold text-blue mb-6">Trusted By</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-[#D1D1D1] w-60 h-20 flex items-center justify-center p-4 hover:scale-105 transition-transform"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
