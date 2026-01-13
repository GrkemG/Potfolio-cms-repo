// Experience – teknisk erfarenhet & kunskaper
// Här visar du vad du kan, inte var du jobbat nödvändigtvis

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 md:px-12 bg-white"
    >
      <div className="max-w-5xl mx-auto text-center md:text-left">

        {/* Rubrik */}
        <p className="text-lg text-gray-500 uppercase tracking-wider">
          What I work with
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Experience
        </h2>

        {/* Grid med cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Frontend */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "SASS",
                "JavaScript",
                "TypeScript",
                "React",
                "Responsive Design",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-gray-200 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Backend
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express",
                "REST API",
                "MongoDB",
                "JSON",
                "Authentication",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-gray-200 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
export {};
