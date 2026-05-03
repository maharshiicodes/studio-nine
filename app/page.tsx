import Hero from "./ui/components/Hero";
import Features from "./ui/components/Features";
import Work from "./ui/components/Work";
import Testimonials from "./ui/components/Testimonials";
import Navbar from "./ui/components/Navbar";

export default function Home() {
  return (
      <main className = 'relative'>
        <Hero />
        <Features />
        <Work />
        <Testimonials />
      </main>
  );
}
