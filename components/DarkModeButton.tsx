import { useEffect, useState } from "react";

export default function DarkModeButton() {
    const [themeColor, setThemeColor] = useState('');

  useEffect(() => {
    const handleThemeColor = () => {
      const storedThemeColor = localStorage.getItem('theme-color');

      if (storedThemeColor) {
        setThemeColor(storedThemeColor);
        document.documentElement.classList.toggle('dark', storedThemeColor === 'dark');
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setThemeColor('dark');
        document.documentElement.classList.add('dark');
      } else {
        setThemeColor('light');
      }
    };

    handleThemeColor();
  }, []);

  const toggleThemeColor = () => {
    if (themeColor === 'light') {
      setThemeColor('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-color', 'dark');
    } else {
      setThemeColor('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-color', 'light');
    }
  };

  // 
  const toggleTheme = () => {
    if (localStorage.getItem('theme-color')) {
      if (localStorage.getItem('theme-color') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme-color', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme-color', 'light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme-color', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme-color', 'dark');
      }
    }
  };

  useEffect(() => {
    const lightToDarkButton = document.getElementById('light__to--dark');
    lightToDarkButton?.addEventListener('click', toggleTheme);
    
    return () => {
      lightToDarkButton?.removeEventListener('click', toggleTheme);
    };
  }, []);

  useEffect(() => {
    const handleThemeColor = () => {
      if (
        localStorage.getItem('theme-color') === 'dark' ||
        (!('theme-color' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    handleThemeColor();
  }, []);

  return (
    <>
      {/* Dark and light button start */}
      <div className="fixed ltr:right-0 rtl:left-0 top-[50%] translate-y-[-50%] z-50">
        <button
          className="bg-accent1 w-[50px] h-[50px] text-white flex justify-center items-center rounded-lg ltr:rounded-tr-none ltr:rounded-br-none rtl:rounded-tl-none rtl:rounded-bl-none"
          id="light__to--dark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dark--mode__icon ionicon max-w-[25px] fill-white"
            viewBox="0 0 512 512"
          >
            <title>Moon</title>
            <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="light--mode__icon ionicon max-w-[25px] fill-white"
            viewBox="0 0 512 512"
          >
            <title>Sunny</title>
            <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
          </svg>
        </button>
      </div>
      {/* Dark and light button end */}
    </>
  );
}
