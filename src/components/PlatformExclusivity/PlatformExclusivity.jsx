import scalability from '../../assets/img/scalability.svg';
import security from '../../assets/img/security.svg';
import ready from '../../assets/img/ready.svg';
import wideRange from '../../assets/img/wide-range.svg';
import payment from '../../assets/img/payment.svg';
import devices from '../../assets/img/devices.svg';

import topLeft from '../../assets/img/top-left.png';
import topRight from '../../assets/img/top-right.png';
import bottomLeft from '../../assets/img/bottom-left.png';
import bottomRight from '../../assets/img/bottom-right.png';

const features = [
  {
    icon: scalability,
    title: 'Extensive Scalability',
    description:
      'Build a platform that can effectively entertain a large number of users without compromising on the performance',
  },
  {
    icon: security,
    title: 'Higher Level of Security',
    description:
      'We have used AWS cloud computing services that make our games secure and reliable',
  },
  {
    icon: ready,
    title: 'Ready-To-Use platform',
    description:
      'Start your fantasy sports business in a matter of days with our solution packaged with all the latest features',
  },
  {
    icon: wideRange,
    title: 'Supports a Wide Range of Sports',
    description:
      'Build a platform that can effectively entertain a large number of users without compromising on the performance',
  },
  {
    icon: payment,
    title: 'Multiple Payment Gateway',
    description:
      'The fantasy sports platform comes integrated with many popular payment gateways that make transactions secure and hassle-free',
  },
  {
    icon: devices,
    title: 'Compatible with all Devices',
    description:
      'Our fantasy sports platform is compatible with various devices like PC, smartphones, tablets, etc.',
  },
];

export default function PlatformExclusivity() {
  return (
    <section className="relative py-12 md:py-20 px-6 bg-white overflow-hidden">

      <img src={topLeft} className="absolute top-0 left-0 hidden md:block z-40" alt="" />
      <img src={topRight} className="absolute top-0 right-0 hidden md:block z-40" alt="" />
      <img src={bottomLeft} className="absolute bottom-0 left-0 hidden md:block z-40" alt="" />
      <img src={bottomRight} className="absolute bottom-0 right-0 hidden md:block z-40" alt="" />

      <div className="relative z-10 max-w-8xl mx-auto text-center">
        <h2 className="text-5xl md:text-6.5xl font-jersey font-normal text-blue">PLATFORM EXCLUSIVITY</h2>
        <div className="w-w-120 h-1 bg-orange mx-auto mt-4 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="border border-[#B8B8B8] p-8 bg-white text-left flex items-start gap-4"
            >
              <img src={feature.icon} alt={feature.title} className="" />
              <div>
                <h3 className="text-2xl md:text-3.5xl font-bold text-blue">{feature.title}</h3>
                <p className="text-sm md:text-lg text-gray font-medium mt-4">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
