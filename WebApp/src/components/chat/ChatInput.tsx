"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Send, Mic } from 'lucide-react';

export default function ChatInput() {
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState("");

  const handleMicPressStart = () => {
    setIsRecording(true);
  };

  const handleMicPressEnd = () => {
    setIsRecording(false);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/90 to-transparent pt-10 pb-8 z-50">
      <div className="max-w-xl mx-auto flex items-end gap-2 relative">
        {/* Input Bar */}
        <div className={`flex-1 bg-slate-800 rounded-[24px] border transition-colors flex items-end p-1 ${isRecording ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-white/10'}`}>
          <button className="p-3 text-slate-400 hover:text-emerald-400 transition-colors shrink-0">
            <Camera className="w-6 h-6" />
          </button>
          
          <div className="flex-1 min-h-[48px] flex items-center">
            {isRecording ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-emerald-400 font-medium px-2 flex items-center gap-2 text-sm w-full"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Escuchando...
              </motion.div>
            ) : (
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribe un reporte o envía audio..."
                className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none resize-none py-3 px-2 text-[15px] max-h-24 overflow-y-auto"
                rows={1}
              />
            )}
          </div>
        </div>

        {/* PTT / Send Button */}
        <div className="shrink-0 flex items-center justify-center mb-1">
          {text.length > 0 ? (
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg"
            >
              <Send className="w-5 h-5 ml-1" />
            </motion.button>
          ) : (
            <motion.button 
              onMouseDown={handleMicPressStart}
              onMouseUp={handleMicPressEnd}
              onTouchStart={handleMicPressStart}
              onTouchEnd={handleMicPressEnd}
              whileTap={{ scale: 1.2 }}
              className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-colors ${
                isRecording ? 'bg-emerald-500 text-[#0b1120]' : 'bg-emerald-600 text-white hover:bg-emerald-500'
              }`}
            >
              <Mic className={`w-7 h-7 ${isRecording ? 'animate-pulse' : ''}`} />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
