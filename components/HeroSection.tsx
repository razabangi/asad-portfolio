export default function HeroSection() {
  return (
    <>
      {/* Hero section start */}
      <section
        className="bg-cover bg-no-repeat bg-center sm:h-full only-md:h-screen lg:min-h-screen flex justify-center items-center overflow-hidden bg-[url('../images/hero-bg-img.png')] bg-[#DAEEF1] dark:bg-[url('../images/hero-bg-img-dark.png')] dark:bg-dark_primary_bg dark:border-b dark:border-dark_accent1"
        id="home"
      >
        <div className="container mx-auto flex sm:flex-col items-center justify-center lg:mt-[40px] only-md:mt-[40px] sm:pt-[100px] sm:pb-[70px]">
          <div className="lg:max-w-[40%] sm:max-w-[60%] xs:max-w-[85%] only-md:max-w-[40%] flex justify-end">
            <div className="relative only-xl:max-w-[70%]">
              <img
                className="hidden dark:block"
                src="assets/images/hero-man-dark.png"
                alt=""
              />
              <img
                className="dark:hidden"
                src="assets/images/hero-man.png"
                alt=""
              />
              <span className="absolute top-[100px] lg:top-[210px] right-[-20px] only-md:right-[-10px] only-xl:max-w-[65px] lg:max-w-[80px] xl:max-w-[105px] sm:max-w-[50px] only-md:max-w-[70px] animateUpDown">
                <img
                  src="/assets/images/png-transparent-laravel-computer-icons-phpunit-font-awesome-framework-miscellaneous-angle-text.png"
                  alt=""
                />
              </span>
              <span className="absolute top-[80px] left-[-40px] md:left-[-10px] only-xl:max-w-[65px] lg:max-w-[80px] xl:max-w-[105px] sm:max-w-[50px] only-md:max-w-[70px] animateUpDown">
                <img src="/assets/images/nextjs.png" alt="" />
              </span>
              <span className="absolute top-[10px] left-[-30px] md:left-[-10px] only-xl:max-w-[65px] lg:max-w-[80px] xl:max-w-[80px] sm:max-w-[50px] only-md:max-w-[50px] animateUpDown">
                <img src="/assets/images/php.png" alt="" />
              </span>
              <div className="flex items-center absolute bottom-0 right-0 bg-white dark:bg-dark_accent1 rounded-[50px] px-[15px] py-[15px] shadow-[0_0_50px_0_rgba(196,206,213,0.2)] dark:shadow-[0_0_50px_0_rgba(0,0,0,0.2)]">
                <div className="text-accent1 w-[45px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={45}
                    height={45}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="pl-[10px] pr-[15px]">
                  <span className="block text-[20px] lg:text-[26px] font-bold text-primary dark:text-white font-heebo leading-[1]">
                    20+
                  </span>
                  <span className="block text-paragraph dark:text-slate-200 text-[17px]">
                    Completed projects
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="name-info ltr:xl:pl-[95px] ltr:lg:pl-[50px] ltr:only-md:pl-[40px] rtl:xl:pr-[95px] rtl:lg:pr-[50px] rtl:only-md:pr-[40px] flex-grow sm:mt-[30px] sm:text-center">
            <span className="text-accent1 text-[24px] font-semibold italic pb-[5px]">
              HELLO I'M
            </span>
            <h2 className="lg:text-[45px] only-md:text-[40px] sm:text-[28px] font-bold font-heebo text-heading dark:text-white">
              Muhammad Raza Bangi!{' '}
            </h2>
            <h4 className="font-heebo font-normal text-primary dark:text-white">
              Full Stack Developer{' '}
            </h4>
            <p className="lg:text-[18px] md:text-[16px] text-paragraph dark:text-slate-200 lg:mt-[18px] md:mt-[15px]">
              I'm Muhammad Raza Bangi, A senior software engineer with three
              years of experience.
              <br /> I have a strong background in web development,
              <br /> specializing in PHP, Laravel, Next.js, Nuxt.js,
              <br /> MySQL, PostgreSQL, MongoDB,
              <br /> HTML5, CSS3, React.js, and Vue.js. Over the years,
              <br /> I have honed my skills and acquired a deep understanding of
              these technologies.
            </p>
            <div className="flex items-center gap-[18px] flex-wrap mt-[30px] sm:justify-center">
              <a
                href="/#about"
                className="btn outline-btn text-accent1 shrink-0"
              >
                About Me
              </a>
              <div className="flex items-center flex-wrap gap-[15px] sm:justify-center">
                <span className="font-heebo lg:text-[22px] md:text-[18px] font-semibold shrink-0 text-primary dark:text-white">
                  Follow Me:{' '}
                </span>
                <div className="flex items-center">
                  <a
                    target={'_blank'}
                    href="https://www.facebook.com/muhammadrazabangi9/"
                    className="my-5 w-[30px] h-[30px] flex items-center justify-center text-accent1 border border-accent1 transition duration-300 hover:bg-accent1 hover:text-white rounded-full"
                  >
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      width={13}
                      height={14}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </a>
                  <a
                    target={"_blank"}
                    href="https://github.com/razabangi"
                    className="my-5 w-[30px] h-[30px] flex items-center justify-center text-accent1 border border-accent1 transition duration-300 hover:bg-accent1 hover:text-white rounded-full ltr:ml-[10px] rtl:mr-[10px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 0a12 12 0 00-3.78 23.4c.6.12.82-.26.82-.58v-1.93c-3.34.73-4.04-1.4-4.04-1.4-.54-1.38-1.33-1.74-1.33-1.74-1.08-.73.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.82 1.3 3.5 1 .12-.8.41-1.3.75-1.6-2.64-.3-5.42-1.32-5.42-5.88 0-1.3.47-2.36 1.24-3.18-.12-.3-.54-1.5.12-3.13 0 0 1-.3 3.3 1.2.95-.26 1.96-.4 2.98-.4 1.02 0 2.03.14 2.98.4 2.3-1.5 3.3-1.2 3.3-1.2.66 1.63.24 2.83.12 3.13.77.82 1.24 1.88 1.24 3.18 0 4.57-2.8 5.58-5.44 5.88.42.3.8.9.8 1.82v2.72c0 .32.22.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    target={"_blank"}
                    href="https://www.linkedin.com/in/muhammad-raza-bangi/"
                    className="my-5 w-[30px] h-[30px] flex items-center justify-center text-accent1 border border-accent1 transition duration-300 hover:bg-accent1 hover:text-white rounded-full ltr:ml-[10px] rtl:mr-[10px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      {' '}
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{' '}
                    </svg>
                  </a>
                  <a
                    target={"_blank"}
                    href="https://wa.link/zzf36q"
                    className="my-5 w-[30px] h-[30px] flex items-center justify-center text-accent1 border border-accent1 transition duration-300 hover:bg-accent1 hover:text-white rounded-full ltr:ml-[10px] rtl:mr-[10px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      {' '}
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />{' '}
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section end */}
    </>
  );
}
