import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import ClothingBrand from "@/components/ClothingBrand";
import Construction from "@/components/Construction";
import Manufacturing from "@/components/Manufacturing";
import Footer from "@/components/Footer";
import Agro from "@/components/Agro";


export default function Home() {
  return (
    <>
    <Navbar />
   <Hero />
   <About />
   <ClothingBrand />
   <Construction />
   <Manufacturing />
   <Agro />
   <Footer />
   
   </>
  );
}