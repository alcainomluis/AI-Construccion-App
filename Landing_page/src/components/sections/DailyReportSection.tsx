"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';

export default function DailyReportSection() {
  return (
    <section id="daily-report" className="py-32 px-6 relative overflow-hidden bg-[#0b1120]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/10 rounded-[100%] blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              Nuevo
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">El Informe Diario, <br/><span className="text-blue-400">generado en segundos.</span></h2>
            <p className="text-lg text-slate-400 mb-8">
              Convierte todo el progreso, audios diarios, incidentes y fotografías recopiladas por los capataces en un <span className="text-white font-medium">Informe Diario de Obra</span> automatizado y listo para exportar.
            </p>
            
            <ul className="space-y-4 mb-8">
              {['Formatos listos para el cliente o supervisión', 'Índice de fotografías con geolocalización', 'Resumen estructurado de HH y recursos'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-all flex justify-center items-center gap-2 group">
              <Download className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
              <span>Ver reporte de ejemplo (PDF)</span>
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-7/12 w-full perspective-1000 z-10"
          >
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.15)] group p-2">
              <div className="w-full h-8 flex items-center px-4 gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-4 text-xs text-slate-400 font-mono">informe_diario_27_oct.pdf</span>
              </div>
              <Image 
                src="/images/daily_report_ui.png" 
                alt="ObraFlow Daily Report UI" 
                width={1200} 
                height={800} 
                className="w-full h-auto object-cover rounded-2xl border border-white/5" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
