import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

type SkillCategory = "Languages" | "Frameworks" | "Libraries" | "Tools & DevOps" | "Version Control" | "Others";

type Skill = {
  name: string;
  icon: string;
};

const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" },
  ],
  "Frameworks": [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  ],
  "Libraries": [
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "NgRx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrx/ngrx-original.svg" },
    { name: "RxJs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg" },
  ],
  "Tools & DevOps": [
    { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg" },
    { name: "Npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" },
    { name: "Confluence", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-plain-wordmark.svg" },
  ],
  "Version Control": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg" },
    { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg" },
  ],
  "Others": [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
    { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
    { name: "Wordpress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
  ],
};

export default function MacbookTerminal() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Languages");
  const skillsIconsRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.fromTo(
        skillsIconsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, [activeTab]);

  return (
    <div className="w-full h-full max-h-1/2 max-w-5xl bg-gray-900 text-white rounded-lg shadow-lg p-4">


<div className="flex flex-wrap md:flex-nowrap justify-around bg-gray-700 p-2 rounded-t-md glass font-orbitron">
  {Object.keys(skills).map((category) => (
    <button
      key={category}
      className={`px-2 py-2 text-sm font-medium transition-colors w-full md:w-auto text-center ${
        activeTab === category ? "text-white border-b-2 border-blue-400" : "text-gray-400 hover:text-white"
      }`}
      onClick={() => setActiveTab(category as SkillCategory)} 
    >
      {category}
    </button>
  ))}
</div>

<div className="p-6 h-auto md:h-64 flex justify-around justify-center gap-4 text-center items-center icon-container" ref={skillsIconsRef}>
  {skills[activeTab].map((skill) => (
    <div key={skill.name} className="flex flex-col items-center w-1/3 md:w-auto">
      <Image src={skill.icon} alt={skill.name} width={40} height={40} className="w-10 md:w-12"/>
      <p className="mt-2 text-xs md:text-md font-orbitron">{skill.name}</p>
    </div>
  ))}
</div>
    </div>
  );
}
