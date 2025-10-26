import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  image: string;
  tags: string[];
  credentialUrl?: string;
  status: 'active' | 'expired' | 'lifetime';
}

const fetchCertifications = async (): Promise<Certification[]> => {
  try {
    const response = await fetch('/data/certifications.json');
    const data = await response.json();
    return data.certifications || [];
  } catch (error) {
    console.error('Error loading certifications:', error);
    return [];
  }
};

const Certifications = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (certId: string) => {
    setImageErrors(prev => ({ ...prev, [certId]: true }));
  };

  useEffect(() => {
    const loadCertifications = async () => {
      try {
        const data = await fetchCertifications();
        setCertifications(data);
      } finally {
        setLoading(false);
      }
    };
    loadCertifications();
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>;
      case 'expired':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Expired</Badge>;
      case 'lifetime':
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Lifetime</Badge>;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <section id="certifications" className="section-container relative">
        <h2 className="section-title mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900/70 border-gray-800 rounded-xl h-96 p-6 animate-pulse">
            <div className="h-48 bg-gray-700 rounded mb-4"></div>
            <div className="h-6 bg-gray-700 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded mb-4 w-1/2"></div>
            <div className="flex gap-2 mb-4">
              <div className="h-6 w-16 bg-gray-700 rounded"></div>
              <div className="h-6 w-16 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="section-container relative">
      <h2 className="section-title mb-8">Certifications</h2>
      
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Certified in AI/ML fundamentals, validating expertise in artificial intelligence technologies and practical applications.
        </p>
      </motion.div>
      
      {certifications.length === 0 ? (
        <div className="text-center py-20">
          <Award className="w-16 h-16 mx-auto mb-4 text-gray-600" />
          <p className="text-xl text-gray-400 mb-2">No certifications found</p>
          <p className="text-gray-500">Check back later for updates</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: index * 0.1
                }
              }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full group"
            >
              <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col bg-gray-900/70 border-gray-800 rounded-xl relative">
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 rounded-xl transition-all duration-300 blur-md scale-150 group-hover:scale-100 -z-10"></div>
                
                <div className="overflow-hidden h-48 relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                  {!imageErrors[certification.id] ? (
                    <img 
                      src={certification.image} 
                      alt={certification.title} 
                      className="w-32 h-32 object-contain transition-transform duration-500 ease-in-out hover:scale-105 filter drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                      onError={() => handleImageError(certification.id)}
                    />
                  ) : (
                    <div className="w-32 h-32 flex items-center justify-center border-2 border-blue-500/40 rounded-lg bg-black/30 text-blue-400 font-bold text-4xl">
                      <Award className="w-16 h-16" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
                  
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(certification.status)}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-white">
                    {certification.title}
                  </CardTitle>
                  <CardDescription className="text-blue-400 font-medium">
                    {certification.issuer}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {certification.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-gray-800/50 text-blue-300 border-blue-500/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-gray-400 mb-4">
                    {certification.description}
                  </CardDescription>
                  
                  {certification.credentialUrl && (
                    <a 
                      href={certification.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      View Credential
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Certifications;