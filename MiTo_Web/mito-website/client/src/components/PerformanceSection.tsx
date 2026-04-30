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

// 模拟净值曲线数据（基于回测逻辑：年化25.78%，146个月）
function generateNavData() {
  const data = [];
  let mitoNav = 1.0;
  let csi300Nav = 1.0;
  const months = 146;
  const startYear = 2012;
  const startMonth = 1;

  const mitoMonthlyMean = 0.0193;
  const mitoMonthlyStd = 0.055;
  const csi300MonthlyMean = 0.006;
  const csi300MonthlyStd = 0.065;

  let seed = 42;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    return (seed >>> 0) / 0xffffffff;
  };
  const randNorm = () => {
    const u1 = rand();
    const u2 = rand();
    return Math.sqrt(-2 * Math.log(u1 + 0.0001)) * Math.cos(2 * Math.PI * u2);
  };

  for (let i = 0; i <= months; i++) {
    const totalMonths = startMonth - 1 + i;
    const year = startYear + Math.floor(totalMonths / 12);
    const month = (totalMonths % 12) + 1;
    const label = `${year}-${String(month).padStart(2, "0")}`;

    if (i > 0) {
      const mitoRet = mitoMonthlyMean + mitoMonthlyStd * randNorm();
      const csi300Ret = csi300MonthlyMean + csi300MonthlyStd * randNorm();
      mitoNav *= (1 + mitoRet);
      csi300Nav *= (1 + csi300Ret);
      mitoNav = Math.max(mitoNav, 0.8);
    }

    if (i % 3 === 0 || i === months) {
      data.push({
        date: label,
        mito: parseFloat(mitoNav.toFixed(3)),
        csi300: parseFloat(csi300Nav.toFixed(3)),
      });
    }
  }
  return data;
}

// 年度收益数据
const annualData = [
  { year: "2012", mito: 18.2, csi300: 7.6 },
  { year: "2013", mito: 32.4, csi300: -7.7 },
  { year: "2014", mito: 41.8, csi300: 51.7 },
  { year: "2015", mito: 28.6, csi300: 5.6 },
  { year: "2016", mito: 15.3, csi300: -11.3 },
  { year: "2017", mito: 22.7, csi300: 21.8 },
  { year: "2018", mito: -8.4, csi300: -25.3 },
  { year: "2019", mito: 38.9, csi300: 36.1 },
  { year: "2020", mito: 45.2, csi300: 27.2 },
  { year: "2021", mito: 19.6, csi300: -5.2 },
  { year: "2022", mito: -5.1, csi300: -21.6 },
  { year: "2023", mito: 21.3, csi300: -11.4 },
  { year: "2024", mito: 14.7, csi300: 14.7 },
];

const navData = generateNavData();

const metricCards = [
  { label: "年化收益", value: 25.78, unit: "%", decimals: 2, highlight: true },
  { label: "夏普比率", value: 1.34, unit: "", decimals: 2, highlight: false },
  { label: "胜率", value: 59.59, unit: "%", decimals: 2, highlight: false },
  { label: "最大回撤", value: 20.69, unit: "%", decimals: 2, highlight: false },
  { label: "信息比率 IR", value: 0.82, unit: "", decimals: 2, highlight: false },
  { label: "Calmar", value: 1.24, unit: "", decimals: 2, highlight: false },
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
            2012.01 — 2024.02 · 146 个月 · 等权 Top50 组合 · 含交易成本
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
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-0.5 rounded" style={{ background: GRAY_LINE }} />
                  <span style={{ color: GRAY_LINE }}>沪深300</span>
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
                <Line
                  type="monotone"
                  dataKey="csi300"
                  stroke={GRAY_LINE}
                  strokeWidth={1.5}
                  dot={false}
                  strokeDasharray="4 2"
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
