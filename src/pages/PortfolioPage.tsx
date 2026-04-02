import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '@/data/mockData';
import { SketchyCircle } from '@/components/Illustrations';
export function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 md:py-24 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-sand/20 pb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <SketchyCircle className="w-8 h-8 text-brand-sand" />
              <span className="uppercase tracking-widest text-xs font-bold text-brand-sand">Our Gallery</span>
            </div>
            <h1 className="text-display text-5xl md:text-7xl text-brand-forest">Recent Works</h1>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Explore our curated selection of yard transformations and landscape designs across Southern Oregon.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] shadow-soft",
                idx % 3 === 0 ? "md:aspect-video" : "md:aspect-square"
              )}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 via-brand-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-brand-cream">
                <span className="text-xs uppercase tracking-widest text-brand-sand font-bold mb-2">{item.category}</span>
                <h3 className="text-3xl font-display mb-2">{item.title}</h3>
                <p className="text-sm text-brand-cream/70">Grants Pass, Oregon</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}