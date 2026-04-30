/**
 * Mito 妙投 — 核心痛点区块
 * 风格：白底，三列卡片，对比感强
 */
import { useEffect, useRef, useState } from "react";

const painPoints = [
  {
    number: "01",
    title: "情绪化决策",
    subtitle: "Emotional Trading",
    desc: "追涨杀跌，缺乏纪律。人工判断受市场情绪左右，在关键节点往往做出反向操作，系统性损失难以避免。",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20 L10 12 L16 16 L22 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="6" r="2" fill="currentColor"/>
        <path d="M4 24 H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "人力效率低",
    subtitle: "Coverage Gap",
    desc: "研究员无法覆盖全市场。A股5000+标的，人工筛选存在严重的信息盲区，优质机会在覆盖范围之外悄然流失。",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 9 V14 L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M5 14 H3 M25 14 H23 M14 3 V5 M14 23 V25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "无法稳定复制",
    subtitle: "Non-Replicable",
    desc: "靠经验而非系统。个人能力难以规模化，关键人员离职即意味着策略失效，团队无法形成可持续的竞争壁垒。",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="8" height="12" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="16" y="8" width="8" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
        <path d="M12 14 H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
  },
];

export default function PainPointSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white" id="painpoints">
      <div className="container">
        {/* 标题区 */}
        <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "oklch(0.72 0.14 85)" }} />
            <span className="section-tag">Market Reality</span>
          </div>
          <h2 style={{
            fontFamily: "'Noto Serif SC', serif",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            color: "oklch(0.18 0.06 255)",
            lineHeight: 1.3,
          }}>
            传统资金团队正在被量化机构
            <span className="text-gold">系统性碾压</span>
          </h2>
          <p className="mt-3 text-base" style={{
            color: "oklch(0.50 0.02 255)",
            fontFamily: "'Noto Sans SC', sans-serif",
            fontWeight: 300,
            maxWidth: "36rem",
          }}>
            不是你不努力，而是工具代差已经形成。量化机构每天处理数百万条数据，
            而传统团队仍在用经验和直觉做决策。
          </p>
        </div>

        {/* 痛点卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={point.number}
              className={`relative p-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${i * 120}ms`,
                border: "1px solid oklch(0.90 0.005 255)",
                borderRadius: "0.4rem",
              }}
            >
              {/* 序号 */}
              <div className="absolute top-5 right-6 font-mono-data text-4xl font-600 select-none"
                style={{ color: "oklch(0.94 0.003 255)", lineHeight: 1 }}>
                {point.number}
              </div>

              {/* 图标 */}
              <div className="mb-5 w-10 h-10 flex items-center justify-center rounded-sm"
                style={{ background: "oklch(0.96 0.002 255)", color: "oklch(0.35 0.06 255)" }}>
                {point.icon}
              </div>

              {/* 标题 */}
              <h3 className="mb-1" style={{
                fontFamily: "'Noto Serif SC', serif",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "oklch(0.18 0.06 255)",
              }}>
                {point.title}
              </h3>
              <div className="font-grotesk text-xs mb-3" style={{ color: "oklch(0.72 0.14 85)", letterSpacing: "0.1em" }}>
                {point.subtitle}
              </div>

              {/* 描述 */}
              <p className="text-sm leading-relaxed" style={{
                color: "oklch(0.50 0.02 255)",
                fontFamily: "'Noto Sans SC', sans-serif",
                fontWeight: 300,
              }}>
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 底部结论 */}
        <div className={`mt-10 p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            transitionDelay: "400ms",
            background: "oklch(0.18 0.06 255 / 0.03)",
            borderLeft: "3px solid oklch(0.72 0.14 85)",
            borderRadius: "0 0.4rem 0.4rem 0",
          }}>
          <p className="text-base" style={{
            fontFamily: "'Noto Serif SC', serif",
            fontWeight: 600,
            color: "oklch(0.25 0.05 255)",
            lineHeight: 1.6,
          }}>
            Mito 将经验升级为系统，把交易变成可复制的机构级能力。
          </p>
          <p className="mt-1 text-sm" style={{ color: "oklch(0.55 0.015 255)", fontFamily: "'Noto Sans SC', sans-serif" }}>
            你不需要组建量化团队，只需接入 Mito 的能力层。
          </p>
        </div>
      </div>
    </section>
  );
}
