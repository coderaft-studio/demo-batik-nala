import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Koleksi from "@/components/Koleksi";
import Tentang from "@/components/Tentang";
import CaraOrder from "@/components/CaraOrder";
import Testimoni from "@/components/Testimoni";
import Kontak from "@/components/Kontak";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Koleksi />
      <Tentang />
      <CaraOrder />
      <Testimoni />
      <Kontak />
      <Footer />
    </main>
  );
}
