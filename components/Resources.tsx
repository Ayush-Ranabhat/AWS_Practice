'use client';

const Resources = () => {
  const resources = [
    {
      title: 'AWS Documentation',
      description: 'Official AWS documentation and guides',
    },
    {
      title: 'Learning Materials',
      description: 'Tutorials, courses, and educational content',
    },
    {
      title: 'Code Examples',
      description: 'Sample code and implementation examples',
    },
    {
      title: 'Tools & Scripts',
      description: 'Automation scripts and utility tools',
    },
  ];

  return (
    <section id="resources" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-600 text-center mb-12">
          Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-light-blue p-8 rounded-lg text-center border-b-4 border-azure transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-primary-600 mb-3">
                {resource.title}
              </h3>
              <p className="text-gray-700 text-sm">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
