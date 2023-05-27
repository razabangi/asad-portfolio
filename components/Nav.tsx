import DownloadButton from "./DownloadButton";

export default function Nav () {
    return (
        <>
        <div className="flex items-center md:hidden">
            <nav>
                <ul className="flex items-center mr-100 main-menu">
                <li>
                    <a
                    href="#home"
                    className="text-[17px] xl:text-[19px] text-primary dark:text-white font-medium hover:text-accent1 dark:hover:text-accent1 transition duration-300 relative after:absolute after:transition-[.5s] after:bg-accent1 py-[8px] hover:after:w-full"
                    >
                    Home
                    </a>
                </li>
                <li>
                    <a
                    href="#about"
                    className="text-[17px] xl:text-[19px] text-primary dark:text-white font-medium hover:text-accent1 dark:hover:text-accent1 transition duration-300 ltr:ml-[26px] ltr:xl:ml-[44px] rtl:mr-[26px] rtl:xl:mr-[44px] relative after:absolute after:transition-[.5s] after:bg-accent1 py-[8px] hover:after:w-full"
                    >
                    About
                    </a>
                </li>
                <li>
                    <a
                    href="#services"
                    className="text-[17px] xl:text-[19px] text-primary dark:text-white font-medium hover:text-accent1 dark:hover:text-accent1 transition duration-300 ltr:ml-[26px] ltr:xl:ml-[44px] rtl:mr-[26px] rtl:xl:mr-[44px] relative after:absolute after:transition-[.5s] after:bg-accent1 py-[8px] hover:after:w-full"
                    >
                    Services
                    </a>
                </li>
                <li>
                    <a
                    href="#portfolio"
                    className="text-[17px] xl:text-[19px] text-primary dark:text-white font-medium hover:text-accent1 dark:hover:text-accent1 transition duration-300 ltr:ml-[26px] ltr:xl:ml-[44px] rtl:mr-[26px] rtl:xl:mr-[44px] relative after:absolute after:transition-[.5s] after:bg-accent1 py-[8px] hover:after:w-full"
                    >
                    Portfolio
                    </a>
                </li>
                <li>
                    <a
                    href="#blog"
                    className="text-[17px] xl:text-[19px] text-primary dark:text-white font-medium hover:text-accent1 dark:hover:text-accent1 transition duration-300 ltr:ml-[26px] ltr:xl:ml-[44px] rtl:mr-[26px] rtl:xl:mr-[44px] relative after:absolute after:transition-[.5s] after:bg-accent1 py-[8px] hover:after:w-full"
                    >
                    Blog
                    </a>
                </li>
                <li>
                    <a
                    href="#contact"
                    className="text-[17px] xl:text-[19px] text-primary dark:text-white font-medium hover:text-accent1 dark:hover:text-accent1 transition duration-300 ltr:ml-[26px] ltr:xl:ml-[44px] rtl:mr-[26px] rtl:xl:mr-[44px] relative after:absolute after:transition-[.5s] after:bg-accent1 py-[8px] hover:after:w-full"
                    >
                    Contact
                    </a>
                </li>
                </ul>
            </nav>
            <DownloadButton />            
        </div>
        </>
    );
}