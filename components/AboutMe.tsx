export default function AboutMe() {
  return (
    <>
      {/* About me section start */}
      <section
        className="bg-cover bg-no-repeat bg-center bg-[url('../images/about-me-bg.png')] bg-[#ECF1F6] dark:bg-dark_primary_bg dark:bg-none py-[70px] lg:py-[100px] dark:border-t dark:border-b dark:border-dark_accent1"
        id="about"
      >
        <div className="container mx-auto">
          <div className="flex justify-between sm:flex-wrap sm:flex-col-reverse">
            <div className="w-full lg:max-w-[550px]">
              <div>
                <span className="text-accent1 text-[20px] lg:text-[24px] font-medium mb-[10px] lg:mb-[5px]">
                  ABOUT ME
                </span>
                <h2 className="text-[16px] only-md:text-[16px] lg:text-[20px] font-bold font-heebo leading-[36px] lg:leading-[58px] text-[#000248] dark:text-white ltr:lg:pr-[50px] rtl:lg:pl-[50px]">
                I can design a world-class user interface and user experience for leading full-stack development.
                </h2>
              </div>
              <div className="mt-[30px]">
                <h3 className="text-accent1 text-[20px] lg:text-[24px] font-medium ">
                  PERSONAL INFOS:
                </h3>
                <ul className="flex justify-between flex-wrap mt-[18px]">
                  <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full pl-20 text-[17px]">
                    First Name: Muhammad Raza
                  </li>
                  <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full pl-20 text-[17px]">
                    Last Name: Bangi
                  </li>
                  <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full pl-20 text-[17px]">
                    Address: Karachi, Pakistan
                  </li>
                  <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full pl-20 text-[17px]">
                    Phone: +923242190023
                  </li>
                  <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full pl-20 text-[17px]">
                    Age: 26 Years
                  </li>
                  {/* <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full pl-20 text-[17px]">
                    Email: muhammadrazabangi9@gmail.com
                  </li> */}
                  <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full pl-20 text-[17px]">
                    Nationality: Pakistan
                  </li>
                  <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full pl-20 text-[17px]">
                    Github: <a href="https://github.com/razabangi">/razabangi</a>
                  </li>
                  <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full pl-20 text-[17px]">
                    Freelance: Available
                  </li>
                  <li className="text-paragraph dark:text-slate-200 w-full xs:max-w-[100%]  max-w-[50%] ltr:pl-[18px] rtl:pr-[18px] my-[10px] relative before:absolute before:content-[''] before:bg-accent1 before:w-[6px] before:h-[6px] ltr:before:left-0 rtl:before:right-0 before:top-[8px] before:rounded-full pl-20 text-[17px]">
                    Languages: Urdu, English
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn solid-btn text-accent1 mt-[35px] inline-block"
                >
                  Hire Me
                </a>
              </div>
            </div>
            <div className="sm:mb-[50px]">
              <div className="relative">
                <img
                  className="relative z-10 sm:mx-auto"
                  src="assets/images/about-me.png"
                  alt=""
                />
                <span className="absolute sm:w-[100px] sm:h-[100px] only-md:w-[150px] only-md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] border-[8px] lg:border-[13px] border-accent1 rounded-full xs:bottom-[-25%] sm:bottom-[-12%] bottom-[-18%] ltr:sm:left-[3%] ltr:left-[-18%] rtl:sm:right-[3%] rtl:right-[-18%] animateUpDown" />
              </div>
              <div className="text-center mt-[30px]">
                <h4 className="font-heebo text-[50px] lg:text-[80px] font-bold leading-[1] text-white title-stroke">
                  3+
                </h4>
                <span className="font-bold sm:text-[20px] only-md:text-[24px] lg:text-[30px] font-heebo text-primary dark:text-white">
                  Experience Working
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About me section end */}
    </>
  );
}
