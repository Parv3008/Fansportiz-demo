import logo1 from "../../assets/img/logo1.svg";
import logo2 from "../../assets/img/logo2.svg";
import logo3 from "../../assets/img/logo3.svg";
import logo4 from "../../assets/img/logo4.svg";
import logo5 from "../../assets/img/logo5.svg";

export default function Logo() {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-2xl font-semibold text-blue mb-6">Trusted By</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border w-60 h-20 flex items-center justify-center p-4 hover:scale-105 transition-transform"
          >
            <img src={logo} alt={`Logo ${index + 1}`} className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
