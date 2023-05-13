import "./globals.css";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Landing></Landing>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
