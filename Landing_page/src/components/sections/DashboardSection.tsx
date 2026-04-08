"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DashboardSection() {
  return (
    <section id="dashboard" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sincronizado a la <br/>Oficina Central.</h2>
            <p className="text-lg text-slate-400 mb-8">
              Toda la data estructurada viaja directamente a <span className="text-white font-medium">Google Cloud Platform (GCP)</span> y alimenta un dashboard ejecutivo. Conoce exactamente cómo avanza cada partida, qué incidentes bloquearán la ruta crítica, y reacciona a tiempo.
            </p>
            <ul className="space-y-4">
              {[
                "Métricas de progreso por área",
                "Notificaciones de incidentes en tiempo real",
                "Bitácora inmutable consolidada"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-300 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex flex-shrink-0 items-center justify-center text-emerald-400 text-sm">✓</div>
                  <span className="font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-7/12 w-full"
          >
            <div className="relative rounded-3xl border border-white/10 bg-slate-900 overflow-hidden shadow-[0_0_80px_rgba(16,185,129,0.15)] group p-2 pb-0 hover:shadow-[0_0_100px_rgba(16,185,129,0.25)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] pt-10 to-transparent z-10 bottom-0 top-auto h-32" />
              <div className="w-full h-8 bg-slate-900/80 flex items-center px-4 gap-2 border-b border-white/5 rounded-t-2xl">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <Image 
                src="/images/dashboard_ui.png" 
                alt="ObraFlow Dashboard" 
                width={1200} 
                height={800} 
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-1000 origin-bottom rounded-b-2xl object-top cursor-ns-resize" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
