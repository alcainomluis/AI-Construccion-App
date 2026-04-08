export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center">
            <span className="font-bold text-emerald-500 text-sm">O</span>
          </div>
          <span className="font-bold text-slate-400">ObraFlow</span>
        </div>
        <p>© 2026 ObraFlow. El sistema operativo para obras.</p>
        <p className="text-slate-600">Creado con Next.js, Framer Motion y Tailwind CSS</p>
      </div>
    </footer>
  );
}
