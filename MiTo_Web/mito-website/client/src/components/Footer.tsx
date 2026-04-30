/**
 * Mito 妙投 — 页脚（含法律合规声明）
 * 风格：极简，深色背景延续
 */
export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.10 0.04 255)" }}>
      {/* ===== 法律合规声明区块 ===== */}
      <div className="container" style={{ borderBottom: "1px solid oklch(0.18 0.04 255)" }}>
        <div className="py-10">
          {/* 标题 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px" style={{ background: "oklch(0.72 0.14 85 / 0.5)" }} />
            <span className="font-mono-data text-xs tracking-widest uppercase"
              style={{ color: "oklch(0.72 0.14 85 / 0.7)", letterSpacing: "0.15em" }}>
              Legal Disclaimer
            </span>
          </div>

          {/* 合规声明主体 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 左列：服务范围声明 */}
            <div className="space-y-4">
              <div className="p-4 rounded-sm" style={{
                background: "oklch(0.14 0.04 255)",
                border: "1px solid oklch(0.22 0.04 255)",
              }}>
                <div className="font-mono-data text-xs mb-2" style={{ color: "oklch(0.55 0.10 85)" }}>
                  服务范围声明
                </div>
                <p className="text-xs leading-relaxed" style={{
                  color: "oklch(0.55 0.01 255)",
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontWeight: 300,
                }}>
                  本平台提供的服务为<strong style={{ color: "oklch(0.70 0.01 255)", fontWeight: 500 }}>量化研究工具与技术服务</strong>，包括量化因子研究框架、回测分析工具及量化策略技术咨询，旨在辅助专业机构进行量化投研工作。
                </p>
              </div>

              <div className="p-4 rounded-sm" style={{
                background: "oklch(0.14 0.04 255)",
                border: "1px solid oklch(0.22 0.04 255)",
              }}>
                <div className="font-mono-data text-xs mb-2" style={{ color: "oklch(0.45 0.12 20)" }}>
                  不提供的服务
                </div>
                <p className="text-xs leading-relaxed" style={{
                  color: "oklch(0.55 0.01 255)",
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontWeight: 300,
                }}>
                  本平台<strong style={{ color: "oklch(0.70 0.01 255)", fontWeight: 500 }}>不提供</strong>以下服务：证券投资咨询、荐股服务、具体证券品种的买卖建议、投资顾问服务，以及任何面向个人投资者的投资决策指导。上述服务须持有中国证监会颁发的相应资质方可开展。
                </p>
              </div>
            </div>

            {/* 右列：风险提示与适用对象 */}
            <div className="space-y-4">
              <div className="p-4 rounded-sm" style={{
                background: "oklch(0.14 0.04 255)",
                border: "1px solid oklch(0.22 0.04 255)",
              }}>
                <div className="font-mono-data text-xs mb-2" style={{ color: "oklch(0.55 0.10 85)" }}>
                  适用对象
                </div>
                <p className="text-xs leading-relaxed" style={{
                  color: "oklch(0.55 0.01 255)",
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontWeight: 300,
                }}>
                  本平台服务仅面向<strong style={{ color: "oklch(0.70 0.01 255)", fontWeight: 500 }}>具备专业知识与风险承受能力的机构投资者及专业投资者</strong>，不适合个人散户投资者。访问或使用本平台即表示您确认具备相应的专业背景与风险识别能力。
                </p>
              </div>

              <div className="p-4 rounded-sm" style={{
                background: "oklch(0.14 0.04 255)",
                border: "1px solid oklch(0.22 0.04 255)",
              }}>
                <div className="font-mono-data text-xs mb-2" style={{ color: "oklch(0.55 0.10 85)" }}>
                  风险提示
                </div>
                <p className="text-xs leading-relaxed" style={{
                  color: "oklch(0.55 0.01 255)",
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontWeight: 300,
                }}>
                  证券市场存在风险，投资须谨慎。本平台展示的<strong style={{ color: "oklch(0.70 0.01 255)", fontWeight: 500 }}>历史回测数据不代表未来实际收益</strong>，回测结果基于历史数据模拟，受模型假设、市场环境变化等因素影响，实际表现可能存在重大差异。
                </p>
              </div>
            </div>
          </div>

          {/* 底部补充说明 */}
          <p className="mt-5 text-xs leading-relaxed" style={{
            color: "oklch(0.38 0.01 255)",
            fontFamily: "'Noto Sans SC', sans-serif",
            fontWeight: 300,
          }}>
            本平台所有内容仅供参考，不构成任何投资建议或要约。使用本平台服务前，请确保您已充分了解相关法律法规及投资风险。如您对上述声明有任何疑问，请在使用前咨询专业法律及金融顾问。
          </p>
        </div>
      </div>

      {/* ===== 底部版权栏 ===== */}
      <div className="container py-6">
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
          <div className="font-mono-data text-xs text-center" style={{ color: "oklch(0.35 0.01 255)" }}>
            © 2026 Mito 妙投 · mitovest.com · 本平台不提供证券投资咨询服务
          </div>

          {/* 免责 */}
          <div className="font-mono-data text-xs" style={{ color: "oklch(0.30 0.01 255)" }}>
            历史表现不代表未来收益
          </div>
        </div>
      </div>
    </footer>
  );
}
