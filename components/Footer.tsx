export default function Footer() {
  return (
    <>
      {/* Footer start */}
      <footer className="py-[50px] bg-cover bg-no-repeat bg-center bg-[url('../images/footer-bg.html')] bg-[#EFF3F7] dark:bg-[url('../images/footer-bg-dark.html')] dark:bg-dark_primary_bg dark:border-t dark:border-dark_accent1">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 only-md:grid-cols-2 lg:grid-cols-2">
            <div className="flex">
              <p className="flex items-center flex-wrap sm:justify-center dark:text-slate-200">
                Developed with{' '}
                <span className="px-[3px] text-paragraph dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="text-paragraph"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-heart"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </span>{' '}
                by{' '}
                <span className=" px-[3px]">
                  <a className="text-accent1 hover:font-bold" href="#">
                    Muhammad Raza Bangi
                  </a>
                </span>
                © 2023
              </p>
            </div>
            <div className="flex items-center justify-end gap-8 sm:justify-center sm:mt-[15px]">
              <a
                href="#"
                className="text-paragraph dark:text-slate-200 hover:text-accent1 font-medium text-[20px] sm:text-[16px]"
              >
                Terms &amp; Condition
              </a>
              <a
                href="#"
                className="text-paragraph dark:text-slate-200 hover:text-accent1 font-medium text-[20px] sm:text-[16px]"
              >
                {' '}
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer end */}
    </>
  );
}
