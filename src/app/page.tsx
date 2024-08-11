import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <header className="container mx-auto flex flex-col lg:flex-row">
        <Hero />
      </header>
      <MainContent />
      <footer className="w-full bg-black text-text">
        <Footer />
      </footer>
    </div>
  );
}
