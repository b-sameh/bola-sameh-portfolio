'use client';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-[#080c14] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amberMech/30 to-transparent" />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-amberMech/70 mb-3">// 005. contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-md">
              Open to freelance collaborations, internship opportunities, and full-time roles in
              Mechatronics, Robotics, IoT, Automotive, and AI/ML engineering.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:eng.bolasameh@gmail.com"
                className="flex items-center gap-3 group"
              >
                <span className="h-8 w-8 rounded-lg border border-white/10 bg-slate-800 flex items-center justify-center text-sm group-hover:border-cyanTech/50 transition-colors">
                  @
                </span>
                <span className="font-mono text-sm text-gray-400 group-hover:text-cyanTech transition-colors">
                  eng.bolasameh@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/bola-sameh/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="h-8 w-8 rounded-lg border border-white/10 bg-slate-800 flex items-center justify-center text-sm group-hover:border-cyanTech/50 transition-colors">
                  in
                </span>
                <span className="font-mono text-sm text-gray-400 group-hover:text-cyanTech transition-colors">
                  linkedin.com/in/bola-sameh
                </span>
              </a>

              <a
                href="https://github.com/b-sameh"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="h-8 w-8 rounded-lg border border-white/10 bg-slate-800 flex items-center justify-center text-sm group-hover:border-cyanTech/50 transition-colors">
                  gh
                </span>
                <span className="font-mono text-sm text-gray-400 group-hover:text-cyanTech transition-colors">
                  github.com/b-sameh
                </span>
              </a>
            </div>

            {/* Language badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-slate-800/50 px-3 py-1.5 font-mono text-xs text-gray-400">
                Arabic (Native)
              </span>
              <span className="rounded-full border border-white/10 bg-slate-800/50 px-3 py-1.5 font-mono text-xs text-gray-400">
                English (B2)
              </span>
              <span className="rounded-full border border-white/10 bg-slate-800/50 px-3 py-1.5 font-mono text-xs text-gray-400">
                Deutsch (A2)
              </span>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1.5">NAME</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm text-gray-100 placeholder-gray-600 focus:border-cyanTech/50 focus:outline-none focus:ring-1 focus:ring-cyanTech/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1.5">EMAIL</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm text-gray-100 placeholder-gray-600 focus:border-cyanTech/50 focus:outline-none focus:ring-1 focus:ring-cyanTech/20 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-500 mb-1.5">SUBJECT</label>
                <input
                  type="text"
                  placeholder="Project inquiry / Job opportunity"
                  className="w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm text-gray-100 placeholder-gray-600 focus:border-cyanTech/50 focus:outline-none focus:ring-1 focus:ring-cyanTech/20 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-500 mb-1.5">MESSAGE</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2.5 text-sm text-gray-100 placeholder-gray-600 focus:border-cyanTech/50 focus:outline-none focus:ring-1 focus:ring-cyanTech/20 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-cyanTech px-4 py-3 text-sm font-semibold text-slateBg hover:bg-cyan-300 transition-colors shadow-lg shadow-cyanTech/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-cyanTech animate-pulse" />
            <span className="text-xs font-mono text-gray-500">
              Available for new opportunities
            </span>
          </div>
          <p className="text-xs font-mono text-gray-600">
            &copy; 2026 Bola Sameh. Built for Engineering Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
