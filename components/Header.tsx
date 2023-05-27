import Image from 'next/image';
import Logo from './Logo';
import Nav from './Nav';
import logoImage from '@images/logo.png';
import DownloadButton from './DownloadButton';
import HamBurger from './HamBurger';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const offcanvasOpen = document.querySelector('.offcanvas__header--menu__open--btn');
    const offcanvasClose = document.querySelector('.offcanvas__close--btn');
    const offcanvasHeader = document.querySelector('.offcanvas__header');
    const offcanvasMenu = document.querySelector('.offcanvas__menu');
    const body = document.querySelector('body');

    /* Offcanvas SubMenu Toggle */
    if (offcanvasMenu) {
      offcanvasMenu.querySelectorAll('.offcanvas__sub_menu').forEach((ul) => {
        const subMenuToggle = document.createElement('button');
        subMenuToggle.classList.add('offcanvas__sub_menu_toggle');
        ul.parentNode.appendChild(subMenuToggle);
      });
    }

    /* Open/Close Menu On Click Toggle Button */
    const handleOpenMenu = (e) => {
      e.preventDefault();
      if (e.target.dataset.offcanvas != undefined) {
        offcanvasHeader.classList.add('open');
        body.classList.add('mobile_menu_open');
      }
    };

    const handleCloseMenu = (e) => {
      e.preventDefault();
      if (e.target.dataset.offcanvas != undefined) {
        offcanvasHeader.classList.remove('open');
        body.classList.remove('mobile_menu_open');
      }
    };

    if (offcanvasOpen) {
      offcanvasOpen.addEventListener('click', handleOpenMenu);
    }

    if (offcanvasClose) {
      offcanvasClose.addEventListener('click', handleCloseMenu);
    }

    /* Mobile submenu slideToggle Activation */
    const mobileMenuWrapper = document.querySelector('.offcanvas__menu_ul');

    const slideUp = (element) => {
      element.style.display = 'none';
      element.style.height = '0';
    };

    const slideDown = (element) => {
      element.style.display = 'block';
      element.style.height = `${element.scrollHeight}px`;
    };

    const getSiblings = (element) => {
      return Array.from(element.parentNode.children).filter((child) => child !== element);
    };

    if (mobileMenuWrapper) {
      mobileMenuWrapper.addEventListener('click', (e) => {
        let targetElement = e.target;
        if (targetElement.classList.contains('offcanvas__sub_menu_toggle')) {
          const parent = targetElement.parentElement;
          if (parent.classList.contains('active')) {
            targetElement.classList.remove('active');
            parent.classList.remove('active');
            parent.querySelectorAll('.offcanvas__sub_menu').forEach((subMenu) => {
              subMenu.parentElement.classList.remove('active');
              subMenu.nextElementSibling.classList.remove('active');
              slideUp(subMenu);
            });
          } else {
            targetElement.classList.add('active');
            parent.classList.add('active');
            slideDown(targetElement.previousElementSibling);
            getSiblings(parent).forEach((item) => {
              item.classList.remove('active');
              item.querySelectorAll('.offcanvas__sub_menu').forEach((subMenu) => {
                subMenu.parentElement.classList.remove('active');
                subMenu.nextElementSibling.classList.remove('active');
                slideUp(subMenu);
              });
            });
          }
        }
      });
    }

    if (offcanvasHeader) {
      document.addEventListener('click', (event) => {
        if (
          !event.target.closest('.offcanvas__header--menu__open--btn') &&
          !event.target.classList.contains('.offcanvas__header--menu__open--btn'.replace(/\./, ''))
        ) {
          if (
            !event.target.closest('.offcanvas__header') &&
            !event.target.classList.contains('.offcanvas__header'.replace(/\./, ''))
          ) {
            offcanvasHeader.classList.remove('open');
            body.classList.remove('mobile_menu_open');
          }
        }
      });
    }

    /* Remove Mobile Menu Open Class & Hide Mobile Menu When Window Width in More Than 991 */
    if (offcanvasHeader) {
      window.addEventListener('resize', () => {
        if (window.outerWidth >= 992) {
          offcanvasHeader.classList.remove('open');
          body.classList.remove('mobile_menu_open');
        }
      });
    }

    return () => {
      // Clean up event listeners if needed
      if (offcanvasOpen) {
        offcanvasOpen.removeEventListener('click', handleOpenMenu);
      }
      if (offcanvasClose) {
        offcanvasClose.removeEventListener('click', handleCloseMenu);
      }
    };
  }, []);
  return (
    <>
      <header className="absolute w-full left-0 top-0">
        <div className="header__sticky py-5">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <Logo />
              <Nav />
              <div className="lg:hidden">
                <HamBurger />
              </div>
            </div>
          </div>
          {/* Start Offcanvas header menu */}
          <div className="offcanvas__header lg:hidden dark:bg-gray-800">
            <div className="offcanvas__inner">
              <div className="offcanvas__logo">
                <a className="offcanvas__logo_link" href="index.html">
                  {/* <img
                        className="dark:hidden"
                        src="assets/images/logo.png"
                        alt="Grocee Logo"
                        width={158}
                        height={36}
                        /> */}
                  <Image
                    className="dark:hidden"
                    src={logoImage}
                    width={158}
                    height={36}
                    alt=""
                  />
                </a>
                <button
                  className="offcanvas__close--btn dark:text-white"
                  data-offcanvas=""
                >
                  close
                </button>
              </div>
              <nav className="offcanvas__menu">
                <ul className="offcanvas__menu_ul">
                  <li className="offcanvas__menu_li">
                    <a
                      className="offcanvas__menu_item dark:text-white"
                      href="#home"
                    >
                      Home
                    </a>
                  </li>
                  <li className="offcanvas__menu_li">
                    <a
                      className="offcanvas__menu_item dark:text-white"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li className="offcanvas__menu_li">
                    <a
                      className="offcanvas__menu_item dark:text-white"
                      href="#services"
                    >
                      Services
                    </a>
                  </li>
                  <li className="offcanvas__menu_li">
                    <a
                      className="offcanvas__menu_item dark:text-white"
                      href="#portfolio"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="offcanvas__menu_li">
                    <a
                      className="offcanvas__menu_item dark:text-white"
                      href="#blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="offcanvas__menu_li">
                    <a
                      className="offcanvas__menu_item dark:text-white"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <DownloadButton />
              </nav>
            </div>
          </div>
          {/* End Offcanvas header menu */}
        </div>
      </header>
    </>
  );
}
