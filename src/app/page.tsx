'use client';

import '../../public/assets/css/mobilemenu.css';
import '../../public/assets/css/styles.css';
import AboutMe from '@components/AboutMe';
import BackToTop from '@components/BackToTop';
import Blog from '@components/Blog';
import CompanyLogo from '@components/CompanyLogo';
import Contact from '@components/Contact';
import DarkModeButton from '@components/DarkModeButton';
import EducationExperience from '@components/EducationExperience';
import Footer from '@components/Footer';
import Header from '@components/Header';
import HeroSection from '@components/HeroSection';
import Loader from '@components/Loader';
import ProjectShowcase from '@components/ProjectShowcase';
import ServiceSection from '@components/ServiceSection';
import Skill from '@components/Skill';

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
