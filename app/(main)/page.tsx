import Nest from "@/components/sections/Nest";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import FD from "@/components/sections/FD";

export default function Main() {
  return (
    <main className="site-container mx-auto ">
      <Hero />
      <Nest />
      <FD />
      <Features />
      <Partners />
    </main>
  );
}
