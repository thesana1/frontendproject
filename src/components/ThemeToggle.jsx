export default function ThemeToggle({ darkMode, toggleDarkMode }) {
  return (
    <div className="flex items-center justify-center gap-[12px] w-[128px] h-[28px]">
      <svg
        className={`w-6 h-6 shrink-0 transition-colors duration-300 ${
          darkMode ? "text-text-muted" : "text-text-main"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 3v1"></path>
        <path d="M12 20v1"></path>
        <path d="M4.22 4.22l.71.71"></path>
        <path d="M19.07 19.07l.71.71"></path>
        <path d="M1 12h1"></path>
        <path d="M21 12h1"></path>
        <path d="M4.22 19.07l.71-.71"></path>
        <path d="M19.07 4.22l-.71.71"></path>
      </svg>

      <button
        type="button"
        role="switch"
        aria-label="Toggle dark mode"
        aria-checked={darkMode}
        onClick={toggleDarkMode}
        className="relative w-[56px] h-[28px] bg-purple rounded-full shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/70"
      >
        <div
          className={`absolute top-[4px] left-[4px] w-[20px] h-[20px] bg-white rounded-full transition-transform duration-300 ease-in-out ${
            darkMode ? "translate-x-[28px]" : "translate-x-0"
          }`}
        />
      </button>

      <svg
        className={`w-6 h-6 shrink-0 transition-colors duration-300 ${
          darkMode ? "text-text-main" : "text-text-muted"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
  );
}
