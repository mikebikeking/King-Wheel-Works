import { Link } from 'react-router-dom';
import wheelBuildImage from '../assets/KWW Wheel Build.JPG';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a detailed conversation about your riding style, goals, and preferences. Whether you\'re racing crits, touring cross-country, or shredding trails, understanding your needs is crucial to building the perfect wheelset.',
      details: [
        'Discuss riding discipline and terrain',
        'Assess rider weight and power output',
        'Review budget and timeline',
        'Explore component preferences'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Component Selection',
      description: 'Based on our consultation, I\'ll recommend a curated selection of hubs, rims, spokes, and nipples. Every component is chosen for quality, performance, and compatibility with your specific requirements.',
      details: [
        'Hub selection (engagement, weight, durability)',
        'Rim profile and material specification',
        'Spoke type and count determination',
        'Nipple material and finish selection'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Expert Hand-Lacing',
      description: 'This is where craftsmanship meets precision. Each spoke is individually laced, tensioned, and stress-relieved using time-tested techniques and professional-grade tools. The build process typically takes 3-5 hours per wheelset.',
      details: [
        'Precision spoke length calculation',
        'Pattern lacing (radial, 2-cross, 3-cross)',
        'Initial tensioning and truing',
        'Stress relief and final tensioning',
        'Dish and roundness verification'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Quality Check & Delivery',
      description: 'Before your wheels leave the shop, they undergo rigorous quality control. Every measurement is verified, and the wheels are given a final inspection. You\'ll receive detailed care instructions and ongoing support.',
      details: [
        'Final truing and tension balance check',
        'Spoke tension measurement (all spokes)',
        'Wheel weight documentation',
        'Care and maintenance instructions',
        'Break-in period guidance',
        'Lifetime building warranty'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div 
      className="min-h-screen bg-white relative"
      style={{
        backgroundImage: `url(${wheelBuildImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Hero Section */}
      <section className="relative z-10 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Custom Build Journey
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From concept to completion, here's how we collaborate to create your perfect wheelset.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 w-0.5 h-full bg-white/30 -z-10"></div>
                )}

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon and Number */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-lg">
                      {step.icon}
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-4xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-md">
                    <h2 className="text-3xl font-bold text-brand-charcoal mb-4">
                      {step.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-brand-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-md">
            <h2 className="text-4xl font-bold text-brand-charcoal text-center mb-12">
              Build Timeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-brand-accent mb-2">1-2</div>
                <div className="text-xl font-semibold text-brand-charcoal mb-2">Days</div>
                <p className="text-gray-600">Consultation & component ordering</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-brand-accent mb-2">7-10</div>
                <div className="text-xl font-semibold text-brand-charcoal mb-2">Days</div>
                <p className="text-gray-600">Component arrival & build scheduling</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-brand-accent mb-2">1-2</div>
                <div className="text-xl font-semibold text-brand-charcoal mb-2">Days</div>
                <p className="text-gray-600">Hand-lacing, truing & quality check</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-8 italic">
              Total turnaround: Approximately 2-3 weeks from initial consultation to delivery
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative z-10">
        <div className="container-custom text-center">
          <div className="bg-brand-charcoal/90 backdrop-blur-sm text-white rounded-lg p-12 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your Build?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's start the conversation about your perfect wheelset.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Start Your Custom Build
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
