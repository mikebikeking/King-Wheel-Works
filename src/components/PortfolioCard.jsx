const PortfolioCard = ({ title, subtitle, specs, image}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
      {/* Image */}
      <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center p-8">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full border-8 border-gray-400 relative">
              {/* Spoke pattern simulation */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-gray-400 origin-top"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                  }}
                />
              ))}
              <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-gray-500"></div>
            </div>
            
          </div>
        )}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 text-white w-full">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-300 mb-3">{subtitle}</p>
          {specs && (
            <ul className="text-xs space-y-1 text-gray-400">
              {specs.map((spec, index) => (
                <li key={index}>• {spec}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Card Footer (Always Visible) */}
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-lg text-brand-charcoal">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
