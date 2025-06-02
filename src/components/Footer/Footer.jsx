import logo from "../../assets/img/Logo.svg";
import pdfIcon from "../../assets/img/pdf-icon.png";
import facebookIcon from "../../assets/img/facebook.svg";
import linkedinIcon from "../../assets/img/linkedin.svg";
import youtubeIcon from "../../assets/img/youtube.svg";
import twitterIcon from "../../assets/img/twitter.svg";
import yudizLogo from "../../assets/img/yudiz-logo.svg"; 

export default function Footer() {
  return (
    <footer className="bg-white border-t text-sm">
      <div className="max-w-8xl mx-auto pt-24 pb-16 px-6 lg:px-0 flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex items-start gap-6 max-w-lg">
          <img src={logo} alt="Logo" className="h-auto" />
          <p className="text-xl font-medium text-gray leading-8">
            <strong className="font-semibold">FanSportiz</strong> is a fantasy
            sports platform delivering fun and thrilling experiences to your
            customers.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:gap-6 ">
          <h4 className="text-blue font-bold text-2xl">Quick links</h4>
          <a href="#" className="text-blue font-medium text-2xl text-start hover:text-orange transition duration-200">
            Home
          </a>
          <a href="#" className="text-blue font-medium text-2xl hover:text-orange transition duration-200">
            Plans
          </a>
          <a href="#" className="text-blue font-medium text-2xl hover:text-orange transition duration-200">
            Contact
          </a>
        </div>

        <div className="flex flex-col items-start">
          <div>
            <h4 className="text-blue font-bold text-2xl mb-4">
              Connect with Us
            </h4>
            <div className="flex gap-10 mb-12">
              <img
                src={facebookIcon}
                alt="Facebook"
                title="Facebook"
                className="hover:opacity-80 cursor-pointer"
              />
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                title="LinkedIn"
                className="hover:opacity-80 cursor-pointer"
              />
              <img
                src={youtubeIcon}
                alt="YouTube"
                title="YouTube"
                className="hover:opacity-80 cursor-pointer"
              />
              <img
                src={twitterIcon}
                alt="Twitter"
                title="Twitter"
                className="hover:opacity-80 cursor-pointer"
              />
            </div>
          </div>

          <a
            href="#"
            className="flex items-center gap-2 border-2 border-[#E2E2E2] rounded-2xl px-4 py-6 text-blue hover:bg-blue hover:text-white transition"
          >
            <img src={pdfIcon} alt="PDF" className="" />
            <span className="text-xl font-medium">
              Download Complete <br className="hidden sm:block font-bold" />
              Presentation
            </span>
          </a>
        </div>
      </div>

      <div className="max-w-8xl mx-auto border-t border-[#E6E6E7] py-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-lg gap-2">
        <p className="flex items-center gap-1 text-blue">
          © Fansportiz, 2021 &nbsp; Powered by
          <img
            src={yudizLogo}
            alt="Yudiz Logo"
            className="w-auto"
          />
        </p>

        <div className="flex gap-3 items-center text-base font-medium">
          <a href="#" className="">
            Terms & Conditions
          </a>
          <span className="text-orange w-0.5">/</span>
          <a href="#" className="">
            Privacy Policy
          </a>
          <span className="text-orange w-0.5">/</span>
          <a href="#" className="">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
}
