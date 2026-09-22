import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        w-full 
        max-w-[1200px] 
        mx-auto 
        px-5 
        md:px-10 
        pt-[50px] 
        pb-20 
        min-h-[calc(100vh-80px)]
        flex 
        flex-col 
        justify-center 
        items-center 
        text-center
      "
    >

      <div
        className="
          font-mono 
          text-[13px] 
          md:text-[14px] 
          text-green 
          mb-8 
          px-5 
          py-2 
          rounded-full 
          border 
          border-border 
          bg-cell 
          shadow-sm
        "
      >
        In [1]: introduce(self)
      </div>


      {/* Main Heading */}
      <h1
        className="
          font-serif 
          text-[clamp(38px,5.5vw,68px)]
          font-semibold 
          leading-[1.05]
          tracking-[-1.5px]
          mb-7
          text-ink
          w-full
          max-w-[900px]
        "
      >
        I train models —
        <br />
        then I{" "}
        <em className="italic text-indigo">
          ship them.
        </em>
      </h1>


      {/* Description */}
      <p
        className="
          text-[16px]
          md:text-[19px]
          text-muted
          mb-5
          max-w-[780px]
          leading-relaxed
        "
      >
        <b className="text-ink font-semibold">
          Turning intelligent systems into real-world software.
        </b>{" "}
        Computer Science student specializing in Intelligent Systems.
        I build AI models, develop applications, and bridge the gap
        between research and production.
      </p>


      {/* Identity */}
      <p
        className="
          text-[14px]
          md:text-[15px]
          text-muted
          mb-10
          max-w-[700px]
        "
      >
        Kevin Reynald · Computer Science Student at BINUS University
      </p>


      {/* CTA Buttons */}
      <div
        className="
          flex 
          flex-wrap 
          gap-4 
          justify-center 
          items-center 
          mb-12
          w-full
        "
      >

        <Link
          href="#projects"
          className="
            font-semibold
            text-[14.5px]
            md:text-[15px]
            bg-indigo
            text-white
            rounded-lg
            px-[32px]
            py-[14px]
            transition-all
            duration-150
            hover:-translate-y-[2px]
            hover:shadow-[0_8px_20px_rgba(15,118,110,0.3)]
          "
        >
          View Projects
        </Link>


        <Link
          href="#contact"
          className="
            font-medium
            text-[14.5px]
            md:text-[15px]
            bg-cell
            text-ink
            border
            border-border
            rounded-lg
            px-[32px]
            py-[14px]
            transition-all
            duration-200
            hover:border-ink
            hover:bg-paper
          "
        >
          Get in Touch
        </Link>

      </div>



      {/* Social Links */}
      <div
        className="
          flex 
          flex-wrap 
          justify-center 
          gap-8 
          md:gap-14
          text-muted
          font-mono
          text-[13.5px]
        "
      >

        {/* Github */}
        <Link
          href="https://github.com/KevinReynald029"
          target="_blank"
          className="
            flex 
            items-center 
            gap-2
            transition-colors
            hover:text-indigo
          "
        >

          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
          </svg>

          github

        </Link>



        {/* Linkedin */}
        <Link
          href="https://www.linkedin.com/in/kevin-reynald-242286327/"
          target="_blank"
          className="
            flex
            items-center
            gap-2
            transition-colors
            hover:text-indigo
          "
        >

          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
          </svg>

          linkedin

        </Link>



        {/* Email */}
        <Link
          href="mailto:kevinreynald1453@gmail.com"
          className="
            flex
            items-center
            gap-2
            transition-colors
            hover:text-indigo
          "
        >

          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>

          email

        </Link>

      </div>


    </section>
  );
}