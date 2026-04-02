import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { MapPin, Calendar, ArrowRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PORTFOLIO_ITEMS, TESTIMONIALS } from '@/data/mockData';
import { SketchyCircle, LeafMotif } from '@/components/Illustrations';
import { cn } from '@/lib/utils';
export function PortfolioPage() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12 space-y-16 md:space-y-24">
        {/* Header Section */}
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
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-brand-sand/10 hover:border-brand-sand transition-all duration-300 rounded-[2rem] overflow-hidden shadow-soft hover:shadow-xl cursor-pointer group flex flex-col bg-brand-cream/30">
                <div className="h-56 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm flex items-center gap-2 text-xs font-medium text-brand-forest">
                      <MapPin className="w-3 h-3 text-brand-sand" />
                      {item.category}
                    </div>
                    {item.date && (
                      <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm flex items-center gap-2 text-xs font-medium text-brand-forest">
                        <Calendar className="w-3 h-3 text-brand-sand" />
                        {item.date}
                      </div>
                    )}
                  </div>
                </div>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold text-brand-forest mb-4 group-hover:text-brand-sand transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-brand-sand font-bold text-sm mt-auto group-hover:text-brand-forest transition-colors">
                    View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Testimonials Carousel Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <LeafMotif className="w-12 h-12 mx-auto text-brand-sand" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-forest">Client Stories</h2>
            <p className="text-muted-foreground">Hear from our community about their experiences working with Rogue Valley Landscapes.</p>
          </div>
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4">
              {TESTIMONIALS.map((testimonial, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="h-full p-8 rounded-[2rem] bg-brand-sand/5 border border-brand-sand/20 relative flex flex-col">
                    <Quote className="w-10 h-10 text-brand-sand/20 absolute top-6 right-6" />
                    <p className="text-brand-forest/80 italic leading-relaxed mb-8 flex-1 relative z-10">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      {testimonial.avatar && (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-brand-sand/30"
                        />
                      )}
                      <div>
                        <p className="font-bold text-brand-forest">{testimonial.name}</p>
                        <p className="text-sm text-brand-sand">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}