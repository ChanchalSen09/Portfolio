"use client";

import { useState, useMemo } from "react";
import {
  SKILL_CATEGORIES,
  SKILLS_DATA,
  SKILL_LEVELS,
  SKILL_COLORS,
  SkillCategory,
} from "../../constent";

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("Frontend");

  // Memoized skills array for the active category
  const skills = useMemo(() => SKILLS_DATA[activeCategory], [activeCategory]);

  return (
    <section className="px-6 py-12 text-white font-spaceGrotesk" id="skills">
      <h2 className="mb-10 text-4xl font-extrabold tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
        Skills & Tech Stack
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {SKILL_CATEGORIES.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md font-semibold transition-all border ${
              activeCategory === category
                ? "bg-[#1f1f1f] border-purple-500 text-purple-400 shadow-md"
                : "bg-[#161616] border-gray-700 text-white hover:border-gray-400"
            }`}
            onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="max-w-lg mx-auto mb-10">
        <p className="text-lg font-semibold text-center text-gray-300">
          {activeCategory} Proficiency
        </p>
        <div className="w-full h-3 mt-2 overflow-hidden bg-gray-800 rounded-full">
          <div
            className={`h-3 rounded-full ${SKILL_COLORS[activeCategory]} transition-all duration-500`}
            style={{ width: `${SKILL_LEVELS[activeCategory]}%` }}
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-6 transition-opacity duration-300 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 bg-[#1a1a1a] border border-gray-800 rounded-lg flex items-center gap-4 hover:border-purple-400 hover:shadow-lg transition-all duration-200">
            <div className="text-3xl text-purple-400">
              <skill.icon />
            </div>
            <p className="font-semibold text-gray-100">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
