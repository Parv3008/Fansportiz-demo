import icon1 from "../../assets/img/offer-icon1.svg"; 
import icon2 from "../../assets/img/offer-icon2.svg"; 
import bgImage from "../../assets/img/bg-offerings.png";

export default function Offerings() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 bg-white">
        {/* Left Block */}
        <div className="flex items-center justify-center border-r border-gray-200 bg-white bg-gradient-to-r from-[#F5F5F5] to-[#F5F5F5]">
          <div className="text-left">
            <h2 className="font-jersey text-6.5xl font-normal leading-lh-70 text-blue">
              OUR<br />OFFERINGS
            </h2>
            <div className="w-32 h-1 bg-red-600 mt-2"></div>
          </div>
        </div>

        {/* Offering 1 */}
        <div className="p-10 border-r border-gray-200 bg-white">
          <img src={icon1} alt="Fantasy Platform" className="h-8 mb-4" />
          <h3 className="text-md font-bold text-[#00224D] mb-2">
            Build your own<br />Fantasy sports platform
          </h3>
          <p className="text-sm text-gray-600">
            Our Whitelabel solution helps you launch your first fantasy sports website/app in a matter of days that too with minimum investment.
          </p>
        </div>

        {/* Offering 2 */}
        <div className="p-10 bg-white">
          <img src={icon2} alt="Troubleshoot" className="h-8 mb-4" />
          <h3 className="text-md font-bold text-[#00224D] mb-2">
            Troubleshoot your<br />Existing web/app solution
          </h3>
          <p className="text-sm text-gray-600">
            If you already have a platform of your own but face performance or scalability issues, especially during popular sporting leagues, we are here to help you.
          </p>
        </div>
      </div>
    </section>
  );
}
