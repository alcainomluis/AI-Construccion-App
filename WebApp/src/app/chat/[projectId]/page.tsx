"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, MoreVertical, HardHat } from 'lucide-react';
import ChatInput from '@/components/chat/ChatInput';
import AgentMessage from '@/components/chat/AgentMessage';
import UserMessage from '@/components/chat/UserMessage';

export default function ChatView({ params }: { params: { projectId: string } }) {
  const [messages, setMessages] = useState<any[]>([]);

  // Efecto para simular el mensaje de bienvenida
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        { id: 1, type: "agent", text: "¡Bienvenido! ¿Deseas entregar un reporte de avance o registrar un incidente?", time: "09:00 AM" }
      ]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-50 font-sans flex flex-col">
      {/* Native App Header Navbar */}
      <header className="h-16 px-4 bg-slate-900/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between sticky top-0 z-30 shadow-md">
        <div className="flex items-center gap-3">
          <Link href="/">
            <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5 -ml-2">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 border border-emerald-500/30">
              <HardHat className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[15px] leading-tight">Proyecto: {params.projectId}</span>
              <span className="text-[12px] text-emerald-400 font-medium">Agente Online</span>
            </div>
          </div>
        </div>
        <button className="text-slate-400 p-2">
          <MoreVertical className="w-5 h-5" />
        </button>
      </header>

      {/* Chat History Area */}
      <main className="flex-1 px-4 pt-6 pb-32 max-w-2xl mx-auto w-full">
        {/* Date bubble */}
        <div className="flex justify-center mb-6">
          <span className="px-3 py-1 bg-slate-800/80 rounded-full text-[11px] text-slate-400 uppercase tracking-wider font-medium border border-white/5">
            Hoy
          </span>
        </div>

        {messages.map((msg) => (
          <div key={msg.id}>
            {msg.type === 'agent' ? (
              <AgentMessage text={msg.text} time={msg.time} />
            ) : (
              <UserMessage text={msg.text} time={msg.time} audioDuration={msg.audioDuration} />
            )}
          </div>
        ))}
      </main>

      {/* Chat Input Fixado */}
      <ChatInput />
    </div>
  );
}
