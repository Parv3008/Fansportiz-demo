import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import bgPattern from '../../assets/img/faq-bg.png';
import cornerTopRight from '../../assets/img/corner-top-right.png';
import cornerBottomLeft from '../../assets/img/corner-bottom-left.png';

const faqs = [
  {
    question: 'What Are The Differences Between American Football And Rugby?',
    answer: 'Features like squad announcements, toss updates, and more helps users make accurate predictions and plan a winning strategy. Weight loss or maintenance: Sports can help you to burn calories and lose weight, or to maintain a healthy weight.',
  },
  {
    question: 'What Is The Offside Rule In Soccer?',
    answer:
      'Features like squad announcements, toss updates, and more helps users make accurate predictions and plan a winning strategy. Weight loss or maintenance: Sports can help you to burn calories and lose weight, or to maintain a healthy weight.',
  },
  {
    question: 'What Is The Difference Between A Foul And A Penalty In Basketball?',
    answer: 'Features like squad announcements, toss updates, and more helps users make accurate predictions and plan a winning strategy. Weight loss or maintenance: Sports can help you to burn calories and lose weight, or to maintain a healthy weight.',
  },
  {
    question: 'What Are The Different Types Of Wrestling Holds?',
    answer: 'Features like squad announcements, toss updates, and more helps users make accurate predictions and plan a winning strategy. Weight loss or maintenance: Sports can help you to burn calories and lose weight, or to maintain a healthy weight.',
  },
];

export default function FaqSection() {
  return (
    <section
      className="relative w-full py-12 md:py-20 px-4 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <img
        src={cornerTopRight}
        alt=""
        className="absolute top-0 right-0 w-28 md:w-48"
      />
      <img
        src={cornerBottomLeft}
        alt=""
        className="absolute bottom-0 left-0 w-28 md:w-28"
      />

      <div className="max-w-5.5xl mx-auto relative z-10">
        <h2 className="text-center text-6.5xl font-normal font-jersey text-blue">
          FAQ
        </h2>
        <div className="w-w-120 h-1 bg-orange mx-auto mb-12"></div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div className="border border-[#C7C7C7] bg-white">
                  <Disclosure.Button className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-blue text-base md:text-xl focus:outline-none">
                    <span>{`${idx + 1}. ${faq.question}`}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 py-5 text-lg font-medium text-[#707070] leading-7 border-t border-[#C7C7C7]">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
