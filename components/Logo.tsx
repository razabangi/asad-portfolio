'use client';

import Image from 'next/image';
import logoImage from '@images/site-logo/1.png';
import darkLogoImage from '@images/site-logo/1a.png';

export default function Logo() {
  return (
    <>
      <div className="logo">
        <a href="/">
          <Image
            className="hidden dark:block"
            src={darkLogoImage}
            alt=""
            width={150}
            height={150}
          />
          <Image
            className="dark:hidden"
            src={logoImage}
            width={150}
            height={150}
            alt=""
          />
        </a>
      </div>
    </>
  );
}
