import React from 'react';

export default function About() {
  return (
    <section
      className="
      max-w-[1020px]
      mx-auto
      px-5
      md:px-10
      py-16
      scroll-mt-[70px]
      "
      id="about"
    >
      <div className="font-mono text-[13px] text-green mb-2">
        In [5]: about(me)
      </div>
      <h2 className="font-serif text-[34px] font-semibold tracking-[-0.5px] mb-9">
        Behind the <em className="italic text-indigo">notebook.</em>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-[34px] md:gap-[40px] items-start">
        <div className="w-full max-w-[280px] md:w-[200px] h-[240px] rounded-xl bg-[repeating-linear-gradient(45deg,var(--cell),var(--cell)_10px,#F0F2F5_10px,#F0F2F5_20px)] border border-border flex items-center justify-center text-muted font-mono text-[12px] md:-rotate-[1.5deg] shadow-[0_10px_26px_rgba(22,24,29,0.08)] mx-auto md:mx-0">
          <img src="/profile2.jpeg" alt="Kevin Reynald" className="w-full h-full object-cover" />
        </div>
        <div className="text-[15px] text-muted max-w-[600px] space-y-3.5">
          <p>
           I am a Computer Science undergraduate at BINUS University with a deep interest <b className="text-ink font-semibold">in Artificial Intelligence. </b>My focus lies in the end-to-end process of building intelligent systems—from processing complex data and training models, to wrapping them in robust software architecture.
          </p>
          <p>
            Outside of my personal projects, I <b className="text-ink font-semibold">mentor fellow students </b>in AI and core computer science subjects, while also engineering solutions as an <b className="text-ink font-semibold">Associate Programmer at BINUS University IT Division.</b>
          </p>
          <p>
            I strongly believe that a great AI model is only as good as the software infrastructure that delivers it. I am actively working towards a long-term career as an <b className="text-ink font-semibold">AI Engineer</b> or <b className="text-ink font-semibold">Software Engineer</b>, eager to continuously <b className="text-ink font-semibold">learn</b> and <b className="text-ink font-semibold">build</b> impactful technologies.
          </p>
        </div>
      </div>
    </section>
  );
}