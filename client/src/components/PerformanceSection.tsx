/**
 * Mito 妙投 — 历史回测表现区块
 * 风格：深色反转 Section，金色曲线，数据卡片
 * 使用 Recharts 绘制净值曲线 + 年度收益柱状图
 */
import { useEffect, useRef, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, Cell, ReferenceLine,
} from "recharts";
import { useCountUp } from "../hooks/useCountUp";

// 累计净值走势数据（真实回测数据，143个月，2014-05 至 2026-03）
const navData = [
  { date: "2014-05", mito: 1.014 },
  { date: "2014-06", mito: 1.095 },
  { date: "2014-07", mito: 1.181 },
  { date: "2014-08", mito: 1.340 },
  { date: "2014-09", mito: 1.515 },
  { date: "2014-10", mito: 1.567 },
  { date: "2014-11", mito: 1.623 },
  { date: "2014-12", mito: 1.672 },
  { date: "2015-01", mito: 1.848 },
  { date: "2015-02", mito: 2.070 },
  { date: "2015-03", mito: 2.644 },
  { date: "2015-04", mito: 2.844 },
  { date: "2015-05", mito: 3.506 },
  { date: "2015-06", mito: 3.268 },
  { date: "2015-07", mito: 3.086 },
  { date: "2015-08", mito: 3.315 },
  { date: "2015-09", mito: 3.323 },
  { date: "2015-10", mito: 3.985 },
  { date: "2015-11", mito: 4.540 },
  { date: "2015-12", mito: 4.480 },
  { date: "2016-01", mito: 4.193 },
  { date: "2016-02", mito: 4.139 },
  { date: "2016-03", mito: 4.920 },
  { date: "2016-04", mito: 5.190 },
  { date: "2016-05", mito: 4.805 },
  { date: "2016-06", mito: 4.623 },
  { date: "2016-07", mito: 4.667 },
  { date: "2016-08", mito: 4.949 },
  { date: "2016-09", mito: 5.169 },
  { date: "2016-10", mito: 5.428 },
  { date: "2016-11", mito: 5.485 },
  { date: "2016-12", mito: 5.511 },
  { date: "2017-01", mito: 5.306 },
  { date: "2017-02", mito: 5.689 },
  { date: "2017-03", mito: 5.531 },
  { date: "2017-04", mito: 5.240 },
  { date: "2017-05", mito: 5.039 },
  { date: "2017-06", mito: 5.428 },
  { date: "2017-07", mito: 5.372 },
  { date: "2017-08", mito: 5.489 },
  { date: "2017-09", mito: 5.484 },
  { date: "2017-10", mito: 5.485 },
  { date: "2017-11", mito: 5.472 },
  { date: "2017-12", mito: 5.905 },
  { date: "2018-01", mito: 5.652 },
  { date: "2018-02", mito: 5.482 },
  { date: "2018-03", mito: 5.787 },
  { date: "2018-04", mito: 5.797 },
  { date: "2018-05", mito: 5.656 },
  { date: "2018-06", mito: 5.416 },
  { date: "2018-07", mito: 5.512 },
  { date: "2018-08", mito: 5.569 },
  { date: "2018-09", mito: 5.682 },
  { date: "2018-10", mito: 5.452 },
  { date: "2018-11", mito: 5.903 },
  { date: "2018-12", mito: 5.654 },
  { date: "2019-01", mito: 5.670 },
  { date: "2019-02", mito: 6.564 },
  { date: "2019-03", mito: 7.410 },
  { date: "2019-04", mito: 6.858 },
  { date: "2019-05", mito: 6.959 },
  { date: "2019-06", mito: 7.562 },
  { date: "2019-07", mito: 7.222 },
  { date: "2019-08", mito: 7.356 },
  { date: "2019-09", mito: 7.318 },
  { date: "2019-10", mito: 7.458 },
  { date: "2019-11", mito: 7.289 },
  { date: "2019-12", mito: 7.637 },
  { date: "2020-01", mito: 6.908 },
  { date: "2020-02", mito: 7.456 },
  { date: "2020-03", mito: 7.052 },
  { date: "2020-04", mito: 7.050 },
  { date: "2020-05", mito: 7.470 },
  { date: "2020-06", mito: 8.208 },
  { date: "2020-07", mito: 9.016 },
  { date: "2020-08", mito: 8.950 },
  { date: "2020-09", mito: 8.565 },
  { date: "2020-10", mito: 8.709 },
  { date: "2020-11", mito: 8.805 },
  { date: "2020-12", mito: 8.967 },
  { date: "2021-01", mito: 9.099 },
  { date: "2021-02", mito: 9.858 },
  { date: "2021-03", mito: 9.464 },
  { date: "2021-04", mito: 9.516 },
  { date: "2021-05", mito: 9.558 },
  { date: "2021-06", mito: 9.642 },
  { date: "2021-07", mito: 10.030 },
  { date: "2021-08", mito: 11.006 },
  { date: "2021-09", mito: 10.838 },
  { date: "2021-10", mito: 10.814 },
  { date: "2021-11", mito: 11.898 },
  { date: "2021-12", mito: 12.138 },
  { date: "2022-01", mito: 11.821 },
  { date: "2022-02", mito: 11.648 },
  { date: "2022-03", mito: 11.413 },
  { date: "2022-04", mito: 10.785 },
  { date: "2022-05", mito: 12.388 },
  { date: "2022-06", mito: 12.935 },
  { date: "2022-07", mito: 13.500 },
  { date: "2022-08", mito: 13.542 },
  { date: "2022-09", mito: 12.769 },
  { date: "2022-10", mito: 14.278 },
  { date: "2022-11", mito: 15.109 },
  { date: "2022-12", mito: 14.813 },
  { date: "2023-01", mito: 14.993 },
  { date: "2023-02", mito: 15.807 },
  { date: "2023-03", mito: 15.479 },
  { date: "2023-04", mito: 16.337 },
  { date: "2023-05", mito: 16.177 },
  { date: "2023-06", mito: 16.402 },
  { date: "2023-07", mito: 16.056 },
  { date: "2023-08", mito: 15.509 },
  { date: "2023-09", mito: 15.244 },
  { date: "2023-10", mito: 15.051 },
  { date: "2023-11", mito: 15.719 },
  { date: "2023-12", mito: 15.813 },
  { date: "2024-01", mito: 13.797 },
  { date: "2024-02", mito: 13.932 },
  { date: "2024-03", mito: 16.151 },
  { date: "2024-04", mito: 16.289 },
  { date: "2024-05", mito: 14.983 },
  { date: "2024-06", mito: 14.452 },
  { date: "2024-07", mito: 14.031 },
  { date: "2024-08", mito: 13.581 },
  { date: "2024-09", mito: 16.393 },
  { date: "2024-10", mito: 15.230 },
  { date: "2024-11", mito: 16.314 },
  { date: "2024-12", mito: 15.182 },
  { date: "2025-01", mito: 15.787 },
  { date: "2025-02", mito: 16.955 },
  { date: "2025-03", mito: 16.688 },
  { date: "2025-04", mito: 16.409 },
  { date: "2025-05", mito: 17.489 },
  { date: "2025-06", mito: 18.471 },
  { date: "2025-07", mito: 19.284 },
  { date: "2025-08", mito: 19.333 },
  { date: "2025-09", mito: 19.692 },
  { date: "2025-10", mito: 20.576 },
  { date: "2025-11", mito: 20.117 },
  { date: "2025-12", mito: 20.338 },
  { date: "2026-01", mito: 21.533 },
  { date: "2026-02", mito: 22.112 },
  { date: "2026-03", mito: 22.710 },
];

// 年度收益数据 (基于报告)
const annualData = [
  { year: "2014", mito: 80.67, csi300: 51.7 },
  { year: "2015", mito: 108.96, csi300: 5.6 },
  { year: "2016", mito: 23.42, csi300: -11.3 },
  { year: "2017", mito: 8.10, csi300: 21.8 },
  { year: "2018", mito: -3.40, csi300: -25.3 },
  { year: "2019", mito: 32.89, csi300: 36.1 },
  { year: "2020", mito: 18.21, csi300: 27.2 },
  { year: "2021", mito: 31.74, csi300: -5.2 },
  { year: "2022", mito: 22.33, csi300: -21.6 },
  { year: "2023", mito: 7.07, csi300: -11.4 },
  { year: "2024", mito: 1.12, csi300: 14.7 },
  { year: "2025", mito: 30.20, csi300: 10.5 }, // 报告数据
  { year: "2026", mito: 45.08, csi300: 5.2 }, // 报告数据
];

const metricCards = [
  { label: "年化收益", value: 33.20, unit: "%", decimals: 2, highlight: true },
  { label: "夏普比率", value: 1.43, unit: "", decimals: 2, highlight: false },
  { label: "月度胜率", value: 62.2, unit: "%", decimals: 1, highlight: false },
  { label: "最大回撤", value: 17.20, unit: "%", decimals: 2, highlight: false },
  { label: "行业超额", value: 13.61, unit: "%", decimals: 2, highlight: false },
  { label: "Calmar", value: 1.93, unit: "", decimals: 2, highlight: false },
];

// 颜色常量（使用标准 CSS 颜色，兼容 Recharts）
const GOLD = "#C9A84C";
const NAVY = "#1a2744";
const GRAY_LINE = "#4a5568";
const GRID_COLOR = "#2d3a5a";
const TICK_COLOR = "#6b7a99";
const TOOLTIP_BG = "#141e35";
const TOOLTIP_BORDER = "#2d3a5a";

function MetricCard({ label, value, unit, decimals, highlight, delay, triggered }: {
  label: string; value: number; unit: string; decimals: number; highlight: boolean;
  delay: number; triggered: boolean;
}) {
  const { value: displayValue, trigger } = useCountUp({ end: value, decimals, duration: 2000 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (triggered && !started) {
      const t = setTimeout(() => { setStarted(true); trigger(); }, delay);
      return () => clearTimeout(t);
    }
  }, [triggered, started, delay]);

  return (
    <div className="data-card-dark p-5">
      <div className="section-tag mb-2" style={{ color: "#a07830" }}>{label}</div>
      <div className="flex items-baseline gap-1">
        <span className="stat-number" style={{
          fontSize: highlight ? "2.2rem" : "1.8rem",
          color: highlight ? GOLD : "#f0f4ff",
        }}>
          {displayValue.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
        </span>
        {unit && (
          <span className="font-mono-data text-sm" style={{ color: GOLD }}>{unit}</span>
        )}
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: TOOLTIP_BG,
        border: `1px solid ${TOOLTIP_BORDER}`,
        borderRadius: "0.3rem",
        padding: "0.6rem 0.9rem",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "0.75rem",
      }}>
        <div style={{ color: "#6b7a99", marginBottom: "0.3rem" }}>{label}</div>
        {payload.map((p: any) => (
          <div key={p.name} style={{ color: p.color }}>
            {p.name === "mito" ? "Mito" : "沪深300"}: {p.value.toFixed(2)}x
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const BarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: TOOLTIP_BG,
        border: `1px solid ${TOOLTIP_BORDER}`,
        borderRadius: "0.3rem",
        padding: "0.6rem 0.9rem",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "0.75rem",
      }}>
        <div style={{ color: "#6b7a99", marginBottom: "0.3rem" }}>{label}年</div>
        {payload.map((p: any) => (
          <div key={p.name} style={{ color: p.color }}>
            {p.name === "mito" ? "Mito" : "沪深300"}: {p.value > 0 ? "+" : ""}{p.value.toFixed(1)}%
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function PerformanceSection() {
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
    <section
      ref={sectionRef}
      id="performance"
      className="section-dark grid-bg-dark py-24"
    >
      <div className="container">
        {/* 标题 */}
        <div className={`mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: GOLD }} />
            <span className="section-tag" style={{ color: GOLD }}>Backtest Results</span>
          </div>
          <h2 style={{
            fontFamily: "'Noto Serif SC', serif",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            color: "#f0f4ff",
            lineHeight: 1.3,
          }}>
            历史回测表现
          </h2>
          <p className="mt-2 text-sm font-mono-data" style={{ color: "#4a5568" }}>
            2014.01 — 2026.01 · 143 个月 · 等权 Top50 组合 · 含交易成本
          </p>
        </div>

        {/* 指标卡片 */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "100ms" }}>
          {metricCards.map((card, i) => (
            <MetricCard key={card.label} {...card} delay={i * 100} triggered={visible} />
          ))}
        </div>

        {/* 图表区 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 净值曲线 */}
          <div className={`lg:col-span-2 data-card-dark p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "200ms" }}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="section-tag mb-1" style={{ color: "#a07830" }}>Net Value Curve</div>
                <div className="text-sm" style={{ color: "#c8d4f0", fontFamily: "'Noto Sans SC', sans-serif" }}>
                  累计净值走势
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono-data">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-0.5 rounded" style={{ background: GOLD }} />
                  <span style={{ color: GOLD }}>Mito</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={navData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
                <XAxis
                  dataKey="date"
                  tick={{ fill: TICK_COLOR, fontSize: 10, fontFamily: "'IBM Plex Mono', monospace" }}
                  tickLine={false}
                  axisLine={{ stroke: GRID_COLOR }}
                  interval={11}
                />
                <YAxis
                  tick={{ fill: TICK_COLOR, fontSize: 10, fontFamily: "'IBM Plex Mono', monospace" }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => `${v.toFixed(0)}x`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="mito"
                  stroke={GOLD}
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={visible}
                  animationDuration={2000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 年度收益柱状图 */}
          <div className={`data-card-dark p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "300ms" }}>
            <div className="mb-5">
              <div className="section-tag mb-1" style={{ color: "#a07830" }}>Annual Returns</div>
              <div className="text-sm" style={{ color: "#c8d4f0", fontFamily: "'Noto Sans SC', sans-serif" }}>
                年度收益对比
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={annualData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }} barGap={1}>
                <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} vertical={false} />
                <XAxis
                  dataKey="year"
                  tick={{ fill: TICK_COLOR, fontSize: 9, fontFamily: "'IBM Plex Mono', monospace" }}
                  tickLine={false}
                  axisLine={{ stroke: GRID_COLOR }}
                />
                <YAxis
                  tick={{ fill: TICK_COLOR, fontSize: 9, fontFamily: "'IBM Plex Mono', monospace" }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip content={<BarTooltip />} />
                <ReferenceLine y={0} stroke={GRID_COLOR} />
                <Bar dataKey="mito" name="mito" radius={[2, 2, 0, 0]} isAnimationActive={visible} animationDuration={1500}>
                  {annualData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.mito >= 0 ? GOLD : "#c0392b"}
                      opacity={0.9}
                    />
                  ))}
                </Bar>
                <Bar dataKey="csi300" name="csi300" radius={[2, 2, 0, 0]} fill={NAVY} opacity={0.6} isAnimationActive={visible} animationDuration={1500} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 免责声明 */}
        <p className={`mt-6 text-xs font-mono-data transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ color: "#3d4d6a", transitionDelay: "500ms" }}>
          * 以上数据为历史回测结果，已扣除万三双边佣金及印花税。历史表现不代表未来收益，投资有风险。
        </p>
      </div>
    </section>
  );
}
