'use client';
import { motion } from 'framer-motion';

const timeline = [
  {
    role: 'Freelance Mechatronics Engineer',
    org: 'Self-Employed',
    period: 'Feb 2026 – Present',
    type: 'Freelance',
    accent: 'cyan',
    description: 'Developing custom CAD models, PCB layouts, and machine learning solutions for automation-focused client projects across multiple engineering domains.',
  },
  {
    role: 'Mechatronics Engineer',
    org: 'Lotus-Power',
    period: 'Jun 2026 – Sep 2026',
    type: 'Internship',
    accent: 'cyan',
    description: 'Research and technical analysis for smart beekeeping and farm management devices. Collaborating on IoT systems, PCB design, and electronic circuits for agricultural automation.',
  },
  {
    role: 'Workshop Maintenance Engineer Intern',
    org: 'SMG Engineering',
    period: 'Aug 2026',
    type: 'Internship',
    accent: 'amber',
    description: 'Preventive and corrective maintenance on specialized workshop tools and heavy industrial equipment. Technical diagnostics, troubleshooting, and calibration of automotive service equipment per industry safety standards and manufacturer specifications.',
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
    <section id="experience" className="relative py-24 px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-amberMech/70 mb-3">// 004. experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Professional Journey</h2>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-xl">
            A structured path from mechanical foundations to intelligent autonomous systems.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative pl-8"
              >
                {/* Node */}
                <div
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                    item.accent === 'cyan'
                      ? 'border-cyanTech bg-slateBg'
                      : 'border-amberMech bg-slateBg'
                  }`}
                />

                {/* Card */}
                <div className="rounded-xl border border-white/5 bg-white/[0.03] px-6 py-5 hover:border-white/10 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-white">{item.role}</h3>
                      <p className={`text-sm font-mono ${
                        item.accent === 'cyan' ? 'text-cyanTech' : 'text-amberMech'
                      }`}>{item.org}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      <span className="text-xs font-mono text-gray-500">{item.period}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${
                        item.type === 'Internship'
                          ? 'border-amberMech/30 text-amberMech'
                          : item.type === 'Freelance'
                          ? 'border-cyanTech/30 text-cyanTech'
                          : 'border-purple-500/30 text-purple-400'
                      }`}>{item.type}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
