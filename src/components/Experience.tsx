import React from 'react';

export default function Experience() {
  return (
    <section
      className="
      max-w-[1020px]
      mx-auto
      px-5
      md:px-10
      py-16
      scroll-mt-[60px]
      "
      id="experience"
    >
      <div className="font-mono text-[13px] text-green mb-2">
        In [5]: load_history()
      </div>
      <h2 className="font-serif text-[34px] font-semibold tracking-[-0.5px] mb-9">
        Experience &amp; <em className="italic text-indigo">education.</em>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-[36px]">
        <div>
          <div className="font-mono text-[12.5px] font-semibold tracking-[1px] text-muted uppercase mb-4">// experience</div>
          
          <div className="bg-cell border border-border rounded-[10px] p-[22px_24px] mb-4 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(22,24,29,0.07)]">
            <span className="font-mono text-[11.5px] text-green mb-1.5 block">Mar 2026 — present</span>
            <b className="text-[16px] font-semibold block">Associate Member Programmer</b>
            <span className="text-[13.5px] text-indigo font-medium mb-2.5 block">IT Division, BINUS University</span>
            <ul className="list-disc ml-[18px] text-[13.5px] text-muted space-y-1">
              <li>Engineered responsive frontend architectures for the university's core academic platform, directly optimizing the digital workflow for faculty members.</li>
              <li>Shipped high-performance, user-centric web pages utilizing TypeScript &amp; React.</li>
              <li>Collaborated closely with backend engineers to integrate seamless UI components with robust C# / .NET microservices.</li>
            </ul>
          </div>

          <div className="bg-cell border border-border rounded-[10px] p-[22px_24px] mb-4 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(22,24,29,0.07)]">
            <span className="font-mono text-[11.5px] text-green mb-1.5 block">Feb 2026 — Jul 2026</span>
            <b className="text-[16px] font-semibold block">Student Mentor</b>
            <span className="text-[13.5px] text-indigo font-medium mb-2.5 block">SASC, BINUS University</span>
            <ul className="list-disc ml-[18px] text-[13.5px] text-muted space-y-1">
              <li>Mentored a cohort of 9 undergraduate students in core Artificial Intelligence &amp; core CS courses.</li>
              <li>Designed personalized learning strategies tailored to each mentee's technical background and academic goals.</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="font-mono text-[12.5px] font-semibold tracking-[1px] text-muted uppercase mb-4">// education</div>
          
          <div className="bg-cell border border-border rounded-[10px] p-[22px_24px] mb-4 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(22,24,29,0.07)]">
            <span className="font-mono text-[11.5px] text-green mb-1.5 block">2023 — 2027 (expected)</span>
            <b className="text-[16px] font-semibold block">BINUS University</b>
            <span className="text-[13.5px] text-indigo font-medium mb-2.5 block">B.Sc. Computer Science</span>
            <p className="text-[13.5px] text-muted">Streaming: Artificial Intelligence stream.</p>
            <p className="text-[13.5px] text-muted">Curent GPA: 3.69</p>
          </div>

          <div className="bg-cell border border-border rounded-[10px] p-[22px_24px] mb-4 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(22,24,29,0.07)]">
            <span className="font-mono text-[11.5px] text-green mb-1.5 block">2020 — 2023</span>
            <b className="text-[16px] font-semibold block">SMA Negeri 1 TanjungPandan</b>
            <p className="text-[13.5px] text-muted">Science / MIPA</p>
          </div>
        </div>
      </div>
    </section>
  );
} 