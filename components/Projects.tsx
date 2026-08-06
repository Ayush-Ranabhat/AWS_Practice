'use client';

const Projects = () => {
  const projects = [
    {
      title: 'EC2 & Compute',
      description: 'Virtual machine instances and compute solutions',
    },
    {
      title: 'S3 & Storage',
      description: 'Object storage and data management',
    },
    {
      title: 'RDS & Databases',
      description: 'Relational database services and management',
    },
    {
      title: 'Lambda & Serverless',
      description: 'Serverless computing and event-driven architecture',
    },
    {
      title: 'VPC & Networking',
      description: 'Virtual private cloud and network infrastructure',
    },
    {
      title: 'Security & IAM',
      description: 'Identity and access management',
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-light-blue"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-600 text-center mb-12">
          Projects & Topics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border-l-4 border-azure shadow-azure transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-primary-600 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
