"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HardHat, MapPin, ChevronRight, Clock } from 'lucide-react';

const activeProjects = [
  { id: "proj-1", name: "Losa Nivel 3", location: "Torre A", time: "Actualizado 2h atrás" },
  { id: "proj-2", name: "Instalación Sanitaria", location: "Subsuelo", time: "Actualizado 5h atrás" },
  { id: "proj-3", name: "Tabiquería Frontal", location: "Torre B", time: "Ayer" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-50 font-sans pb-10">
      <header className="pt-12 pb-6 px-6 bg-slate-900/50 backdrop-blur-md border-b border-white/5 sticky top-0 z-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
             <span className="font-bold text-white text-lg">O</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">Mis Asignaciones</h1>
            <p className="text-sm text-slate-400">Juan Pérez - Capataz</p>
          </div>
        </div>
      </header>

      <main className="px-6 pt-8 max-w-lg mx-auto">
        <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">Obras Activas</h2>
        <div className="space-y-4">
          {activeProjects.map((project, idx) => (
            <Link key={project.id} href={`/chat/${project.id}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-slate-900 border border-white/10 p-5 rounded-2xl flex items-center justify-between group hover:border-emerald-500/50 hover:bg-slate-800 transition-all cursor-pointer shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:text-emerald-400 transition-colors">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">{project.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{project.time}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
