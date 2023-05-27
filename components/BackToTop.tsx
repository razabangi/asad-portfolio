import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isActive, setIsActive] = useState(false);

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <button
        id="scroll__top"
        className="fixed bottom-12 ltr:right-5 rtl:left-5 z-50 bg-accent1 text-white shadow-[0_2px_22px_rgba(0,0,0,0.16)] cursor-pointer translate-y-12 opacity-0 invisible transition-all duration-300 leading-[1] w-11 h-11 rounded-full border-none flex items-center justify-center hover:bg-primary dark:hover:bg-dark_accent1"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon w-6 leading-[1]"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={48}
            d="M112 244l144-144 144 144M256 120v292"
          />
        </svg>
      </button>
    </>
  );
};

export default BackToTop;
