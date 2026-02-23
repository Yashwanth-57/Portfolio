import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaNodeJs,
  FaReact,
  FaDocker,
  FaAws,
  FaJava,
  FaGitAlt
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiRabbitmq
} from "react-icons/si";

// Pass a prop `onSkillClick` to notify parent component
export default function Skills({ onSkillClick }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { icon: <FaJava size={40} />, name: "Java" },
    { icon: <SiJavascript size={40} />, name: "JavaScript" },
    { icon: <FaNodeJs size={40} />, name: "Node.js" },
    { icon: <FaReact size={40} />, name: "React" },
    { icon: <SiTypescript size={40} />, name: "TypeScript" },
    { icon: <SiMongodb size={40} />, name: "MongoDB" },
    { icon: <SiMysql size={40} />, name: "MySQL" },
    { icon: <SiRedis size={40} />, name: "Redis" },
    { icon: <FaDocker size={40} />, name: "Docker" },
    { icon: <FaAws size={40} />, name: "AWS EC2" },
    { icon: <SiRabbitmq size={40} />, name: "RabbitMQ" },
    { icon: <FaGitAlt size={40} />, name: "Git" }
  ];

  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Technical Arsenal
        </motion.h2>

        <div className="relative flex justify-center items-center flex-wrap gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-purple-400 cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => onSkillClick(skill.name)} // notify parent
              whileHover={{ scale: 1.3, color: "#F472B6" }}
            >
              {skill.icon}
              <span className="text-xs mt-2 text-gray-400">{skill.name}</span>

              {/* Tooltip */}
              {hoveredSkill === skill.name && (
                <motion.div
                  className="absolute top-[-50px] w-max max-w-[180px] bg-black/80 text-white text-xs p-2 rounded shadow-lg z-50 pointer-events-none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Expertise in {skill.name}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
