/**
 * Mito 妙投 — 系统架构区块
 * 展示12层因子体系 + 4大核心模块
 * 风格：白底，左侧因子层级 + 右侧模块卡片
 */
import { useEffect, useRef, useState } from "react";

const factorLayers = [
  { id: "L1", name: "趋势动量", en: "Trend Momentum", color: "oklch(0.45 0.18 255)" },
  { id: "L2", name: "量价资金", en: "Volume Flow", color: "oklch(0.50 0.16 220)" },
  { id: "L3", name: "能量结构", en: "Energy Structure", color: "oklch(0.45 0.20 280)" },
  { id: "L4", name: "技术形态", en: "Technical Pattern", color: "oklch(0.55 0.18 200)" },
  { id: "L5", name: "风险估值", en: "Risk & Value", color: "oklch(0.50 0.15 240)" },
  { id: "L6", name: "行业轮动", en: "Sector Rotation", color: "oklch(0.45 0.18 260)" },
  { id: "L7", name: "突破信号", en: "Breakout Signal", color: "oklch(0.55 0.20 210)" },
  { id: "L8", name: "高阶演进", en: "Advanced Alpha", color: "oklch(0.48 0.16 270)" },
  { id: "L9", name: "弹性捕捉", en: "Elasticity", color: "oklch(0.52 0.18 250)" },
  { id: "L10", name: "强势共振", en: "Resonance", color: "oklch(0.46 0.17 255)" },
  { id: "L11", name: "价格结构", en: "Price Structure", color: "oklch(0.50 0.15 245)" },
  { id: "L12", name: "截面结构", en: "Cross Section", color: "oklch(0.44 0.18 265)" },
];

const coreModules = [
  {
    tag: "Alpha Engine",
    title: "Alpha 引擎",
    desc: "多维度、多层次的 Alpha 挖掘体系。从趋势动量到截面结构，系统性捕捉 A 股市场的结构性超额收益机会，通过动态权重机制持续适应市场风格切换。",
    detail: "IC 衰减门控 · 行业中性化 · 动态因子权重",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 17 L8 11 L13 14 L21 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="21" cy="4" r="1.5" fill="currentColor"/>
        <path d="M3 21 H21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
  },
  {
    tag: "Risk Shield",
    title: "风险护盾",
    desc: "自适应止损 + 结构性止损 + 时间止损三重机制。根据市场状态动态调整风控参数，在不同市场环境下实现攻守平衡，有效控制回撤。",
    detail: "自适应止损 · 行业拥挤度惩罚 · 市场广度监控",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3 L20 7 V13 C20 17.4 16.4 21.4 12 22 C7.6 21.4 4 17.4 4 13 V7 L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 12 L11 14 L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    tag: "Fusion Model",
    title: "双层融合",
    desc: "行业选择层与个股 Alpha 层双层融合评分。行业胜率作为个股分数的放大系数，而非简单叠加，实现行业与个股两个维度的协同增强。",
    detail: "梯度提升模型 · 季节性加权 · 滚动训练",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M10.5 10.5 L12 13 M13.5 10.5 L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    tag: "Execution Logic",
    title: "执行逻辑",
    desc: "专为中小资金实盘设计。等权分散组合，严格控制单行业集中度，设有流动性过滤门槛，适中换手率，交易成本已纳入回测验证。",
    detail: "等权分散 · 行业分散 · 流动性过滤",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
        <path d="M17.5 17.5 L20 20 M17.5 20 L20 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function SystemSection() {
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
    <section ref={sectionRef} id="system" className="py-24 bg-white">
      <div className="container">
        {/* 标题 */}
        <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "oklch(0.72 0.14 85)" }} />
            <span className="section-tag">System Architecture</span>
          </div>
          <h2 style={{
            fontFamily: "'Noto Serif SC', serif",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            color: "oklch(0.18 0.06 255)",
            lineHeight: 1.3,
          }}>
            Mito 如何工作
          </h2>
          <p className="mt-3 text-base" style={{
            color: "oklch(0.50 0.02 255)",
            fontFamily: "'Noto Sans SC', sans-serif",
            fontWeight: 300,
            maxWidth: "36rem",
          }}>
            从原始行情数据到可执行的选股信号，Mito 构建了一套完整的量化 Alpha 生产流水线。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* 左侧：因子层级可视化 */}
          <div className={`lg:col-span-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "100ms" }}>
            <div className="mb-4">
              <span className="section-tag">Factor Architecture · 12 Layers · 55+ Factors</span>
            </div>
            <div className="space-y-1.5">
              {factorLayers.map((layer, i) => (
                <div
                  key={layer.id}
                  className={`flex items-center gap-3 p-3 rounded-sm transition-all duration-500 group cursor-default ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  style={{
                    transitionDelay: `${150 + i * 50}ms`,
                    border: "1px solid oklch(0.92 0.003 255)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = layer.color;
                    (e.currentTarget as HTMLElement).style.background = `${layer.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.92 0.003 255)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {/* 层级标签 */}
                  <div className="font-mono-data text-xs font-600 w-8 shrink-0"
                    style={{ color: layer.color }}>
                    {layer.id}
                  </div>
                  {/* 颜色条 */}
                  <div className="w-1 h-5 rounded-full shrink-0"
                    style={{ background: layer.color, opacity: 0.7 }} />
                  {/* 名称 */}
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-500" style={{
                      color: "oklch(0.25 0.05 255)",
                      fontFamily: "'Noto Sans SC', sans-serif",
                    }}>
                      {layer.name}
                    </span>
                    <span className="ml-2 text-xs" style={{ color: "oklch(0.65 0.01 255)" }}>
                      {layer.en}
                    </span>
                  </div>

                </div>
              ))}
            </div>


          </div>

          {/* 右侧：核心模块卡片 */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {coreModules.map((mod, i) => (
                <div
                  key={mod.tag}
                  className={`data-card p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  {/* 图标 + 标签 */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm"
                      style={{ background: "oklch(0.18 0.06 255 / 0.06)", color: "oklch(0.35 0.06 255)" }}>
                      {mod.icon}
                    </div>
                    <span className="font-grotesk text-xs font-600 tracking-wider"
                      style={{ color: "oklch(0.72 0.14 85)", letterSpacing: "0.12em" }}>
                      {mod.tag}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h3 className="mb-2" style={{
                    fontFamily: "'Noto Serif SC', serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "oklch(0.18 0.06 255)",
                  }}>
                    {mod.title}
                  </h3>

                  {/* 描述 */}
                  <p className="text-sm leading-relaxed mb-4" style={{
                    color: "oklch(0.48 0.02 255)",
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontWeight: 300,
                  }}>
                    {mod.desc}
                  </p>

                  {/* 技术标签 */}
                  <div className="pt-3" style={{ borderTop: "1px solid oklch(0.92 0.003 255)" }}>
                    <span className="font-mono-data text-xs" style={{ color: "oklch(0.60 0.01 255)" }}>
                      {mod.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 流水线说明 */}
            <div className={`mt-5 p-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                transitionDelay: "600ms",
                background: "oklch(0.18 0.06 255 / 0.03)",
                border: "1px solid oklch(0.18 0.06 255 / 0.08)",
                borderRadius: "0.4rem",
              }}>
              <div className="section-tag mb-2">Pipeline Flow</div>
              <div className="flex items-center gap-2 flex-wrap text-xs font-mono-data"
                style={{ color: "oklch(0.45 0.03 255)" }}>
                {["原始行情", "特征计算", "行业选择", "个股评分", "风控过滤", "组合输出"].map((step, i, arr) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-sm"
                      style={{ background: "oklch(0.18 0.06 255 / 0.08)", color: "oklch(0.35 0.05 255)" }}>
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <span style={{ color: "oklch(0.72 0.14 85)" }}>→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
