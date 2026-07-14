'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const translateX = useTransform(mouseX, [0, 1], [-15, 15]);
  const translateY = useTransform(mouseY, [0, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  return (
    <section
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ translateX, translateY }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyanTech/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ translateX: useTransform(mouseX, [0,1],[10,-10]), translateY: useTransform(mouseY,[0,1],[10,-10]) }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amberMech/5 rounded-full blur-3xl"
        />
        {/* SVG node graph */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="35%" y2="45%" stroke="#00D2FF" strokeWidth="0.5"/>
          <line x1="35%" y1="45%" x2="70%" y2="25%" stroke="#00D2FF" strokeWidth="0.5"/>
          <line x1="70%" y1="25%" x2="90%" y2="60%" stroke="#FF6B00" strokeWidth="0.5"/>
          <line x1="35%" y1="45%" x2="55%" y2="75%" stroke="#00D2FF" strokeWidth="0.5"/>
          <line x1="55%" y1="75%" x2="90%" y2="60%" stroke="#FF6B00" strokeWidth="0.5"/>
          <circle cx="10%" cy="20%" r="3" fill="#00D2FF"/>
          <circle cx="35%" cy="45%" r="4" fill="#00D2FF"/>
          <circle cx="70%" cy="25%" r="3" fill="#00D2FF"/>
          <circle cx="90%" cy="60%" r="3" fill="#FF6B00"/>
          <circle cx="55%" cy="75%" r="3" fill="#FF6B00"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-2 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyanTech/30 bg-cyanTech/5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyanTech animate-pulse" />
            <span className="text-xs font-mono text-cyanTech tracking-wider">Where Hardware Meets Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Bola Sameh
            <span className="block text-gradient-cyan">Dawoud</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-light">
            Mechatronics Engineer
            <span className="text-gray-500 mx-2">|</span>
            Bridging the gap between physical hardware and intelligent systems.
          </p>

          <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
            Senior Mechatronics Engineering Student at{' '}
            <span className="text-cyanTech font-medium">Ain Shams University</span>{' '}
            (GPA: 3.1/4). Specialized in Robotics, Industrial IoT, and Predictive Maintenance.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyanTech px-6 py-2.5 text-sm font-semibold text-slateBg hover:bg-cyan-300 transition-colors shadow-lg shadow-cyanTech/20"
            >
              <span>View My Projects</span>
              <span>&#x2192;</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white hover:border-cyanTech/50 hover:bg-white/10 transition-all"
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className="flex items-center gap-6 pt-2 border-t border-white/5">
            <a href="https://www.linkedin.com/in/bola-sameh/" target="_blank" rel="noreferrer"
              className="text-gray-400 hover:text-cyanTech transition-colors font-mono text-xs tracking-wide">
              LinkedIn
            </a>
            <a href="https://github.com/b-sameh" target="_blank" rel="noreferrer"
              className="text-gray-400 hover:text-cyanTech transition-colors font-mono text-xs tracking-wide">
              GitHub
            </a>
            <a href="mailto:eng.bolasameh@gmail.com"
              className="text-gray-400 hover:text-amberMech transition-colors font-mono text-xs tracking-wide">
              eng.bolasameh@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Right: Visual card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl border border-white/8 bg-slate-900/70 p-6 backdrop-blur-sm">
            {/* Terminal-style header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs font-mono text-gray-500">system_status.py</span>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <p><span className="text-cyanTech">engineer</span> <span className="text-gray-500">=</span> <span className="text-green-400">&quot;Mechatronics&quot;</span></p>
              <p><span className="text-cyanTech">university</span> <span className="text-gray-500">=</span> <span className="text-green-400">&quot;Ain Shams University&quot;</span></p>
              <p><span className="text-cyanTech">gpa</span> <span className="text-gray-500">=</span> <span className="text-amberMech">3.1</span></p>
              <p><span className="text-cyanTech">status</span> <span className="text-gray-500">=</span> <span className="text-green-400">&quot;Available for opportunities&quot;</span></p>
              <p className="mt-3 text-gray-500"># Specializations:</p>
              <p><span className="text-cyanTech">skills</span> <span className="text-gray-500">=</span> [</p>
              <p className="pl-4 text-green-400">&quot;Robotics &amp; ROS&quot;,</p>
              <p className="pl-4 text-green-400">&quot;Industrial IoT&quot;,</p>
              <p className="pl-4 text-green-400">&quot;Predictive Maintenance&quot;,</p>
              <p className="pl-4 text-green-400">&quot;Mechanical Design&quot;,</p>
              <p>]</p>
              <p className="flex items-center gap-1 mt-2">
                <span className="text-cyanTech animate-pulse">&#x25B6;</span>
                <span className="text-gray-400">Running at full capacity...</span>
              </p>
            </div>
          </div>
          {/* Floating accent badges */}
          <div className="absolute -top-3 -right-3 rounded-lg border border-amberMech/30 bg-amberMech/10 px-3 py-1.5">
            <span className="text-xs font-mono text-amberMech">Robotics</span>
          </div>
          <div className="absolute -bottom-3 -left-3 rounded-lg border border-cyanTech/30 bg-cyanTech/10 px-3 py-1.5">
            <span className="text-xs font-mono text-cyanTech">IoT Systems</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-gray-500 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-4 w-[1px] bg-gradient-to-b from-cyanTech to-transparent"
        />
      </motion.div>
    </section>
  );
}
