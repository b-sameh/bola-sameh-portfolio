'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'mobile-manipulator',
    label: 'RBT-001',
    title: 'Autonomous Mobile Manipulator Robot',
    subtitle: 'Mechatronics & IoT',
    accent: 'cyan',
    github: 'https://github.com/b-sameh',
        image: '/bola-sameh-portfolio/Auto-mobile-robot.png',
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
    github: 'https://github.com/b-sameh',
        image: '/bola-sameh-portfolio/Predective-maintenance.png',
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
    github: 'https://github.com/b-sameh',
    image: '/bola-sameh-portfolio/air-powered-vehicle.png',
    techTags: ['MATLAB', 'ANSYS FEA', 'ESP32', 'SolidWorks', 'Pneumatics', 'TIG Welding'],
    description: 'Secured 4th place out of 64 teams. Engineered a remotely controlled vehicle propelled by 10-bar compressed air. FEA validation (Safety Factor 2), fluid optimization via MATLAB, and ESP32-based custom PCB control system.',
    metrics: [{ label: 'Rank', value: '4/64' }, { label: 'Pressure', value: '10 bar' }, { label: 'SF', value: '2.0' }],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 lg:px-24">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyanTech/30 to-transparent" />

      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-xs font-mono text-cyanTech mb-2">// 003. featured work</div>
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <p className="text-gray-400 mt-3 max-w-2xl">
          High-impact engineering at the intersection of hardware, intelligence, and autonomy.
        </p>
      </div>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
          >
            {/* Top colored bar */}
            <div
              className={`h-1 w-full ${
                project.accent === 'cyan' ? 'bg-cyanTech' : 'bg-amberMech'
              }`}
            />

            {project.image && (
              <div className="w-full bg-black/30 flex items-center justify-center border-b border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-[520px] object-contain"
                />
              </div>
            )}

            <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-6">
              {/* Left: Content */}
              <div className="flex-1">
                {/* Header row */}
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded border ${
                      project.accent === 'cyan'
                        ? 'border-cyanTech/30 text-cyanTech'
                        : 'border-amberMech/30 text-amberMech'
                    }`}
                  >
                    {project.label}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{project.subtitle}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 text-xs font-mono transition-colors ${
                    project.accent === 'cyan'
                      ? 'text-gray-500 hover:text-cyanTech'
                      : 'text-gray-500 hover:text-amberMech'
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.303-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>

              {/* Right: Metrics */}
              <div className="flex lg:flex-col gap-3 lg:min-w-[120px]">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className={`rounded-xl border p-4 text-center min-w-[80px] ${
                      project.accent === 'cyan'
                        ? 'border-cyanTech/15 bg-cyanTech/5'
                        : 'border-amberMech/15 bg-amberMech/5'
                    }`}
                  >
                    <div className={`text-lg font-bold font-mono ${
                      project.accent === 'cyan' ? 'text-cyanTech' : 'text-amberMech'
                    }`}>
                      {m.value}
                    </div>
                    <div className="text-xs text-gray-500 font-mono mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
