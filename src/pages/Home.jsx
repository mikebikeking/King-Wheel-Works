import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import enve3_4 from '../assets/Enve_3.4.webp';
import belgium from '../assets/hed_belgium.webp';
import jet from '../assets/hed_jet.webp';

const Home = () => {
  const valueProps = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Expert Craftsmanship',
      description: 'Over two decades of wheel building experience with meticulous attention to detail.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Premium Components',
      description: 'Hand-selected hubs, rims, spokes, and nipples from industry-leading manufacturers.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Custom Tailored',
      description: 'Every wheelset is built specifically for your riding style, weight, and performance goals.'
    }
  ];

  const featuredBuilds = [
    {
      title: 'Road Racing Build',
      image: enve3_4
    },
    {
      title: 'Gravel Adventure',
      image: belgium
    },
    {
      title: 'Track Sprint',
      image: jet
    }
  ];

  return (
    <div>
      <Hero />

      {/* Value Propositions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
              Why Choose Custom Built Wheels?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Factory wheels are built for the masses. Custom wheels are built for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-brand-accent mb-6">
                  {prop.icon}
                </div>
                <h3 className="text-2xl font-semibold text-brand-charcoal mb-4">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Teaser */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
              Featured Builds
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse at recent custom wheelsets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredBuilds.map((build, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center overflow-hidden">
                  {build.image ? (
                    <img 
                      src={build.image} 
                      alt={build.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full border-8 border-white relative">
                        {[...Array(16)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-white origin-top"
                            style={{
                              transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
                            }}
                          />
                        ))}
                        <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-gray-600"></div>
                      </div>
                      <p className="text-white font-semibold">{build.title}</p>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{build.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio" className="btn-primary inline-block">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-charcoal text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Dream Wheelset?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your riding goals and create the perfect wheels for your needs.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Start Your Custom Build
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
