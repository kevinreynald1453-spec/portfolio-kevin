"use client";
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <main>
      <div className="reveal"><Hero /></div>
      <div className="reveal"><Projects /></div>
      <div className="reveal"><Skills /></div>
      <div className="reveal"><Experience /></div>
      <div className="reveal"><About /></div>
      <div className="reveal"><Contact /></div>
    </main>
  );
}