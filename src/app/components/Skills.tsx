'use client';
import { useFeatherIcons } from '@/hooks/useFeatherIcons';

export default function Skills() {
  useFeatherIcons();

  const skillCategories = [
    {
      icon: "code",
      title: "Languages",
      skills: ["Python", "JavaScript", "C++", "Java", "PHP"]
    },
    {
      icon: "globe",
      title: "Web",
      skills: ["React", "Nextjs", "Node.js", "Express", "Tailwind CSS", "MongoDB", "PostgreSQL", "MySQL", "Oracle DB"]
    },
    {
      icon: "smartphone",
      title: "Mobile",
      skills: ["Flutter", "Firebase"]
    },
    {
      icon: "cpu",
      title: "Hardware",
      skills: ["Arduino", "Esp32"]
    },
    {
      icon: "tool",
      title: "Tools",
      skills: ["Git", "Docker", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="relative z-10 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <i data-feather={category.icon} className="mr-2 text-indigo-600"></i> 
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="skill-pill inline-block px-3 py-2 bg-gray-100 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}