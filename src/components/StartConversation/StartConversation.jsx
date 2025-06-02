import player from "../../assets/img/player.png";
import dottedBg from "../../assets/img/dotted-bg.png";

export default function StartConversation() {
  return (
    <section className="relative w-full py-8 md:py-12 px-6 bg-gradient-to-r from-[#000F2E] via-[#042365] via-[#05266B] to-[#0D161A]">
      <div className="max-w-8xl mx-auto flex flex-col xl:flex-row xl:items-center justify-between ">
        
        <div className="text-left">
          <h2 className="font-jersey text-white font-normal text-5xl md:text-6.5xl leading-lh-70">
            START A CONVERSATION
          </h2>
          <div className="w-w-120 h-1 bg-orange mt-2 mb-4 md:mt-4 md:mb-8"></div>
          <p className="text-white text-lg md:text-2xl font-normal leading-9 max-w-2xl mb-6">
            Play our new interactive adventure game and experience the thrill of the chase.
          </p>
        </div>

        <div className="">
          <button className="bg-white text-blue font-semibold text-sm md:text-xl px-10 py-6 rounded shadow hover:scale-105 transition-transform duration-200">
            TALK WITH US
          </button>
        </div>

        <div className="max-w-xs md:max-w-sm lg:max-w-md flex justify-center mt-6 lg:mt-0">
          <img
            src={dottedBg}
            alt="Dotted Background"
            className="absolute object-contain h-72 right-2 top-12 xl:top-2 hidden md:block"
          />
          <img
            src={player}
            alt="Player"
            className="absolute bottom-24 xl:bottom-0 right-16 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}