import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Download from "@/components/sections/Download";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";

export default function Main() {
  return (
    <main>
      <main className="site-container mx-auto  ">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Partners />
      </main>

      <Download />
      <Footer />
    </main>
  );
}
