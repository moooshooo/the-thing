import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center p-10 items-center">
      <p className="text-sm">
        Filmprojekt | Kurs 2 - Ramverk & Komponentbaserad utveckling{" "}
      </p>
      <p className="text-sm">Alexander & M. Leon </p>
      <a
        href="https://github.com/moooshooo/the-thing/"
        target="_blank"
        className="text-sm cursor-pointer"
      >
        GitHub
      </a>
      <p className="text-sm">Copy it's your right! 2026©</p>
    </footer>
  );
};
export default Footer;
