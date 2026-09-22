import React from 'react';

const skillGroups = [
  {
    title: "# programming_languages",
    color: "text-green",
    skills: [
      "Python",
      "C",
      "C#",
      "TypeScript",
      "JavaScript",
      "Dart"
    ]
  },

  {
    title: "# frameworks_libraries",
    color: "text-indigo",
    skills: [
      "React",
      "Next.js",
      "Flutter",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Node.js",
      ".NET"
    ]
  },


  {
    title: "# ai_techniques",
    color: "text-indigo",
    skills: [
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Transformers",
      "Transfer Learning",
      "CNN Architecture",
      "Feature Fusion"
    ]
  },


  {
    title: "# tools_platforms",
    color: "text-indigo",
    skills: [
      "Git",
      "Firebase",
      "HuggingFace",
      "Streamlit",
      "Vercel",
      "REST API"
    ]
  }
];


export default function Skills() {

return (

<section
className="
scroll-mt-[180px]
max-w-[1020px]
mx-auto
px-5
md:px-10
py-16
"
id="skills"
>


<div
className="
font-mono
text-[13px]
text-green
mb-2
"
>

In [4]: print(skills)

</div>



<h2
className="
font-serif
text-[34px]
font-semibold
tracking-[-0.5px]
mb-9
"
>

What I <em className="italic text-indigo">
work with.
</em>

</h2>




<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-4
"
>


{
skillGroups.map(
(group)=>(
<div
key={group.title}
className="
bg-cell
border
border-border
rounded-[10px]
p-[20px_22px]
"
>


<div
className={`
font-mono
text-[12px]
font-semibold
${group.color}
mb-3
tracking-[0.5px]
`}
>

{group.title}

</div>



<div
className="
flex
flex-wrap
gap-[7px]
"
>


{
group.skills.map(
(skill)=>(

<span
key={skill}
className="
font-mono
text-[11px]
text-muted
bg-paper
border
border-border
rounded-full
px-[11px]
py-[3px]
"
>

{skill}

</span>

)
)

}


</div>


</div>

)
)

}


</div>


</section>

);

}