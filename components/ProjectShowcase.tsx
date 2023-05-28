import { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import Isotope from 'isotope-layout';


export default function ProjectShowcase() {
  const initIsotopeGrid = () => {
    const isotopeGrid = document.querySelector('.portfolio__grid');
    if (isotopeGrid) {
      imagesLoaded(isotopeGrid, function (instance) {
        // @ts-ignore
        let iso = new Isotope(isotopeGrid, {
          itemSelector: '.element-item',
          percentPosition: true,
          masonry: {
            columnWidth: '.element-item',
          },
        });
  
        // filter functions
        let filterFns = {
          // show if number is greater than 50
          numberGreaterThan50: function (itemElem: any) {
            let number = itemElem.querySelector('.number').textContent;
            return parseInt(number, 10) > 50;
          },
          // show if name ends with -ium
          ium: function (itemElem: any) {
            let name = itemElem.querySelector('.name').textContent;
            return name.match(/ium$/);
          },
        };
  
        // bind filter button click
        let filtersElem = document.querySelector('.filters-button-group');
        // @ts-ignore
        filtersElem.addEventListener('click', function (event) {
          // only work with buttons
          // @ts-ignore
          if (!event.target.matches('button')) {
            return;
          }
          // @ts-ignore
          let filterValue = event.target.getAttribute('data-filter');
          // use matching filter function
          // @ts-ignore
          filterValue = filterFns[filterValue] || filterValue;
          iso.arrange({ filter: filterValue });
        });
  
        // change is-checked class on buttons
        let buttonGroups = document.querySelectorAll('.button-group');
        for (let i = 0, len = buttonGroups.length; i < len; i++) {
          let buttonGroup = buttonGroups[i];
          radioButtonGroup(buttonGroup);
        }
  
        function radioButtonGroup(buttonGroupL: any) {
          // @ts-ignore
          buttonGroup.addEventListener('click', function (event: any) {
            // only work with buttons
            if (!event.target.matches('button')) {
              return;
            }
            // @ts-ignore
            buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
            event.target.classList.add('is-checked');
          });
        }
      });
    }
  };
  const initPortfolioModalPopup = () => {
    const modalPopupList = document.querySelectorAll('.popup-modal--open');
    const modalPopupClose = document.querySelectorAll('.modal__popup--close');
  
    if (modalPopupList && modalPopupClose) {
      modalPopupList.forEach(function (modal) {
        modal.addEventListener('click', function (event) {
          event.preventDefault();
          // @ts-ignore
          if (!this.nextElementSibling.classList.contains('active')) {
            // @ts-ignore
            this.nextElementSibling.classList.add('active');
            document.body.classList.add('overflow-y-hidden');
          }
          // @ts-ignore
          let popupOverlay = this.nextElementSibling.querySelector('.modal_popup_overlay');
          // @ts-ignore
          popupOverlay.addEventListener('click', function (event: any) {
            // @ts-ignore
            this.parentElement.classList.remove('active');
          });
        });
      });
      modalPopupClose.forEach(function (modalClose) {
        modalClose.addEventListener('click', function (event) {
          event.preventDefault();
          // @ts-ignore
          if (this.parentElement.parentElement.parentElement.classList.contains('active')) {
            // @ts-ignore
            this.parentElement.parentElement.parentElement.classList.remove('active');
            document.body.classList.remove('overflow-y-hidden');
          }
        });
      });
    }
  };
  useEffect(() => {
    initIsotopeGrid();
    initPortfolioModalPopup();
  }, []);
  return (
    <>
      {/* Portfolio section start */}
      <section
        className="bg-[#EFF3F7] dark:bg-dark_primary_bg pt-[70px] lg:pt-[100px] pb-[40px] lg:pb-[70px] dark:border-t dark:border-b dark:border-dark_accent1"
        id="portfolio"
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center gap-[20px] lg:gap-[30px] mb-[55px] md:flex-wrap md:text-center">
            <div className="max-w-full lg:max-w-[580px]  w-full">
              <span className="text-accent1 text-[20px] lg:text-[24px] font-medium mb-[10px] lg:mb-[5px]">
                PORTFOLIO
              </span>
              <h2 className="text:[28px] lg:text-[48px] font-bold font-heebo leading-[36x] lg:leading-[58px] text-[#000248] dark:text-white">
                Never compromise for portfolio quality
              </h2>
            </div>
            <div className="md:grow">
              <p className="text-[#636363] dark:text-slate-200 text-[17px] leading-[28px] lg:max-w-[472px] w-full">
                Promote your blog posts, case udie, and product ouncems with the
                the branded videoscustomers coming back for services Makes best
                effort.
              </p>
            </div>
          </div>
          {/* Filter portfolio start */}
          <div className="isotope--filter">
            <div className="button-group filters-button-group flex justify-center flex-wrap gap-[30px]">
              <button
                className="button is-checked text-primary dark:text-white text-[18px] capitalize font-medium hover:text-accent1 dark:hover:text-accent1 transition duration-300"
                data-filter="*"
              >
                Show All
              </button>
              <button
                className="button text-primary dark:text-white text-[18px] capitalize font-medium hover:text-accent1 dark:hover:text-accent1 transition duration-300"
                data-filter=".web"
              >
                Web
              </button>
              <button
                className="button text-primary dark:text-white text-[18px] capitalize font-medium hover:text-accent1 dark:hover:text-accent1 transition duration-300"
                data-filter=".graphics"
              >
                Graphics
              </button>
              <button
                className="button text-primary dark:text-white text-[18px] capitalize font-medium hover:text-accent1 dark:hover:text-accent1 transition duration-300"
                data-filter=".development"
              >
                Development
              </button>
              <button
                className="button text-primary dark:text-white text-[18px] capitalize font-medium hover:text-accent1 dark:hover:text-accent1 transition duration-300"
                data-filter=".mobile"
              >
                Mobile
              </button>
            </div>
            <div className="portfolio__grid flex mt-[50px] mx-[-15px]">
              {/* single portfolio start */}
              <div
                className="element-item mb-[30px] w-[50%] lg:w-[33.33%]  px-[15px] web portfolio__parent"
                data-category="web"
              >
                <div className="relative overflow-hidden">
                  <a href="#" className="popup-modal--open">
                    <span className="absolute w-full h-full bg-accent1 left-0 top-0 opacity-0 transition duration-300 portfolio__overlay z-10">
                      <div className="flex items-center justify-end flex-col text-center h-full text-white p-[20px]">
                        <span className="portfolio--zoom flex items-center grow transition-all duration-300 translate-y-[-20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-maximize"
                          >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                          </svg>
                        </span>
                        <h3 className="portfolio--title text-[18px] lg:text-[24px] font-heebo transition-all duration-300 translate-y-3">
                          Illustration
                        </h3>
                        <span className="portfolio--sub-title text-[17px] 2xs:hidden transition-all duration-500 translate-y-3">
                          Promote your blog posts, case udie, and thehe branded
                          videos.
                        </span>
                      </div>
                    </span>
                    <div className="w-full portfolio__image--card">
                      <img
                        className="w-full transition duration-300"
                        src="assets/images/portfolio/1.png"
                        alt=""
                      />
                    </div>
                  </a>
                  {/* Portfolio popup start */}
                  <div className="modal_portfolio fixed h-screen w-full left-0 top-0 z-[98] opacity-0 invisible">
                    <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]" />
                    {/* Modal content */}
                    <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
                      <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800  max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
                        <button className="modal__popup--close ltr:right-[10px] rtl:left-[10px] top-[10px] absolute w-[50px] h-[50px] bg-accent1 hover:bg-primary dark:hover:bg-dark_accent1 text-white rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                          >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                        <h2 className="text-accent1 text-center font-bold">
                          Illustration Project
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-file-text"
                                >
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1={16} y1={13} x2={8} y2={13} />
                                  <line x1={16} y1={17} x2={8} y2={17} />
                                  <polyline points="10 9 9 9 8 9" />
                                </svg>
                              </span>
                              Project :&nbsp;
                              <span className="font-medium"> Website</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-code"
                                >
                                  <polyline points="16 18 22 12 16 6" />
                                  <polyline points="8 6 2 12 8 18" />
                                </svg>
                              </span>
                              Languages :&nbsp;
                              <span className="font-medium">
                                Photoshop, Illustration
                              </span>
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center mt-2 lg:mt-0  ">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-user"
                                >
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx={12} cy={7} r={4} />
                                </svg>
                              </span>
                              Client :&nbsp;{' '}
                              <span className="font-medium">Envato</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-external-link"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1={10} y1={14} x2={21} y2={3} />
                                </svg>
                              </span>
                              Preview :&nbsp;
                              <span className="font-medium transition-all duration-300 ease-in-out hover:text-accent1">
                                <a
                                  href="https://www.envato.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  www.envato.com
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                        <p className="dark:text-white font-normal text-[17px]">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia placeat magnam possimus iusto
                          blanditiis pariatur labore explicabo quo repellat hic
                          dolorum numquam asperiores, voluptatum fugiat
                          reiciendis aspernatur, non, odio aperiam voluptas ex
                          tempora vitae. Dolor, consequatur quidem! Quas magni
                          distinctio dolorum dolore natus, vel numquam
                          accusamus. Nostrum eligendi recusandae qui tempore
                          deserunt!
                        </p>
                        <div className="pr-3">
                          <img
                            className="max-w-full h-auto rounded-xl mt-6 mx-auto"
                            src="assets/images/portfolio/big-1.png"
                            alt="portfolio image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Portfolio popup end */}
                </div>
              </div>
              {/* single portfolio end */}
              {/* single portfolio start */}
              <div
                className="element-item mb-[30px] w-[50%] lg:w-[33.33%]  px-[15px] graphics portfolio__parent"
                data-category="graphics"
              >
                <div className="relative overflow-hidden">
                  <a href="#" className="popup-modal--open">
                    <span className="absolute w-full h-full bg-accent1 left-0 top-0 opacity-0 transition duration-300 portfolio__overlay z-10">
                      <div className="flex items-center justify-end flex-col text-center h-full text-white p-[20px]">
                        <span className="portfolio--zoom flex items-center grow transition-all duration-300 translate-y-[-20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-maximize"
                          >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                          </svg>
                        </span>
                        <h3 className="portfolio--title text-[18px] lg:text-[24px] font-heebo transition-all duration-300 translate-y-3">
                          React
                        </h3>
                        <span className="portfolio--sub-title text-[17px] 2xs:hidden transition-all duration-500 translate-y-3">
                          Promote your blog posts, case udie, and thehe branded
                          videos.
                        </span>
                      </div>
                    </span>
                    <div className="w-full portfolio__image--card">
                      <img
                        className="w-full transition duration-300"
                        src="assets/images/portfolio/2.png"
                        alt=""
                      />
                    </div>
                  </a>
                  {/* Portfolio popup start */}
                  <div className="modal_portfolio fixed h-screen w-full left-0 top-0 z-[98] opacity-0 invisible">
                    <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]" />
                    {/* Modal content */}
                    <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
                      <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800  max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
                        <button className="modal__popup--close ltr:right-[10px] rtl:left-[10px] top-[10px] absolute w-[50px] h-[50px] bg-accent1 hover:bg-primary dark:hover:bg-dark_accent1 text-white rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                          >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                        <h2 className="text-accent1 text-center font-bold">
                          React Project
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-file-text"
                                >
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1={16} y1={13} x2={8} y2={13} />
                                  <line x1={16} y1={17} x2={8} y2={17} />
                                  <polyline points="10 9 9 9 8 9" />
                                </svg>
                              </span>
                              Project :&nbsp;
                              <span className="font-medium"> Website</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-code"
                                >
                                  <polyline points="16 18 22 12 16 6" />
                                  <polyline points="8 6 2 12 8 18" />
                                </svg>
                              </span>
                              Languages :&nbsp;
                              <span className="font-medium">
                                Photoshop, Illustration
                              </span>
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center mt-2 lg:mt-0  ">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-user"
                                >
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx={12} cy={7} r={4} />
                                </svg>
                              </span>
                              Client :&nbsp;{' '}
                              <span className="font-medium">Envato</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-external-link"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1={10} y1={14} x2={21} y2={3} />
                                </svg>
                              </span>
                              Preview :&nbsp;
                              <span className="font-medium transition-all duration-300 ease-in-out hover:text-accent1">
                                <a
                                  href="https://www.envato.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  www.envato.com
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                        <p className="dark:text-white font-normal text-[17px]">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia placeat magnam possimus iusto
                          blanditiis pariatur labore explicabo quo repellat hic
                          dolorum numquam asperiores, voluptatum fugiat
                          reiciendis aspernatur, non, odio aperiam voluptas ex
                          tempora vitae. Dolor, consequatur quidem! Quas magni
                          distinctio dolorum dolore natus, vel numquam
                          accusamus. Nostrum eligendi recusandae qui tempore
                          deserunt!
                        </p>
                        <div className="pr-3">
                          <img
                            className="max-w-full h-auto rounded-xl mt-6 mx-auto"
                            src="assets/images/portfolio/big-2.png"
                            alt="portfolio image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Portfolio popup end */}
                </div>
              </div>
              {/* single portfolio end */}
              {/* single portfolio start */}
              <div
                className="element-item mb-[30px] w-[50%] lg:w-[33.33%]  px-[15px] development portfolio__parent"
                data-category="development"
              >
                <div className="relative overflow-hidden">
                  <a href="#" className="popup-modal--open">
                    <span className="absolute w-full h-full bg-accent1 left-0 top-0 opacity-0 transition duration-300 portfolio__overlay z-10">
                      <div className="flex items-center justify-end flex-col text-center h-full text-white p-[20px]">
                        <span className="portfolio--zoom flex items-center grow transition-all duration-300 translate-y-[-20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-maximize"
                          >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                          </svg>
                        </span>
                        <h3 className="portfolio--title text-[18px] lg:text-[24px] font-heebo transition-all duration-300 translate-y-3">
                          Next JS
                        </h3>
                        <span className="portfolio--sub-title text-[17px] 2xs:hidden transition-all duration-500 translate-y-3">
                          Promote your blog posts, case udie, and thehe branded
                          videos.
                        </span>
                      </div>
                    </span>
                    <div className="w-full portfolio__image--card">
                      <img
                        className="w-full transition duration-300"
                        src="assets/images/portfolio/3.png"
                        alt=""
                      />
                    </div>
                  </a>
                  {/* Portfolio popup start */}
                  <div className="modal_portfolio fixed h-screen w-full left-0 top-0 z-[98] opacity-0 invisible">
                    <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]" />
                    {/* Modal content */}
                    <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
                      <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800  max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
                        <button className="modal__popup--close ltr:right-[10px] rtl:left-[10px] top-[10px] absolute w-[50px] h-[50px] bg-accent1 hover:bg-primary dark:hover:bg-dark_accent1 text-white rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                          >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                        <h2 className="text-accent1 text-center font-bold">
                          Nextjs Project
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-file-text"
                                >
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1={16} y1={13} x2={8} y2={13} />
                                  <line x1={16} y1={17} x2={8} y2={17} />
                                  <polyline points="10 9 9 9 8 9" />
                                </svg>
                              </span>
                              Project :&nbsp;
                              <span className="font-medium"> Website</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-code"
                                >
                                  <polyline points="16 18 22 12 16 6" />
                                  <polyline points="8 6 2 12 8 18" />
                                </svg>
                              </span>
                              Languages :&nbsp;
                              <span className="font-medium">
                                Photoshop, Illustration
                              </span>
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center mt-2 lg:mt-0  ">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-user"
                                >
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx={12} cy={7} r={4} />
                                </svg>
                              </span>
                              Client :&nbsp;{' '}
                              <span className="font-medium">Envato</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-external-link"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1={10} y1={14} x2={21} y2={3} />
                                </svg>
                              </span>
                              Preview :&nbsp;
                              <span className="font-medium transition-all duration-300 ease-in-out hover:text-accent1">
                                <a
                                  href="https://www.envato.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  www.envato.com
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                        <p className="dark:text-white font-normal text-[17px]">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia placeat magnam possimus iusto
                          blanditiis pariatur labore explicabo quo repellat hic
                          dolorum numquam asperiores, voluptatum fugiat
                          reiciendis aspernatur, non, odio aperiam voluptas ex
                          tempora vitae. Dolor, consequatur quidem! Quas magni
                          distinctio dolorum dolore natus, vel numquam
                          accusamus. Nostrum eligendi recusandae qui tempore
                          deserunt!
                        </p>
                        <div className="pr-3">
                          <img
                            className="max-w-full h-auto rounded-xl mt-6 mx-auto"
                            src="assets/images/portfolio/big-3.png"
                            alt="portfolio image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Portfolio popup end */}
                </div>
              </div>
              {/* single portfolio end */}
              {/* single portfolio start */}
              <div
                className="element-item mb-[30px] w-[50%] lg:w-[33.33%]  px-[15px] mobile portfolio__parent"
                data-category="mobile"
              >
                <div className="relative overflow-hidden">
                  <a href="#" className="popup-modal--open">
                    <span className="absolute w-full h-full bg-accent1 left-0 top-0 opacity-0 transition duration-300 portfolio__overlay z-10">
                      <div className="flex items-center justify-end flex-col text-center h-full text-white p-[20px]">
                        <span className="portfolio--zoom flex items-center grow transition-all duration-300 translate-y-[-20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-maximize"
                          >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                          </svg>
                        </span>
                        <h3 className="portfolio--title text-[18px] lg:text-[24px] font-heebo transition-all duration-300 translate-y-3">
                          Android Development
                        </h3>
                        <span className="portfolio--sub-title text-[17px] 2xs:hidden transition-all duration-500 translate-y-3">
                          Promote your blog posts, case udie, and thehe branded
                          videos.
                        </span>
                      </div>
                    </span>
                    <div className="w-full portfolio__image--card">
                      <img
                        className="w-full transition duration-300"
                        src="assets/images/portfolio/4.png"
                        alt=""
                      />
                    </div>
                  </a>
                  {/* Portfolio popup start */}
                  <div className="modal_portfolio fixed h-screen w-full left-0 top-0 z-[98] opacity-0 invisible">
                    <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]" />
                    {/* Modal content */}
                    <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
                      <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800  max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
                        <button className="modal__popup--close ltr:right-[10px] rtl:left-[10px] top-[10px] absolute w-[50px] h-[50px] bg-accent1 hover:bg-primary dark:hover:bg-dark_accent1 text-white rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                          >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                        <h2 className="text-accent1 text-center font-bold">
                          Android Development
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-file-text"
                                >
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1={16} y1={13} x2={8} y2={13} />
                                  <line x1={16} y1={17} x2={8} y2={17} />
                                  <polyline points="10 9 9 9 8 9" />
                                </svg>
                              </span>
                              Project :&nbsp;
                              <span className="font-medium"> Website</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-code"
                                >
                                  <polyline points="16 18 22 12 16 6" />
                                  <polyline points="8 6 2 12 8 18" />
                                </svg>
                              </span>
                              Languages :&nbsp;
                              <span className="font-medium">
                                Photoshop, Illustration
                              </span>
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center mt-2 lg:mt-0  ">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-user"
                                >
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx={12} cy={7} r={4} />
                                </svg>
                              </span>
                              Client :&nbsp;{' '}
                              <span className="font-medium">Envato</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-external-link"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1={10} y1={14} x2={21} y2={3} />
                                </svg>
                              </span>
                              Preview :&nbsp;
                              <span className="font-medium transition-all duration-300 ease-in-out hover:text-accent1">
                                <a
                                  href="https://www.envato.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  www.envato.com
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                        <p className="dark:text-white font-normal text-[17px]">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia placeat magnam possimus iusto
                          blanditiis pariatur labore explicabo quo repellat hic
                          dolorum numquam asperiores, voluptatum fugiat
                          reiciendis aspernatur, non, odio aperiam voluptas ex
                          tempora vitae. Dolor, consequatur quidem! Quas magni
                          distinctio dolorum dolore natus, vel numquam
                          accusamus. Nostrum eligendi recusandae qui tempore
                          deserunt!
                        </p>
                        <div className="pr-3">
                          <img
                            className="max-w-full h-auto rounded-xl mt-6 mx-auto"
                            src="assets/images/portfolio/big-4.png"
                            alt="portfolio image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Portfolio popup end */}
                </div>
              </div>
              {/* single portfolio end */}
              {/* single portfolio start */}
              <div
                className="element-item mb-[30px] w-[50%] lg:w-[33.33%]  px-[15px] graphics portfolio__parent"
                data-category="graphics"
              >
                <div className="relative overflow-hidden">
                  <a href="#" className="popup-modal--open">
                    <span className="absolute w-full h-full bg-accent1 left-0 top-0 opacity-0 transition duration-300 portfolio__overlay z-10">
                      <div className="flex items-center justify-end flex-col text-center h-full text-white p-[20px]">
                        <span className="portfolio--zoom flex items-center grow transition-all duration-300 translate-y-[-20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-maximize"
                          >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                          </svg>
                        </span>
                        <h3 className="portfolio--title text-[18px] lg:text-[24px] font-heebo transition-all duration-300 translate-y-3">
                          APP Development
                        </h3>
                        <span className="portfolio--sub-title text-[17px] 2xs:hidden transition-all duration-500 translate-y-3">
                          Promote your blog posts, case udie, and thehe branded
                          videos.
                        </span>
                      </div>
                    </span>
                    <div className="w-full portfolio__image--card">
                      <img
                        className="w-full transition duration-300"
                        src="assets/images/portfolio/5.png"
                        alt=""
                      />
                    </div>
                  </a>
                  {/* Portfolio popup start */}
                  <div className="modal_portfolio fixed h-screen w-full left-0 top-0 z-[98] opacity-0 invisible">
                    <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]" />
                    {/* Modal content */}
                    <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
                      <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800  max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
                        <button className="modal__popup--close ltr:right-[10px] rtl:left-[10px] top-[10px] absolute w-[50px] h-[50px] bg-accent1 hover:bg-primary dark:hover:bg-dark_accent1 text-white rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                          >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                        <h2 className="text-accent1 text-center font-bold">
                          App Development
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-file-text"
                                >
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1={16} y1={13} x2={8} y2={13} />
                                  <line x1={16} y1={17} x2={8} y2={17} />
                                  <polyline points="10 9 9 9 8 9" />
                                </svg>
                              </span>
                              Project :&nbsp;
                              <span className="font-medium"> Website</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-code"
                                >
                                  <polyline points="16 18 22 12 16 6" />
                                  <polyline points="8 6 2 12 8 18" />
                                </svg>
                              </span>
                              Languages :&nbsp;
                              <span className="font-medium">
                                Photoshop, Illustration
                              </span>
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center mt-2 lg:mt-0  ">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-user"
                                >
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx={12} cy={7} r={4} />
                                </svg>
                              </span>
                              Client :&nbsp;{' '}
                              <span className="font-medium">Envato</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-external-link"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1={10} y1={14} x2={21} y2={3} />
                                </svg>
                              </span>
                              Preview :&nbsp;
                              <span className="font-medium transition-all duration-300 ease-in-out hover:text-accent1">
                                <a
                                  href="https://www.envato.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  www.envato.com
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                        <p className="dark:text-white font-normal text-[17px]">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia placeat magnam possimus iusto
                          blanditiis pariatur labore explicabo quo repellat hic
                          dolorum numquam asperiores, voluptatum fugiat
                          reiciendis aspernatur, non, odio aperiam voluptas ex
                          tempora vitae. Dolor, consequatur quidem! Quas magni
                          distinctio dolorum dolore natus, vel numquam
                          accusamus. Nostrum eligendi recusandae qui tempore
                          deserunt!
                        </p>
                        <div className="pr-3">
                          <img
                            className="max-w-full h-auto rounded-xl mt-6 mx-auto"
                            src="assets/images/portfolio/big-5.png"
                            alt="portfolio image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Portfolio popup end */}
                </div>
              </div>
              {/* single portfolio end */}
              {/* single portfolio start */}
              <div
                className="element-item mb-[30px] w-[50%] lg:w-[33.33%]  px-[15px] web development portfolio__parent"
                data-category="development"
              >
                <div className="relative overflow-hidden">
                  <a href="#" className="popup-modal--open">
                    <span className="absolute w-full h-full bg-accent1 left-0 top-0 opacity-0 transition duration-300 portfolio__overlay z-10">
                      <div className="flex items-center justify-end flex-col text-center h-full text-white p-[20px]">
                        <span className="portfolio--zoom flex items-center grow transition-all duration-300 translate-y-[-20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-maximize"
                          >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                          </svg>
                        </span>
                        <h3 className="portfolio--title text-[18px] lg:text-[24px] font-heebo transition-all duration-300 translate-y-3">
                          Photoshop
                        </h3>
                        <span className="portfolio--sub-title text-[17px] 2xs:hidden transition-all duration-500 translate-y-3">
                          Promote your blog posts, case udie, and thehe branded
                          videos.
                        </span>
                      </div>
                    </span>
                    <div className="w-full portfolio__image--card">
                      <img
                        className="w-full transition duration-300"
                        src="assets/images/portfolio/6.png"
                        alt=""
                      />
                    </div>
                  </a>
                  {/* Portfolio popup start */}
                  <div className="modal_portfolio fixed h-screen w-full left-0 top-0 z-[98] opacity-0 invisible">
                    <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]" />
                    {/* Modal content */}
                    <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
                      <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800  max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
                        <button className="modal__popup--close ltr:right-[10px] rtl:left-[10px] top-[10px] absolute w-[50px] h-[50px] bg-accent1 hover:bg-primary dark:hover:bg-dark_accent1 text-white rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                          >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                        <h2 className="text-accent1 text-center font-bold">
                          Photoshop Design
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-file-text"
                                >
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1={16} y1={13} x2={8} y2={13} />
                                  <line x1={16} y1={17} x2={8} y2={17} />
                                  <polyline points="10 9 9 9 8 9" />
                                </svg>
                              </span>
                              Project :&nbsp;
                              <span className="font-medium"> Website</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-code"
                                >
                                  <polyline points="16 18 22 12 16 6" />
                                  <polyline points="8 6 2 12 8 18" />
                                </svg>
                              </span>
                              Languages :&nbsp;
                              <span className="font-medium">
                                Photoshop, Illustration
                              </span>
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center mt-2 lg:mt-0  ">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-user"
                                >
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx={12} cy={7} r={4} />
                                </svg>
                              </span>
                              Client :&nbsp;{' '}
                              <span className="font-medium">Envato</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-external-link"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1={10} y1={14} x2={21} y2={3} />
                                </svg>
                              </span>
                              Preview :&nbsp;
                              <span className="font-medium transition-all duration-300 ease-in-out hover:text-accent1">
                                <a
                                  href="https://www.envato.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  www.envato.com
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                        <p className="dark:text-white font-normal text-[17px]">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia placeat magnam possimus iusto
                          blanditiis pariatur labore explicabo quo repellat hic
                          dolorum numquam asperiores, voluptatum fugiat
                          reiciendis aspernatur, non, odio aperiam voluptas ex
                          tempora vitae. Dolor, consequatur quidem! Quas magni
                          distinctio dolorum dolore natus, vel numquam
                          accusamus. Nostrum eligendi recusandae qui tempore
                          deserunt!
                        </p>
                        <div className="pr-3">
                          <img
                            className="max-w-full h-auto rounded-xl mt-6 mx-auto"
                            src="assets/images/portfolio/big-6.png"
                            alt="portfolio image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Portfolio popup end */}
                </div>
              </div>
              {/* single portfolio end */}
              {/* single portfolio start */}
              <div
                className="element-item mb-[30px] w-[50%] lg:w-[33.33%]  px-[15px] web portfolio__parent"
                data-category="web"
              >
                <div className="relative overflow-hidden">
                  <a href="#" className="popup-modal--open">
                    <span className="absolute w-full h-full bg-accent1 left-0 top-0 opacity-0 transition duration-300 portfolio__overlay z-10">
                      <div className="flex items-center justify-end flex-col text-center h-full text-white p-[20px]">
                        <span className="portfolio--zoom flex items-center grow transition-all duration-300 translate-y-[-20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-maximize"
                          >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                          </svg>
                        </span>
                        <h3 className="portfolio--title text-[18px] lg:text-[24px] font-heebo transition-all duration-300 translate-y-3">
                          Webflow
                        </h3>
                        <span className="portfolio--sub-title text-[17px] 2xs:hidden transition-all duration-500 translate-y-3">
                          Promote your blog posts, case udie, and thehe branded
                          videos.
                        </span>
                      </div>
                    </span>
                    <div className="w-full portfolio__image--card">
                      <img
                        className="w-full transition duration-300"
                        src="assets/images/portfolio/7.png"
                        alt=""
                      />
                    </div>
                  </a>
                  {/* Portfolio popup start */}
                  <div className="modal_portfolio fixed h-screen w-full left-0 top-0 z-[98] opacity-0 invisible">
                    <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]" />
                    {/* Modal content */}
                    <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
                      <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800  max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
                        <button className="modal__popup--close ltr:right-[10px] rtl:left-[10px] top-[10px] absolute w-[50px] h-[50px] bg-accent1 hover:bg-primary dark:hover:bg-dark_accent1 text-white rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                          >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                        <h2 className="text-accent1 text-center font-bold">
                          Webflow Project
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-file-text"
                                >
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1={16} y1={13} x2={8} y2={13} />
                                  <line x1={16} y1={17} x2={8} y2={17} />
                                  <polyline points="10 9 9 9 8 9" />
                                </svg>
                              </span>
                              Project :&nbsp;
                              <span className="font-medium"> Website</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-code"
                                >
                                  <polyline points="16 18 22 12 16 6" />
                                  <polyline points="8 6 2 12 8 18" />
                                </svg>
                              </span>
                              Languages :&nbsp;
                              <span className="font-medium">
                                Photoshop, Illustration
                              </span>
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center mt-2 lg:mt-0  ">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-user"
                                >
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx={12} cy={7} r={4} />
                                </svg>
                              </span>
                              Client :&nbsp;{' '}
                              <span className="font-medium">Envato</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-external-link"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1={10} y1={14} x2={21} y2={3} />
                                </svg>
                              </span>
                              Preview :&nbsp;
                              <span className="font-medium transition-all duration-300 ease-in-out hover:text-accent1">
                                <a
                                  href="https://www.envato.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  www.envato.com
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                        <p className="dark:text-white font-normal text-[17px]">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia placeat magnam possimus iusto
                          blanditiis pariatur labore explicabo quo repellat hic
                          dolorum numquam asperiores, voluptatum fugiat
                          reiciendis aspernatur, non, odio aperiam voluptas ex
                          tempora vitae. Dolor, consequatur quidem! Quas magni
                          distinctio dolorum dolore natus, vel numquam
                          accusamus. Nostrum eligendi recusandae qui tempore
                          deserunt!
                        </p>
                        <div className="pr-3">
                          <img
                            className="max-w-full h-auto rounded-xl mt-6 mx-auto"
                            src="assets/images/portfolio/big-7.png"
                            alt="portfolio image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Portfolio popup end */}
                </div>
              </div>
              {/* single portfolio end */}
              {/* single portfolio start */}
              <div
                className="element-item mb-[30px] w-[50%] lg:w-[33.33%]  px-[15px] development graphics portfolio__parent"
                data-category="mobile"
              >
                <div className="relative overflow-hidden">
                  <a href="#" className="popup-modal--open">
                    <span className="absolute w-full h-full bg-accent1 left-0 top-0 opacity-0 transition duration-300 portfolio__overlay z-10">
                      <div className="flex items-center justify-end flex-col text-center h-full text-white p-[20px]">
                        <span className="portfolio--zoom flex items-center grow transition-all duration-300 translate-y-[-20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-maximize"
                          >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                          </svg>
                        </span>
                        <h3 className="portfolio--title text-[18px] lg:text-[24px] font-heebo transition-all duration-300 translate-y-3">
                          Hubspot
                        </h3>
                        <span className="portfolio--sub-title text-[17px] 2xs:hidden transition-all duration-500 translate-y-3">
                          Promote your blog posts, case udie, and thehe branded
                          videos.
                        </span>
                      </div>
                    </span>
                    <div className="w-full portfolio__image--card">
                      <img
                        className="w-full transition duration-300"
                        src="assets/images/portfolio/8.png"
                        alt=""
                      />
                    </div>
                  </a>
                  {/* Portfolio popup start */}
                  <div className="modal_portfolio fixed h-screen w-full left-0 top-0 z-[98] opacity-0 invisible">
                    <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]" />
                    {/* Modal content */}
                    <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
                      <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800  max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
                        <button className="modal__popup--close ltr:right-[10px] rtl:left-[10px] top-[10px] absolute w-[50px] h-[50px] bg-accent1 hover:bg-primary dark:hover:bg-dark_accent1 text-white rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                          >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                        <h2 className="text-accent1 text-center font-bold">
                          Hubspot Project
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-file-text"
                                >
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1={16} y1={13} x2={8} y2={13} />
                                  <line x1={16} y1={17} x2={8} y2={17} />
                                  <polyline points="10 9 9 9 8 9" />
                                </svg>
                              </span>
                              Project :&nbsp;
                              <span className="font-medium"> Website</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-code"
                                >
                                  <polyline points="16 18 22 12 16 6" />
                                  <polyline points="8 6 2 12 8 18" />
                                </svg>
                              </span>
                              Languages :&nbsp;
                              <span className="font-medium">
                                Photoshop, Illustration
                              </span>
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center mt-2 lg:mt-0  ">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-user"
                                >
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx={12} cy={7} r={4} />
                                </svg>
                              </span>
                              Client :&nbsp;{' '}
                              <span className="font-medium">Envato</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-external-link"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1={10} y1={14} x2={21} y2={3} />
                                </svg>
                              </span>
                              Preview :&nbsp;
                              <span className="font-medium transition-all duration-300 ease-in-out hover:text-accent1">
                                <a
                                  href="https://www.envato.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  www.envato.com
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                        <p className="dark:text-white font-normal text-[17px]">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia placeat magnam possimus iusto
                          blanditiis pariatur labore explicabo quo repellat hic
                          dolorum numquam asperiores, voluptatum fugiat
                          reiciendis aspernatur, non, odio aperiam voluptas ex
                          tempora vitae. Dolor, consequatur quidem! Quas magni
                          distinctio dolorum dolore natus, vel numquam
                          accusamus. Nostrum eligendi recusandae qui tempore
                          deserunt!
                        </p>
                        <div className="pr-3">
                          <img
                            className="max-w-full h-auto rounded-xl mt-6 mx-auto"
                            src="assets/images/portfolio/big-8.png"
                            alt="portfolio image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Portfolio popup end */}
                </div>
              </div>
              {/* single portfolio end */}
              {/* single portfolio start */}
              <div
                className="element-item mb-[30px] w-[50%] lg:w-[33.33%]  px-[15px] web mobile portfolio__parent"
                data-category="web"
              >
                <div className="relative overflow-hidden">
                  <a href="#" className="popup-modal--open">
                    <span className="absolute w-full h-full bg-accent1 left-0 top-0 opacity-0 transition duration-300 portfolio__overlay z-10">
                      <div className="flex items-center justify-end flex-col text-center h-full text-white p-[20px]">
                        <span className="portfolio--zoom flex items-center grow transition-all duration-300 translate-y-[-20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-maximize"
                          >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                          </svg>
                        </span>
                        <h3 className="portfolio--title text-[18px] lg:text-[24px] font-heebo transition-all duration-300 translate-y-3">
                          Web Development
                        </h3>
                        <span className="portfolio--sub-title text-[17px] 2xs:hidden transition-all duration-500 translate-y-3">
                          Promote your blog posts, case udie, and thehe branded
                          videos.
                        </span>
                      </div>
                    </span>
                    <div className="w-full portfolio__image--card">
                      <img
                        className="w-full transition duration-300"
                        src="assets/images/portfolio/9.png"
                        alt=""
                      />
                    </div>
                  </a>
                  {/* Portfolio popup start */}
                  <div className="modal_portfolio fixed h-screen w-full left-0 top-0 z-[98] opacity-0 invisible">
                    <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]" />
                    {/* Modal content */}
                    <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
                      <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800  max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
                        <button className="modal__popup--close ltr:right-[10px] rtl:left-[10px] top-[10px] absolute w-[50px] h-[50px] bg-accent1 hover:bg-primary dark:hover:bg-dark_accent1 text-white rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                          >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                        <h2 className="text-accent1 text-center font-bold">
                          Web Development
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-file-text"
                                >
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                  <polyline points="14 2 14 8 20 8" />
                                  <line x1={16} y1={13} x2={8} y2={13} />
                                  <line x1={16} y1={17} x2={8} y2={17} />
                                  <polyline points="10 9 9 9 8 9" />
                                </svg>
                              </span>
                              Project :&nbsp;
                              <span className="font-medium"> Website</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-code"
                                >
                                  <polyline points="16 18 22 12 16 6" />
                                  <polyline points="8 6 2 12 8 18" />
                                </svg>
                              </span>
                              Languages :&nbsp;
                              <span className="font-medium">
                                Photoshop, Illustration
                              </span>
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="dark:text-white flex items-center mt-2 lg:mt-0  ">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-user"
                                >
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx={12} cy={7} r={4} />
                                </svg>
                              </span>
                              Client :&nbsp;{' '}
                              <span className="font-medium">Envato</span>
                            </p>
                            <p className="dark:text-white flex items-center">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-external-link"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1={10} y1={14} x2={21} y2={3} />
                                </svg>
                              </span>
                              Preview :&nbsp;
                              <span className="font-medium transition-all duration-300 ease-in-out hover:text-accent1">
                                <a
                                  href="https://www.envato.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  www.envato.com
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                        <p className="dark:text-white font-normal text-[17px]">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Mollitia placeat magnam possimus iusto
                          blanditiis pariatur labore explicabo quo repellat hic
                          dolorum numquam asperiores, voluptatum fugiat
                          reiciendis aspernatur, non, odio aperiam voluptas ex
                          tempora vitae. Dolor, consequatur quidem! Quas magni
                          distinctio dolorum dolore natus, vel numquam
                          accusamus. Nostrum eligendi recusandae qui tempore
                          deserunt!
                        </p>
                        <div className="pr-3">
                          <img
                            className="max-w-full h-auto rounded-xl mt-6 mx-auto"
                            src="assets/images/portfolio/big-9.png"
                            alt="portfolio image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Portfolio popup end */}
                </div>
              </div>
              {/* single portfolio end */}
            </div>
          </div>
          {/* Filter portfolio end */}
        </div>
      </section>
      {/* Portfolio section end */}
    </>
  );
}
