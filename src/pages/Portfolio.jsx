import PortfolioCard from '../components/PortfolioCard';

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
      imagePlaceholder: 'Road Racing Wheelset'
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
      imagePlaceholder: 'Gravel Wheelset'
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
      imagePlaceholder: 'Track Wheelset'
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
      imagePlaceholder: 'XC MTB Wheelset'
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
      imagePlaceholder: 'Endurance Wheelset'
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
      imagePlaceholder: 'Cyclocross Wheelset'
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
      imagePlaceholder: 'Triathlon Wheelset'
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
      imagePlaceholder: 'Touring Wheelset'
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
      imagePlaceholder: 'BMX Wheelset'
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
                imagePlaceholder={build.imagePlaceholder}
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
