/**
 * Mito 妙投 — 适合团队区块
 * 风格：浅灰背景，精准筛选目标客户
 */
import { useEffect, useRef, useState } from "react";

const clients = [
  {
    title: "私募基金",
    en: "Private Fund",
    desc: "寻求量化增强策略，提升超额收益稳定性，满足持续扩张的 AUM 管理需求。",
    tags: ["Alpha 增强", "策略多元化"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 8 V6 C9 4.9 9.9 4 11 4 H17 C18.1 4 19 4.9 19 6 V8" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 14 H24" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="14" cy="17" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "中小资金盘",
    en: "Mid-Size Capital",
    desc: "资金规模 500万-5亿，需要高性价比的量化选股工具，降低人工研究成本。",
    tags: ["成本优化", "规模适配"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4 L24 9 V19 L14 24 L4 19 V9 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 4 V24 M4 9 L24 9 M4 19 L24 19" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: "游资机构化团队",
    en: "Active Trading Team",
    desc: "从短线博弈向系统化转型，需要量化工具支撑机构化运营，建立可持续竞争优势。",
    tags: ["系统化转型", "纪律执行"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20 L10 12 L16 15 L24 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 6 H24 V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 24 H24" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: "家族办公室",
    en: "Family Office",
    desc: "注重资产保值增值，需要风险可控、逻辑透明的量化策略，补充传统资产配置。",
    tags: ["风险可控", "逻辑透明"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4 L4 10 V24 H24 V10 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="10" y="16" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 4 L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "传统交易团队",
    en: "Traditional Traders",
    desc: "主观交易经验丰富，希望引入量化工具辅助决策，实现主观与量化的有机结合。",
    tags: ["主观+量化", "能力升级"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 24 C6 19.6 9.6 16 14 16 C18.4 16 22 19.6 22 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M19 8 L21 10 L25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function ClientSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="clients" className="py-24"
      style={{ background: "oklch(0.975 0.002 255)" }}>
      <div className="container">
        {/* 标题 */}
        <div className={`mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "oklch(0.72 0.14 85)" }} />
            <span className="section-tag">Target Clients</span>
          </div>
          <h2 style={{
            fontFamily: "'Noto Serif SC', serif",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            color: "oklch(0.18 0.06 255)",
            lineHeight: 1.3,
          }}>
            适合哪些团队
          </h2>
          <p className="mt-3 text-base" style={{
            color: "oklch(0.50 0.02 255)",
            fontFamily: "'Noto Sans SC', sans-serif",
            fontWeight: 300,
            maxWidth: "32rem",
          }}>
            Mito 专为以下类型的专业资金团队设计，而非面向个人散户。
          </p>
        </div>

        {/* 客户卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map((client, i) => (
            <div
              key={client.title}
              className={`bg-white p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                border: "1px solid oklch(0.90 0.005 255)",
                borderRadius: "0.4rem",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "oklch(0.18 0.06 255 / 0.3)";
                el.style.boxShadow = "0 6px 24px oklch(0.18 0.06 255 / 0.08)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "oklch(0.90 0.005 255)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* 图标 */}
              <div className="w-11 h-11 flex items-center justify-center rounded-sm mb-4"
                style={{ background: "oklch(0.18 0.06 255 / 0.05)", color: "oklch(0.35 0.06 255)" }}>
                {client.icon}
              </div>

              {/* 标题 */}
              <h3 className="mb-0.5" style={{
                fontFamily: "'Noto Serif SC', serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "oklch(0.18 0.06 255)",
              }}>
                {client.title}
              </h3>
              <div className="font-grotesk text-xs mb-3" style={{
                color: "oklch(0.65 0.01 255)",
                letterSpacing: "0.08em",
              }}>
                {client.en}
              </div>

              {/* 描述 */}
              <p className="text-sm leading-relaxed mb-4" style={{
                color: "oklch(0.48 0.02 255)",
                fontFamily: "'Noto Sans SC', sans-serif",
                fontWeight: 300,
              }}>
                {client.desc}
              </p>

              {/* 标签 */}
              <div className="flex gap-2">
                {client.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 text-xs font-mono-data rounded-sm"
                    style={{
                      background: "oklch(0.18 0.06 255 / 0.05)",
                      color: "oklch(0.40 0.05 255)",
                      border: "1px solid oklch(0.18 0.06 255 / 0.10)",
                    }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* 说明卡片 */}
          <div
            className={`bg-white p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              transitionDelay: "500ms",
              border: "1px solid oklch(0.90 0.005 255)",
              borderRadius: "0.4rem",
            }}
          >
            {/* 图标 */}
            <div className="w-11 h-11 flex items-center justify-center rounded-sm mb-4"
              style={{ background: "oklch(0.18 0.06 255 / 0.05)", color: "oklch(0.35 0.06 255)" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 10 L18 18 M18 10 L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            {/* 标题 */}
            <h3 className="mb-0.5" style={{
              fontFamily: "'Noto Serif SC', serif",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "oklch(0.18 0.06 255)",
            }}>
              不适合的团队
            </h3>
            <div className="font-grotesk text-xs mb-3" style={{
              color: "oklch(0.65 0.01 255)",
              letterSpacing: "0.08em",
            }}>
              Not For
            </div>
            {/* 描述 */}
            <p className="text-sm leading-relaxed mb-4" style={{
              color: "oklch(0.48 0.02 255)",
              fontFamily: "'Noto Sans SC', sans-serif",
              fontWeight: 300,
            }}>
              Mito 不适合个人散户、短线投机或追求快速暴利的资金。
              我们只与具备专业背景、追求长期稳健收益的机构团队合作。
            </p>
            {/* 标签 */}
            <div className="flex gap-2">
              {["专业机构", "长期合作"].map(tag => (
                <span key={tag} className="px-2 py-0.5 text-xs font-mono-data rounded-sm"
                  style={{
                    background: "oklch(0.18 0.06 255 / 0.05)",
                    color: "oklch(0.40 0.05 255)",
                    border: "1px solid oklch(0.18 0.06 255 / 0.10)",
                  }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
