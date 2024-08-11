import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <header className="container mx-auto flex flex-col lg:flex-row">
        <Sidebar className="order-last hidden w-full lg:order-none lg:block" />
        <Hero />
      </header>
      <MainContent />
      <footer className="w-full bg-black text-text">
        <Footer />
      </footer>
    </div>
  );
}
