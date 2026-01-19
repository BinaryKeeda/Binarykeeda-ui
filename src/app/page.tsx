import About from "@/components/home/about";
import Background from "@/components/home/background";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/navbar";
import Services from "@/components/home/services";
import Footer from "@/components/layout/Footer";



export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
