'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12 px-4 sm:px-6 lg:px-8 mt-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="footer-section">
            <h3 className="text-lg font-bold text-azure mb-3">
              AWS Practice - CLD 600
            </h3>
            <p className="text-white/90">
              A comprehensive guide to AWS cloud solutions by Ayush Ranabhat
            </p>
          </div>

          <div className="footer-section">
            <h3 className="text-lg font-bold text-azure mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Ayush-Ranabhat/AWS_Practice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-azure transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://aws.amazon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-azure transition-colors"
                >
                  AWS Official
                </a>
              </li>
              <li>
                <a
                  href="https://docs.aws.amazon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-azure transition-colors"
                >
                  AWS Documentation
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="text-lg font-bold text-azure mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-azure transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-azure transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  className="text-white/80 hover:text-azure transition-colors"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-azure/20 rounded-lg p-4 mb-6 text-center">
          <h4 className="text-lg font-bold text-azure mb-2">Ayush Ranabhat</h4>
          <p className="text-white font-semibold">
            <a
              href="mailto:Ayura833@gmail.com"
              className="text-azure hover:text-white transition-colors"
            >
              Ayura833@gmail.com
            </a>
          </p>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-white/70">
          <p>
            &copy; {currentYear} AWS Practice Repository. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
