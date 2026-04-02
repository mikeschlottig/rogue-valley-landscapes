import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { SERVICES } from '@/data/mockData';
import { LeafMotif, SketchyCircle, BrushStrokeDivider } from '@/components/Illustrations';
export function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 md:py-24 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-display text-5xl md:text-6xl text-brand-forest">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            We provide a comprehensive range of high-end landscaping services, 
            blending artisanal craftsmanship with modern horticultural expertise.
          </p>
          <div className="flex justify-center pt-4">
            <SketchyCircle className="w-12 h-12 text-brand-sand animate-float" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-2 border-brand-sand/10 hover:border-brand-sand transition-all duration-300 rounded-[2rem] overflow-hidden shadow-soft hover:shadow-xl">
                <div className="h-64 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg">
                    <service.icon className="w-6 h-6 text-brand-forest" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-bold text-brand-forest mb-4 group-hover:text-brand-sand transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-muted">
                    <ul className="space-y-2 text-sm text-brand-forest/70 italic">
                      <li className="flex items-center gap-2"><LeafMotif className="w-4 h-4 text-brand-sand" /> Seasonal Planning</li>
                      <li className="flex items-center gap-2"><LeafMotif className="w-4 h-4 text-brand-sand" /> Expert Implementation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="bg-brand-forest rounded-[3rem] p-12 text-center text-brand-cream space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <BrushStrokeDivider className="w-full h-full rotate-180" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display relative z-10">Don't see what you're looking for?</h2>
          <p className="text-brand-cream/70 max-w-2xl mx-auto relative z-10">
            We specialize in custom projects. From rare plant sourcing to complex water features, 
            we love a unique challenge.
          </p>
          <div className="relative z-10">
            <button className="bg-brand-sand hover:bg-brand-sand/90 text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105">
              Ask us Anything
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}