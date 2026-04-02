import React from 'react';
import { motion } from 'framer-motion';
export const LeafMotif = ({ className }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={className}
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 2, ease: "easeInOut" }}
  >
    <path 
      d="M50 90C50 90 20 60 20 35C20 10 50 10 50 10C50 10 80 10 80 35C80 60 50 90 50 90Z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M50 10V90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 30L30 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 50L70 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </motion.svg>
);
export const BrushStrokeDivider = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={className}>
    <path 
      d="M0,60 C150,110 350,10 600,60 C850,110 1050,10 1200,60 L1200,120 L0,120 Z" 
      fill="currentColor"
    />
  </svg>
);
export const SketchyCircle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <motion.circle 
      cx="50" cy="50" r="45" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      strokeDasharray="5,5"
    />
  </svg>
);