import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

const GitHubProjects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const username = 'saurabh-biware';

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching repos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="section-container">
        <h2 className="section-title">GitHub Projects</h2>
        <div className="text-center text-gray-400">Loading repositories...</div>
      </section>
    );
  }

  return (
    <section className="section-container">
      <h2 className="section-title">GitHub Projects</h2>
      
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my latest open-source projects and contributions on GitHub
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card rounded-xl border-muted h-full hover:border-blue-400 transition-all group">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <Github className="w-8 h-8 text-blue-400" />
                  <div className="flex gap-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {repo.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                  {repo.description || 'No description available'}
                </p>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {repo.language && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                      {repo.language}
                    </span>
                  </div>
                )}

                <div className="flex gap-3 mt-auto">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center text-sm font-semibold hover:shadow-lg transition-all"
                  >
                    View Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-blue-500/20 text-blue-400 hover:bg-blue-500/10 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg transition-all"
        >
          <Github className="w-5 h-5" />
          View All Repositories
        </a>
      </motion.div>
    </section>
  );
};

export default GitHubProjects;
