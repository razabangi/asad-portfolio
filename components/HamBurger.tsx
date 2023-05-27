export default function HamBurger() {
  return (
    <>
      <button
        className="offcanvas__header--menu__open--btn text-primary dark:text-white "
        data-offcanvas=""
      >
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
          className="feather feather-menu"
        >
          <line x1={3} y1={12} x2={21} y2={12} />
          <line x1={3} y1={6} x2={21} y2={6} />
          <line x1={3} y1={18} x2={21} y2={18} />
        </svg>
      </button>
    </>
  );
}
