"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";


// Variasi warna badge per kategori — biar tidak semua kartu warnanya sama (indigo semua)
const badgeStyles: Record<string,string> = {

"Deep Learning Research (ICORIS)":
"bg-indigo-soft text-indigo",

"Natural Language Processing":
"bg-purple-100 text-purple-700",

"Full-stack Development":
"bg-emerald-100 text-emerald-700",

"Generative AI":
"bg-pink-100 text-pink-700",

"Machine Learning":
"bg-blue-100 text-blue-700",

"Frontend Development":
"bg-orange-100 text-orange-700",

};
const defaultBadgeStyle = "bg-indigo-soft text-indigo";


const projects = [
  {
    id: "fruit_freshness()",
    title: "Fruit Freshness Classification",
    badge: "Deep Learning Research (ICORIS)",
    desc:
      "Engineered a custom 'MobileNetV2-Fusion' architecture with dual-level feature fusion to classify fruit freshness, capturing mid-level textures for high-accuracy predictions.",
    metrics: [
        { value: "99.19%", label: "test accuracy" },
        { value: "11.02ms", label: "latency (90 FPS)" },
        { value: "2.65M", label: "parameters" }
      ],
    tags: [
      "Python",
      "TensorFlow/Keras",
      "MobileNetV2",
      "EfficientNetB0",
      "VGG16",
      "MobileViT-XS",
      "Computer Vision",
    ],
    image: "/RM.png",
    frame: "browser" as const,
    links: [
      {
        text: "Read Case Study →",
        url: "/projects/fruit-freshness",
      },
      {
        text: "Paper",
        url: "/Paper.pdf",
      },
      {
        text: "Youtube Trailer ↗",
        url: "https://youtu.be/UYeDFE8JX98?si=VkDlCgjtgAq5ZJkC",
      },
    ],
  },


  {
    id: "sentiment_analysis()",
    title: "Financial News Sentiment Analysis",
    badge: "Natural Language Processing",
    desc:
      "A natural language processing project that analyzes Indonesian financial news sentiment by comparing classical machine learning approaches with transformer-based models.",
    metrics: [
        { value: "0.882", label: "macro F1" },
        { value: "4", label: "models evaluated" }
    ],
    tags: [
      "Python",
      "Scikit-learn",
      "Sastrawi",
      "IndoDistilBERT",
      "SVM",
      "Random Forest",
      "Transformers",
      "NLP",
    ],
    image: "/nlp.png",
    frame: "browser" as const,
    links: [
      {
        text: "Read Case Study →",
        url: "/projects/financial-sentiment",
      },
      {
        text: "Website ↗",
        url: "https://analysis-sentimen-ekonomi.streamlit.app/",
      },
      {
        text: "Github ↗",
        url: "https://github.com/KevinReynald029/Project-NLP",
      },
      {
        text: "HuggingFace ↗",
        url: "https://huggingface.co/KevinRey",
      },
    ],
  },


  {
    id: "nusatrip()",
    title: "NusaTrip",
    badge: "Full-stack Development",
    desc:
      "A full-stack travel planning platform that enables users to explore destinations, create personalized itineraries, organize travel schedules, and manage structured trip data through an integrated system.",
    metrics: [
      {
        value: "Full-stack",
        label: "web application",
      },
      {
        value: "REST API",
        label: "backend architecture",
      },
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    image: "/nusatrip.png",
    frame: "browser" as const,
    links: [
      {
        text: "Read Case Study →",
        url: "/projects/nusatrip",
      },
      {
        text: "Website ↗",
        url: "https://nusatrip-fe.vercel.app/",
      },
      {
        text: "Github ↗",
        url: "https://github.com/orgs/NusaTrip-Application/repositories",
      },
    ],
  },


  {
    id: "gymbot()",
    title: "GymBot AI",
    badge: "Generative AI",
    desc:
      "An AI-powered fitness assistant that provides personalized workout and nutrition guidance by combining user fitness profiles with Gemini AI capabilities. The application integrates AI chatbot interactions, fitness tracking tools, and structured health data to deliver adaptive recommendations for users.",
    metrics: [
      {
        value: "Gemini",
        label: "AI model integration",
      },
      {
        value: "Full-stack",
        label: "AI web application",
      },
    ],
    tags: [
      "Node.js",
      "Express.js",
      "Gemini API",
      "JavaScript",
      "REST API",
    ],
    image: "/gymbot.png",
    frame: "browser" as const,
    links: [
      {
        text: "Read Case Study →",
        url: "/projects/gymbot",
      },
      {
        text: "Github ↗",
        url: "https://github.com/KevinReynald029/Project-AI-GYMBOT",
      },
      {
        text: "Youtube Demo ↗",
        url: "https://youtu.be/BPZwednic1k?si=3zQPIUPYJSzo-gsg",
      },
    ],
  },


  {
    id: "mind_sense()",
    title: "MindSense AI",
    badge: "Machine Learning",
    desc:
      "An AI-powered student stress prediction system that analyzes behavioral and academic factors using machine learning classification models, with interactive prediction through a Streamlit application.",
    metrics: [
      {
        value: "98.8%",
        label: "best accuracy",
      },
      {
        value: "4",
        label: "ML models evaluated",
      },
    ],
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
      "Machine Learning",
    ],
    image: "/mindsense.png",
    frame: "browser" as const,
    links: [
      {
        text: "Read Case Study →",
        url: "/projects/mind-sense",
      },
      {
        text: "Website ↗",
        url: "https://mind-sense-ai.streamlit.app/",
      },
      {
        text: "Github ↗",
        url: "https://github.com/stwllabs/ML-Project",
      },
    ],
  },


  {
    id: "mr_coffee()",

    title: "Mr. Coffee",

    badge: "Frontend Development",

    desc:
      "A responsive coffee shop website that delivers an interactive customer experience through product catalogs, menu filtering, reward features, and a dynamic ordering system.",

    metrics: [
      {
        value: "5+",
        label: "interactive pages",
      },
      {
        value: "Responsive",
        label: "web design",
      },
    ],

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend Development",
    ],

    image: "/mr.coffee.png",

    frame: "browser" as const,

    links: [
      {
        text: "Read Case Study →",
        url: "/projects/mr-coffee",
      },
      {
        text: "Figma ↗",
        url: "https://www.figma.com/design/HrSHp8YMAtO8IJB4yy87kr/Mr.Coffee?node-id=0-1&t=l8vfenr2YB5hMGwj-1",
      },
      {
        text: "Github ↗",
        url: "https://github.com/KevinReynald029/Project-Mr.Coffee",
      },
    ],
  },
];


export default function Projects() {

  const scrollRef = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);

  const isDown = useRef(false);

  const startX = useRef(0);

  const scrollLeft = useRef(0);

  const moved = useRef(false);


  const moveSlider = (
    direction:"left"|"right"
    )=>{

    if(!scrollRef.current)
    return;


    const cardWidth =
    scrollRef.current.clientWidth * 0.9;


    scrollRef.current.scrollBy({

    left:
    direction==="left"
    ?
    -cardWidth
    :
    cardWidth,

    behavior:"smooth"

    });


  };


  const mouseDown = (
    e: React.MouseEvent
    )=>{

    if(!scrollRef.current)
    return;


    isDown.current = true;

    moved.current = false;

    setDragging(true);


    startX.current =
    e.pageX - scrollRef.current.offsetLeft;


    scrollLeft.current =
    scrollRef.current.scrollLeft;


    };



  const mouseMove = (
    e: React.MouseEvent
    )=>{


    if(
    !isDown.current ||
    !scrollRef.current
    )
    return;


    e.preventDefault();



    const x =
    e.pageX - scrollRef.current.offsetLeft;


    const distance =
    x - startX.current;



    if(Math.abs(distance) > 5){

    moved.current = true;

  }



    scrollRef.current.scrollLeft =
    scrollLeft.current - distance * 1.5;



    };



  const stopDrag = ()=>{


    isDown.current = false;

    setDragging(false);


  };


  return (

    <section
      id="projects"
      className="
        scroll-mt-5
        max-w-[1020px]
        mx-auto
        px-5
        md:px-10
        py-16 
      "
    >


      {/* HEADER */}

      <div className="flex justify-between items-end mb-8">


        <div>

          <div
            className="
              font-mono
              text-green
              text-[13px]
              mb-2
            "
          >
            In [2]: load_projects()
          </div>


          <h2
            className="
              font-serif
              text-[38px]
              font-semibold
            "
          >
            Featured{" "}
            <em className="italic text-indigo">
              Projects.
            </em>
          </h2>


          <p
            className="
              font-mono
              text-muted
              text-sm
              mt-2
            "
          >
            A collection of AI systems and software projects.
          </p>


        </div>



        <div className="flex gap-3">


          <button
            onClick={() => moveSlider("left")}
            className="
              w-10
              h-10
              border
              border-border
              rounded-lg
              bg-cell
              hover:bg-paper
              hover:border-indigo
              transition-colors
              cursor-pointer
            "
            aria-label="Previous"
          >
            ←
          </button>


          <button
            onClick={() => moveSlider("right")}
            className="
              w-10
              h-10
              border
              border-border
              rounded-lg
              bg-cell
              hover:bg-paper
              hover:border-indigo
              transition-colors
              cursor-pointer
            "
            aria-label="Next"
          >
            →
          </button>


        </div>


      </div>





      {/* PROJECT CAROUSEL */}

      <div
        ref={scrollRef}
        onMouseDown={mouseDown}
        onMouseMove={mouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        className={`
        flex
        gap-5
        overflow-x-auto
        snap-x
        snap-mandatory
        scroll-smooth
        overscroll-x-contain
        touch-pan-x
        pb-5
        pr-6
        md:pr-[240px]
        [&::-webkit-scrollbar]:hidden

        ${dragging 
        ? 
        "cursor-grabbing"
        :
        "cursor-grab"
        }
        `}
      >


        {
          projects.map((project, index) => (

            <div
              key={index}
              className="
                snap-start
                flex-shrink-0
                w-[92vw]
                md:w-[820px]
                bg-cell
                border
                border-border
                rounded-xl
                overflow-hidden
                grid
                md:grid-cols-2
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                select-none
              "
            >



              {/* LEFT CONTENT */}

              <div
                className="
                  p-6
                  flex
                  flex-col
                  h-full
                "
              >


                <div
                  className="
                    font-mono
                    text-green
                    text-sm
                    mb-2
                  "
                >
                  Out[{index + 1}]: {project.id}
                </div>



                <h3
                  className="
                    font-serif
                    text-xl
                    font-semibold
                    mb-3
                  "
                >
                  {project.title}
                </h3>



                <span
                  className={`
                    w-fit
                    font-mono
                    text-xs
                    px-3
                    py-1
                    rounded-full
                    mb-4
                    ${badgeStyles[project.badge] ?? defaultBadgeStyle}
                  `}
                >
                  {project.badge}
                </span>



                <p
                  className="
                    text-muted
                    leading-relaxed
                    text-[13px]
                    mb-5
                  "
                >
                  {project.desc}
                </p>




                {/* METRICS */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                    mb-5
                  "
                >

                  {
                    project.metrics.map((metric, i) => (

                      <div
                        key={i}
                        className="
                          border
                          border-border
                          bg-paper
                          rounded-lg
                          px-4
                          py-2
                        "
                      >

                        <div
                          className="
                            font-mono
                            text-indigo
                            font-semibold
                          "
                        >
                          {metric.value}
                        </div>


                        <div
                          className="
                            text-xs
                            text-muted
                          "
                        >
                          {metric.label}
                        </div>


                      </div>

                    ))
                  }

                </div>





                {/* TAGS */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mb-6
                  "
                >

                  {
                    project.tags.map((tag, i) => (

                      <span
                        key={i}
                        className="
                          font-mono
                          text-xs
                          border
                          border-border
                          rounded-full
                          px-3
                          py-1
                        "
                      >
                        {tag}
                      </span>

                    ))
                  }

                </div>





                {/* LINKS — didorong ke bawah (mt-auto) supaya sejajar
                    dengan bawahnya frame gambar di kolom sebelah, bukan
                    ngambang di tengah dengan sisa ruang kosong di bawahnya */}

                <div
                  className="
                  flex
                  flex-wrap
                  items-center
                  gap-x-5
                  gap-y-2
                  mt-auto
                  pt-2
                  whitespace-nowrap
                  "
                >

                  {
                    project.links.map((link, i) => (

                      <Link
                        key={i}
                        href={link.url}
                        target={
                          link.url.startsWith("http")
                            ? "_blank"
                            : "_self"
                        }
                        download={
                          link.text.includes("Paper")
                            ? true
                            : undefined
                        }
                        className={`
                          inline-flex
                          items-center
                          gap-1
                          whitespace-nowrap
                          font-semibold
                          text-sm
                          ${
                            i === 0
                              ? "text-indigo"
                              : "text-muted"
                          }
                          hover:underline
                        `}
                      >
                        {link.text}
                      </Link>

                    ))
                  }

                </div>


              </div>







              {/* RIGHT IMAGE FRAME — tanpa tinggi tetap, otomatis
                  mengikuti tinggi kolom teks di sebelahnya (grid row) */}

              {/* RIGHT IMAGE FRAME */}

              <Link
                href={project.links[0].url}

                onClick={(e)=>{

                if(moved.current){

                e.preventDefault();

                }

                }}
                className="
                relative
                bg-[#f8f9fb]
                border-t
                md:border-t-0
                md:border-l
                border-border
                flex
                items-center
                justify-center
                p-4
                md:p-5
                min-h-[230px]
                cursor-pointer
                group
                hover:border-indigo
                transition-all
                duration-300
                "
                >


                <div
                className="
                relative
                w-full
                h-full
                rounded-lg
                border
                border-[#e3e6ee]
                bg-white
                shadow-[0_4px_14px_rgba(0,0,0,0.05)]
                overflow-hidden
                flex
                items-center
                justify-center
                "
                >


                <Image

                src={project.image}

                alt={project.title}

                fill

                sizes="
                (max-width:768px) 100vw,
                500px
                "

                quality={90}

                className="
                object-contain
                p-4
                transition-transform
                duration-300
                group-hover:scale-[1.03]
                "

              />


              </div>


              </Link>
            </div>
          ))
        }


      </div>


    </section>

  );

}