import { Link } from 'react-router-dom';
import portrait from '../assets/KWW Port.jpeg';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-gray-800 to-brand-charcoal text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Craftsmanship, precision, and passion for cycling excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Professional Portrait */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="rounded-lg shadow-xl overflow-hidden w-3/4 max-w-md">
                <img 
                  src={portrait} 
                  alt="Professional portrait of King Wheel Works master builder" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-brand-charcoal mb-6">
                Building Wheels Since 2006
              </h2>
              
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  What started as a passion project in a small garage has evolved into a 
                  specialized craft that I've been perfecting for over two decades. Every 
                  wheelset that leaves my shop represents thousands of hours of experience, 
                  continuous learning, and an unwavering commitment to excellence.
                </p>
                
                <p>
                  I came to wheel building through necessity—frustrated with factory wheels 
                  that couldn't handle my aggressive riding style, I learned to build my own. 
                  That first build was far from perfect, but it ignited a fascination with 
                  the engineering, precision, and artistry required to create truly exceptional 
                  wheels.
                </p>
                
                <p>
                  Today, I work with riders of all disciplines—from weekend warriors to 
                  professional racers, touring cyclists to mountain bike enthusiasts. What 
                  unites them all is a desire for wheels that are specifically tailored to 
                  their needs, not mass-produced for the average rider.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-brand-charcoal text-center mb-12">
              Building Philosophy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-brand-charcoal mb-4">
                  Quality Over Speed
                </h3>
                <p className="text-gray-700">
                  Each wheel is built with meticulous attention to detail. I never rush the 
                  process. Proper stress-relief, precise tensioning, and careful truing take 
                  time, but they're essential for creating wheels that last.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-brand-charcoal mb-4">
                  Rider-Centric Approach
                </h3>
                <p className="text-gray-700">
                  There's no one-size-fits-all in custom wheel building. Your weight, riding 
                  style, terrain, and goals all factor into component selection and build 
                  specifications. Every decision is made with you in mind.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-brand-charcoal mb-4">
                  Premium Components
                </h3>
                <p className="text-gray-700">
                  I only work with components I trust. Years of experience have taught me 
                  which manufacturers consistently deliver quality, and I maintain relationships 
                  with the best in the industry to ensure you get proven, reliable parts.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-brand-charcoal mb-4">
                  Lifetime Support
                </h3>
                <p className="text-gray-700">
                  Your relationship with your wheels doesn't end at delivery. I provide 
                  ongoing support, maintenance advice, and warranty service. If you have 
                  questions or concerns, I'm always available.
                </p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-charcoal mb-8">
              Experience & Credentials
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700">
              <p className="flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                20+ years of professional wheel building
              </p>
              <p className="flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                2,500+ custom wheelsets built
              </p>
              <p className="flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Certified professional mechanic
              </p>
              <p className="flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Wheels built for podium finishes in road, track, triathlon, and MTB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-charcoal text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to experience the difference that custom-built wheels can make? 
            Let's discuss your project.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Start Your Custom Build
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
