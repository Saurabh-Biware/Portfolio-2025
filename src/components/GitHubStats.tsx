import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

const GitHubStats = () => {
  const username = 'saurabh-biware';

  return (
    <section className="section-container">
      <h2 className="section-title">GitHub Activity</h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* GitHub Stats Card */}
        <Card className="glass-card rounded-xl border-muted overflow-hidden">
          <CardContent className="p-0">
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=58a6ff&icon_color=58a6ff&text_color=c9d1d9&cache_seconds=1800`}
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
            />
          </CardContent>
        </Card>

        {/* Top Languages Card */}
        <Card className="glass-card rounded-xl border-muted overflow-hidden">
          <CardContent className="p-0">
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9&cache_seconds=1800`}
              alt="Top Languages"
              className="w-full"
              loading="lazy"
            />
          </CardContent>
        </Card>

        {/* GitHub Streak */}
        <Card className="glass-card rounded-xl border-muted overflow-hidden md:col-span-2">
          <CardContent className="p-0">
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=tokyonight&hide_border=true&background=0d1117&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff`}
              alt="GitHub Streak"
              className="w-full"
              loading="lazy"
            />
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default GitHubStats;
