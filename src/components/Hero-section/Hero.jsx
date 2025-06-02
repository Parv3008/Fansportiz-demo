import heroimg from "../../assets/img/hero img.png";
import downarrow from "../../assets/img/down arrow.svg";

export default function Hero() {
  return (
    <section className="text-center pt-4 bg-hero-pattern bg-center object-cover">
      <h1 className="font-jersey text-4xl sm:text-6xl md:text-7.5xl font-normal leading-tight text-blue ">
        <span className="text-orange">Captivate</span> your audience <br />
        with our whitelabel solution
      </h1>

      <button className="mt-6 sm:mt-12 border-4 border-blue text-blue px-6 py-2 sm:px-10 sm:py-4 font-bold rounded hover:bg-blue hover:text-white transition">
        Request a Demo
      </button>

      <div className="mt-11 flex justify-center">
        <img src={heroimg} alt="Cricket Blue" className="" />
      </div>

      <a href="#next-section" className="mt-10 pb-4 text-sm text-blue flex justify-center items-center flex-col cursor-pointer">
         <div className="font-semibold text-xl text-blue hover:text-orange transition duration-200">SCROLL</div>
        <div className="animate-bounce mt-2"><img src={downarrow} alt="" /></div>
      </a>
    </section>
  );
}
