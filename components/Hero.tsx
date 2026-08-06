'use client';

const Hero = () => {
  return (
    <header
      id="home"
      className="relative bg-gradient-to-br from-light-blue to-primary-100 py-24 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div className="mx-auto max-w-7xl">
        <div className="hero-content animate-fade-in-up">
          <div className="text-lg sm:text-xl font-semibold text-primary-600 mb-2">
            Welcome to
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-600 mb-4">
            Ayush Ranabhat's AWS Practice
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 opacity-85">
            Master AWS Cloud Solutions and Best Practices - CLD 600
          </p>
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-primary-600 to-azure px-8 py-3 text-white font-bold rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Explore Projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
