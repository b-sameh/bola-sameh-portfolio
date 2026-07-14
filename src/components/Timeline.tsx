'use client';
import { motion } from 'framer-motion';

const timeline = [
  {
    role: 'Mechatronics Engineer',
    org: 'Lotus-Power',
    period: 'Jun 2026 – Present',
        type: 'Internship',
    accent: 'cyan',
    description: 'Research and technical analysis for smart beekeeping and farm management devices. Collaborating on IoT systems, PCB design, and electronic circuits for agricultural automation.',
  },
  {
    role: 'Workshop Engineer Intern',
    org: 'SNA Mercedes-Benz',
    period: 'Jun 2026 – Jul 2026',
    type: 'Internship',
    accent: 'amber',
    description: 'Diagnostic engineering, preventive maintenance, and electrical/mechanical troubleshooting for Mercedes-Benz passenger cars using official manufacturer procedures.',
  },
  {
    role: 'Freelance Mechatronics Engineer',
    org: 'Self-Employed',
    period: 'Feb 2026 – Present',
    type: 'Freelance',
    accent: 'cyan',
    description: 'Developing custom CAD models, PCB layouts, and machine learning solutions for automation-focused client projects across multiple engineering domains.',
  },
  {
    role: 'ML Engineering Trainee',
    org: 'DEPI',
    period: 'Nov 2025 – Jul 2026',
    type: 'Training',
    accent: 'amber',
    description: 'Deep Learning pipelines for industrial predictive maintenance and robotics-based computer vision using OpenCV, TensorFlow, and NLP techniques.',
  },
  {
    role: 'IoT Engineering Trainee',
    org: 'Samsung Innovation Campus',
    period: 'Aug 2025 – Dec 2025',
    type: 'Training',
    accent: 'cyan',
    description: 'End-to-end IoT applications integrating ESP32 and Raspberry Pi hardware with real-time cloud dashboards for monitoring and control.',
  },
  {
    role: 'Mechanical Engineering Intern',
    org: 'AOI Engine Factory',
    period: 'Jun 2024 – Jul 2024',
    type: 'Internship',
    accent: 'amber',
    description: 'Turbine engine overhaul, non-destructive testing (NDT), chemical coating, TIG welding, and heat treatment processes on aircraft-grade components.',
  },
];

export function Timeline() {
  return (
    <section id="journey" className="py-24 bg-slateBg relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyanTech/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyanTech/70 mb-3">// 004. experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Professional Journey</h2>
          <p className="mt-3 text-gray-400 max-w-xl">A structured path from mechanical foundations to intelligent autonomous systems.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyanTech/50 via-slate-600 to-amberMech/50" />

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={item.org + item.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="relative flex gap-5"
              >
                {/* Node */}
                <div className="relative flex-shrink-0 flex items-start pt-4">
                  <div className={`h-3.5 w-3.5 rounded-full border-2 bg-slateBg transition-all duration-200 ${
                    item.accent === 'cyan'
                      ? 'border-cyanTech shadow-[0_0_8px_rgba(0,210,255,0.5)]'
                      : 'border-amberMech shadow-[0_0_8px_rgba(255,107,0,0.5)]'
                  }`} />
                </div>

                {/* Card */}
                <div className={`group flex-1 rounded-xl border border-white/5 bg-slate-900/50 p-4 transition-all duration-200 ${
                  item.accent === 'cyan'
                    ? 'hover:border-cyanTech/50 hover:bg-slate-900/80'
                    : 'hover:border-amberMech/50 hover:bg-slate-900/80'
                }`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-sm font-semibold text-white">{item.role}</h3>
                      <p className={`text-xs font-mono ${
                        item.accent === 'cyan' ? 'text-cyanTech' : 'text-amberMech'
                      }`}>{item.org}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-mono text-gray-500">{item.period}</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                        item.type === 'Full-time' ? 'border-green-500/30 text-green-400/80'
                        : item.type === 'Freelance' ? 'border-purple-500/30 text-purple-400/80'
                        : item.type === 'Training' ? 'border-cyanTech/30 text-cyanTech/80'
                        : 'border-amberMech/30 text-amberMech/80'
                      }`}>{item.type}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
