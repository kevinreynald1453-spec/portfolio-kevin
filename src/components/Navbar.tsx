"use client";
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-10 py-3.5 md:py-[15px] bg-[rgba(247,248,250,0.9)] backdrop-blur-md border-b border-border">
      {/* Logo */}
      <span className="font-mono font-semibold text-[15px] text-ink">
        kevin<span className="text-indigo">.reynald</span>
      </span>

      {/* Nav Links (Desktop Only) */}
      <div className="hidden md:flex gap-[26px] text-[13.5px] text-muted">
        <Link href="#projects" className="transition-colors hover:text-ink">Projects</Link>
        <Link href="#skills" className="transition-colors hover:text-ink">Skills</Link>
        <Link href="#experience" className="transition-colors hover:text-ink">Experience</Link>
        <Link href="#about" className="transition-colors hover:text-ink">About</Link>
        <Link href="#contact" className="transition-colors hover:text-ink">Contact</Link>
      </div>

      {/* CV Button */}
      <a 
        href="/CV_KEVIN REYNALD.pdf" 
        download="CV_Kevin_Reynald.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[12.5px] font-medium text-white bg-ink border-none rounded-md px-4 py-2 cursor-pointer transition-colors hover:bg-indigo inline-block text-center no-underline"
      >
        Download CV
      </a>
    </nav>
  );
}