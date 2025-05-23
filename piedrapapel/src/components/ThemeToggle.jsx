import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="toggle-theme">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label htmlFor="checkbox" className="label">
        <i className="bi bi-moon-fill"></i>
        <i className="bi bi-sun-fill"></i>
        <i className="bi bi-circle-fill"></i>
      </label>
    </div>
  );
}
