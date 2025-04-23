import React from "react";
import shiv4 from "../photos/shiv4.jpg";

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
            <div className="w-full md:w-1/3">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-white dark:border-gray-700 shadow-lg">
                <img
                  src={shiv4}
                  alt="Shiv Poojan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I'm an enthusiastic Full Stack Developer eager to build modern
                web applications. I have a strong foundation in JavaScript
                technologies like React, Node.js, Express, and MongoDB, and I'm
                passionate about learning and growing in real-world development
                environments.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                I am currently pursuing my Bachelor's degree in Computer Science
                at ABES Engineering College, where I began my journey in
                programming and software development. Through academic projects
                and hands-on learning, I have been building practical skills in
                developing efficient and user-friendly web applications.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me hiking, reading tech blogs,
                or contributing to open-source projects. I'm constantly learning
                and exploring new technologies to stay ahead in this
                ever-evolving field.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Resume
              </h3>
              {/* <p className="text-gray-700 dark:text-gray-300">Download</p> */}
              <a href="https://drive.google.com/file/d/1bJDBefdSaLVuJPHKSg3NguaLBsRsdJ4m/view?usp=drive_link">
                Download
              </a>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Projects
              </h3>
              <p className="text-gray-700 dark:text-gray-300">15+ Completed</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Certifications
              </h3>
              <p className="text-gray-700 dark:text-gray-300">8+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
