import About from '@/components/About';
import Contact from '@/components/Contact';
import CustomScrollbar from '@/components/CustomScrollbar';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import GitHubProjects from '@/components/GitHubProjects';
import Hero from '@/components/Hero';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Technologies from '@/components/Technologies';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <>
      <Loader />
      <div className="min-h-screen flex flex-col">
        <CustomScrollbar />
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Technologies />
          <About />
          <Features />
          {/* <Projects /> */}
          <GitHubProjects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
