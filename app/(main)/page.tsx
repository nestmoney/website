import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";

export default function Main() {
  return (
    <main className="site-container mx-auto  space-y-[64px]">
      <Hero />
      <About />
      <Features />
      <Partners />
    </main>
  );
}
