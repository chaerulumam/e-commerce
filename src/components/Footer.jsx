import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        2023 Jam Store - This is a fake website to train web development skills
      </p>
      <p className="icons">
        <Link href="https://www.instagram.com/chaerulumamn/">
          <AiFillInstagram />
        </Link>
        <Link href="https://www.linkedin.com/in/chaerulumamli/">
          <AiFillLinkedin />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
