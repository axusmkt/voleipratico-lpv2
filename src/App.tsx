/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useState, useEffect, useRef, CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  PlayCircle, 
  Trophy, 
  Target, 
  Users,
  Star,
  ChevronRight,
  ChevronDown,
  Mail,
  CreditCard,
  Download
} from "lucide-react";

// --- Components ---

const CHECKOUT_URL = "https://ggcheckout.app/checkout/v5/Cko9r3q4IkCIOAGfX10M";

const BackgroundOverlay = ({ src, opacity = 0.2, blur = 0, darkOverlay = 0.8 }: { src?: string, opacity?: number, blur?: number, darkOverlay?: number }) => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {src && (
      <img 
        src={src} 
        alt="" 
        className="w-full h-full object-cover"
        style={{ opacity, filter: blur ? `blur(${blur}px)` : 'none' }}
        referrerPolicy="no-referrer"
      />
    )}
    <div className="absolute inset-0 bg-dark-main" style={{ opacity: darkOverlay }} />
    <div className="absolute inset-0 bg-noise pointer-events-none" />
  </div>
);

const HeaderBar = () => (
  <div className="relative w-full bg-dark-sec text-white py-3 px-4 text-center font-bold text-xs uppercase tracking-widest border-b border-white/5 flex items-center justify-center gap-2">
    <p>🏐 Cada treino sem correção é um treino jogado fora</p>
  </div>
);

const Button = ({ children, className = "", variant = "primary", onClick, style }: { children: ReactNode, className?: string, variant?: "primary" | "secondary" | "outline", onClick?: () => void, style?: CSSProperties }) => (
  <motion.button
    whileHover={{ scale: 1.02, brightness: 1.1 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    style={style}
    className={`
      w-full whitespace-nowrap px-4 py-3 rounded-[6px] font-display text-[16px] font-bold uppercase tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer
      ${variant === "primary" ? "bg-gradient-to-r from-[#00E0FF] to-[#0070FF] text-white glow-blue" : ""}
      ${variant === "secondary" ? "bg-white/10 text-white border border-white/20 backdrop-blur-sm" : ""}
      ${variant === "outline" ? "bg-transparent text-primary border border-primary glow-blue" : ""}
      ${className}
    `}
  >
    {children}
  </motion.button>
);

const Section = ({ children, className = "", id = "", bgOverlay }: { children: ReactNode, className?: string, id?: string, bgOverlay?: ReactNode }) => (
  <section id={id} className={`py-10 relative overflow-hidden ${className}`}>
    {bgOverlay}
    <div className="mobile-container relative z-10">
      {children}
    </div>
  </section>
);

// --- Sections ---

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <Section 
    className="pt-20 pb-16 min-h-[80vh] flex items-center"
    bgOverlay={
      <BackgroundOverlay 
        src="https://images.unsplash.com/photo-1592656094267-764a45159577?q=80&w=2070&auto=format&fit=crop" 
        opacity={0.4} 
        blur={2}
        darkOverlay={0.75}
      />
    }
  >
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md px-3 py-1.5 rounded-full mb-6 border border-primary/30">
          <Zap className="w-3.5 h-3.5 text-primary fill-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Vôlei Prático</span>
        </div>

        <h1 className="font-display font-black mb-6 text-balance leading-[1.1] text-white" style={{ fontSize: '36px' }}>
          🏐 150 TÉCNICAS QUE TRANSFORMAM O SEU JOGO E COLOCAM VOCÊ NO <span className="text-primary">NÍVEL DA ELITE</span>
        </h1>
        
        <div className="mb-8">
          <p className="text-sm text-text-sec leading-relaxed font-medium">
            O único sistema que mostra exatamente o que você está fazendo errado — e como corrigir com ajustes simples que você aplica no próximo treino.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button onClick={onCtaClick} variant="primary" className="text-lg py-4">
            QUERO MEU ACESSO AGORA <ArrowRight className="w-5 h-5" />
          </Button>
          
          <div className="flex justify-center gap-4 mt-6">
            {[
              { icon: Zap, text: "Imediato" },
              { icon: ShieldCheck, text: "Garantia" },
              { icon: Target, text: "Vitalício" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[9px] font-bold text-text-sec uppercase tracking-widest">
                <badge.icon className="w-3 h-3 text-primary" />
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </Section>
);

const Problem = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <Section 
    className="bg-dark-sec"
    bgOverlay={<BackgroundOverlay opacity={0.05} darkOverlay={0} src="https://images.unsplash.com/photo-1547347298-407458488a5a?q=80&w=2070&auto=format&fit=crop" />}
  >
    <div className="text-center mb-10">
      <h2 className="text-3xl font-black mb-4 text-white leading-tight" style={{ paddingLeft: '30px', paddingRight: '30px' }}>🏐 POR QUE VOCÊ TREINA… MAS NÃO EVOLUI?</h2>
      <div className="space-y-3 text-sm text-text-sec font-medium" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <p>Você não está travado por falta de esforço.</p>
        <p>Você está travado porque ninguém nunca te mostrou o que corrigir de verdade.</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 gap-4 mb-10">
      {[
        { title: "Erra recepções fáceis", desc: "A bola bate no seu braço e vai para qualquer lugar." },
        { title: "Ataque sem força", desc: "Você pula… mas não machuca o adversário." },
        { title: "Saque inconsistente", desc: "Uma hora entra, outra você entrega ponto." },
        { title: "Não sabe o que corrigir", desc: "Você treina… mas treina errado." }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-dark-main p-6 rounded-[6px] border border-white/5 flex items-start gap-4"
        >
          <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center shrink-0">
            <XCircle className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h3 className="text-base font-bold mb-1 text-white">{item.title}</h3>
            <p className="text-text-sec text-xs leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="text-center space-y-6">
      <div className="space-y-1">
        <p className="text-lg font-black text-white">👉 O problema não é esforço.</p>
        <p className="text-lg font-black text-primary">👉 É falta de correção técnica.</p>
      </div>
      <Button onClick={onCtaClick} variant="primary">
        QUERO CORRIGIR MEU JOGO AGORA
      </Button>
    </div>
  </Section>
);

const Duality = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <Section 
    className="bg-dark-main"
    bgOverlay={<BackgroundOverlay opacity={0.1} darkOverlay={0.9} src="https://images.unsplash.com/photo-1592656094267-764a45159577?q=80&w=2070&auto=format&fit=crop" />}
  >
    <div className="text-center mb-10">
      <h2 className="text-3xl font-black mb-4 uppercase text-white leading-tight">🏐 EXISTEM DOIS TIPOS DE JOGADORES</h2>
    </div>
    
    <div className="grid grid-cols-1 gap-6 mb-10">
      {/* Common Player */}
      <div className="bg-dark-sec p-6 rounded-[6px] border border-white/5 relative overflow-hidden">
        <h3 className="text-lg font-black mb-6 flex items-center gap-3 text-text-sec">
          O JOGADOR COMUM <XCircle className="w-5 h-5" />
        </h3>
        <ul className="space-y-4">
          {[
            "Treina, mas não evolui",
            "Repete os mesmos erros há meses",
            "Não entende o que está errado",
            "Perde espaço no time",
            "Fica inseguro em jogo"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-sec font-medium text-sm">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Elite Player */}
      <div className="bg-dark-sec p-6 rounded-[6px] border border-primary/30 relative overflow-hidden glow-blue">
        <h3 className="text-lg font-black mb-6 flex items-center gap-3 text-primary">
          O JOGADOR QUE EVOLUI <CheckCircle2 className="w-5 h-5" />
        </h3>
        <ul className="space-y-4">
          {[
            "Sabe exatamente o que corrigir",
            "Ajusta e melhora no mesmo treino",
            "Joga com confiança",
            "Vira referência no time",
            "Evolui em semanas"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <CheckCircle2 className="mt-0.5 w-4 h-4 text-primary shrink-0" />
              <span className="font-bold text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="text-center space-y-6">
      <div className="space-y-1">
        <p className="text-lg font-black text-white">👉 A diferença não é talento.</p>
        <p className="text-lg font-black text-primary">👉 É saber o que corrigir.</p>
      </div>
      <Button onClick={onCtaClick} variant="primary">
        QUERO FAZER PARTE DA ELITE
      </Button>
    </div>
  </Section>
);

const Solution = () => (
  <Section 
    className="bg-dark-sec"
    bgOverlay={<BackgroundOverlay opacity={0.1} darkOverlay={0.85} src="https://images.unsplash.com/photo-1592656094267-764a45159577?q=80&w=2070&auto=format&fit=crop" />}
  >
    <div className="text-center mb-10">
      <h2 className="text-3xl font-black mb-6 leading-tight text-white">
        🏐 O SISTEMA QUE CORRIGE SEU JOGO NA <span className="text-primary">PRÁTICA</span>
      </h2>
      <div className="text-sm text-text-sec mb-8 font-medium leading-relaxed space-y-4">
        <p style={{ paddingLeft: '40px', paddingRight: '40px' }}>O Vôlei Prático não é um curso teórico. É um guia de ação imediata.</p>
        <p>Para cada fundamento, você tem o vídeo da técnica correta e o vídeo do erro comum. Você identifica o que está fazendo, entende o ajuste e aplica no mesmo dia.</p>
        <p className="text-white font-black italic uppercase tracking-wider">Sem teoria. Só execução.</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: PlayCircle, title: "150 vídeos", desc: "2–3 min cada" },
          { icon: Zap, title: "Direto", desc: "Sem enrolação" },
          { icon: Target, title: "Prático", desc: "Aplicação imediata" },
          { icon: Trophy, title: "Evolução", desc: "Já na 1ª semana" }
        ].map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-2 p-4 bg-dark-main rounded-[6px] border border-white/5">
            <feature.icon className="w-6 h-6 text-primary" />
            <h4 className="font-bold text-xs uppercase tracking-tight text-white">{feature.title}</h4>
            <p className="text-text-sec text-[10px] font-medium">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="bg-dark-main p-6 rounded-[6px] border border-white/5">
      <h3 className="text-base font-black mb-6 uppercase tracking-widest text-center text-white">Como Funciona</h3>
      <div className="space-y-4">
        {[
          { step: "01", title: "Identifique o erro", desc: "Compare seu movimento" },
          { step: "02", title: "Entenda o ajuste", desc: "Veja o que mudar" },
          { step: "03", title: "Aplique no treino", desc: "Sinta a diferença" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-[6px] border border-white/5">
            <div className="w-10 h-10 bg-primary text-white rounded-[6px] flex items-center justify-center font-black text-sm shrink-0">{item.step}</div>
            <div>
              <p className="font-bold text-sm text-white">{item.title}</p>
              <p className="text-[10px] text-text-sec font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Content = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <Section className="bg-dark-main">
    <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4 border border-primary/20">
        <PlayCircle className="w-3.5 h-3.5 text-primary" />
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">150 TÉCNICAS EM VÍDEO</span>
      </div>
      <h2 className="text-3xl font-black mb-4 text-white">🏐 O que você vai <span className="text-primary">dominar</span></h2>
      <p className="text-sm text-text-sec font-medium max-w-xs mx-auto">
        Cada técnica com vídeo explicativo + demonstração prática + os microajustes.
      </p>
    </div>

    <div className="space-y-6 mb-10">
      <div className="bg-dark-sec border border-white/5 p-5 rounded-[6px] flex items-start gap-4">
        <PlayCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <p className="text-text-sec text-xs leading-relaxed font-medium">
          Vídeos curtos de 2-3 minutos — assista antes do treino e aplique no mesmo dia.
        </p>
      </div>
      
      <div className="space-y-6">
        {[
          { 
            title: "Fundamentos Base", 
            desc: "O alicerce do seu jogo",
            icon: Target,
            items: [
              { t: "Saque flutuante", d: "Posição da mão e ponto de contato exato" },
              { t: "Saque viagem", d: "Mecânica do salto e abordagem" },
              { t: "Recepção", d: "Postura e ângulo de plataforma" },
              { t: "Toque/Passe", d: "Posição dos dedos e absorção de impacto" },
              { t: "Levantamento", d: "Tempo, altura e direcionamento" },
              { t: "Posicionamento", d: "Leitura de jogo e antecipação" }
            ] 
          },
          { 
            title: "Técnicas Avançadas", 
            desc: "Eleve seu nível",
            icon: Zap,
            items: [
              { t: "Defesa de bola rápida", d: "Reflexo e posicionamento" },
              { t: "Ataque de fundo", d: "Abordagem e timing de salto" },
              { t: "Bloqueio", d: "Leitura do levantador e fechamento" },
              { t: "Manchete de potência", d: "Absorção de ataques fortes" },
              { t: "Largada", d: "Disfarce e toque preciso" },
              { t: "Cobertura de ataque", d: "Posição após o ataque" }
            ] 
          },
          { 
            title: "Alto Rendimento", 
            desc: "Nível elite",
            icon: Trophy,
            items: [
              { t: "Minimização de erros", d: "Identificar e corrigir vícios" },
              { t: "Execução limpa", d: "Economia de energia, máxima eficiência" },
              { t: "Microajustes profissionais", d: "Os detalhes que a elite domina" },
              { t: "Consistência", d: "Repetir o movimento correto sempre" }
            ] 
          }
        ].map((group, i) => (
          <div key={i} className="bg-dark-sec p-8 rounded-[12px] border border-white/5 relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0 border border-primary/20">
                <div className="w-3.5 h-3.5 rounded-full bg-primary glow-blue" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">{group.title}</h3>
                <p className="text-xs text-text-sec font-medium">{group.desc}</p>
              </div>
            </div>
            
            <div className="grid gap-8">
              {group.items.map((item, j) => (
                <div key={j} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-primary transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:hidden" />
                  </div>
                  <div>
                    <p className="font-black text-sm text-white uppercase tracking-tight leading-none mb-1.5">{item.t}</p>
                    <p className="text-[11px] text-text-sec font-medium leading-tight">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="text-center">
      <Button onClick={onCtaClick} variant="primary">
        QUERO DOMINAR ESSAS TÉCNICAS
      </Button>
    </div>
  </Section>
);

const Bonus = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const bonuses = [
    { title: "Guia do Atacante", desc: "Bata com mais força", img: "https://i.ibb.co/2YRWzhb7/Guia-Do-Atacante.png" },
    { title: "Planilha Evolução", desc: "Acompanhe seu progresso", img: "https://i.ibb.co/pvMKRW37/Planilha-de-evolu-o-t-cnica.png" },
    { title: "Guia da Defesa", desc: "Domine o fundo de quadra", img: "https://i.ibb.co/TDLMPhFv/Guia-da-defesa.png" },
    { title: "Guia Fundamentos", desc: "Resumo prático no celular", img: "https://i.ibb.co/8gzCVPP0/Guia-de-Fundamentos-do-V-lei.png" }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <Section 
      className="bg-dark-sec"
      bgOverlay={<BackgroundOverlay opacity={0.05} darkOverlay={0.9} src="https://images.unsplash.com/photo-1547347298-407458488a5a?q=80&w=2070&auto=format&fit=crop" />}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black mb-4 text-white">🏐 BÔNUS EXCLUSIVOS</h2>
        <p className="text-sm text-text-sec font-medium">Ferramentas para acelerar sua jornada.</p>
      </div>
      
      <div className="relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-6 gap-3 snap-x snap-mandatory no-scrollbar -mx-4 px-4 items-stretch"
        >
          {bonuses.map((bonus, i) => (
            <div key={i} className="flex-none w-[240px] snap-center">
              <div className="bg-dark-main p-5 rounded-[6px] flex flex-col items-center text-center transition-all group relative animate-neon-border h-[320px] border border-white/5">
                <div className="aspect-[3/4] w-full mb-4 rounded-[4px] overflow-hidden bg-white/5 flex items-center justify-center relative z-10">
                  <img 
                    src={bonus.img} 
                    alt={bonus.title} 
                    className="w-full h-full object-cover scale-[1.2] group-hover:scale-[1.3] transition-transform" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative z-10 mt-auto">
                  <h4 className="text-sm font-black mb-1 uppercase tracking-tight text-white">{bonus.title}</h4>
                  <p className="text-text-sec text-[10px] font-medium leading-relaxed">{bonus.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {bonuses.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-primary" : "w-1.5 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

const HowItWorks = () => (
  <Section className="bg-dark-main">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-black mb-4 uppercase text-white">🏐 COMO VOCÊ RECEBE</h2>
      <p className="text-sm text-text-sec font-medium">Simples, rápido e automático.</p>
    </div>
    
    <div className="grid grid-cols-1 gap-8">
      {[
        { icon: CreditCard, title: "1. Pagamento", desc: "Confirme na plataforma" },
        { icon: Mail, title: "2. E-mail", desc: "Receba o acesso na hora" },
        { icon: Download, title: "3. Acesso", desc: "Comece a treinar agora" }
      ].map((step, i) => (
        <div key={i} className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:glow-blue transition-all duration-500 border border-primary/20">
            <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-black mb-1 uppercase tracking-tight text-white">{step.title}</h3>
          <p className="text-text-sec text-xs font-medium leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

const FAQ = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    { q: "Para quem é o Vôlei Prático?", a: "Para qualquer jogador amador ou intermediário que quer evoluir tecnicamente." },
    { q: "Funciona para iniciantes?", a: "Sim! O sistema foca na base correta, evitando vícios técnicos." },
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento via e-mail." },
    { q: "Em quanto tempo vejo resultado?", a: "Muitos alunos relatam sentir diferença já no primeiro treino." },
    { q: "Posso acessar pelo celular?", a: "Sim! A plataforma é 100% otimizada para celulares." },
    { q: "O acesso é vitalício?", a: "Sim. Você paga uma única vez e tem acesso para sempre." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional." }
  ];

  return (
    <Section className="bg-dark-sec">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black mb-6 uppercase text-white">DÚVIDAS FREQUENTES</h2>
      </div>
      
      <div className="space-y-3 mb-10">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-dark-main rounded-[6px] border border-white/5 overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <span className="font-bold text-sm uppercase tracking-tight text-white">{faq.q}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 text-primary ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 text-text-sec text-xs font-medium leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button onClick={onCtaClick} variant="primary">
          QUERO MEU ACESSO AGORA
        </Button>
      </div>
    </Section>
  );
};

const SocialProofNotifications = () => {
  const [notification, setNotification] = useState<{name: string, state: string, time: string} | null>(null);

  const names = ["Lucas", "Gabriel", "Matheus", "Felipe", "Rodrigo", "Mariana", "Ana", "Beatriz", "Julia", "Camila"];
  const lastNames = ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves", "Pereira", "Lima", "Gomes"];
  const states = ["SP", "RJ", "MG", "CE", "RS", "PR", "BA", "SC", "GO", "PE"];
  const times = ["agora mesmo", "há 1 min", "há 3 min", "há 5 min", "há 7 min", "há 10 min"];

  useEffect(() => {
    const showNotification = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const state = states[Math.floor(Math.random() * states.length)];
      const time = times[Math.floor(Math.random() * times.length)];
      
      setNotification({ name: `${name} ${lastName}`, state, time });
      
      setTimeout(() => setNotification(null), 5000);
    };

    const interval = setInterval(showNotification, 25000);
    setTimeout(showNotification, 5000); // Initial delay

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="fixed bottom-6 left-4 z-[60] bg-dark-sec shadow-2xl rounded-[6px] p-3 border border-white/10 flex items-center gap-3 max-w-[280px] glow-blue"
        >
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
            <Users className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-white leading-tight">
              {notification.name} ({notification.state}) adquiriu o <span className="text-primary">Vôlei Prático</span>
            </p>
            <p className="text-[8px] text-text-sec font-bold uppercase tracking-widest mt-1">
              {notification.time}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SocialProof = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const proofImages = [
    "https://i.ibb.co/HTc4phtq/img-0136-2.png",
    "https://i.ibb.co/YTtscXws/img-0136.png",
    "https://i.ibb.co/8DQF9Zcz/img-0136-1.png"
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <Section className="bg-dark-main">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black mb-6 uppercase text-white">🏐 QUEM APLICA, EVOLUI</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-10">
        {[
          { name: "Lucas Silva", pos: "Ponteiro", text: "Minha recepção era meu ponto fraco. Em 2 semanas virei referência no time.", img: "https://i.ibb.co/d4b07nQ3/5.png" },
          { name: "Mariana Costa", pos: "Levantadora", text: "O toque ficou muito mais limpo. Hoje consigo jogar sob pressão.", img: "https://i.ibb.co/DgMJ1v9t/6.png" },
          { name: "Ricardo Oliveira", pos: "Oposto", text: "Meu ataque mudou completamente. Muito mais força e precisão.", img: "https://i.ibb.co/gLbHJLmM/7.png" }
        ].map((card, i) => (
          <div key={i} className="bg-dark-sec p-6 rounded-[6px] border border-white/5 relative">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-primary text-primary" />)}
            </div>
            <p className="text-text-sec italic text-xs mb-4 leading-relaxed font-medium">"{card.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                <img src={card.img} alt={card.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">{card.name}</p>
                <p className="text-[9px] uppercase tracking-widest text-primary font-black">{card.pos}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Proof Image Carousel */}
      <div className="relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-6 gap-3 snap-x snap-mandatory no-scrollbar -mx-4 px-4"
        >
          {proofImages.map((img, i) => (
            <div key={i} className="flex-none w-[240px] snap-center">
              <div className="bg-dark-sec rounded-[6px] overflow-hidden border border-white/5 aspect-[9/16] relative group">
                <img 
                  src={img} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-main/40 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {proofImages.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-primary" : "w-1.5 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

const Offer = ({ onCheckout }: { onCheckout: () => void }) => (
  <Section 
    id="offer-section"
    className="bg-dark-sec text-center"
    bgOverlay={<BackgroundOverlay opacity={0.1} darkOverlay={0.9} src="https://images.unsplash.com/photo-1592656094267-764a45159577?q=80&w=2070&auto=format&fit=crop" />}
  >
    <div className="relative z-10">
      <h2 className="font-display font-black mb-6 text-balance uppercase text-white leading-tight" style={{ fontSize: '32px' }}>
        🏐 VOCÊ ESTÁ A UM <span className="text-primary">AJUSTE</span> DA ELITE
      </h2>
      
      <div className="bg-dark-main rounded-[6px] p-6 border border-primary/20 mb-8 text-left glow-blue">
        <h3 className="uppercase tracking-widest text-center border-b border-white/5 pb-4 text-white" style={{ fontSize: '13px', fontWeight: 'normal' }}>
          O QUE VOCÊ ESTÁ LEVANDO HOJE:
        </h3>
        <div className="grid grid-cols-1 gap-4 mb-8">
          {[
            "150 Técnicas em Vídeo",
            "Guia do Atacante (Bônus)",
            "Planilha de Evolução (Bônus)",
            "Guia da Defesa (Bônus)",
            "Guia de Fundamentos (Bônus)",
            "Acesso Vitalício e Imediato"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="font-bold text-sm text-white">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-white/5 rounded-[6px] p-5 border border-white/5">
          <p className="text-text-sec line-through text-sm font-bold">De R$ 97,00</p>
          <p className="font-display font-black mt-1" style={{ fontSize: '55px', color: '#ffffff' }}>R$ 19,90</p>
          <p className="text-[9px] font-bold uppercase tracking-widest mt-2 text-text-sec">Pagamento único • Sem mensalidades</p>
        </div>
      </div>

      <div className="space-y-6">
        <Button onClick={onCheckout} variant="primary" className="text-xl py-4">
          QUERO MEU ACESSO AGORA
        </Button>
        
        <div className="flex flex-col items-center gap-3">
          <img 
            src="https://i.ibb.co/VpxMm7k8/formas-pagamento.png" 
            alt="Formas de Pagamento" 
            className="object-contain opacity-60"
            style={{ width: '123px', height: '37px' }}
            referrerPolicy="no-referrer"
          />
          <p className="flex items-center gap-1.5 text-[9px] font-bold text-text-sec uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Compra 100% Segura
          </p>
        </div>
      </div>
    </div>
  </Section>
);

const Guarantee = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <Section className="bg-dark-main text-center">
    <div className="max-w-xs mx-auto">
      <img 
        src="https://i.ibb.co/tMw3TmJF/Selo-de-Garantia-de-7-Dias-PNG-Transparente-Sem-Fundo-1.webp" 
        alt="Garantia 7 Dias" 
        className="mx-auto mb-6 drop-shadow-[0_0_20px_rgba(0,224,255,0.2)]"
        style={{ width: '200px', height: '200px' }}
        referrerPolicy="no-referrer"
      />
      <h2 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">🏐 7 DIAS DE GARANTIA TOTAL</h2>
      <div className="space-y-6 text-sm text-text-sec font-medium leading-relaxed">
        <div className="space-y-2">
          <p>Use, teste, aplique.</p>
          <p style={{ paddingLeft: '30px', paddingRight: '30px' }}>Se você não sentir evolução — devolvemos 100% do seu dinheiro.</p>
          <p className="text-primary font-black uppercase tracking-widest text-xs">Sem perguntas. Sem risco.</p>
        </div>
        <Button onClick={onCtaClick} variant="primary">
          QUERO COMEÇAR SEM RISCO
        </Button>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="py-12 px-6 bg-dark-sec text-center text-text-sec text-[10px] border-t border-white/5">
    <div className="mobile-container">
      <p className="mb-4 font-display font-black text-lg uppercase tracking-[0.3em] text-white">VÔLEI PRÁTICO</p>
      <div className="flex justify-center gap-6 mb-8 text-text-sec font-bold uppercase tracking-widest">
        <a href="#" className="hover:text-primary transition-colors">Termos</a>
        <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
        <a href="#" className="hover:text-primary transition-colors">Suporte</a>
      </div>
      <p className="leading-relaxed opacity-50">
        © 2024 Vôlei Prático. Todos os direitos reservados. Este produto não garante resultados sem a prática e dedicação do aluno.
      </p>
    </div>
  </footer>
);

export default function App() {
  const scrollToOffer = () => {
    const element = document.getElementById('offer-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white bg-dark-main">
      <SocialProofNotifications />
      <HeaderBar />
      <Hero onCtaClick={scrollToOffer} />
      <Problem onCtaClick={scrollToOffer} />
      <Duality onCtaClick={scrollToOffer} />
      <Solution />
      <Content onCtaClick={scrollToOffer} />
      <HowItWorks />
      <SocialProof />
      <Bonus />
      <Offer onCheckout={handleCheckout} />
      <FAQ onCtaClick={scrollToOffer} />
      <Guarantee onCtaClick={scrollToOffer} />
      <Footer />
    </div>
  );
}
