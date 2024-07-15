import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import FlashSales from "@/components/FlashSales";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <header className="container mx-auto flex">
        <Sidebar />
        <Hero />
      </header>
      <main className="mt-36">
        <div className="container mx-auto">
          <div className="flex items-center text-secondary-2 font-semibold mb-6 before:content-[''] before:bg-secondary-2 before:w-5 before:h-10 before:relative before:rounded before:mr-4">
            Today's
          </div>
          <FlashSales />
        </div>
      </main>
      <footer className="bg-black text-text w-full">
        <Footer />
      </footer>
    </div>
  );
}
