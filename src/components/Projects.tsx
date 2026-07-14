'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'mobile-manipulator',
    label: 'RBT-001',
    title: 'Autonomous Mobile Manipulator Robot',
    subtitle: 'Mechatronics & IoT',
    accent: 'cyan',
    techTags: ['PID Control', '4 DOF Robotic Arm', 'Computer Vision', 'ESP32', 'MQTT', 'Node-RED'],
    description: 'Designed and fabricated a complete mechanical mobile base and 4 DOF robotic arm. Implemented PID control and Computer Vision for real-time QR code detection and automated decision-making, integrated via ESP32 MQTT and Node-RED cloud dashboards.',
    metrics: [{ label: 'DOF', value: '4' }, { label: 'Protocol', value: 'MQTT' }, { label: 'Vision', value: 'CV' }],
  },
  {
    id: 'predictive-maintenance',
    label: 'ML-002',
    title: 'Predictive Maintenance System',
    subtitle: 'Machine Learning & MLOps',
    accent: 'amber',
    techTags: ['ML Classification', 'API Development', 'MLOps', 'SMOTE', 'Telemetry'],
    description: 'Developed a binary classification model predicting machine failure within a 7-day window using sensor telemetry (temperature, vibration, pressure). Maintained \u226599% uptime and \u226590% accuracy through robust pipelines and automated retraining.',
    metrics: [{ label: 'Accuracy', value: '90%+' }, { label: 'Uptime', value: '99%+' }, { label: 'Window', value: '7 days' }],
  },
  {
    id: 'air-vehicle',
    label: 'MECH-003',
    title: 'Air-Powered Vehicle',
    subtitle: 'Mechatronics & Mechanical Design',
    accent: 'cyan',
    techTags: ['MATLAB', 'ANSYS FEA', 'ESP32', 'SolidWorks', 'Pneumatics', 'TIG Welding'],
    description: 'Secured 4th place out of 64 teams. Engineered a remotely controlled vehicle propelled by 10-bar compressed air. FEA validation (Safety Factor 2), fluid optimization via MATLAB, and ESP32-based custom PCB control system.',
    metrics: [{ label: 'Rank', value: '4/64' }, { label: 'Pressure', value: '10 bar' }, { label: 'SF', value: '2.0' }],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d1220] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amberMech/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-amberMech/70 mb-3">// 003. featured work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-3 text-gray-400 max-w-xl">High-impact engineering at the intersection of hardware, intelligence, and autonomy.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`group relative flex flex-col rounded-xl border bg-slate-900/60 p-5 transition-all duration-300 ${
                project.accent === 'cyan'
                  ? 'border-white/6 hover:border-cyanTech hover:shadow-[0_0_40px_rgba(0,210,255,0.2)]'
                  : 'border-white/6 hover:border-amberMech hover:shadow-[0_0_40px_rgba(255,107,0,0.2)]'
              } hover:bg-slate-900/80`}
            >
              {/* Top bar */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className={`text-[10px] font-mono uppercase tracking-widest mb-1 ${
                    project.accent === 'cyan' ? 'text-cyanTech/60' : 'text-amberMech/60'
                  }`}>{project.subtitle}</p>
                  <h3 className="text-base font-semibold text-white leading-snug">{project.title}</h3>
                </div>
                <span className={`flex-shrink-0 ml-2 text-[10px] font-mono px-2 py-1 rounded border ${
                  project.accent === 'cyan'
                    ? 'border-cyanTech/30 text-cyanTech bg-cyanTech/5'
                    : 'border-amberMech/30 text-amberMech bg-amberMech/5'
                }`}>{project.label}</span>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed flex-1">{project.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 my-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg border border-white/5 bg-slate-800/60 p-2 text-center">
                    <p className={`text-sm font-bold font-mono ${
                      project.accent === 'cyan' ? 'text-cyanTech' : 'text-amberMech'
                    }`}>{m.value}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/8 bg-slate-800/80 px-2 py-0.5 text-[11px] text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
