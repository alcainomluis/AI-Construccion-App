"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mic, ShieldCheck, AlertTriangle, Camera } from 'lucide-react';

const features = [
  {
    title: "Captura por Voz",
    description: "Olvídate de teclear con guantes sucios. Un mensaje de voz tipo WhatsApp es todo lo que necesita el sistema.",
    icon: <Mic className="w-7 h-7" />,
    color: "emerald"
  },
  {
    title: "Evidencia Fotográfica",
    description: "Toma fotos del área. El agente clasifica automáticamente las imágenes y las asocia a la partida correcta.",
    icon: <Camera className="w-7 h-7" />,
    color: "blue"
  },
  {
    title: "Validación Obligatoria",
    description: 'El LLM detecta partes faltantes. "Mencionaste la losa, pero ¿qué cuadrilla fue?". Garantiza bitácoras completas.',
    icon: <ShieldCheck className="w-7 h-7" />,
    color: "cyan"
  },
  {
    title: "Incidentes Críticos",
    description: "El agente clasifica automáticamente cuando un mensaje contiene un riesgo alto y alerta al Jefe de Obra.",
    icon: <AlertTriangle className="w-7 h-7" />,
    color: "rose"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-slate-950/50 border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Un Agente Inteligente que <span className="text-emerald-400">cuestiona</span> y recolecta.</h2>
          <p className="text-lg text-slate-400">
            No es solo transcripción. Es un asistente de obra completo. El agente de ObraFlow escucha a tus capataces, extrae el porcentaje de avance, recopila fotos y, si falta información, pregunta antes de guardar.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0b1120]/80 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-emerald-500/30 transition-all duration-300 group shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 bg-${feature.color}-500/10 rounded-2xl flex items-center justify-center mb-6 text-${feature.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
