import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { BLOG_POSTS } from '@/data/mockData';
import { LeafMotif, SketchyCircle } from '@/components/Illustrations';
export function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 md:py-24 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <SketchyCircle className="w-12 h-12 text-brand-sand animate-float" />
          </div>
          <h1 className="text-display text-5xl md:text-6xl text-brand-forest">Journal & Insights</h1>
          <p className="text-lg text-muted-foreground">
            Cultivating knowledge and sharing our passion for high-end landscaping,
            gardening tips, and seasonal advice for the Rogue Valley.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="h-full border-2 border-brand-sand/10 hover:border-brand-sand transition-all duration-300 rounded-[2rem] overflow-hidden shadow-soft hover:shadow-xl cursor-pointer group flex flex-col"
                onClick={() => setSelectedPost(post)}
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm flex items-center gap-2 text-xs font-medium text-brand-forest">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-medium text-brand-sand mb-4">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-forest mb-4 group-hover:text-brand-sage transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-brand-forest font-bold text-sm mt-auto group-hover:text-brand-sage transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] p-0 gap-0 border-brand-sand/20">
          {selectedPost && (
            <>
              <div className="h-64 sm:h-80 relative overflow-hidden">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <DialogTitle className="text-3xl sm:text-4xl font-display font-bold mb-2">
                    {selectedPost.title}
                  </DialogTitle>
                  <div className="flex items-center gap-4 text-sm font-medium text-white/80">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedPost.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {selectedPost.readTime}</span>
                  </div>
                </div>
              </div>
              <DialogHeader className="sr-only">
                <DialogDescription>{selectedPost.excerpt}</DialogDescription>
              </DialogHeader>
              <div className="p-6 sm:p-10 space-y-6 text-brand-forest/90 leading-relaxed bg-brand-cream/50">
                {selectedPost.content.map((block, i) => {
                  if (block.type === 'paragraph') {
                    return <p key={i} className="text-lg">{block.text}</p>;
                  }
                  if (block.type === 'heading') {
                    return <h3 key={i} className="text-2xl font-display font-bold text-brand-forest mt-8 mb-4">{block.text}</h3>;
                  }
                  if (block.type === 'list') {
                    return (
                      <ul key={i} className="space-y-3 my-6 pl-4">
                        {block.items?.map((item, j) => (
                          <li key={j} className="flex gap-3">
                            <LeafMotif className="w-5 h-5 text-brand-sand shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === 'image') {
                    return (
                      <div key={i} className="my-8 rounded-[1.5rem] overflow-hidden shadow-md">
                        <img src={block.url} alt="" className="w-full h-auto" />
                      </div>
                    );
                  }
                  return null;
                })}
                <div className="pt-8 mt-8 border-t border-brand-sand/20 text-center">
                  <p className="font-display italic text-lg text-brand-forest/70">
                    Ready to bring these ideas to life in your own yard?
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}