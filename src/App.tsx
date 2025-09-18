// import AboutMe from "./AboutMe"
import { useEffect, useState } from "react";
import './App.css'
import Hero from "./components/Hero"
import About from "./components/About";
import Links from "./components/Links";
import Footer from "./components/Footer";

export default function App() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setPos({
        x: (e.clientX / innerWidth) * 100,
        y: (e.clientY / innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen text-gray-900 dark:text-gray-100">
      {/* Fondo animado */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, #3b82f6, #815405ff, #3b82f6 )`,
          backgroundSize: "200% 200%",
          transition: "background 0.2s ease-out",
        }}
      />

      {/* Contenido */}
      <Hero />
      <About />
      <Links />
      <Footer />
    </div>
    // <div
    //   className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-500"
    //   style={{
    //     background: `radial-gradient(circle at ${position.x}% ${position.y}%, #3b82f6, #9333ea, #f59e0b)`,
    //     backgroundSize: "200% 200%",
    //     transition: "background 0.2s ease-out",
    //   }}
    // >
    //   <Hero />
    //   <About />
    //   <Links />
    //   <Footer />
    // </div>
  );

  // return (
  //       // <div className="min-h-screen bg-gray-100 text-gray-900">
  //       <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
  //         <Hero/>
  //         <About/>
  //         <Links/>
  //         <Footer/>
  //       </div>
  // );
}
