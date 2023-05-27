export default function Blog() {
  return (
    <>
      {/* Blog section start */}
      <section className="pb-[70px] lg:pb-[100px]" id="blog">
        <div className="container mx-auto">
          {/* Section title start */}
          <div className="flex justify-between items-center gap-[20px] lg:gap-[30px] mb-[55px] md:flex-wrap md:text-center">
            <div className="max-w-full lg:max-w-[580px]  w-full">
              <span className="text-accent1 text-[20px] lg:text-[24px] font-medium mb-[10px] lg:mb-[5px]">
                LATEST BLOGS
              </span>
              <h2 className="text:[28px] lg:text-[48px] font-bold font-heebo leading-[36x] lg:leading-[58px] text-[#000248] dark:text-white">
                Blog Latest of News tricks &amp; Updates
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
          {/* Section title end */}
          <div className="grid grid-cols-1 only-md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {/* single blog  start */}
            <div className="blog__card shadow-[0_0_50px_0_rgba(196,206,213,0.2)] hover:shadow-[0_0_100px_0_rgba(196,206,213,0.7)] dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] transition duration-500">
              <a className="block popup-modal--open" href="#">
                {/* blog image */}
                <div className="overflow-hidden">
                  <span className="block">
                    <img
                      className="blog__thumb w-full transition duration-300"
                      src="assets/images/blog/1.png"
                      alt=""
                    />
                  </span>
                </div>
                {/* blog image end */}
                {/* blog content */}
                <div className="p-[30px]">
                  <div className="mb-[15px]">
                    <span className="bg-accent1_rgb text-[14px] uppercase py-1 px-[6px] text-accent1 dark:text-white dark:bg-accent1 hover:bg-accent1 hover:text-white transition-all duration-300">
                      UI /UX DESIGN
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[25px] leading-7 font-heebo font-bold">
                      <span className="text-primary hover:text-accent1 dark:text-white dark:hover:text-accent1 transition-all duration-300">
                        Angular team welarges to trequests blog
                      </span>
                    </h3>
                    <p className="mt-[15px] text-paragraph dark:text-slate-200 text-[17px]">
                      Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                      incididunt ut labore et dolore aliqu
                    </p>
                  </div>
                </div>
                {/* blog content end */}
              </a>
              {/* Blog popup start */}
              <div className="modal_portfolio fixed h-screen w-full left-0 top-0 z-[98] opacity-0 invisible">
                <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]" />
                {/* Modal content */}
                <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
                  <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800  max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
                    {/* Modal close button */}
                    <button className="modal__popup--close ltr:right-[5px] rtl:left-[5px] top-[5px] absolute w-[50px] h-[50px] bg-accent1 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary dark:hover:bg-dark_accent1">
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
                    {/* Modal close button */}
                    {/* Modal main content */}
                    <div>
                      <div className="pt-3">
                        <img
                          className="max-w-full h-auto rounded-xl mt-6 mx-auto w-full"
                          src="assets/images/blog/blog-details-1.png"
                          alt="Blog details"
                        />
                      </div>
                      <h4 className="text-[25px] lg:text-[32px] leading-7 font-heebo font-bold mt-8">
                        <span className="text-primary dark:text-white">
                          Angular team welarges to trequests blog
                        </span>
                      </h4>
                      <div className="blog__content mt-5 text-[17px] leading-7 dark:text-slate-300">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page is when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using ique maiestatis sum quod
                          sum ut alienum nec et to summo possim persequeris vix
                          mea. Adhuc quodsi qui, sit no tale essent electramei
                          sum sums rodesset in pro, quo scripta feugait vidisse.
                          Lorem ipsum dolor sit amet, eu duo ferri labor dicat
                          Mea ex modo reque senserit, et sed hinc dolor,
                          scaevola sum salutandi expetendis vix ne his quod
                          mundi consequat sum. There are not many of passages of
                          lorem{' '}
                        </p>
                        <p className="mt-5">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page is when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters,
                        </p>
                        <blockquote className="p-4 my-4 bg-gray-50 ltr:border-l-4 rtl:border-r-4 border-gray-300 dark:border-dark_accent1 dark:bg-dark_accent1 dark:text-white text-xl">
                          <svg
                            aria-hidden="true"
                            className="w-10 h-10 text-gray-400 dark:text-gray-600"
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p>
                            "Tailwind css is just awesome. It contains tons of
                            predesigned components and pages starting from login
                            screen to complex dashboard. Perfect choice for your
                            next SaaS application."
                          </p>
                        </blockquote>
                      </div>
                      {/* Blog comment box start */}
                      <div className="mt-10">
                        <h4 className="text-primary mb-5 dark:text-white">
                          Comments (2)
                        </h4>
                        <div className="mt-7">
                          {/* Single comment start */}
                          <div className="flex gap-4 border-b border-gray-300 pb-7 dark:text-slate-300">
                            <div className="w-20">
                              <img src="assets/images/blog/avatar.png" alt="" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3">
                                <h6 className="text-primary font-heebo dark:text-white">
                                  Bonas Mera
                                </h6>
                                <span>November 16, 2022</span>
                              </div>
                              <p className="py-2">
                                Lorem ipsum is simply free textdolor sit amet,
                                consectetur notted adipisicing elit sed do
                                iusmod tempor incididu.
                              </p>
                              <button className="text-accent1 font-heebo font-bold text-[18px] transition-all duration-300 hover:text-primary bg-transparent">
                                Reply
                              </button>
                            </div>
                          </div>
                          {/* Single comment end */}
                          {/* Single comment start */}
                          <div className="flex gap-4 pt-7 pl-20 dark:text-slate-300">
                            <div className="w-20">
                              <img
                                src="assets/images/blog/avatar-2.png"
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="flex items-center gap-3">
                                <h6 className="text-primary font-heebo dark:text-white">
                                  Jhone Doe
                                </h6>
                                <span>November 20, 2023</span>
                              </div>
                              <p className="py-2">
                                Lorem ipsum is simply free textdolor sit amet,
                                consectetur notted adipisicing elit sed do
                                iusmod tempor incididu.
                              </p>
                              <button className="text-accent1 font-heebo font-bold text-[18px] transition-all duration-300 hover:text-primary bg-transparent">
                                Reply
                              </button>
                            </div>
                          </div>
                          {/* Single comment end */}
                        </div>
                      </div>
                      {/* Blog comment box end */}
                      <form action="#" className="mt-10">
                        <h4 className="text-primary mb-5 dark:text-white">
                          Leave a Reply
                        </h4>
                        <div className="grid grid-cols-2 gap-7">
                          <div>
                            <input
                              className="w-full bg-white rounded px-5 py-2 h-11 border border-gray-300 dark:bg-transparent dark:text-slate-300 dark:border dark:border-slate-600"
                              type="text"
                              name="name"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <input
                              className="w-full bg-white rounded px-5 py-2 h-11 border border-gray-300 dark:bg-transparent dark:text-slate-300 dark:border dark:border-slate-600"
                              type="email"
                              name="email"
                              placeholder="Your email"
                            />
                          </div>
                          <div className="col-span-2">
                            <textarea
                              className="w-full bg-white rounded px-5 py-2 h-40 border border-gray-300 dark:bg-transparent dark:text-slate-300 dark:border dark:border-slate-600"
                              name="message"
                              id=""
                              cols={30}
                              rows={10}
                              placeholder="Message"
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <button className="btn--small solid-btn mt-7">
                          Post Comment
                        </button>
                      </form>
                    </div>
                    {/* Modal main content end */}
                  </div>
                </div>
              </div>
              {/* Blog popup end */}
            </div>
            {/* single blog end */}
            {/* single blog  start */}
            <div className="blog__card shadow-[0_0_50px_0_rgba(196,206,213,0.2)] hover:shadow-[0_0_100px_0_rgba(196,206,213,0.7)] dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] transition duration-500">
              <a className="block popup-modal--open" href="#">
                {/* blog image */}
                <div className="overflow-hidden">
                  <span className="block">
                    <img
                      className="blog__thumb w-full transition duration-300"
                      src="assets/images/blog/2.png"
                      alt=""
                    />
                  </span>
                </div>
                {/* blog image end */}
                {/* blog content */}
                <div className="p-[30px]">
                  <div className="mb-[15px]">
                    <span className="bg-accent1_rgb text-[14px] uppercase py-1 px-[6px] text-accent1 dark:text-white dark:bg-accent1 hover:bg-accent1 hover:text-white transition-all duration-300">
                      HTML AND CSS
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[25px] leading-7 font-heebo font-bold">
                      <span
                        className="text-primary hover:text-accent1 dark:text-white dark:hover:text-accent1 transition-all duration-300"
                        href="#"
                      >
                        How to create a website using html
                      </span>
                    </h3>
                    <p className="mt-[15px] text-paragraph dark:text-slate-200 text-[17px]">
                      Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                      incididunt ut labore et dolore aliqu
                    </p>
                  </div>
                </div>
                {/* blog content end */}
              </a>
              {/* Blog popup start */}
              <div className="modal_portfolio fixed h-screen w-full left-0 top-0 z-[98] opacity-0 invisible">
                <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]" />
                {/* Modal content */}
                <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
                  <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800  max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
                    {/* Modal close button */}
                    <button className="modal__popup--close ltr:right-[5px] rtl:left-[5px] top-[5px] absolute w-[50px] h-[50px] bg-accent1 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary dark:hover:bg-dark_accent1">
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
                    {/* Modal close button */}
                    {/* Modal main content */}
                    <div>
                      <div className="pt-3">
                        <img
                          className="max-w-full h-auto rounded-xl mt-6 mx-auto w-full"
                          src="assets/images/blog/blog-details-1.png"
                          alt="Blog details"
                        />
                      </div>
                      <h4 className="text-[25px] lg:text-[32px] leading-7 font-heebo font-bold mt-8">
                        <span className="text-primary dark:text-white">
                          Angular team welarges to trequests blog
                        </span>
                      </h4>
                      <div className="blog__content mt-5 text-[17px] leading-7 dark:text-slate-300">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page is when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using ique maiestatis sum quod
                          sum ut alienum nec et to summo possim persequeris vix
                          mea. Adhuc quodsi qui, sit no tale essent electramei
                          sum sums rodesset in pro, quo scripta feugait vidisse.
                          Lorem ipsum dolor sit amet, eu duo ferri labor dicat
                          Mea ex modo reque senserit, et sed hinc dolor,
                          scaevola sum salutandi expetendis vix ne his quod
                          mundi consequat sum. There are not many of passages of
                          lorem{' '}
                        </p>
                        <p className="mt-5">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page is when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters,
                        </p>
                        <blockquote className="p-4 my-4 bg-gray-50 ltr:border-l-4 rtl:border-r-4 border-gray-300 dark:border-dark_accent1 dark:bg-dark_accent1 dark:text-white text-xl">
                          <svg
                            aria-hidden="true"
                            className="w-10 h-10 text-gray-400 dark:text-gray-600"
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p>
                            "Tailwind css is just awesome. It contains tons of
                            predesigned components and pages starting from login
                            screen to complex dashboard. Perfect choice for your
                            next SaaS application."
                          </p>
                        </blockquote>
                      </div>
                      {/* Blog comment box start */}
                      <div className="mt-10">
                        <h4 className="text-primary mb-5 dark:text-white">
                          Comments (2)
                        </h4>
                        <div className="mt-7">
                          {/* Single comment start */}
                          <div className="flex gap-4 border-b border-gray-300 pb-7 dark:text-slate-300">
                            <div className="w-20">
                              <img src="assets/images/blog/avatar.png" alt="" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3">
                                <h6 className="text-primary font-heebo dark:text-white">
                                  Bonas Mera
                                </h6>
                                <span>November 16, 2022</span>
                              </div>
                              <p className="py-2">
                                Lorem ipsum is simply free textdolor sit amet,
                                consectetur notted adipisicing elit sed do
                                iusmod tempor incididu.
                              </p>
                              <button className="text-accent1 font-heebo font-bold text-[18px] transition-all duration-300 hover:text-primary bg-transparent">
                                Reply
                              </button>
                            </div>
                          </div>
                          {/* Single comment end */}
                          {/* Single comment start */}
                          <div className="flex gap-4 pt-7 pl-20 dark:text-slate-300">
                            <div className="w-20">
                              <img
                                src="assets/images/blog/avatar-2.png"
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="flex items-center gap-3">
                                <h6 className="text-primary font-heebo dark:text-white">
                                  Jhone Doe
                                </h6>
                                <span>November 20, 2023</span>
                              </div>
                              <p className="py-2">
                                Lorem ipsum is simply free textdolor sit amet,
                                consectetur notted adipisicing elit sed do
                                iusmod tempor incididu.
                              </p>
                              <button className="text-accent1 font-heebo font-bold text-[18px] transition-all duration-300 hover:text-primary bg-transparent">
                                Reply
                              </button>
                            </div>
                          </div>
                          {/* Single comment end */}
                        </div>
                      </div>
                      {/* Blog comment box end */}
                      <form action="#" className="mt-10">
                        <h4 className="text-primary mb-5 dark:text-white">
                          Leave a Reply
                        </h4>
                        <div className="grid grid-cols-2 gap-7">
                          <div>
                            <input
                              className="w-full bg-white rounded px-5 py-2 h-11 border border-gray-300 dark:bg-transparent dark:text-slate-300 dark:border dark:border-slate-600"
                              type="text"
                              name="name"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <input
                              className="w-full bg-white rounded px-5 py-2 h-11 border border-gray-300 dark:bg-transparent dark:text-slate-300 dark:border dark:border-slate-600"
                              type="email"
                              name="email"
                              placeholder="Your email"
                            />
                          </div>
                          <div className="col-span-2">
                            <textarea
                              className="w-full bg-white rounded px-5 py-2 h-40 border border-gray-300 dark:bg-transparent dark:text-slate-300 dark:border dark:border-slate-600"
                              name="message"
                              id=""
                              cols={30}
                              rows={10}
                              placeholder="Message"
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <button className="btn--small solid-btn mt-7">
                          Post Comment
                        </button>
                      </form>
                    </div>
                    {/* Modal main content end */}
                  </div>
                </div>
              </div>
              {/* Blog popup end */}
            </div>
            {/* single blog end */}
            {/* single blog  start */}
            <div className="blog__card shadow-[0_0_50px_0_rgba(196,206,213,0.2)] hover:shadow-[0_0_100px_0_rgba(196,206,213,0.7)] dark:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_50px_0_rgba(0,0,0,0.2)] transition duration-500">
              <a className="block popup-modal--open" href="#">
                {/* blog image */}
                <div className="overflow-hidden">
                  <span className="block">
                    <img
                      className="blog__thumb w-full transition duration-300"
                      src="assets/images/blog/3.png"
                      alt=""
                    />
                  </span>
                </div>
                {/* blog image end */}
                {/* blog content */}
                <div className="p-[30px]">
                  <div className="mb-[15px]">
                    <span className="bg-accent1_rgb text-[14px] uppercase py-1 px-[6px] text-accent1 dark:text-white dark:bg-accent1 hover:bg-accent1 hover:text-white transition-all duration-300">
                      Shopify
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[25px] leading-7 font-heebo font-bold">
                      <span className="text-primary hover:text-accent1 dark:text-white dark:hover:text-accent1 transition-all duration-300">
                        We mack team welarges to trequests blog
                      </span>
                    </h3>
                    <p className="mt-[15px] text-paragraph dark:text-slate-200 text-[17px]">
                      Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                      incididunt ut labore et dolore aliqu
                    </p>
                  </div>
                </div>
                {/* blog content end */}
              </a>
              {/* Blog popup start */}
              <div className="modal_portfolio fixed h-screen w-full left-0 top-0 z-[98] opacity-0 invisible">
                <div className="modal_popup_overlay fixed w-full h-full bg-[#000] left-0 top-0 opacity-[0.3]" />
                {/* Modal content */}
                <div className="modal__portfolio--content relative z-10 h-full flex items-center px-[15px] max-w-[750px] xl:max-w-[800px] mx-auto transition duration-300 translate-y-[-50px]">
                  <div className="overflow-y-auto modal__portfolio--content-inner bg-white dark:bg-gray-800  max-h-[60vh] lg:max-h-[80vh] p-8 rounded-2xl relative">
                    {/* Modal close button */}
                    <button className="modal__popup--close ltr:right-[5px] rtl:left-[5px] top-[5px] absolute w-[50px] h-[50px] bg-accent1 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary dark:hover:bg-dark_accent1">
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
                    {/* Modal close button */}
                    {/* Modal main content */}
                    <div>
                      <div className="pt-3">
                        <img
                          className="max-w-full h-auto rounded-xl mt-6 mx-auto w-full"
                          src="assets/images/blog/blog-details-1.png"
                          alt="Blog details"
                        />
                      </div>
                      <h4 className="text-[25px] lg:text-[32px] leading-7 font-heebo font-bold mt-8">
                        <span className="text-primary dark:text-white">
                          Angular team welarges to trequests blog
                        </span>
                      </h4>
                      <div className="blog__content mt-5 text-[17px] leading-7 dark:text-slate-300">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page is when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using ique maiestatis sum quod
                          sum ut alienum nec et to summo possim persequeris vix
                          mea. Adhuc quodsi qui, sit no tale essent electramei
                          sum sums rodesset in pro, quo scripta feugait vidisse.
                          Lorem ipsum dolor sit amet, eu duo ferri labor dicat
                          Mea ex modo reque senserit, et sed hinc dolor,
                          scaevola sum salutandi expetendis vix ne his quod
                          mundi consequat sum. There are not many of passages of
                          lorem{' '}
                        </p>
                        <p className="mt-5">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page is when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters,
                        </p>
                        <blockquote className="p-4 my-4 bg-gray-50 ltr:border-l-4 rtl:border-r-4 border-gray-300 dark:border-dark_accent1 dark:bg-dark_accent1 dark:text-white text-xl">
                          <svg
                            aria-hidden="true"
                            className="w-10 h-10 text-gray-400 dark:text-gray-600"
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                              fill="currentColor"
                            />
                          </svg>
                          <p>
                            "Tailwind css is just awesome. It contains tons of
                            predesigned components and pages starting from login
                            screen to complex dashboard. Perfect choice for your
                            next SaaS application."
                          </p>
                        </blockquote>
                      </div>
                      {/* Blog comment box start */}
                      <div className="mt-10">
                        <h4 className="text-primary mb-5 dark:text-white">
                          Comments (2)
                        </h4>
                        <div className="mt-7">
                          {/* Single comment start */}
                          <div className="flex gap-4 border-b border-gray-300 pb-7 dark:text-slate-300">
                            <div className="w-20">
                              <img src="assets/images/blog/avatar.png" alt="" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3">
                                <h6 className="text-primary font-heebo dark:text-white">
                                  Bonas Mera
                                </h6>
                                <span>November 16, 2022</span>
                              </div>
                              <p className="py-2">
                                Lorem ipsum is simply free textdolor sit amet,
                                consectetur notted adipisicing elit sed do
                                iusmod tempor incididu.
                              </p>
                              <button className="text-accent1 font-heebo font-bold text-[18px] transition-all duration-300 hover:text-primary bg-transparent">
                                Reply
                              </button>
                            </div>
                          </div>
                          {/* Single comment end */}
                          {/* Single comment start */}
                          <div className="flex gap-4 pt-7 pl-20 dark:text-slate-300">
                            <div className="w-20">
                              <img
                                src="assets/images/blog/avatar-2.png"
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="flex items-center gap-3">
                                <h6 className="text-primary font-heebo dark:text-white">
                                  Jhone Doe
                                </h6>
                                <span>November 20, 2023</span>
                              </div>
                              <p className="py-2">
                                Lorem ipsum is simply free textdolor sit amet,
                                consectetur notted adipisicing elit sed do
                                iusmod tempor incididu.
                              </p>
                              <button className="text-accent1 font-heebo font-bold text-[18px] transition-all duration-300 hover:text-primary bg-transparent">
                                Reply
                              </button>
                            </div>
                          </div>
                          {/* Single comment end */}
                        </div>
                      </div>
                      {/* Blog comment box end */}
                      <form action="#" className="mt-10">
                        <h4 className="text-primary mb-5 dark:text-white">
                          Leave a Reply
                        </h4>
                        <div className="grid grid-cols-2 gap-7">
                          <div>
                            <input
                              className="w-full bg-white rounded px-5 py-2 h-11 border border-gray-300 dark:bg-transparent dark:text-slate-300 dark:border dark:border-slate-600"
                              type="text"
                              name="name"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <input
                              className="w-full bg-white rounded px-5 py-2 h-11 border border-gray-300 dark:bg-transparent dark:text-slate-300 dark:border dark:border-slate-600"
                              type="email"
                              name="email"
                              placeholder="Your email"
                            />
                          </div>
                          <div className="col-span-2">
                            <textarea
                              className="w-full bg-white rounded px-5 py-2 h-40 border border-gray-300 dark:bg-transparent dark:text-slate-300 dark:border dark:border-slate-600"
                              name="message"
                              id=""
                              cols={30}
                              rows={10}
                              placeholder="Message"
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <button className="btn--small solid-btn mt-7">
                          Post Comment
                        </button>
                      </form>
                    </div>
                    {/* Modal main content end */}
                  </div>
                </div>
              </div>
              {/* Blog popup end */}
            </div>
            {/* single blog end */}
          </div>
        </div>
      </section>
      {/* Blog section end */}
    </>
  );
}
