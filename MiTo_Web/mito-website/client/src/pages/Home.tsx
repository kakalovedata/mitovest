/**
 * Mito 妙投 — 主页
 * 风格：冷白精密（Precision White）
 * 布局：单页滚动，8个区块
 */
import Navbar from "../components/Navbar";
import DisclaimerBanner from "../components/DisclaimerBanner";
import HeroSection from "../components/HeroSection";
import PainPointSection from "../components/PainPointSection";
import PerformanceSection from "../components/PerformanceSection";
import SystemSection from "../components/SystemSection";
import ClientSection from "../components/ClientSection";
import CooperationSection from "../components/CooperationSection";
import TrustSection from "../components/TrustSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <DisclaimerBanner />
      <Navbar />
      <main>
        <HeroSection />
        <PainPointSection />
        <TrustSection />
        <PerformanceSection />
        <SystemSection />
        <ClientSection />
        <CooperationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
