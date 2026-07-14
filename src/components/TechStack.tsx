'use client';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'ml',
    title: 'Machine Learning & AI',
        icon: '🧠',
    glowColor: 'rgba(255,107,0,0.25)',
    borderHover: 'hover:border-amberMech',
    shadowHover: 'hover:shadow-[0_0_40px_rgba(255,107,0,0.25)]',
    accentColor: 'text-amberMech',
    dotColor: 'bg-amberMech',
    items: ['TensorFlow', 'PyTorch', 'OpenCV', 'Predictive Maintenance', 'Computer Vision', 'Time-Series Forecasting', 'Anomaly Detection'],
  },
  {
    id: 'iot',
    title: 'IoT & Control Systems',
        icon: '📶',
    glowColor: 'rgba(0,210,255,0.25)',
    borderHover: 'hover:border-cyanTech',
    shadowHover: 'hover:shadow-[0_0_40px_rgba(0,210,255,0.25)]',
    accentColor: 'text-cyanTech',
    dotColor: 'bg-cyanTech',
    items: ['MQTT', 'Node-RED', 'ThingsBoard', 'Cloud Dashboards', 'MATLAB', 'Simulink', 'Data Acquisition'],
  },
  {
    id: 'robotics',
    title: 'Robotics & CAD',
        icon: '🤖',
    glowColor: 'rgba(148,163,184,0.2)',
    borderHover: 'hover:border-slate-400',
    shadowHover: 'hover:shadow-[0_0_40px_rgba(148,163,184,0.2)]',
    accentColor: 'text-slate-300',
    dotColor: 'bg-slate-400',
    items: ['ROS (Robot Operating System)', 'SolidWorks', 'Autodesk Inventor', 'ANSYS (FEA)', 'Autonomous Navigation'],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-slateBg relative">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyanTech/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyanTech/70 mb-3">// 002. capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tech Stack</h2>
          <p className="mt-3 text-gray-400 max-w-xl">Systems thinking from sensors to machine learning models — the full engineering stack.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-xl border border-white/6 bg-slate-900/50 p-6 transition-all duration-300 ${cat.borderHover} ${cat.shadowHover} hover:bg-slate-900/80`}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-xl pointer-events-none">
                <div className={`absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-tr-xl ${
                  cat.id === 'ml' ? 'border-amberMech' : cat.id === 'iot' ? 'border-cyanTech' : 'border-slate-400'
                }`} />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className={`text-sm font-semibold font-mono ${cat.accentColor}`}>{cat.title}</h3>
              </div>

              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    <span className={`h-1 w-1 rounded-full flex-shrink-0 ${cat.dotColor} opacity-60 group-hover:opacity-100`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
