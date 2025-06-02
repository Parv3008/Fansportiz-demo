import bgImage from "../../assets/img/bg-action.png"; 
import arrowIcon from "../../assets/img/arrow-icon.svg"; 

export default function CallToAction() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-12 px-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-left">
          <h2 className="font-jersey text-white font-normal text-5xl md:text-6.5xl leading-lh-70">
            Be a part of the action
          </h2>
          <div className="w-w-120 h-1 bg-orange mt-3 md:mt-6 mb-4 mx-0"></div>
          <p className="text-white text-lg md:text-2xl font-normal">
            Let’s Create Something Awesome
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <img
            src={arrowIcon}
            alt="Arrow"
            className="absolute -left-36 -top-6 hidden md:block"
          />
          <button className="bg-white text-blue font-semibold text-sm md:text-xl px-7 py-4 md:px-10 md:py-6 rounded shadow hover:scale-105 transition-transform duration-200">
            TALK WITH US
          </button>
        </div>
      </div>
    </section>
  );
}
