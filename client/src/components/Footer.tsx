/**
 * Mito 妙投 — 页脚
 * 风格：极简，深色背景延续
 */
export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.10 0.04 255)" }}>
      <div className="container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-sm flex items-center justify-center"
              style={{ background: "oklch(0.72 0.14 85 / 0.15)", border: "1px solid oklch(0.72 0.14 85 / 0.3)" }}>
              <span className="font-grotesk font-bold text-xs" style={{ color: "oklch(0.72 0.14 85)" }}>M</span>
            </div>
            <span className="font-grotesk text-sm font-600" style={{ color: "oklch(0.70 0.01 255)" }}>
              Mito <span className="font-light ml-1" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>妙投</span>
            </span>
          </div>

          {/* 版权 */}
          <div className="font-mono-data text-xs text-center" style={{ color: "oklch(0.38 0.01 255)" }}>
            © 2026 Mito 妙投 · mitovest.com
          </div>

          {/* 免责 */}
          <div className="font-mono-data text-xs" style={{ color: "oklch(0.35 0.01 255)" }}>
            历史表现不代表未来收益
          </div>
        </div>
      </div>
    </footer>
  );
}
