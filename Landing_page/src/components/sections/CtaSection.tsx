"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CtaSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-[#0b1120] pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8">¿Listo para digitalizar el terreno?</h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Únete al programa de Early Access y sé de los primeros en probar el gemelo digital conversacional para obras de construcción.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onOpenModal}
            className="px-10 py-5 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95"
          >
            Solicitar Acceso Anticipado
          </button>
        </div>
      </motion.div>
    </section>
  );
}
