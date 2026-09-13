import bannerImg from '../assets/banner.png'

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Left Side */}
      <div className="flex-1">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
          Explore frontend, backend, database, and tooling options, 
          compare them side by side, and put together the stack that fits your next project.
        </p>

        
      {/* Buttons */}
         <div className="flex items-center gap-6">
            <button className="px-6 py-3 rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-white font-medium hover:opacity-90 transition-opacity">
                Explore Technologies
            </button>
            <button className="px-6 py-3 rounded-full border border-pink-500 text-pink-500 font-medium hover:bg-pink-50 transition-colors">
                Learn More
            </button>
        </div>

      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center">
        <img 
          src={bannerImg} 
          alt="Dev Stack" 
          className="w-full max-w-md object-contain"
        />
      </div>

    </section>
  );
};

export default Banner;