import React from 'react';

type SkillGroup = {
  label: string;
  color: 'indigo' | 'green';
  skills: string[];
};

// Urutan diselang-seling supaya di desktop:
// Kolom kiri  (indigo): Programming Languages, AI & ML Frameworks, Techniques
// Kolom kanan (green) : Web Frameworks, Databases, Tools
const skillGroups: SkillGroup[] = [
  {
    label: 'Programming Languages',
    color: 'indigo',
    skills: ['Python', 'C', 'C#', 'SQL', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Web Frameworks',
    color: 'green',
    skills: ['React.js', 'Next.js', 'Node.js/Express', '.NET', 'Tailwind CSS'],
  },
  {
    label: 'AI & ML Frameworks',
    color: 'indigo',
    skills: ['TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'Scikit-Learn', 'Pandas', 'NumPy'],
  },
  {
    label: 'Databases',
    color: 'green',
    skills: ['SQL Server', 'PostgreSQL'],
  },
  {
    label: 'Techniques',
    color: 'indigo',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Model Deployment',
      'Prompt Engineering',
      'LLM Integration',
      'Recommender Systems',
      'REST API',
    ],
  },
  {
    label: 'Tools',
    color: 'green',
    skills: ['Git/GitHub', 'Figma', 'Azure DevOps', 'HuggingFace', 'Streamlit', 'Vercel'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-[40px] max-w-[1020px] mx-auto px-5 md:px-10 py-16"
    >
      <div className="font-mono text-[13px] text-green mb-2">
        In [3]: print(skills)
      </div>

      <h2 className="font-serif text-[34px] font-semibold tracking-[-0.5px] mb-10">
        What I <em className="italic text-indigo">work with.</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className={`flex flex-col gap-2 py-5 pl-6 pr-5 rounded-[8px] bg-paper border border-border border-l-[3px] ${
              group.color === 'indigo' ? 'border-l-indigo' : 'border-l-green'
            }`}
          >
            <h3
              className={`text-[15px] font-semibold ${
                group.color === 'indigo' ? 'text-indigo' : 'text-green'
              }`}
            >
              {group.label}
            </h3>
            <p className="text-[15px] text-muted leading-relaxed">
              {group.skills.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}