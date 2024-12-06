import Image from "next/image";
import google from "../../../public/google.svg"
import phone from "../../../public/phones.webp"
import Header from "@/components/Nav";
import Footer from "@/components/Footer";

function Signup() {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-[#fdf8e4] flex flex-col lg:flex-row items-center justify-center p-5">
      {/* Left Section */}
      <div className="lg:w-[100%] w-full flex justify-center lg:justify-start lg:pr-10">
        <Image
          src={phone}
          width={700}
          height={800}
          alt="Mobile"
          // className="max-w-[900px] w-[980px]"
        />
      </div>

      {/* Right Section */}
      <div className="lg:w-[50%] w-full max-w-[350px] mt-10 lg:mt-0 lg:mr-[100px]">
        {/* Header */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800">
            Create an account
          </h1>
          <p className="text-sm text-gray-900 mt-4">
            Enter your details below
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">
          {/* Input Fields */}
          <input
            type="text"
            placeholder="Name"
            className="w-full py-3 px-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-red-500 transition"
          />
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="w-full py-3 px-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-red-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-3 px-4 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-red-500 transition"
          />

          {/* Submit Button */}
          <button
            type="button"
            className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Create Account
          </button>

          {/* Google Sign Up Button */}
          <button
            type="button"
            className="w-full py-3 border-2 border-gray-300 flex items-center justify-center rounded-md hover:border-gray-400 transition"
          >
            <Image
              src={google}
              width={20}
              height={20}
              alt="Google Icon"
              className="mr-2"
            />
            <span className="text-gray-600 font-medium">Sign up with Google</span>
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-gray-600 font-medium underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
    <footer className="w-full bg-black text-text">
        <Footer />
      </footer>
    </>
  );
}

export default Signup;
