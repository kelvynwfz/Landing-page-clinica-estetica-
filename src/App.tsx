/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Check, 
  Star, 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Clock,
  Sparkles,
  ShieldCheck,
  Award,
  Heart
} from 'lucide-react';

// --- Components ---

const WHATSAPP_URL = `https://wa.me/5582991068093?text=${encodeURIComponent("Olá! Vi a landing page premium de quiropraxia e gostaria de um orçamento para uma página de alto padrão para o meu negócio.")}`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'O Design', href: '#about' },
    { name: 'Procedimentos', href: '#procedures' },
    { name: 'Diferenciais', href: '#differentials' },
    { name: 'Resultados', href: '#results' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-gold-400 z-[60]"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />

      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2 }}
          className="flex items-center gap-3"
        >
          <span className="text-2xl font-serif font-bold tracking-widest text-gold-500 uppercase">ConvertLab</span>
          <span className="bg-gold-100 text-gold-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">Showcase Premium</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium tracking-wide uppercase hover:text-gold-500 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-400 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold-500 transition-all shadow-lg shadow-gold-400/20"
          >
            Quero uma página assim
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-nude-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-400 text-white w-full py-4 rounded-xl font-bold uppercase tracking-widest mt-4 text-center block"
              >
                Quero uma página assim
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-nude-50 via-nude-50/80 to-transparent z-10" />
        <img 
          src="https://www.ibratemco.com.br/imagens/servicos/quiropraxia.png" 
          alt="Chiropractic Care" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 2.4 }}
          >
            <span className="inline-block bg-gold-100 text-gold-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Quiropraxia de Alto Padrão
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 text-ink">
              Recupere sua <span className="italic text-gold-400">mobilidade</span> com <br />
              <span className="font-light">precisão e cuidado.</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 mb-10 max-w-xl leading-relaxed">
              Tratamentos especializados e técnicas avançadas para quem busca uma vida sem dores e com máximo desempenho físico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-ink text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl shadow-ink/20 flex items-center justify-center gap-3"
              >
                Quero uma página como esta <ArrowRight size={18} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border border-nude-200 text-ink px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-nude-100 transition-colors"
              >
                Ver Procedimentos
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 hidden lg:block"
      >
        <div className="glass p-6 rounded-3xl shadow-xl flex items-center gap-4">
          <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-white">
            <Sparkles size={24} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600">Resultados Reais</p>
            <p className="text-sm font-serif">+5.000 Pacientes Satisfeitos</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1000" 
                alt="Chiropractic Treatment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-nude-100 rounded-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-gold-200 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">O Design ConvertLab</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Onde a autoridade encontra a <span className="italic">experiência digital.</span>
            </h2>
            <p className="text-lg text-ink/70 mb-8 leading-relaxed">
              Este projeto demonstra como o design estratégico pode elevar o posicionamento de uma clínica de quiropraxia, transformando visitantes em pacientes de alto valor.
            </p>
            <div className="space-y-6 mb-10">
              {[
                'Design focado em conversão e autoridade',
                'Experiência do usuário (UX) de alto padrão',
                'Copywriting persuasivo e elegante',
                'Presença digital que transmite confiança'
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold-50 flex items-center justify-center text-gold-500">
                    <Check size={14} />
                  </div>
                  <span className="text-ink font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="group flex items-center gap-3 text-ink font-bold uppercase tracking-widest text-sm">
              Ver portfólio completo <div className="w-10 h-[1px] bg-gold-400 group-hover:w-16 transition-all" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Procedures = () => {
  const procedures = [
    {
      title: 'Ajuste Quiroprático',
      desc: 'Correção de desalinhamentos vertebrais para alívio imediato.',
      img: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=800',
      price: 'Showcase Premium'
    },
    {
      title: 'Liberação Miofascial',
      desc: 'Técnica manual para reduzir tensões e dores musculares.',
      img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
      price: 'Showcase Premium'
    },
    {
      title: 'Quiropraxia Esportiva',
      desc: 'Foco em performance e recuperação rápida para atletas.',
      img: 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=800',
      price: 'Showcase Premium'
    },
    {
      title: 'Avaliação Postural',
      desc: 'Análise detalhada da sua postura e biomecânica.',
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      price: 'Showcase Premium'
    },
    {
      title: 'Tratamento de Hérnia',
      desc: 'Protocolos não invasivos para alívio de compressões nervosas.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      price: 'Showcase Premium'
    },
    {
      title: 'Prevenção de Lesões',
      desc: 'Manutenção da saúde da coluna para uma vida ativa.',
      img: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=800',
      price: 'Showcase Premium'
    }
  ];

  return (
    <section id="procedures" className="py-24 bg-nude-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Nossos Tratamentos</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Excelência em cada detalhe.</h2>
            <p className="text-ink/60">Explore nossa seleção de procedimentos premium desenvolvidos para realçar sua beleza de forma única e personalizada.</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((proc, i) => (
            <motion.div
              key={proc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={proc.img} 
                  alt={proc.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <button className="bg-white text-ink px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest w-full">
                    Saber mais
                  </button>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3">{proc.title}</h3>
                <p className="text-ink/60 text-sm mb-6 leading-relaxed">{proc.desc}</p>
                <div className="flex justify-between items-center pt-6 border-t border-nude-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-500">{proc.price}</span>
                  <ArrowRight size={16} className="text-gold-300 group-hover:text-gold-500 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-transparent border-2 border-gold-400 text-gold-600 px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gold-400 hover:text-white transition-all">
            Ver todos os procedimentos
          </button>
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const items = [
    {
      icon: <ShieldCheck size={32} />,
      title: 'Segurança Total',
      desc: 'Utilizamos apenas produtos de marcas líderes mundiais e seguimos rigorosos protocolos de biossegurança.'
    },
    {
      icon: <Award size={32} />,
      title: 'Especialistas',
      desc: 'Nossa equipe é formada por profissionais com especializações internacionais e vasta experiência clínica.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Atendimento Humanizado',
      desc: 'Cada paciente é único. Oferecemos um acompanhamento próximo e personalizado em todas as etapas.'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Tecnologia',
      desc: 'Investimos constantemente nas tecnologias mais modernas do mercado para garantir os melhores resultados.'
    }
  ];

  return (
    <section id="differentials" className="py-24 bg-ink text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Por que nos escolher?</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              O padrão ouro em <span className="italic text-gold-300">estética avançada.</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed max-w-xl">
              Não entregamos apenas procedimentos, entregamos uma experiência completa de cuidado, luxo e transformação.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-gold-400 mb-6">{item.icon}</div>
                  <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-full border border-gold-400/30 p-12 animate-spin-slow">
              <div className="w-full h-full rounded-full border border-gold-400/50 p-12">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl shadow-gold-400/20">
                  <img 
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Premium Experience" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            {/* Stats Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass p-10 rounded-full text-ink text-center min-w-[200px]">
              <p className="text-4xl font-serif font-bold text-gold-500">10+</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Anos de Excelência</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Isabella Martins',
      role: 'Empresária',
      text: 'A experiência na Lumière é indescritível. Desde o atendimento inicial até o pós-procedimento, tudo é impecável. Os resultados superaram todas as minhas expectativas.',
      avatar: 'https://i.pravatar.cc/150?u=isabella'
    },
    {
      name: 'Camila Rocha',
      role: 'Advogada',
      text: 'O que mais me encanta é a busca pela naturalidade. Fiz preenchimento e botox, e ninguém diz que fiz nada, apenas que estou mais descansada e radiante.',
      avatar: 'https://i.pravatar.cc/150?u=camila'
    },
    {
      name: 'Beatriz Silva',
      role: 'Influenciadora',
      text: 'A clínica mais linda e profissional que já conheci. A equipe é extremamente técnica e cuidadosa. Recomendo de olhos fechados para quem busca o melhor.',
      avatar: 'https://i.pravatar.cc/150?u=beatriz'
    }
  ];

  return (
    <section id="results" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">O que dizem nossas pacientes.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-nude-50 border border-nude-100 relative"
            >
              <div className="flex gap-1 text-gold-400 mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-ink/70 italic mb-10 leading-relaxed">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-serif font-bold text-lg">{rev.name}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-500">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="py-24 bg-nude-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">O Ambiente</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Um refúgio de <span className="italic">luxo e tranquilidade.</span>
            </h2>
            <p className="text-ink/70 text-lg mb-10 leading-relaxed">
              Nossa clínica foi projetada para oferecer o máximo de conforto e privacidade. Cada detalhe, da iluminação à fragrância, foi pensado para tornar sua visita uma experiência sensorial única.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" alt="Spa 1" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden mt-8">
                <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" alt="Spa 2" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Treatment Room" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-xl max-w-xs">
              <p className="text-serif text-xl mb-2">Privacidade Total</p>
              <p className="text-sm text-ink/60">Salas individuais climatizadas e som ambiente relaxante.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.ibratemco.com.br/imagens/servicos/quiropraxia.png" 
          className="w-full h-full object-cover opacity-10 grayscale" 
          alt="Background"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
              Sua marca merece esse <br />
              <span className="italic text-gold-400 text-6xl md:text-8xl">nível de presença.</span>
            </h2>
            <p className="text-xl text-ink/60 mb-12 max-w-2xl mx-auto">
              Transformamos sua clínica em uma marca premium com design estratégico e alta conversão.
            </p>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-400 text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-sm shadow-2xl shadow-gold-400/40 inline-block"
            >
              Contratar ConvertLab
            </motion.a>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-ink/40">
              Projetos exclusivos para marcas high-ticket
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-nude-50 pt-24 pb-12 border-t border-nude-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-3xl font-serif font-bold tracking-widest text-gold-500 uppercase mb-8 block">ConvertLab</span>
            <p className="text-ink/60 mb-8 leading-relaxed">
              Agência especializada em branding premium e landing pages de alta conversão para o mercado de saúde e estética.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-nude-200 flex items-center justify-center text-ink hover:bg-gold-400 hover:text-white hover:border-gold-400 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-nude-200 flex items-center justify-center text-ink hover:bg-gold-400 hover:text-white hover:border-gold-400 transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Nossos Serviços</h4>
            <ul className="space-y-4 text-ink/60">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Landing Pages Premium</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Branding Estratégico</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Gestão de Tráfego</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Consultoria de Posicionamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Fale Conosco</h4>
            <ul className="space-y-6 text-ink/60">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-gold-400 shrink-0" />
                <span>Atendimento Global <br /> Presença Digital em todo o Brasil</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-gold-400 shrink-0" />
                <span>(82) 99106-8093</span>
              </li>
              <li className="flex items-center gap-4">
                <MessageCircle size={18} className="text-gold-400 shrink-0" />
                <span>contato@convertlab.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Newsletter</h4>
            <p className="text-ink/60 mb-6 text-sm">Receba insights sobre branding e performance.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="w-full bg-white border border-nude-200 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button className="absolute right-2 top-2 bg-gold-400 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-nude-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-ink/40 uppercase tracking-widest">
            © 2026 ConvertLab - Agência de Performance Premium.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-ink/30">Showcase by</span>
            <span className="text-xs font-bold tracking-tighter text-ink/60">ConvertLab</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
      className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <span className="text-4xl md:text-6xl font-serif font-bold tracking-[0.3em] text-gold-400 uppercase mb-4 block">Lumière</span>
        <div className="w-48 h-[1px] bg-white/20 mx-auto relative overflow-hidden">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gold-400"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-gold-400 rounded-full pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? 'rgba(197, 160, 89, 0.1)' : 'transparent'
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    />
  );
};

export default function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className="relative">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Procedures />
        <Differentials />
        <Testimonials />
        <Experience />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
