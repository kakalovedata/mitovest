/**
 * Mito 妙投 — 顶部免责声明横幅
 * 极细横幅，专业合规展示
 */
import { useState } from "react";

export default function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="relative z-[60] flex items-center justify-center gap-3 px-4 py-1.5 text-xs font-mono-data"
      style={{
        background: "oklch(0.18 0.06 255)",
        color: "oklch(0.60 0.01 255)",
      }}>
      <span>⚠</span>
      <span>本网站仅供专业机构投资者参考，不构成投资建议。历史回测不代表未来收益，投资有风险。</span>
      <button
        onClick={() => setDismissed(true)}
        className="ml-2 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="关闭"
      >
        ✕
      </button>
    </div>
  );
}
