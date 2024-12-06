import Footer from "@/components/Footer";
import Header from "@/components/Nav";
import img from "../../../aboutimg.webp"
import Image from "next/image";
import img1 from "../../../public/delivery.svg"
import img2 from "../../../public/support.svg"
import img3 from "../../../public/safety.svg"

export default function About(){
    const stats = [
        {
            icon: "fas fa-store",
            value: "10.5k",
            description: "Sallers active our site",
            bgColor: "hover:bg-red-500 duration-700"
        },
        {
            icon: "fas fa-dollar-sign",
            value: "33k",
            description: "Mopnthly Produuct Sale",
            bgColor: "hover:bg-red-500 duration-700"
        },
        {
            icon: "fas fa-shopping-bag",
            value: "45.5k",
            description: "Customer active in our site",
            bgColor: "hover:bg-red-500 duration-700"
        },
        {
            icon: "fas fa-dollar-sign",
            value: "25k",
            description: "Anual gross sale in our site",
            bgColor: "hover:bg-red-500 duration-700"
        }
    ];

    const teamMembers = [
        {
            name: "Tom Cruise",
            title: "Founder & Chairman",
            image: "/employee-1.webp",
            alt: "Tom Cruise",
            social: {
                twitter: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            name: "Emma Watson",
            title: "Managing Director",
            image: "/employee-2.webp",
            alt: "Emma Watson",
            social: {
                twitter: "#",
                instagram: "#",
                linkedin: "#"
            }
        },
        {
            name: "Will Smith",
            title: "Product Designer",
            image: "/employee-3.webp",
            alt: "Will Smith",
            social: {
                twitter: "#",
                instagram: "#",
                linkedin: "#"
            }
        }
    ];

    return(
        <>
        <Header/>
                        <div className="container mx-auto p-4">
                    <nav className="text-sm text-gray-500 mb-8 mt-12">
                        <a href="#" className="hover:underline">Home</a> / <span>About</span>
                    </nav>
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl mb-4 font-semibold">Our Story</h1>
                            <p className="mb-4">
                                Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported <br /> by a wide range of tailored marketing, data, and service solutions, <br /> Exclusive has 10,500 sellers and 300 brands and serves 3 <br /> million customers across the region.
                            </p>
                            <p>
                                Exclusive has more than 1 million products to offer, growing at a <br /> very fast rate. Exclusive offers a diverse assortment in categories <br /> ranging from customer.
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
                            <Image src={img} alt="Two women shopping and looking at a phone" className="w-[700px] h-[500px] rounded-lg shadow-md"/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center space-x-0 md:space-x-4 p-4 lg:mt-[80px]">
                    {stats.map((stat, index) => (
                        <div key={index} className={`flex flex-col items-center p-6 border rounded-lg m-2 md:m-0 ${stat.bgColor}`}>
                            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-200 rounded-full">
                                <i className={`${stat.icon} text-2xl`}></i>
                            </div>
                            <h2 className="text-2xl font-bold">{stat.value}</h2>
                            <p className="text-sm text-gray-600">{stat.description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center min-h-screen lg:mt-[50px]">
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="">
                                <img src={member.image} alt={member.alt} className="w-[300px] h-[400px] mx-auto mb-4" />
                                <h2 className="text-xl font-bold">{member.name}</h2>
                                <p className="text-gray-600">{member.title}</p>
                                <div className="flex space-x-4 mt-4">
                                    <a href={member.social.twitter} className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
                                    <a href={member.social.instagram} className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
                                    <a href={member.social.linkedin} className="text-gray-600 hover:text-gray-800"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center space-x-2 mt-8">
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                    </div>
                </div>

                <div className="bg-[#fdfbe9] h-[400px] flex flex-col justify-center items-center">
      
        <title>Features Section</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
    
      <div className="flex flex-col md:flex-row justify-around items-center py-12 w-full max-w-6xl">
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-[#fdfbe9] rounded-full p-4 mb-4">
            {/* <i className="fas fa-shipping-fast text-3xl text-black"></i> */}
            <Image src={img1} alt="img"/>
          </div>
          <h3 className="font-bold text-lg text-black">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-600">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-[#fdfbe9] rounded-full p-4 mb-4">
            {/* <i className="fas fa-headphones-alt text-3xl text-black"></i> */}
            <Image src={img2} alt="img"/>
          </div>
          <h3 className="font-bold text-lg text-black">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-600">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-[#fdfbe9] rounded-full p-4 mb-4">
            {/* <i className="fas fa-check-circle text-3xl text-black"></i> */}
            <Image src={img3} alt="img"/>
          </div>
          <h3 className="font-bold text-lg text-black">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-600">We return money within 30 days</p>
        </div>
      </div>
    </div>
    <footer className="w-full bg-black text-text">
        <Footer />
      </footer>
        </>
    )
}