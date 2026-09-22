import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  caseStudies,
  projectOrder,
} from "@/data/caseStudies";


// Sama seperti di Projects.tsx — biar badge kategori konsisten warnanya
// di kartu carousel maupun di halaman case study ini.
const badgeStyles: Record<string,string> = {

  "Deep Learning Research":
    "bg-indigo-soft text-indigo",

  "Financial NLP Research":
    "bg-purple-100 text-purple-700",

  "Generative AI Application":
    "bg-pink-100 text-pink-700",

  "Machine Learning Project":
    "bg-blue-100 text-blue-700",

  "Full-stack Web Application":
    "bg-emerald-100 text-emerald-700",

  "Mobile Application":
    "bg-orange-100 text-orange-700",

};
const defaultBadgeStyle = "bg-indigo-soft text-indigo";



export default async function CaseStudy({
  params,
}: {
  params: Promise<{
    slug:string;
  }>;
}) {

const { slug } = await params;


const project =
  caseStudies[
    slug as keyof typeof caseStudies
  ];



  if(!project){

    return(

      <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      font-mono
      "
      >

        Project Not Found

      </div>

    );

  }



  const currentIndex =
    projectOrder.indexOf(slug);



  const hasPrevious =
    currentIndex > 0;



  const hasNext =
    currentIndex < projectOrder.length - 1;



  const previousSlug =
    hasPrevious
    ?
    projectOrder[currentIndex - 1]
    :
    null;



  const nextSlug =
    hasNext
    ?
    projectOrder[currentIndex + 1]
    :
    null;


  const badgeStyle =
    badgeStyles[project.info.type] ?? defaultBadgeStyle;





  return (

<div
className="
min-h-screen
bg-paper
bg-grid
text-ink
"
>


{/* NAVBAR */}

<nav
className="
sticky
top-0
z-50
px-5
md:px-10
py-4
border-b
border-border
bg-[rgba(247,248,250,0.85)]
backdrop-blur-md
"
>


<Link
href="/#projects"
className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-lg
border
border-border
bg-cell
font-mono
text-sm
text-muted
hover:text-indigo
hover:border-indigo
hover:bg-paper
transition-colors
"
>

← Back to Projects()

</Link>


</nav>





<main
className="
max-w-[1400px]
mx-auto
px-5
md:px-16
py-16
"
>



{/* COMMAND */}

<div
className="
font-mono
text-green
text-[13px]
mb-5
"
>

In [{currentIndex + 1}]:
{" "}
load_case_study(project="{slug}")

</div>





{/* TITLE */}

<h1
className="
font-serif
text-[42px]
md:text-[50px]
font-semibold
tracking-[-1.5px]
leading-tight
mb-4
"
>

{project.title}

</h1>





{/* NAVIGATION TOP */}

<ProjectNavigation
previousSlug={previousSlug}
nextSlug={nextSlug}
/>








{/* INFORMATION CARD */}


<div
className="
bg-cell
border
border-border
rounded-xl
p-7
mb-8
shadow-sm
"
>


<div
className="
grid
grid-cols-2
md:grid-cols-5
gap-6
"
>


<Info
label="PROJECT TYPE"
value={project.info.type}
badge={badgeStyle}
/>


<Info
label="WORK MODE"
value={project.info.workMode}
/>


<Info
label="ROLE"
value={project.info.role}
/>


<Info
label="TEAM"
value={project.info.team}
/>

<Info
label="TIMELINE"
value={project.info.timeline}
/>


</div>




<div
className="
mt-7
pt-7
border-t
border-border
"
>


<p
className="
font-mono
text-xs
text-muted
mb-3
"
>

TOOLS & TECHNOLOGIES

</p>



<div
className="
flex
flex-wrap
gap-2
"
>

{
project.info.stack.map(
(tool)=>(

<span
key={tool}
className="
px-3
py-1
rounded-full
border
border-border
bg-paper
font-mono
text-xs
"
>

{tool}

</span>

)
)
}


</div>


</div>


</div>







{/* LINKS */}


<div
className="
flex
flex-wrap
gap-3
mb-6
"
>


<div
className="
flex
flex-wrap
gap-3
mb-6
"
>

{
Object.entries(project.links).map(
([key,value]) => (

<LinkButton
key={key}
text={
key === "github"
? "Github"
:
key === "paper" || key === "pdf"
?
"Download Paper"
:
key === "youtube"
? "Youtube Demo"
:
key === "website"
? "Website"
:
key === "huggingface"
? "HuggingFace"
:
key === "figma"
? "Figma"
:
key
}
url={value}
/>

)
)
}

</div>


</div>








{/* IMAGE — frame browser-chrome, samain sama kartu Projects */}


<div
className="
relative
w-full
h-[350px]
md:h-[480px]
rounded-xl
border
border-border
bg-[#f8f9fb]
p-5
md:p-6
mb-14
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
flex-col
"
>

<div
className="
h-7
flex
items-center
gap-1.5
px-3
border-b
border-[#e3e6ee]
bg-[#fafbfc]
shrink-0
"
>
<span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
<span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
<span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
</div>


<div className="relative flex-1">

<Image

src={project.image}

alt={project.title}

fill

sizes="(max-width:768px) 100vw, 1000px"

quality={90}

className="
object-contain
p-6
"

/>

</div>

</div>

</div>









{/* CONTENT */}


<TextSection
title="About The Project"
text={project.about}
/>



<ListSection
title="Key Highlights"
items={project.highlights}
/>



<ListSection
title="My Contribution"
items={project.contribution}
/>



<TextSection
title="Design Thinking & Approach"
text={project.designThinking}
/>



<TextSection
title="Technical Implementation"
text={project.implementation}
/>



<ListSection
title="Results"
items={project.results}
/>



<TextSection
title="What I Learned"
text={project.learned}
/>








{/* NAVIGATION BOTTOM */}


<div
className="
mt-16
pt-8
border-t
border-border
"
>


<ProjectNavigation
previousSlug={previousSlug}
nextSlug={nextSlug}
/>


</div>






</main>


</div>

  );

}









function ProjectNavigation({

previousSlug,

nextSlug

}:{

previousSlug:string|null;

nextSlug:string|null;

}){


return(

<div
className="
flex
justify-between
items-center
mb-10
"
>



{

previousSlug
?
<Link

href={`/projects/${previousSlug}`}

className="
px-4
py-2
rounded-lg
border
border-border
bg-cell
font-mono
text-sm
hover:text-indigo
hover:border-indigo
hover:bg-paper
transition-colors
"

>

← Previous

</Link>

:

<div />

}






<span
className="
hidden
md:block
font-mono
text-xs
text-muted
"
>

Project Navigation

</span>






{

nextSlug

?

<Link

href={`/projects/${nextSlug}`}

className="
px-4
py-2
rounded-lg
border
border-border
bg-cell
font-mono
text-sm
hover:text-indigo
hover:border-indigo
hover:bg-paper
transition-colors
"

>

Next →

</Link>

:

<div />

}



</div>

)

}









function Info({

label,

value,

badge

}:{

label:string;

value:string;

badge?:string;

}){


return(

<div>

<p
className="
font-mono
text-xs
text-muted
mb-2
"
>

{label}

</p>


{

badge

?

<span
className={`
inline-block
w-fit
font-mono
text-xs
px-3
py-1
rounded-full
${badge}
`}
>

{value}

</span>

:

<p
className="
font-semibold
text-sm
text-ink
"
>

{value}

</p>

}


</div>

)

}









function LinkButton({

text,

url

}:{

text:string;

url:string;

}){


return(

<Link

href={url}

target={
url.startsWith("http")
?
"_blank"
:
"_self"
}

download={
text.includes("Paper")
?
true
:
undefined
}

className="
px-5
py-2.5
rounded-lg
border
border-border
bg-cell
font-mono
text-sm
hover:text-indigo
hover:border-indigo
hover:bg-paper
hover:-translate-y-[1px]
transition-all
duration-200
"

>

{text} ↗

</Link>

)

}









function TextSection({

title,

text

}:{

title:string;

text:string;

}){


return(

<section
className="
bg-cell
border
border-border
rounded-xl
p-6
md:p-8
mb-6
"
>


<h2
className="
font-serif
text-[30px]
md:text-[34px]
font-semibold
mb-1
"
>

{title}

</h2>



<p
className="
w-full
text-muted
text-[18px]
leading-[1.7]
whitespace-pre-line
tracking-normal
"
>

{text}

</p>


</section>

)

}








function ListSection({

title,

items

}:{

title:string;

items:string[];

}){


return(

<section
className="
bg-cell
border
border-border
rounded-xl
p-8
md:p-10
mb-8
"
>



<h2
className="
font-serif
text-[30px]
md:text-[34px]
font-semibold
mb-8
"
>

{title}

</h2>




<div
className="
grid
grid-cols-1
md:grid-cols-2
gap-5
"
>


{

items.map(

(item)=>(


<div

key={item}

className="
border
border-border
rounded-lg
p-5
bg-paper
transition-colors
hover:border-indigo
"

>


<div
className="
flex
gap-3
text-muted
leading-relaxed
text-[15px]
"
>


<span
className="
text-indigo
font-bold
"
>

✓

</span>


<p>

{item}

</p>


</div>


</div>



)

)

}


</div>



</section>

)

}