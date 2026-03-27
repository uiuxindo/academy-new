"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./mainMenu.scss";
import MainLogo from "../../../assets/images/main-logo.svg";
import IconHome from "../../../assets/images/ic-home.svg";
import IconEdu from "../../../assets/images/ic-education.svg";
import IconMail from "../../../assets/images/ic-mail.svg";

export default function Menu() {
  const pathname = usePathname();
  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <div className="sticky-menu" data-aos="fade-down">
      <div className="container container-menu">
        <Image src={MainLogo} width={80} height={35} alt="logo" />
        <ul>
          <li>
            <Link href="/" className={isActive("/") ? "active" : ""}>
              <Image src={IconHome} width={20} height={20} alt="menu" />
              Home
            </Link>
          </li>
          <li>
            <Link href="/profile" className={isActive("/profile") ? "active" : ""}>
              <Image src={IconEdu} width={20} height={20} alt="menu" />
              Program
            </Link>
          </li>
          <li>
            <Link href="/forum" className={isActive("/forum") ? "active" : ""}>
              <Image src={IconHome} width={20} height={20} alt="menu" />
              Forum
            </Link>
          </li>
          <li>
            <Link href="/program" className={isActive("/program") ? "active" : ""}>
              <Image src={IconHome} width={20} height={20} alt="menu" />
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className={isActive("/contact") ? "active" : ""}>
              <Image src={IconMail} width={20} height={20} alt="menu" />
              Hubungi Kami
            </Link>
          </li>
        </ul>
        <button type="button" className="btn btn-main-menu">Mulai Belajar</button>
      </div>
    </div>
  )
}