
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import msg from "../../../public/msg.svg"
import call from "../../../public/call.svg"
import Header from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image';

function Contact() {
    return (
    <>
    <Header/>
    <nav className="text-sm text-gray-500 mb-8 lg:ml-12 lg:mt-[80px] bg-[#fdf8e4]">
                        <a href="#" className="hover:underline">Home</a> / <span>About</span>
                    </nav>
        <div className="w-full flex justify-center items-center bg-[#fdf8e4] py-10">
            <div className="w-[90%] flex flex-col md:flex-row gap-10">
                {/* Left Side */}
                <div className="shadow-lg w-full md:w-[30%] bg-[#fdf8e4] rounded-lg p-6">
                    {/* Call to Us Section */}
                    <div className="mb-6">
                        <div className="flex items-center mb-3">
                    
                                <Image src={call} alt='call' />
                        
                            <h2 className="text-lg font-semibold pl-3">Call To Us</h2>
                        </div>
                        <p className="text-sm pl-12 text-gray-700">
                            We are available 24/7, 7 days a week.
                        </p>
                        <br />
                        <p className="text-sm pl-12 text-gray-700">Phone: +8801611112222</p>
                        <br />
                    </div>
                    <hr />
                    {/* Write to Us Section */}
                    <div className="mt-6">
                        <div className="flex items-center mb-3">
                            <Image src={msg} alt='msg'/>
                            <h2 className="text-lg font-semibold pl-3">Write To Us</h2>
                        </div>
                        <p className="text-sm pl-12 text-gray-700">
                            Fill out our form and we will contact you within 24 hours.
                        </p>
                        <br />
                        <p className="text-sm pl-12 text-gray-700">Emails: customer@exclusive.com</p>
                        <br />
                        <p className="text-sm pl-12 text-gray-700">Emails: support@exclusive.com</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="shadow-lg w-full md:w-[70%] bg-[#fdf8e4] rounded-lg p-6">
                    <form className="flex flex-wrap gap-4">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            className="w-full md:w-[31%] px-4 py-3 bg-gray-100 rounded-md focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email *"
                            className="w-full md:w-[31%] px-4 py-3 bg-gray-100 rounded-md focus:outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone *"
                            className="w-full md:w-[31%] px-4 py-3 bg-gray-100 rounded-md focus:outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full px-4 py-3 bg-gray-100 rounded-md h-48 focus:outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full md:w-auto px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 lg:ml-[600px]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <footer className="w-full bg-black text-text">
        <Footer />
      </footer>
        </>
    );
}

export default Contact;
