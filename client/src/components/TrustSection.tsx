/**
 * Mito 妙投 — 信任背书区块
 * 展示技术深度、数据量级、系统可靠性
 * 风格：白底，横向数据条，简洁有力
 */
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../hooks/useCountUp";

const trustStats = [
  { value: 5000, unit: "+", label: "A股覆盖标的", en: "A-Share Universe", decimals: 0 },
  { value: 55, unit: "+", label: "Alpha 因子", en: "Alpha Factors", decimals: 0 },
  { value: 146, unit: "月", label: "回测周期", en: "Backtest Period", decimals: 0 },
  { value: 12, unit: "层", label: "因子体系", en: "Factor Layers", decimals: 0 },
];

function TrustStat({ value, unit, label, en, decimals, triggered, delay }: {
  value: number; unit: string; label: string; en: string; decimals: number;
  triggered: boolean; delay: number;
}) {
  const { value: displayValue, trigger } = useCountUp({ end: value, decimals, duration: 1800 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (triggered && !started) {
      const t = setTimeout(() => { setStarted(true); trigger(); }, delay);
      return () => clearTimeout(t);
    }
  }, [triggered, started, delay]);

  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center gap-0.5 mb-1">
        <span className="stat-number" style={{
          fontSize: "2.5rem",
          color: "oklch(0.18 0.06 255)",
        }}>
          {displayValue.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
        </span>
        <span className="font-mono-data text-base font-600" style={{ color: "oklch(0.72 0.14 85)" }}>
          {unit}
        </span>
      </div>
      <div className="text-sm font-500" style={{
        color: "oklch(0.25 0.05 255)",
        fontFamily: "'Noto Sans SC', sans-serif",
      }}>
        {label}
      </div>
      <div className="text-xs font-grotesk mt-0.5" style={{ color: "oklch(0.65 0.01 255)" }}>
        {en}
      </div>
    </div>
  );
}

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16"
      style={{ background: "oklch(0.975 0.002 255)", borderTop: "1px solid oklch(0.92 0.003 255)" }}>
      <div className="container">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {trustStats.map((stat, i) => (
            <TrustStat key={stat.label} {...stat} triggered={visible} delay={i * 100} />
          ))}
        </div>

        {/* 技术标签行 */}
        <div className={`mt-10 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "400ms" }}>
          {[
            "LightGBM · 梯度提升",
            "IC 衰减门控",
            "行业中性化",
            "ATR 自适应止损",
            "双层融合评分",
            "季节性加权训练",
            "Bootstrap 采样",
            "滚动窗口回测",
          ].map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-mono-data rounded-sm"
              style={{
                background: "white",
                color: "oklch(0.40 0.04 255)",
                border: "1px solid oklch(0.88 0.005 255)",
              }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
