import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const NotFound = () => {
  return (
    <>
      <Nav />
      <main className="my-8 flex flex-col px-4 text-center">
        <h1 className="mb-10 text-8xl font-medium">404 Not Found</h1>
        <p className="mb-20">
          Your visited page not found. You may go to the home page.
        </p>
        <Link href="/" className="">
          <Button variant="secondary">Back to home page</Button>
        </Link>
      </main>
      <footer className="w-full bg-black text-text">
        <Footer />
      </footer>
    </>
  );
};

export default NotFound;
