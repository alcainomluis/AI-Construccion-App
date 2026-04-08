"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-[#0b1120]/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center">
            <span className="font-bold text-white text-xl">O</span>
          </div>
          <span className="text-xl font-bold tracking-tight">ObraFlow</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-emerald-400 transition-colors">Características</a>
          <a href="#daily-report" className="hover:text-emerald-400 transition-colors">Evidencia Diaria</a>
          <a href="#dashboard" className="hover:text-emerald-400 transition-colors">Dashboard Central</a>
        </div>
        <button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all hover:border-emerald-500/30">
          Acceso Anticipado
        </button>
      </div>
    </motion.nav>
  );
}
