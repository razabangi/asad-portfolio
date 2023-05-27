'use client'

import Image from "next/image";
import logoImage from "@images/logo.png";

export default function Logo () {
    return (
        <>
        <div className="logo">
            <a href="/">
                <Image  className="hidden dark:block"
                src="/assets/images/logo-light.png"
                alt="" width={100} height={100} />
                <Image className="dark:hidden" src={logoImage} width={100} height={100} alt="" />
            </a>
        </div>
        </>
    );
}