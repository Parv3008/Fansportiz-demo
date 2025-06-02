import icon1 from "../../assets/img/offer-icon1.svg";
import icon2 from "../../assets/img/offer-icon2.svg";
import bgImage from "../../assets/img/bg-offerings.png";

const offeringsData = [
  {
    id: 1,
    icon: icon1,
    title: (
      <>
        Build your own<br />Fantasy sports platform
      </>
    ),
    description:
      "Our Whitelabel solution helps you launch your first fantasy sports website/app in a matter of days that too with minimum investment.",
  },
  {
    id: 2,
    icon: icon2,
    title: (
      <>
        Troubleshoot your<br />Existing web/app solution
      </>
    ),
    description:
      "If you already have a platform of your own but face performance or scalability issues, especially during popular sporting leagues, we are here to help you.",
  },
];

export default function Offerings() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat pt-20 pb-24 px-5"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 bg-white">

        <div className="flex items-center justify-center border-b md:border-b-0 md:border-r border-[#ACAAAA] bg-gradient-to-r from-[#F5F5F5] to-[#F5F5F5] px-8 py-10 md:px-16 md:py-28">
          <div className="text-left md:text-left">
            <h2 className="font-jersey text-5xl md:text-6.5xl font-normal leading-tight text-blue">
              OUR<br />OFFERINGS
            </h2>
            <div className="w-w-120 md:w-32 h-1 bg-orange mt-4 mx-0"></div>
          </div>
        </div>

        {offeringsData.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className={`px-6 py-10 md:px-8 md:py-12 ${id === 1 ? 'border-b md:border-r' : ''} border-[#ACAAAA] bg-white`}
          >
            <img src={icon} alt="Offering Icon" className="mb-4 w-auto" />
            <h3 className="text-xl md:text-2xl font-bold text-blue mb-3 leading-snug">{title}</h3>
            <p className="text-base md:text-lg font-medium text-gray leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
