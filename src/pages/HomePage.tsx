import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LeafMotif, BrushStrokeDivider } from '@/components/Illustrations';
import { SERVICES, TESTIMONIALS } from '@/data/mockData';
export function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-brand-forest">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40"
            alt="Beautiful garden"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-display text-white text-5xl md:text-7xl lg:text-8xl leading-tight">
              Artistic <span className="text-brand-sand italic">Landscaping</span> for the Rogue Valley
            </h1>
          </motion.div>
          <motion.p 
            className="text-lg md:text-xl text-brand-cream/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Premium yard maintenance and bespoke landscape design tailored to the unique beauty of Grants Pass, Oregon.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild size="lg" className="bg-brand-sand hover:bg-brand-sand/90 text-white rounded-full px-8 h-14 text-lg">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10 rounded-full px-8 h-14 text-lg">
              <Link to="/portfolio">View Gallery</Link>
            </Button>
          </motion.div>
        </div>
        <BrushStrokeDivider className="absolute bottom-0 w-full text-brand-cream h-24" />
      </section>
      {/* Services Snapshot */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <LeafMotif className="w-16 h-16 mx-auto mb-4 text-brand-sand" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-forest mb-4">Crafting Natural Beauty</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From meticulous maintenance to full landscape transformations, we bring a high-end touch to every yard.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-8 space-y-4">
                    <service.icon className="w-8 h-8 text-brand-sand" />
                    <h3 className="text-2xl font-display font-bold text-brand-forest">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-24 bg-brand-forest text-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
          <LeafMotif className="w-64 h-64" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold max-w-md">What Our Clients in Grants Pass Say</h2>
            <Link to="/portfolio" className="flex items-center gap-2 text-brand-sand hover:underline font-medium">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="space-y-6 relative">
                <Quote className="w-12 h-12 text-brand-sand/30 absolute -top-4 -left-4" />
                <p className="text-2xl font-display italic leading-relaxed relative z-10">{t.content}</p>
                <div>
                  <p className="font-bold text-brand-sand">— {t.name}</p>
                  <p className="text-sm opacity-60">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}