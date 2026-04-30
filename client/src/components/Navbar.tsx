/**
 * Mito 妙投 — 顶部导航栏
 * 风格：冷白精密，极简克制，滚动后加背景模糊
 */
import { useState, useEffect } from "react";

const navItems = [
  { label: "回测表现", href: "#performance" },
  { label: "系统架构", href: "#system" },
  { label: "适合团队", href: "#clients" },
  { label: "合作模式", href: "#cooperation" },
  { label: "商务合作", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-7 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_oklch(0.90_0.005_255)]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-7 h-7 rounded-sm flex items-center justify-center"
              style={{ background: "oklch(0.18 0.06 255)" }}>
              <span className="text-white font-grotesk font-bold text-xs tracking-tight">M</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-grotesk font-700 text-base tracking-tight"
                style={{ color: "oklch(0.18 0.06 255)", fontWeight: 700 }}>
                Mito
              </span>
              <span className="text-sm font-light"
                style={{ color: "oklch(0.55 0.015 255)", fontFamily: "'Noto Sans SC', sans-serif" }}>
                妙投
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="nav-link bg-transparent border-0 p-0"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary text-sm py-2 px-5"
            >
              立即联系
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="菜单"
          >
            <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ background: "oklch(0.18 0.06 255)" }} />
            <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
              style={{ background: "oklch(0.18 0.06 255)" }} />
            <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ background: "oklch(0.18 0.06 255)" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t py-4 flex flex-col gap-3"
            style={{ borderColor: "oklch(0.90 0.005 255)" }}>
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="nav-link text-left py-2 bg-transparent border-0"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary mt-2 text-center"
            >
              立即联系
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
