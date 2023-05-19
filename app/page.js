import "../style/globals.css";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <Landing></Landing>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
