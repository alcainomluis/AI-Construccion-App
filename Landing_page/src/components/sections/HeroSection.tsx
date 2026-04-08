"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex items-center overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10 relative">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Impulsado por Gemini AI
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Controla tu obra <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              con un audio de 10s.
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
            ObraFlow transforma mensajes de voz y fotografías en datos estructurados en tiempo real. Adiós a los reportes manuales, bienvenido a la bitácora inteligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onOpenModal}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full font-bold transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.7)] hover:scale-105 active:scale-95 flex justify-center items-center gap-2 group"
            >
              Solicitar Demo 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium transition-all flex justify-center items-center gap-2 hover:scale-105 active:scale-95">
              <PlayCircle className="w-5 h-5 text-slate-300" />
              Ver Video
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative animate-float mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent blur-3xl -z-10 rounded-[3rem]" />
          <div className="relative border border-white/10 rounded-[2.5rem] bg-slate-900/50 backdrop-blur-md p-3 overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] max-w-sm">
            <Image 
              src="/images/mobile_chat.png" 
              alt="ObraFlow Mobile Interface" 
              width={500} 
              height={1000} 
              className="w-full h-auto rounded-[2rem] border border-white/5 object-cover"
              priority
            />
            
            {/* Floating notification element */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute top-20 -left-6 bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 p-4 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <p className="text-xs text-emerald-400 font-medium">Validación Completa</p>
                <p className="text-sm font-bold text-white">Avance Guardado (GCP)</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
