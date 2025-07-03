// src/components/Navbar.jsx
import PropTypes from "prop-types";

export default function Navbar({ theme, onToggleTheme, onNavigate }) {
  return (
    <nav className="sticky top-0 z-30 bg-slate-100 dark:bg-slate-950 w-full px-4 md:px-8 py-4 flex items-center justify-between max-w-3xl mx-auto">
      <div />
      <div className="flex items-center gap-4">
        <button
          className="text-sm font-roboto text-black dark:text-white hover:text-lime-500 dark:hover:text-red-400 transition-colors lowercase"
          onClick={() => onNavigate('about')}
        >
          home
        </button>
        <button
          className="text-sm font-roboto text-black dark:text-white hover:text-lime-500 dark:hover:text-red-400 transition-colors lowercase"
          onClick={() => onNavigate('timeline')}
        >
          timeline
        </button>
        <button
          className="text-sm font-roboto text-black dark:text-white hover:text-lime-500 dark:hover:text-red-400 transition-colors lowercase"
          onClick={() => onNavigate('portfolio')}
        >
          portfolio
        </button>

        <p className="text-sm font-roboto text-black dark:text-white">|</p>
        <button
          className="ml-2 text-sm font-roboto text-black dark:text-white hover:text-lime-500 dark:hover:text-red-400 transition-colors lowercase"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "light" : "dark"}
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
  onOpenContact: PropTypes.func.isRequired,
};
