import { Link } from 'react-router-dom';
import logo from '../assets/KWW_Logo.png';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-brand-charcoal to-gray-800 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Background Pattern/Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative container-custom py-8 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Precision Engineered.<br />
              Hand Built.<br />
              Performance Perfected.
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-gray-300 leading-relaxed max-w-2xl">
              Custom bicycle wheels crafted with decades of expertise, 
              using premium components and time-tested techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center">
                Start Your Custom Build
              </Link>
              <Link to="/portfolio" className="text-center px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-charcoal transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/50">
                View Portfolio
              </Link>
            </div>
          </div>
          
          {/* Logo on the right side */}
          <div className="hidden lg:flex items-center justify-center">
            <img 
              src={logo} 
              alt="King Wheel Works Logo" 
              className="max-w-md w-full h-auto opacity-90"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
