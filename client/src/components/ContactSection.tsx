/**
 * Mito 妙投 — 商务合作 / 联系方式区块
 * 风格：深色背景，强引导，简洁有力
 */
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-dark grid-bg-dark py-24"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* 标题 */}
          <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "oklch(0.72 0.14 85)" }} />
              <span className="section-tag" style={{ color: "oklch(0.72 0.14 85)" }}>Business Cooperation</span>
              <div className="w-8 h-px" style={{ background: "oklch(0.72 0.14 85)" }} />
            </div>
            <h2 style={{
              fontFamily: "'Noto Serif SC', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "oklch(0.96 0.005 255)",
              lineHeight: 1.2,
            }}>
              商务合作
            </h2>
            <p className="mt-4 text-base" style={{
              color: "oklch(0.65 0.01 255)",
              fontFamily: "'Noto Sans SC', sans-serif",
              fontWeight: 300,
              lineHeight: 1.7,
            }}>
              如需获取完整回测报告、系统演示或合作交流，
              <br className="hidden sm:block" />
              请通过以下方式联系我们。
            </p>
          </div>

          {/* 联系方式卡片 */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "150ms" }}>
            {/* 微信 */}
            <div
              className="data-card-dark p-6 cursor-pointer"
              onClick={() => handleCopy("ChengLin_2025", "wechat")}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-sm"
                  style={{ background: "oklch(0.45 0.18 255 / 0.2)" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 3 C4.5 3 2 5.2 2 8 C2 9.5 2.7 10.8 3.8 11.7 L3.2 14 L5.8 12.7 C6.3 12.8 6.9 12.9 7.5 12.9 C7.6 12.9 7.7 12.9 7.8 12.9 C7.7 12.5 7.6 12.1 7.6 11.7 C7.6 9.1 10 7 13 7 C13.2 7 13.4 7 13.6 7 C13 4.7 10.5 3 7.5 3Z" stroke="oklch(0.72 0.14 85)" strokeWidth="1.2" fill="none"/>
                    <path d="M13 8.5 C10.5 8.5 8.5 10.1 8.5 12 C8.5 13.9 10.5 15.5 13 15.5 C13.6 15.5 14.2 15.4 14.7 15.2 L16.8 16.3 L16.3 14.4 C17.1 13.7 17.5 12.9 17.5 12 C17.5 10.1 15.5 8.5 13 8.5Z" stroke="oklch(0.72 0.14 85)" strokeWidth="1.2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="section-tag" style={{ color: "oklch(0.60 0.10 85)" }}>WeChat</div>
                  <div className="text-sm" style={{ color: "oklch(0.85 0.005 255)", fontFamily: "'Noto Sans SC', sans-serif" }}>微信</div>
                </div>
              </div>
              <div className="font-mono-data text-lg" style={{ color: "oklch(0.95 0.005 255)" }}>
                mitovest
              </div>
              <div className="mt-2 text-xs font-mono-data" style={{ color: "oklch(0.50 0.01 255)" }}>
                {copied === "wechat" ? "✓ 已复制" : "点击复制"}
              </div>
            </div>

            {/* 邮箱 */}
            <div
              className="data-card-dark p-6 cursor-pointer"
              onClick={() => handleCopy("cell2015@126.com", "email")}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-sm"
                  style={{ background: "oklch(0.45 0.18 255 / 0.2)" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke="oklch(0.72 0.14 85)" strokeWidth="1.5"/>
                    <path d="M2 7 L10 12 L18 7" stroke="oklch(0.72 0.14 85)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="section-tag" style={{ color: "oklch(0.60 0.10 85)" }}>Email</div>
                  <div className="text-sm" style={{ color: "oklch(0.85 0.005 255)", fontFamily: "'Noto Sans SC', sans-serif" }}>邮箱</div>
                </div>
              </div>
              <div className="font-mono-data text-base" style={{ color: "oklch(0.95 0.005 255)" }}>
                contact@mitovest.com
              </div>
              <div className="mt-2 text-xs font-mono-data" style={{ color: "oklch(0.50 0.01 255)" }}>
                {copied === "email" ? "✓ 已复制" : "点击复制"}
              </div>
            </div>
          </div>

          {/* 主 CTA */}
          <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "300ms" }}>
            <a
              href="mailto:contact@mitovest.com"
              className="inline-block py-3.5 px-10 text-sm font-500 rounded-sm transition-all duration-200"
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                letterSpacing: "0.08em",
                background: "oklch(0.72 0.14 85)",
                color: "oklch(0.12 0.05 255)",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.12 85)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px oklch(0.72 0.14 85 / 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "oklch(0.72 0.14 85)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              立即联系
            </a>

            <p className="mt-5 text-xs font-mono-data" style={{ color: "oklch(0.40 0.01 255)" }}>
              我们通常在 1 个工作日内回复 · 首次沟通可获取完整回测报告
            </p>
          </div>

          {/* 转化路径提示 */}
          <div className={`mt-12 pt-8 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
            style={{
              transitionDelay: "450ms",
              borderTop: "1px solid oklch(0.25 0.04 255)",
            }}>
            <div className="section-tag mb-4 text-center" style={{ color: "oklch(0.45 0.01 255)" }}>
              Cooperation Flow
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap text-xs font-mono-data">
              {["留联系方式", "发送报告", "电话沟通", "系统演示", "正式合作"].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-sm"
                    style={{
                      background: "oklch(0.20 0.05 255)",
                      color: "oklch(0.65 0.01 255)",
                      border: "1px solid oklch(0.28 0.05 255)",
                    }}>
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
    </section>
  );
}
