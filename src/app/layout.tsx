import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Muhammad Raza Bangi | Portfolio | Full Stack Developer',
  description: 'Muhammad Raza Bangi (Full Stack Developer)',
};

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
