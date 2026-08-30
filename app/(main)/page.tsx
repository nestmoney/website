import Nest from "@/components/sections/Nest";
import Offerings from "@/components/sections/Offerings";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";

export default function Main() {
  return (
    <main className="site-container mx-auto flex flex-col gap-20 lg:gap-32">
      <Hero />
      <Nest />
      <Offerings />
      <Partners />
    </main>
  );
}
