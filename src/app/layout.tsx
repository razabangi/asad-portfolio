// import './globals.css'
import '../../public/assets/css/mobilemenu.css';
import '../../public/assets/css/styles.css';
// import '../../public/assets/js/imagesloaded.pkgd.min.js';
// import '../../public/assets/js/isotope.pkgd.min.js';
// import '../../public/assets/js/script.js';
import { Inter, Rubik } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Muhammad Raza Bangi | Portfolio | Full Stack Developer',
  description: 'Muhammad Raza Bangi (Full Stack Developer)',
};

export const css = {
  link: 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} font-rubik dark:bg-dark_primary_bg`}>{children}</body>
    </html>
  );
}
