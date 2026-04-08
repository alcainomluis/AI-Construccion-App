import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function AgentMessage({ text, time }: { text: string, time: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-end gap-2 mb-4 max-w-[85%]"
    >
      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
        <Sparkles className="w-4 h-4" />
      </div>
      <div className="bg-slate-800 border border-white/5 rounded-2xl rounded-bl-sm p-3 shadow-sm relative">
        <p className="text-slate-200 text-[15px] leading-relaxed">{text}</p>
        <span className="text-[10px] text-slate-500 block text-right mt-1 font-mono">{time}</span>
      </div>
    </motion.div>
  );
}
