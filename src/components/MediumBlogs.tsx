import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, ExternalLink } from 'lucide-react';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
  categories: string[];
}

const MediumBlogs = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const username = 'saurabhbiware';

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`)
      .then(res => res.json())
      .then(data => {
        const posts = data.items.slice(0, 6).map((item: any) => {
          let thumbnail = 'https://miro.medium.com/v2/resize:fit:1200/1*jfdwtvU6V6g99q3G7gq7dQ.png';
          const imgMatch = item.description.match(/<img[^>]+src="([^"]+)"/);
          if (imgMatch && imgMatch[1]) {
            thumbnail = imgMatch[1];
          }
          return {
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 150),
            thumbnail,
            categories: item.categories || []
          };
        });
        setPosts(posts);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching Medium posts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="blogs" className="section-container">
        <h2 className="section-title">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="glass-card rounded-xl border-muted h-full overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="h-4 bg-gray-700 rounded mb-3 w-24"></div>
                <div className="h-6 bg-gray-700 rounded mb-3 w-full"></div>
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded mb-4 w-5/6"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-20 bg-gray-700 rounded"></div>
                  <div className="h-6 w-20 bg-gray-700 rounded"></div>
                </div>
                <div className="h-10 bg-gray-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="section-container">
      <h2 className="section-title">Latest Blogs</h2>
      
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Sharing insights on software development, tech trends, and best practices
        </p>
      </motion.div>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-600" />
          <p className="text-xl text-gray-400 mb-2">No articles found</p>
          <p className="text-gray-500">Check back later for new content</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card rounded-xl border-muted h-full hover:border-blue-400 transition-all group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.thumbnail} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <CardContent className="p-6 flex flex-col">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Clock className="w-4 h-4" />
                  {new Date(post.pubDate).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                  {post.description}...
                </p>

                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.slice(0, 2).map((category) => (
                      <span
                        key={category}
                        className="px-2 py-1 text-xs rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center text-sm font-semibold hover:shadow-lg transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Article
                  <ExternalLink className="w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      )}

      {posts.length > 0 && (
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href={`https://medium.com/@${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg transition-all"
        >
          <BookOpen className="w-5 h-5" />
          View All Articles on Medium
        </a>
      </motion.div>
      )}
    </section>
  );
};

export default MediumBlogs;
