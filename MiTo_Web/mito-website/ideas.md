# Mito 妙投官网设计方案

## 方案一：深海量化（Deep Quant）
<response>
<text>
**Design Movement**: 深海科技 + 金融极简主义（Deep Tech Finance Minimalism）

**Core Principles**:
- 深色背景（深海蓝 #0A0F1E）+ 冷白文字，营造专业、冷静的量化氛围
- 数据可视化作为视觉核心，图表即内容
- 克制的金色点缀（#C9A84C），象征价值与精准
- 大量留白，信息密度适中，让数据说话

**Color Philosophy**:
- 主背景：深海蓝 oklch(0.10 0.03 255)
- 主文字：冷白 oklch(0.95 0.005 255)
- 强调色：金色 oklch(0.72 0.12 85)
- 辅助蓝：电光蓝 oklch(0.60 0.18 255)
- 情感逻辑：深色=专业稳重，金色=高净值，蓝色=科技感

**Layout Paradigm**:
- 非对称布局：左侧文字+右侧数据面板
- Hero 区：全屏深色背景，右侧动态数字卡片浮动
- 各 Section 交替左右排列，打破单调感

**Signature Elements**:
- 网格线背景（极细、低透明度），象征数据矩阵
- 数字滚动动画（CountUp），关键指标动态呈现
- 净值曲线图（Recharts），Mito vs 沪深300 对比

**Interaction Philosophy**:
- 滚动触发动画，数字在进入视口时开始计数
- 鼠标悬停卡片时轻微上浮 + 金色边框发光
- 按钮 hover 时金色渐变填充

**Animation**:
- 页面加载：各模块从下方淡入（stagger 0.1s）
- 数字：CountUp 动画（2s 缓动）
- 曲线图：路径绘制动画（SVG stroke-dashoffset）
- 卡片：translateY(-4px) + box-shadow 增强

**Typography System**:
- 中文：Noto Serif SC（标题，衬线感增加权威性）+ Noto Sans SC（正文）
- 英文：Space Grotesk（数字/英文标题）+ IBM Plex Mono（数据数字）
- 层级：Hero标题 72px / Section标题 48px / 卡片标题 24px / 正文 16px
</text>
<probability>0.08</probability>
</response>

## 方案二：冷白精密（Precision White）✅ 选定方案
<response>
<text>
**Design Movement**: 瑞士国际主义 + 金融数据新闻风（Swiss Grid + Financial Data Journalism）

**Core Principles**:
- 白底深蓝字，极度克制，信息层次清晰
- 数据即设计，图表、数字是主角
- 金色/琥珀色作为唯一强调色，用于关键数字和CTA
- 严格的网格系统，对齐感带来专业信任感

**Color Philosophy**:
- 主背景：纯白 oklch(1.0 0 0)
- 主文字：深海蓝 oklch(0.18 0.04 255)
- 强调色：琥珀金 oklch(0.72 0.14 85)
- 辅助色：中蓝 oklch(0.45 0.18 255)
- 分隔色：极浅灰 oklch(0.96 0.002 255)
- 情感逻辑：白色=透明可信，深蓝=权威，金色=高净值精准

**Layout Paradigm**:
- 首屏：左侧 60% 文字区 + 右侧 40% 数据卡片区（非对称）
- 各 Section 宽度不同（全宽/容器/窄列），制造节奏感
- 数据展示区使用深色背景反转，形成视觉节奏

**Signature Elements**:
- 极细分割线（1px，低透明度蓝色）
- 数字使用等宽字体（IBM Plex Mono），与普通文字形成对比
- 深色反转 Section（深海蓝背景 + 白字）用于"秀肌肉"区

**Interaction Philosophy**:
- 数字滚动进入视口时触发 CountUp
- 图表在进入视口时绘制动画
- 按钮：深蓝填充，hover 时金色边框 + 轻微上移

**Animation**:
- 入场：opacity 0→1 + translateY 20px→0（0.6s ease-out）
- 数字：CountUp 2.5s cubic-bezier
- 图表：Recharts 动画开启
- 卡片 hover：translateY(-3px) + shadow 加深

**Typography System**:
- 中文标题：Noto Serif SC 700（权威感）
- 中文正文：Noto Sans SC 400/500
- 数字/英文：IBM Plex Mono（数据）+ Space Grotesk（标题英文）
- 层级：Hero 68px / Section 44px / 卡片 22px / 正文 15px
</text>
<probability>0.09</probability>
</response>

## 方案三：暗夜电光（Dark Electric）
<response>
<text>
**Design Movement**: 赛博朋克金融（Cyberpunk Finance）

**Core Principles**:
- 极深背景 + 电光蓝/绿荧光，视觉冲击力强
- 动态粒子/网格背景，强化科技感
- 数据以终端风格呈现（monospace + 打字机效果）

**Color Philosophy**:
- 主背景：近黑 oklch(0.08 0.02 255)
- 荧光蓝：oklch(0.75 0.25 220)
- 荧光绿：oklch(0.80 0.20 160)
- 金色：oklch(0.75 0.15 85)

**Layout Paradigm**:
- 全屏沉浸式，各 Section 全屏高度
- 终端风格数据展示

**Signature Elements**:
- 粒子动画背景
- 打字机效果文字
- 霓虹发光边框

**Typography System**:
- 全程 JetBrains Mono / Space Mono
</text>
<probability>0.03</probability>
</response>

---

## 选定方案：方案二「冷白精密」

理由：最符合 B 端高净值客户的审美偏好——白底深蓝的金融感、琥珀金点缀的高端感、数据驱动的专业感，与桥水/Two Sigma 风格高度契合。
