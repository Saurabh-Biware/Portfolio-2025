import { Atom, FileCode, Palette, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const techStack = [
    { icon: Atom, label: "React" },
    { icon: FileCode, label: "TypeScript" },
    { icon: Palette, label: "Tailwind" },
    { icon: Zap, label: "Vite" },
  ];
  
  return (
    <footer className="relative">
      {/* Main footer content */}
      <div className="bg-gray-900/80 py-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Logo and copyright */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/logo.svg" 
                alt="Kalp Logo" 
                className="h-10 w-10"
              />
              <div>
                <p className="text-gray-400 text-sm">
                  © {currentYear} Saurabh Biware. All rights reserved.
                </p>
              </div>
            </div>

            {/* Right side - Tech stack icons */}
            <div className="flex items-center space-x-4">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  title={tech.label}
                >
                  <tech.icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
