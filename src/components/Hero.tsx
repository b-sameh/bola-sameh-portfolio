'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';

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
      </div>

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

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Profile photo */}
            <div className="mb-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyanTech/40 to-amberMech/40 blur-md scale-110" />
                <Image
                  src="/pic.jpg"
                  alt="Bola Sameh Dawoud"
                  width={100}
                  height={100}
                  className="relative rounded-full border-2 border-cyanTech/50 object-cover w-24 h-24"
                  priority
                />
              </div>
            </div>

            <p className="text-xs font-mono uppercase tracking-[0.3em] text-amberMech/70 mb-4">
              Where Hardware Meets Intelligence
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Bola Sameh{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanTech to-amberMech">
                Dawoud
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-4 font-mono">
              Mechatronics Engineer{' '}
              <span className="text-gray-500">|</span>{' '}
              Bridging the gap between physical hardware and intelligent systems.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
              Senior Mechatronics Engineering Student at{' '}
              <span className="text-cyanTech font-semibold">Ain Shams University</span>{' '}
              (GPA: 3.1/4). Specialized in Robotics, Industrial IoT, and Predictive Maintenance.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-cyanTech text-slateBg font-semibold text-sm hover:bg-cyan-300 transition-colors shadow-lg shadow-cyanTech/20"
              >
                View My Projects &nbsp;→
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-white/10 text-gray-300 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                Let&apos;s Connect
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/bola-sameh/" target="_blank" rel="noreferrer" className="text-xs font-mono text-gray-500 hover:text-cyanTech transition-colors">LinkedIn</a>
              <span className="text-gray-700">·</span>
              <a href="https://github.com/b-sameh" target="_blank" rel="noreferrer" className="text-xs font-mono text-gray-500 hover:text-cyanTech transition-colors">GitHub</a>
              <span className="text-gray-700">·</span>
              <a href="mailto:eng.bolasameh@gmail.com" className="text-xs font-mono text-gray-500 hover:text-cyanTech transition-colors">eng.bolasameh@gmail.com</a>
            </div>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Terminal-style card */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs font-mono text-gray-600">system_status.py</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <p><span className="text-purple-400">engineer</span> <span className="text-gray-500">=</span> <span className="text-green-400">&quot;Mechatronics&quot;</span></p>
                <p><span className="text-purple-400">university</span> <span className="text-gray-500">=</span> <span className="text-green-400">&quot;Ain Shams University&quot;</span></p>
                <p><span className="text-purple-400">gpa</span> <span className="text-gray-500">=</span> <span className="text-amberMech">3.1</span></p>
                <p><span className="text-purple-400">status</span> <span className="text-gray-500">=</span> <span className="text-green-400">&quot;Available for opportunities&quot;</span></p>
                <p className="text-gray-600 pt-2"># Specializations:</p>
                <p><span className="text-purple-400">skills</span> <span className="text-gray-500">=</span> <span className="text-gray-400">[</span></p>
                <p className="pl-4 text-green-400">&quot;Robotics &amp; ROS&quot;,</p>
                <p className="pl-4 text-green-400">&quot;Industrial IoT&quot;,</p>
                <p className="pl-4 text-green-400">&quot;Predictive Maintenance&quot;,</p>
                <p className="pl-4 text-green-400">&quot;Mechanical Design&quot;,</p>
                <p><span className="text-gray-400">]</span></p>
                <p className="pt-2 text-cyanTech">▶ Running at full capacity...</p>
              </div>
            </div>

            {/* Floating accent badges */}
            <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full border border-cyanTech/30 bg-slateBg text-xs font-mono text-cyanTech">
              Robotics
            </div>
            <div className="absolute -bottom-3 -left-3 px-3 py-1 rounded-full border border-amberMech/30 bg-slateBg text-xs font-mono text-amberMech">
              IoT Systems
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="h-8 w-px bg-gradient-to-b from-transparent to-white/20" />
        <span className="text-xs font-mono text-gray-600 tracking-widest">SCROLL</span>
      </div>
    </section>
  );
}
