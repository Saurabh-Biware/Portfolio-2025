import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Eye, FileText, Github, Linkedin } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleResumeView = () => {
    window.open('https://drive.google.com/file/d/1VUSKW1wqYyrtRYFavCwJ8cHgxCIK4WwW/view?usp=sharing', '_blank');
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=1VUSKW1wqYyrtRYFavCwJ8cHgxCIK4WwW', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36">
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Photo - Shows first on mobile */}
          <motion.div 
            className="flex lg:hidden justify-center order-first"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <img 
                src="https://github.com/saurabh-biware.png" 
                alt="Saurabh Biware"
                className="relative w-full h-full rounded-full object-cover border-4 border-blue-500/30 shadow-2xl"
              />
            </div>
          </motion.div>
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-normal mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block">Hi, I'm Saurabh Biware</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">I design and develop high-performance web applications.</span>
          </motion.h1>
          
          <motion.h2 
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="block">I craft</span>
            <AnimatedText 
              text={[
                " Scalable full stack solutions ", 
                "Intelligent & data-driven features", 
                "Scalable system design",
                "AI-powered user experiences"
              ]} 
              className="text-blue-400 font-medium" 
            />
          </motion.h2>
          
          <motion.p 
            className="text-md mb-10 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
           Building reliable, intuitive, and future-ready software with a passion for innovation.
          </motion.p>
          
          {/* Social Icons above buttons */}
          <motion.div 
            className="flex justify-center lg:justify-start gap-6 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="https://github.com/saurabh-biware" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                <Github className="w-6 h-6 relative z-10 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            </a>
            <a href="https://linkedin.com/in/saurabh-biware" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                <Linkedin className="w-6 h-6 relative z-10 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            </a>
              
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="#github-projects" className="w-full sm:w-auto">
              <Button className="w-full py-6 px-8 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2">
                <Eye className="w-5 h-5" />
                My Work
              </Button>
            </a>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button 
                variant="outline" 
                className="flex-1 sm:flex-none py-6 px-8 border-blue-500/30 text-blue-400 hover:bg-blue-900/20 flex items-center justify-center gap-2"
                onClick={handleResumeView}
              >
                <FileText className="w-5 h-5" />
                Resume
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="py-6 px-3 border-blue-500/30 text-blue-400 hover:bg-blue-900/20"
                onClick={handleResumeDownload}
                title="Download Resume"
              >
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div 
            className="mt-12 grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">20+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">15+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-16 flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="animate-bounce p-2 bg-blue-900/30 rounded-full border border-blue-500/20">
              <a href="#technologies" className="text-blue-400">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </a>
            </div>
          </motion.div>
          </div>
          
          {/* Right Side - Desktop Photo */}
          <motion.div 
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <img 
                src="https://github.com/saurabh-biware.png" 
                alt="Saurabh Biware"
                className="relative w-full h-full rounded-full object-cover border-8 border-blue-500/20 shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
