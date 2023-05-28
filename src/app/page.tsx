'use client';

import '../../public/assets/css/mobilemenu.css';
import '../../public/assets/css/styles.css';
import dynamic from 'next/dynamic';

const Skill = dynamic(() => import('../../components/Skill'), {
  ssr: false
});
const Loader = dynamic(() => import('../../components/Loader'), {
  ssr: false
});
const ProjectShowcase = dynamic(() => import('../../components/ProjectShowcase'), {
  ssr: false
});
const ServiceSection = dynamic(() => import('../../components/ServiceSection'), {
  ssr: false
});
const AboutMe = dynamic(() => import('../../components/AboutMe'), {
  ssr: false
});
const BackToTop = dynamic(() => import('../../components/BackToTop'), {
  ssr: false
});
const Blog = dynamic(() => import('../../components/Blog'), {
  ssr: false
});
const Contact = dynamic(() => import('../../components/Contact'), {
  ssr: false
});
const DarkModeButton = dynamic(() => import('../../components/DarkModeButton'), {
  ssr: false
});
const EducationExperience = dynamic(() => import('../../components/EducationExperience'), {
  ssr: false
});
const Footer = dynamic(() => import('../../components/Footer'), {
  ssr: false
});
const Header = dynamic(() => import('../../components/Header'), {
  ssr: false
});
const HeroSection = dynamic(() => import('../../components/HeroSection'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <Loader />
      <DarkModeButton />
      <Header />
      <main>
        <HeroSection />
        <ServiceSection />
        <AboutMe />
        {/* <CompanyLogo /> */}
        <EducationExperience />
        <Skill />
        <ProjectShowcase />
        <Contact />
        <Blog />
      </main>
    <Footer />
    <BackToTop />
    </>
  );
}
