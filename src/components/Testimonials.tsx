import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Srinivas Reddy",
    role: "Technology Lead",
    company: "",
    content: "Saurabh is an exceptional full-stack developer who consistently delivers high-quality solutions. His expertise in Node.js microservices and AWS has been instrumental in our digital transformation journey."
  },
  {
    id: 2,
    name: "Anish Praveen",
    role: "Senior Engineer",
    company: "",
    content: "Outstanding work on the master thesis project. The innovative approach to time-series data visualization demonstrated deep technical knowledge and creative problem-solving skills."
  },
  {
    id: 3,
    name: "Anand Sharan",
    role: "Engineering Manager",
    company: "",
    content: "A dedicated professional with strong UX advocacy and excellent stakeholder management skills. Always delivered projects on time with exceptional quality."
  }
];

const Testimonials = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">What People Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card rounded-xl border-muted h-full hover:border-blue-400 transition-all group">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-blue-400 mb-4 opacity-50" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-blue-400">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
