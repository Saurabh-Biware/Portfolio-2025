import { Card, CardContent } from "@/components/ui/card";
import { useState } from 'react';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award';
}

const experienceData: TimelineItem[] = [
  {
    id: 1,
    year: "Apr 2022 - Present",
    title: "Full Stack Developer - Oerlikon Digital Hub",
    description: `• Revamped digital ordering platform UX, boosting conversion rates by 25% through responsive design and performance optimization, achieving 40% faster load times using modern frontend frameworks integrated with backend Node.js microservices.

• Achieved 30% reduction in critical bugs by analyzing issue reports before and after frontend overhaul, improving overall system architecture and microservice communication.

• Developed scalable frontend for data-intensive app with real-time data processing, supported by Node.js backend microservices deployed on AWS Lambda, cutting load times by 50%.

• Implemented Single Sign-On (SSO) across multiple applications, ensuring strict security compliance with robust backend authentication microservices.

• Designed and maintained MongoDB data models and databases for development and production, ensuring efficient data storage and retrieval in microservices architecture.

• Connected IoT-enabled digital access box via OPCUA protocol to retrieve machine data and enable real-time synchronization with Digital Twin system.

• Led comprehensive knowledge transfer sessions on Node.js microservices best practices, AWS cloud services, Redis caching strategies, and overall full stack development to enhance team proficiency.`,
    type: "experience"
  },
  {
    id: 2,
    year: "Jun 2021 - Apr 2022",
    title: "Internship & Master Thesis - ABB AG",
    description: `Implemented visual representation for long time-series process industry data using Change Point Detection Algorithm. Proposed innovative aggregation method for 2-D plots to effectively represent base form and distribution of data.`,
    type: "experience"
  },
  {
    id: 3,
    year: "Feb 2019 - Mar 2020",
    title: "Jr. Software Developer - Tata Consultancy Services",
    description: `Advocated for User Experience importance and engaged stakeholders throughout design process. Designed databases and schemas for high-volume SPAs, conducted user interviews using Design Thinking, and created high-fidelity prototypes using Agile Methodology.`,
    type: "experience"
  }
];

const educationData: TimelineItem[] = [
  {
    id: 4,
    year: "Apr 2020 - 2022",
    title: "Master's in Computer Science - SRH Hochschule Heidelberg",
    description: `Graduated with GPA 2.0/5.0. Awarded Best Master Thesis in Applied Computer Science, 2022.`,
    type: "education"
  },
  {
    id: 5,
    year: "2012 - May 2016",
    title: "Bachelor's in Computer Science - University of Pune",
    description: `Graduated with GPA 1.8/5.0 (German grade equivalent). Strong foundation in computer science fundamentals and engineering principles.`,
    type: "education"
  }
];

const awardData: TimelineItem[] = [
  {
    id: 6,
    year: "2022",
    title: "Best Master Thesis Award",
    description: `Recognized for outstanding research in Applied Computer Science for innovative work on time-series data visualization and Change Point Detection algorithms.`,
    type: "award"
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'award'>('experience');

  const getActiveData = () => {
    switch(activeTab) {
      case 'experience': return experienceData;
      case 'education': return educationData;
      case 'award': return awardData;
    }
  };

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm a <span className="font-semibold text-blue-400">Full Stack Developer</span> based in Munich, Germany, specializing in building scalable web applications with modern technologies.
              </p>
              <p className="text-muted-foreground mb-4">
                With expertise in <span className="font-semibold text-blue-400">JavaScript, TypeScript, React, Node.js, and AWS</span>, I focus on creating high-performance solutions with seamless user experiences and robust backend architectures.
              </p>
              <p className="text-muted-foreground">
                Currently working at <span className="font-semibold text-blue-400">Oerlikon Digital Hub</span>, I've delivered 25% conversion rate improvements and 50% faster load times through innovative full-stack solutions.
              </p>
              <h3 className="text-xl font-semibold mt-8 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Key Achievements</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400 mb-1">25%</div>
                  <div className="text-sm text-gray-300">Conversion Rate Increase</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400 mb-1">50%</div>
                  <div className="text-sm text-gray-300">Load Time Reduction</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/20">
                  <div className="text-3xl font-bold text-pink-400 mb-1">30%</div>
                  <div className="text-sm text-gray-300">Bug Reduction</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400 mb-1">AWS</div>
                  <div className="text-sm text-gray-300">Serverless Architecture</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline with Tabs */}
        <div className="lg:col-span-2">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8 justify-center lg:justify-start">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-black/30 text-gray-400 hover:text-white border border-blue-500/20'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-black/30 text-gray-400 hover:text-white border border-blue-500/20'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('award')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'award'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-black/30 text-gray-400 hover:text-white border border-blue-500/20'
              }`}
            >
              Awards
            </button>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>
            
            <div className="space-y-16">
              {getActiveData().map((item) => (
                <div key={item.id} className="relative pl-16 flex items-start group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all w-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
