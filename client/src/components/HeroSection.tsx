/**
 * Mito 妙投 — Hero 首屏
 * 风格：冷白精密，非对称布局，左文字+右数据卡片
 * 背景：极淡网格 + 生成的数据流线图
 */
import { useEffect, useState } from "react";
import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { label: "回测周期", value: 143, unit: "个月", decimals: 0 },
  { label: "年化收益", value: 33.20, unit: "%", decimals: 2 },
  { label: "夏普比率", value: 1.43, unit: "", decimals: 2 },
  { label: "最大回撤", value: 17.20, unit: "%", decimals: 2 },
  { label: "累计收益", value: 2171, unit: "%", decimals: 0, }, // 22.71x -> 2171% 累计收益
];

function StatCard({ label, value, unit, decimals, delay }: {
  label: string; value: number; unit: string; decimals: number; delay: number;
}) {
  const { value: displayValue, trigger } = useCountUp({ end: value, decimals, duration: 2200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      trigger();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`data-card p-4 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="section-tag mb-2">{label}</div>
      <div className="flex items-baseline gap-1">
        <span className="stat-number text-3xl" style={{ color: "oklch(0.18 0.06 255)" }}>
          {displayValue.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
        </span>
        {unit && (
          <span className="font-mono-data text-sm font-500" style={{ color: "oklch(0.72 0.14 85)" }}>
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ paddingTop: "7rem" }}
    >
      {/* 背景图 */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663611585110/hfp3vYdDm5Fs6MxPrqA4Bh/mito-hero-bg-ChQHrB6VtR3d27vaJ6mb6i.webp"
          alt=""
          className="w-full h-full object-cover opacity-30"
          style={{ objectPosition: "center 30%" }}
        />
        {/* 渐变遮罩 */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(255,255,255,0.98) 30%, rgba(255,255,255,0.75) 55%, rgba(255,255,255,0.2) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to top, white, transparent)" }} />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-5rem)] py-16">

          {/* 左侧文字区 */}
          <div className="lg:col-span-6 xl:col-span-5">
            {/* 标签 */}
            <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="w-8 h-px" style={{ background: "oklch(0.72 0.14 85)" }} />
              <span className="section-tag">China A-Share Quant Engine</span>
            </div>

            {/* 主标题 */}
            <div className={`transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <h1 className="mb-2" style={{
                fontFamily: "'Noto Serif SC', serif",
                fontWeight: 900,
                fontSize: "clamp(3rem, 6vw, 5rem)",
                lineHeight: 1.05,
                color: "oklch(0.18 0.06 255)",
                letterSpacing: "-0.02em",
              }}>
                Mito
                <span className="ml-3 font-light" style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  color: "oklch(0.40 0.04 255)",
                  letterSpacing: "0.05em",
                }}>妙投</span>
              </h1>
              <h2 style={{
                fontFamily: "'Noto Serif SC', serif",
                fontWeight: 600,
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                color: "oklch(0.30 0.05 255)",
                letterSpacing: "0.02em",
                lineHeight: 1.4,
              }}>
                中国A股智能选股引擎
              </h2>
            </div>

            {/* 副标题 */}
            <p className={`mt-5 text-base leading-relaxed transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                color: "oklch(0.45 0.02 255)",
                fontFamily: "'Noto Sans SC', sans-serif",
                fontWeight: 300,
                maxWidth: "28rem",
              }}>
              为私募、中小资金团队提供可落地的量化增强能力。
              <br />
              <span style={{ color: "oklch(0.55 0.015 255)" }}>
                12层因子体系 · 双层融合模型 · 自适应风控
              </span>
            </p>

            {/* 分割线 */}
            <div className={`my-7 w-16 h-px transition-all duration-700 delay-300 ${loaded ? "opacity-100" : "opacity-0"}`}
              style={{ background: "oklch(0.72 0.14 85)" }} />

            {/* 按钮组 */}
            <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <button
                onClick={() => handleScroll("#performance")}
                className="btn-primary"
              >
                查看回测结果
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="btn-outline-gold"
              >
                商务合作
              </button>
            </div>

            {/* 底部提示 */}
            <p className={`mt-6 text-xs transition-all duration-700 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}
              style={{ color: "oklch(0.70 0.01 255)", fontFamily: "'IBM Plex Mono', monospace" }}>
              回测区间 2014.01 — 2026.01 · 历史表现不代表未来收益
            </p>
          </div>

          {/* 右侧数据卡片区 */}
          <div className="lg:col-span-6 xl:col-span-7 lg:pl-8">
            <div className={`transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {/* 标题 */}
              <div className="flex items-center gap-2 mb-4">
                <span className="section-tag">Core Metrics</span>
                <div className="flex-1 h-px" style={{ background: "oklch(0.90 0.005 255)" }} />
              </div>

              {/* 数据卡片网格 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {stats.map((stat, i) => (
                  <StatCard
                    key={stat.label}
                    {...stat}
                    delay={400 + i * 120}
                  />
                ))}

                {/* 额外亮点卡片 */}
                <div className={`data-card p-4 col-span-2 sm:col-span-3 transition-all duration-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: "1000ms" }}>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <div className="section-tag mb-1">Factor Architecture</div>
                      <div className="font-mono-data text-sm" style={{ color: "oklch(0.35 0.04 255)" }}>
                        12 层因子体系 · 55+ Alpha 因子
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {["L1 趋势", "L3 DK", "L9 弹性", "L12 截面"].map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-xs font-mono-data rounded-sm"
                          style={{
                            background: "oklch(0.18 0.06 255 / 0.06)",
                            color: "oklch(0.35 0.05 255)",
                            border: "1px solid oklch(0.18 0.06 255 / 0.12)",
                          }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 向下滚动指示 */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <span className="text-xs font-mono-data" style={{ color: "oklch(0.70 0.01 255)" }}>scroll</span>
        <div className="w-px h-8 relative overflow-hidden" style={{ background: "oklch(0.88 0.005 255)" }}>
          <div className="absolute top-0 w-full h-1/2 animate-bounce"
            style={{ background: "oklch(0.72 0.14 85)" }} />
        </div>
      </div>
    </section>
  );
}
