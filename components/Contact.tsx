export default function Contact() {
  return (
    <>
      {/* Contact form section start */}
      <section
        className="py-[70px] lg:py-[100px] mb-[270px] bg-cover bg-no-repeat bg-center bg-[url('../images/contact-bg.html')] bg-[#ECF1F6] dark:bg-[url('../images/contact-bg-dark.html')] dark:bg-dark_primary_bg"
        id="contact"
      >
        <div className="container mx-auto">
          {/* Form wrapper start */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            <div>
              {/* Section title */}
              <div className="mb-[55px] md:text-center">
                <span className="text-accent1 text-[20px] lg:text-[24px] font-medium mb-[10px] lg:mb-[5px]">
                  CONTACT
                </span>
                <h2 className="text:[28px] lg:text-[48px] font-bold font-heebo leading-[36x] lg:leading-[58px] text-[#000248] dark:text-white">
                  Get I contact work
                </h2>
                <p className="text-[#636363] dark:text-slate-200 text-[17px] leading-[28px] lg:max-w-[472px] w-full">
                  Promote your blog posts, case udie, and product ouncems with
                  the the branded videoscustomers coming back for services Makes
                  best effort.
                </p>
              </div>
              {/* Section title end */}
              {/* from inner start*/}
              <form action="#">
                <div className="grid grid-cols-2 gap-7">
                  <div>
                    <input
                      className="w-full bg-white rounded px-5 py-2 h-11 dark:bg-transparent dark:text-slate-300 dark:border dark:border-slate-600"
                      type="text"
                      name="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full bg-white rounded px-5 py-2 h-11 dark:bg-transparent dark:text-slate-300 dark:border dark:border-slate-600"
                      type="email"
                      name="email"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="col-span-2">
                    <textarea
                      className="w-full bg-white rounded px-5 py-2 h-40 dark:bg-transparent dark:text-slate-300 dark:border dark:border-slate-600"
                      name="message"
                      id=""
                      cols={30}
                      rows={10}
                      placeholder="Message"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <button className="btn solid-btn mt-12">Send Request</button>
              </form>
              {/* from inner end */}
            </div>
            <div className="ltr:only-md:pl-[30px] ltr:lg:pl-[50px] rtl:only-md:pr-[30px] rtl:lg:pr-[50px] mt-[30px] lg:mt-[150px] md:flex md:gap-[30px] md:flex-wrap">
              {/* Single contact info start */}
              <div className="flex items-center">
                <div>
                  <span className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] bg-accent1 text-white flex items-center rounded-full justify-center">
                    <svg
                      width={25}
                      height={34}
                      fill="currentColor"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                  </span>
                </div>
                <div className="ltr:pl-6 rtl:pr-6 ml-5">
                  <h3 className="text-[28px] md:text-[22px] font-heebo font-bold text-primary dark:text-white">
                    Call Me
                  </h3>
                  <span className="text-primary dark:text-slate-200 text-[22px] md:text-[18px] mt-5">
                    +923242190023
                  </span>
                </div>
              </div>
              {/* Single contact info end */}
              {/* Single contact info start */}
              {/* <div className="flex items-center lg:mt-7">
                <div>
                  <span className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] bg-accent1 text-white flex items-center rounded-full justify-center">
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
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                </div>
                <div className="ltr:pl-6 rtl:pr-6 ml-5">
                  <h3 className="text-[28px] md:text-[22px] font-heebo font-bold text-primary dark:text-white">
                    Email Us
                  </h3>
                  <span className="text-primary  dark:text-slate-200 text-[22px] md:text-[18px] mt-5">
                    muhammadrazabangi9@gmail.com
                  </span>
                </div>
              </div> */}
              {/* Single contact info end */}
              {/* Single contact info start */}
              <div className="flex items-center lg:mt-7">
                <div>
                  <span className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] bg-accent1 text-white flex items-center rounded-full justify-center">
                    <svg
                      width={32}
                      height={34}
                      fill="currentColor"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                    </svg>
                  </span>
                </div>
                <div className="ltr:pl-6 rtl:pr-6 ml-5">
                  <h3 className="text-[28px] md:text-[22px] font-heebo font-bold text-primary dark:text-white">
                    Address
                  </h3>
                  <span className="text-primary  dark:text-slate-200 text-[22px] md:text-[18px] mt-5">
                    Karachi, Pakistan.
                  </span>
                </div>
              </div>
              {/* Single contact info end */}
            </div>
          </div>
          {/* Form wrapper end */}
          {/* Google map start  */}
          <div className="mb-[-275px] pt-[70px] lg:pt-[100px]">
            <div style={{ width: '100%' }}>
              <iframe
                width="100%"
                height={400}
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1685229211127!5m2!1sen!2s"
              >
                &lt;a
                href="https://www.maps.ie/distance-area-calculator.html"&gt;distance
                maps&lt;/a&gt;
              </iframe>
            </div>
          </div>
          {/* Google map send */}
        </div>
      </section>
      {/* Contact form section end */}
    </>
  );
}
