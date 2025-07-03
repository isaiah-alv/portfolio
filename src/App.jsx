import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Update theme class on document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  const handleOpenContact = useCallback(() => setIsContactOpen(true), []);
  const handleCloseContact = useCallback(() => setIsContactOpen(false), []);

  return (
    <div className="bg-slate-100 dark:bg-slate-950">
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        isMenuOpen={isMenuOpen}
        onToggleMenu={handleToggleMenu}
        onNavigate={handleNavigate}
      />
      <main className="px-4 md:px-8">
        <section id="about" className="max-w-3xl mx-auto">
          <About onOpenContact={handleOpenContact} />
        </section>
        <section id="timeline" className="max-w-3xl mx-auto my-10">
          <Timeline theme={theme} />
        </section>
        <section id="portfolio" className="max-w-3xl mx-auto my-10">
          <Portfolio />
        </section>
        <Footer />
      </main>
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="relative w-full max-w-lg mx-auto">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700 dark:hover:text-white focus:outline-none z-10"
              onClick={handleCloseContact}
              aria-label="Close contact form"
            >
              &times;
            </button>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}
