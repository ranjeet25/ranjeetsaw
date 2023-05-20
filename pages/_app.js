import "./globals.css";
import Navbar from "../app/Navbar";
import Landing from "../app/Landing";
import Skills from "../app/Skills";
import Projects from "../app/Projects";
import Footer from "../app/Footer";
import HireMe from "../app/HireMe";

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
