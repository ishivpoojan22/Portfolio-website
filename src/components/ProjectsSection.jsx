import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My Projects
          </h2>

          <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted
            to solve real-world problems and showcase different aspects of my
            technical skills. These projects reflect my hands-on experience in
            solving real-world problems and building a strong technical
            foundation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/ishivpoojan22?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-md transition-colors"
            >
              See More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
