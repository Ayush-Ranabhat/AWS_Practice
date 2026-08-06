'use client';

const About = () => {
  const features = [
    {
      icon: '🏗️',
      title: 'Architecture Patterns',
      description: 'Explore scalable and reliable AWS architecture designs',
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Real-world AWS solutions and implementations',
    },
    {
      icon: '📚',
      title: 'Best Practices',
      description: 'Industry standards and AWS recommended practices',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-600 text-center mb-4">
          About This Repository
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Welcome to the AWS Practice repository! This is a comprehensive collection
          of AWS cloud solutions, architectural patterns, and best practices designed
          to help master AWS cloud technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-light-blue to-primary-50 p-8 rounded-lg border-t-4 border-azure transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
