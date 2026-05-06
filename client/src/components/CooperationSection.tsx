/**
 * Mito 妙投 — 合作模式区块
 * 风格：白底，三列卡片，不展示价格
 */
import { useEffect, useRef, useState } from "react";

const plans = [
  {
    tag: "Advisory",
    title: "顾问合作版",
    subtitle: "Research Support",
    desc: "适合希望快速引入量化能力、以研究支持为主的团队。",
    features: [
      "月度股票池输出（Top50 精选）分析报告",
      "行业配置建议与风险预警",
      "回测报告 + 因子分析报告",
      "定期策略复盘与优化建议",
      "专属微信群实时支持",
    ],
    highlight: false,
    cta: "了解详情",
  },
  {
    tag: "Institutional",
    title: "机构版",
    subtitle: "Deep Integration",
    desc: "适合有技术团队、需要深度整合量化能力的机构客户。",
    features: [
      "API 接口对接（JSON/CSV 格式）",
      "定制化模型训练与调优",
      "实盘风险预警推送",
      "专属因子开发支持",
      "深度技术分析报告",
      "AI + 数据挖掘方法论"
    ],
    highlight: true,
    cta: "申请演示",
  },
  {
    tag: "License",
    title: "系统授权版",
    subtitle: "Independent Deployment",
    desc: "适合有独立部署需求、希望完全掌控系统的大型机构。",
    features: [
      "源码级系统授权",
      "私有化部署支持",
      "专属合作协议",
      "长期技术维护",
      "独家区域合作权益",
    ],
    highlight: false,
    cta: "商务洽谈",
  },
];

export default function CooperationSection() {
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

  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} id="cooperation" className="py-24 bg-white">
      <div className="container">
        {/* 标题 */}
        <div className={`mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "oklch(0.72 0.14 85)" }} />
            <span className="section-tag">Cooperation Model</span>
          </div>
          <h2 style={{
            fontFamily: "'Noto Serif SC', serif",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            color: "oklch(0.18 0.06 255)",
            lineHeight: 1.3,
          }}>
            合作模式
          </h2>
          <p className="mt-3 text-base" style={{
            color: "oklch(0.50 0.02 255)",
            fontFamily: "'Noto Sans SC', sans-serif",
            fontWeight: 300,
            maxWidth: "32rem",
          }}>
            根据团队规模和需求深度，提供三种灵活的合作方式。具体方案请联系我们面议。
          </p>
        </div>

        {/* 合作方案卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.tag}
              className={`relative flex flex-col transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                transitionDelay: `${i * 120}ms`,
                border: plan.highlight
                  ? "1.5px solid oklch(0.18 0.06 255)"
                  : "1px solid oklch(0.90 0.005 255)",
                borderRadius: "0.4rem",
                background: plan.highlight ? "oklch(0.18 0.06 255)" : "white",
              }}
            >
              {/* 推荐标签 */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-0.5 text-xs font-mono-data rounded-full"
                    style={{ background: "oklch(0.72 0.14 85)", color: "oklch(0.18 0.06 255)", fontWeight: 600 }}>
                    推荐
                  </span>
                </div>
              )}

              <div className="p-7 flex-1">
                {/* 标签 */}
                <div className="font-grotesk text-xs font-600 tracking-widest mb-3"
                  style={{ color: plan.highlight ? "oklch(0.72 0.14 85)" : "oklch(0.72 0.14 85)" }}>
                  {plan.tag}
                </div>

                {/* 标题 */}
                <h3 className="mb-0.5" style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: plan.highlight ? "oklch(0.96 0.005 255)" : "oklch(0.18 0.06 255)",
                }}>
                  {plan.title}
                </h3>
                <div className="font-grotesk text-xs mb-4" style={{
                  color: plan.highlight ? "oklch(0.70 0.01 255)" : "oklch(0.60 0.01 255)",
                  letterSpacing: "0.08em",
                }}>
                  {plan.subtitle}
                </div>

                {/* 描述 */}
                <p className="text-sm mb-5" style={{
                  color: plan.highlight ? "oklch(0.75 0.01 255)" : "oklch(0.50 0.02 255)",
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}>
                  {plan.desc}
                </p>

                {/* 分割线 */}
                <div className="mb-5 h-px" style={{
                  background: plan.highlight ? "oklch(1 0 0 / 0.1)" : "oklch(0.90 0.005 255)",
                }} />

                {/* 功能列表 */}
                <ul className="space-y-2.5">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm" style={{
                      color: plan.highlight ? "oklch(0.82 0.005 255)" : "oklch(0.40 0.02 255)",
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontWeight: 300,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0">
                        <circle cx="7" cy="7" r="6" stroke={plan.highlight ? "oklch(0.72 0.14 85)" : "oklch(0.45 0.18 255)"} strokeWidth="1.5"/>
                        <path d="M4.5 7 L6.5 9 L9.5 5" stroke={plan.highlight ? "oklch(0.72 0.14 85)" : "oklch(0.45 0.18 255)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-7 pt-0">
                <button
                  onClick={handleContact}
                  className="w-full py-2.5 text-sm font-500 rounded-sm transition-all duration-200"
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    letterSpacing: "0.05em",
                    background: plan.highlight ? "oklch(0.72 0.14 85)" : "transparent",
                    color: plan.highlight ? "oklch(0.18 0.06 255)" : "oklch(0.18 0.06 255)",
                    border: plan.highlight ? "none" : "1px solid oklch(0.18 0.06 255 / 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    if (plan.highlight) {
                      el.style.background = "oklch(0.78 0.12 85)";
                    } else {
                      el.style.background = "oklch(0.18 0.06 255 / 0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    if (plan.highlight) {
                      el.style.background = "oklch(0.72 0.14 85)";
                    } else {
                      el.style.background = "transparent";
                    }
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 底部说明 */}
        <p className={`mt-8 text-center text-sm transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ color: "oklch(0.60 0.01 255)", fontFamily: "'Noto Sans SC', sans-serif", transitionDelay: "400ms" }}>
          具体条款以双方协议为准。
        </p>
      </div>
    </section>
  );
}
