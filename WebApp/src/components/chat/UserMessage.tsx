import React from 'react';
import { motion } from 'framer-motion';

export default function UserMessage({ text, time, audioDuration }: { text?: string, time: string, audioDuration?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-end gap-2 mb-4 ml-auto max-w-[85%] justify-end"
    >
      <div className="bg-slate-700/80 border border-white/5 rounded-2xl rounded-br-sm p-3 shadow-sm relative">
        {audioDuration && (
          <div className="flex items-center gap-2 mb-1 border-b border-white/10 pb-2">
             <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
               <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
             </div>
             <div className="flex-1 h-1 bg-white/20 rounded-full w-24">
               <div className="h-full bg-emerald-400 rounded-full w-1/3"></div>
             </div>
             <span className="text-xs text-slate-400">{audioDuration}</span>
          </div>
        )}
        
        {text && <p className="text-emerald-50 text-[15px] leading-relaxed">{text}</p>}
        <span className="text-[10px] text-emerald-200/50 block text-right mt-1 font-mono">{time}</span>
      </div>
    </motion.div>
  );
}
