import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <section className="max-w-[1020px] mx-auto px-5 md:px-10 py-16" id="contact">
        <div className="font-mono text-[13px] text-green mb-2">
          In [6]: contact(me)
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[44px] items-start">
          <div>
            <h2 className="font-serif text-[36px] font-semibold leading-[1.15] mb-3.5">
              Let's connect.
            </h2>
            <p className="text-muted text-[17px] mb-5">
              Interested in my work or want to collaborate? <br />Feel free to reach out.
            </p>
            <span className="font-mono text-[13.5px] text-indigo block mb-[18px]">kevinreynald14453@gmail.com</span>
            <div className="flex gap-[14px] font-mono text-[13px]">
              <Link href="/" target="_blank" className="text-muted hover:text-indigo transition-colors">github</Link>
              <Link href="/" target="_blank" className="text-muted hover:text-indigo transition-colors">linkedin</Link>
              <Link href="https://huggingface.co/KevinRey" target="_blank" className="text-muted hover:text-indigo transition-colors">huggingface</Link>
            </div>
          </div>

          <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-[13px] bg-cell border border-border rounded-xl p-6 shadow-[0_6px_20px_rgba(22,24,29,0.06)]">
            {/* Ganti value dengan Access Key kamu nanti */}
            <input type="hidden" name="access_key" value="e22e6969-ac29-4e93-8db0-4322e70b4b60" />
            
            <input type="text" name="name" placeholder="Your name" required className="bg-paper border border-border rounded-lg p-[12px_15px] text-ink font-sans text-[14px] outline-none transition-colors focus:border-indigo" />
            <input type="email" name="email" placeholder="Your email" required className="bg-paper border border-border rounded-lg p-[12px_15px] text-ink font-sans text-[14px] outline-none transition-colors focus:border-indigo" />
            <textarea name="message" rows={4} placeholder="Your message..." required className="bg-paper border border-border rounded-lg p-[12px_15px] text-ink font-sans text-[14px] outline-none transition-colors focus:border-indigo resize-y"></textarea>
            
            <button type="submit" className="self-start font-semibold text-[14.5px] bg-indigo text-white border-none rounded-lg px-[26px] py-[12px] cursor-pointer transition-transform hover:-translate-y-[2px]">
              Send Message →
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border p-[24px_20px] md:p-[24px_40px] flex justify-between items-center flex-wrap gap-2.5 font-mono text-[12px] text-muted bg-paper w-full">
        <span>© 2026 Kevin Reynald</span>
        <span>Bina Nusantara University</span>
      </footer>
    </>
  );
}