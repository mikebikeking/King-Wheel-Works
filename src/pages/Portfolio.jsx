import PortfolioCard from '../components/PortfolioCard';
import enve3_4 from '../assets/Enve_3.4.webp';
import belgium from '../assets/hed_belgium.webp';
import jet from '../assets/hed_jet.webp';
import stans from '../assets/stans_crest.webp';
import mavic from '../assets/mavic_open_pro.webp';
import kinlin from '../assets/kinlin_xr.jpg';
import enve6_7 from '../assets/Enve_6.7.webp';
import ryde from '../assets/ryde_andra.webp';
import sun from '../assets/sun_envy.webp';


const Portfolio = () => {
  const wheelBuilds = [
    {
      title: 'Road Racing Build',
      subtitle: 'Lightweight Carbon Clincher',
      specs: [
        'Chris King R45 Hubs',
        'ENVE SES 3.4 Rims',
        'Sapim CX-Ray Spokes',
        '1,380g total weight'
      ],
      image: enve3_4
    },
    {
      title: 'Gravel Adventure',
      subtitle: 'All-Road Alloy Tubeless',
      specs: [
        'DT Swiss 350 Hubs',
        'HED Belgium Plus Rims',
        'DT Swiss Competition Spokes',
        'Tubeless ready, 30mm internal'
      ],
      image: belgium
    },
    {
      title: 'Track Sprint',
      subtitle: 'Fixed Gear Carbon',
      specs: [
        'Phil Wood Track Hubs',
        'HED Jet RC Rims',
        'Sapim CX-Ray Spokes',
        'Optimized for velodrome'
      ],
      image: jet
    },
    {
      title: 'Mountain XC',
      subtitle: '29" Carbon Cross-Country',
      specs: [
        'Industry Nine Hydra Hubs',
        'Stan\'s NoTubes Crest Rims',
        'Sapim Race Spokes',
        'Ultra-light for climbing'
      ],
      image: stans
    },
    {
      title: 'Endurance Road',
      subtitle: 'All-Weather Aluminum',
      specs: [
        'Shimano Ultegra Hubs',
        'Mavic Open Pro Rims',
        'DT Swiss Champion Spokes',
        'Durable and reliable'
      ],
      image: mavic
    },
    {
      title: 'Cyclocross Race',
      subtitle: 'Tubular Disc Brake',
      specs: [
        'White Industries CLD Hubs',
        'Kinlin XR-31T Rims',
        'Sapim D-Light Spokes',
        'Mud-shedding spoke pattern'
      ],
      image: kinlin
    },
    {
      title: 'Triathlon Aero',
      subtitle: 'Deep Section Carbon',
      specs: [
        'Zipp 77/177 Hubs',
        'ENVE SES 6.7 Rims',
        'Sapim CX-Ray Aero Spokes',
        'Optimized for time trials'
      ],
      image: enve6_7
    },
    {
      title: 'Touring Expedition',
      subtitle: '36-Spoke Bombproof Build',
      specs: [
        'SON Dynamo Front Hub',
        'Ryde Andra Rims',
        'DT Swiss Alpine III Spokes',
        'Built for loaded touring'
      ],
      image: ryde
    },
    {
      title: 'BMX Racing',
      subtitle: 'Lightweight 20" Race',
      specs: [
        'Profile Elite Hubs',
        'Sun Envy Rims',
        'Sapim Leader Spokes',
        'Gate start optimized'
      ],
      image: sun
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-brand-charcoal text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Custom Wheel Builds
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each wheelset is a unique collaboration between rider and builder, 
            meticulously crafted to deliver optimal performance for your specific needs.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wheelBuilds.map((build, index) => (
              <PortfolioCard
                key={index}
                title={build.title}
                subtitle={build.subtitle}
                specs={build.specs}
                image={build.image}
              
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-brand-charcoal mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every build is custom. These examples represent just a fraction of what's possible. 
            Let's discuss your vision.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Start Your Custom Build
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
