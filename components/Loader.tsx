import { useEffect } from 'react';

export default function Loader() {
  // Preloader
  const preLoader = function () {
    useEffect(() => {
      let preloaderWrapper = document.getElementById('preloader');
      let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
        navigator.userAgent,
      )
        ? true
        : false;
      if (!isMobile) {
        setTimeout(function () {
          preloaderWrapper?.classList.add('preloaded');
        }, 300);
        setTimeout(function () {
          preloaderWrapper?.remove();
        }, 1000);
      } else {
        preloaderWrapper?.remove();
      }
    }, []);
  };
  preLoader();
  return (
    <>
      {/* Preloader start */}
      <div id="preloader">
        <div className="loader--border" />
      </div>
      {/* Preloader end */}
    </>
  );
}
