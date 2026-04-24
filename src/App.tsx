/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Laptop, 
  Gamepad2, 
  Plane, 
  Search, 
  GraduationCap, 
  MapPin, 
  Mail, 
  ChevronDown,
  Sparkles,
  Quote
} from 'lucide-react';
import { useRef } from 'react';

export default function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink font-sans selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-end backdrop-blur-md bg-brand-bg/80 border-b border-brand-border">
        <div>
          <div className="font-serif text-2xl font-light tracking-tighter">이현숙</div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-brand-muted mt-1 font-bold">Computer & Board Game Specialist</div>
        </div>
        <div className="hidden md:flex space-x-10 text-[11px] uppercase tracking-[0.2em] font-bold text-brand-muted">
          <a href="#about" className="hover:text-brand-ink transition-colors">About</a>
          <a href="#career" className="hover:text-brand-ink transition-colors">Career</a>
          <a href="#expertise" className="hover:text-brand-ink transition-colors">Expertise</a>
          <a href="#contact" className="hover:text-brand-ink transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        ref={targetRef}
        style={{ opacity, scale }}
        className="relative h-screen flex flex-col items-center justify-center text-center px-4 pt-20"
      >
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="z-10"
        >
          <p className="font-serif italic text-2xl md:text-3xl text-brand-muted mb-8 italic tracking-tight">“배움은 즐거운 여행입니다”</p>
          <h1 className="text-7xl md:text-9xl font-light tracking-tighter leading-none mb-8">
            이현숙
          </h1>
          <div className="w-12 h-[1px] bg-brand-ink mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed text-brand-muted">
            25년의 경험으로 디지털 세상과 소통의 즐거움을 잇습니다.
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12"
        >
          <div className="w-[1px] h-12 bg-brand-border mx-auto"></div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-stretch">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-[#E5E5E0] h-full flex flex-col justify-center"
            >
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-muted mb-8">Experience</h2>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-9xl font-light tracking-tighter text-brand-ink">25</span>
                <span className="text-2xl font-light uppercase tracking-widest text-brand-muted">Years</span>
              </div>
              <p className="text-xl leading-relaxed text-brand-muted font-light">
                학교 및 문화센터에서 25년 동안<br/>
                수많은 제자들과 함께해온<br/>
                컴퓨터 & 보드게임 베테랑 강사
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 flex flex-col justify-center"
          >
            <h2 className="font-serif text-5xl mb-10 italic tracking-tight">Life is a Journey</h2>
            <div className="space-y-8 text-brand-muted leading-relaxed font-light text-lg">
              <p>
                저는 쉼 없는 호기심으로 세상을 탐구하는 강사입니다. 
                25년의 세월 동안 교육 현장에서 단순히 지식을 전달하는 것을 넘어, 
                새로운 것을 마주하는 <strong>'설렘'</strong>을 함께 나누어 왔습니다.
              </p>
              <p>
                기술이 낯선 이들에게는 친절한 길잡이가, 소통이 필요한 이들에게는 
                보드게임을 통한 공감의 조력자가 되어 드립니다. 언제나 새로운 길을 
                나서는 여행자의 마음으로 수업에 임합니다.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="py-2 px-6 border border-brand-border rounded-full text-[10px] uppercase tracking-widest font-bold">World Travel</span>
                <span className="py-2 px-6 border border-brand-border rounded-full text-[10px] uppercase tracking-widest font-bold">Active Curiosity</span>
                <span className="py-2 px-6 border border-brand-border rounded-full text-[10px] uppercase tracking-widest font-bold">Strategic Thinking</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-32 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="font-serif text-5xl italic tracking-tight">Professional Story</h2>
            <p className="text-white/50 text-sm uppercase tracking-widest font-bold">Building connections through education</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            <div className="border-l border-white/20 pl-8 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent">01. Education Expert</h3>
              <p className="text-xl font-light leading-relaxed">학교 및 지자체 교육기관, 문화센터 등 25년 수업 경력</p>
            </div>
            <div className="border-l border-white/20 pl-8 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent">02. IT Specialist</h3>
              <p className="text-xl font-light leading-relaxed">기초 정보화부터 실무 OA, 시니어 디지털 역량 강화 교육</p>
            </div>
            <div className="border-l border-white/20 pl-8 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent">03. Game Strategy</h3>
              <p className="text-xl font-light leading-relaxed">창의 사고력 및 관계 중심 보드게임 커리큘럼 전문가</p>
            </div>
            <div className="border-l border-white/20 pl-8 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent">04. Curriculum Designer</h3>
              <p className="text-xl font-light leading-relaxed">학습자 눈높이에 맞춘 맞춤형 교육 프로그램 기획 및 운영</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 px-8 bg-brand-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-muted mb-6">Expertise</h2>
              <h3 className="font-serif text-4xl italic leading-tight mb-6">Subjects & Focus</h3>
              <p className="text-brand-muted font-light">단순한 지식 전달을 넘어 배움의 즐거움을 설계합니다.</p>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-12">
              <div className="border-l-2 border-brand-ink pl-8 py-2">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Computer Skills</h4>
                <ul className="space-y-4 text-lg font-light text-brand-muted">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-ink rounded-full"></div>
                    <span>기초 정보화 & 스마트 라이프</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-ink rounded-full"></div>
                    <span>OA 실무 (엑셀, PPT, 한글)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-ink rounded-full"></div>
                    <span>시니어 맞춤형 디지털 교육</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-brand-border pl-8 py-2">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Board Games</h4>
                <ul className="space-y-4 text-lg font-light text-brand-muted">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-border rounded-full"></div>
                    <span>창의 융합 보드게임 전략</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-border rounded-full"></div>
                    <span>관계 형성 및 소통 워크숍</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-border rounded-full"></div>
                    <span>두뇌 활성화 사고력 수업</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 bg-brand-dark text-white flex items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="px-8 max-w-4xl"
        >
          <p className="text-xl md:text-3xl font-light leading-snug mb-8">
            세상을 탐구하는 <span className="text-brand-accent font-medium">여행가</span>이자,<br/>
            해답을 찾아가는 <span className="text-brand-accent font-medium">게임 매니아</span>.
          </p>
          <p className="text-sm italic font-serif text-white/50 tracking-widest">언제나 새로운 길을 나서는 설렘으로 가르칩니다.</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 border-t border-brand-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl italic tracking-tight">Let's Connect</h2>
            <p className="text-brand-muted font-light">새로운 만남과 교육의 기회를 기다립니다.</p>
          </div>
          <div className="space-y-8 text-right">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold mb-1">Email</p>
              <p className="text-2xl font-light">lhsgg820@gmail.com</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold mb-1">Location</p>
              <p className="text-2xl font-light italic font-serif">Cultural Centers & Schools</p>
            </div>
          </div>
        </div>
        
        <footer className="max-w-6xl mx-auto mt-32 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-brand-muted font-bold">
          <div>© 2026 Lee Hyun-sook. All Rights Reserved.</div>
          <div className="flex gap-12">
            <span>School Education</span>
            <span>Cultural Center</span>
            <span>Private Workshop</span>
          </div>
        </footer>
      </section>
    </div>
  );
}
