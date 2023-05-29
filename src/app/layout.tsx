import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Muhammad Raza Bangi | Full Stack Developer',
  description: `Welcome to the world of Muhammad Raza Bangi, a seasoned senior software engineer with a passion for crafting exceptional web experiences. With three years of valuable industry expertise, I bring a wealth of knowledge in web development, specializing in top-notch technologies such as PHP, Laravel, Next.js, Nuxt.js, MySQL, PostgreSQL, MongoDB, HTML5, CSS3, React.js, and Vue.js. As you explore my website, prepare to embark on a journey of innovation and seamless digital solutions. Whether you're looking to build dynamic web applications, streamline database management, or create captivating user interfaces, my deep understanding and mastery of these cutting-edge technologies ensure that your projects will soar to new heights. With a meticulous attention to detail and a commitment to excellence, I have honed my skills to deliver bespoke solutions tailored to your unique requirements. Leveraging the power of PHP and Laravel, I create robust and scalable back-end systems that fuel your web applications with unmatched functionality and performance. Meanwhile, my expertise in front-end frameworks like Next.js, Nuxt.js, React.js, and Vue.js empowers me to build stunning user interfaces that captivate your audience. Beyond the code, I thrive on collaboration and effective communication, ensuring that your vision is brought to life seamlessly. Whether you're a startup seeking to establish your digital presence or an established enterprise looking to level up your web solutions, I'm here to turn your ideas into reality. Let's join forces and unleash the true potential of your web projects. Contact me today to embark on a transformative journey of web development excellence, where innovation meets impeccable craftsmanship.`,
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
