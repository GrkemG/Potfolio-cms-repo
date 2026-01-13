// Hero – introduktion på startsidan
// Inga bilder eller externa filer används här

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-12">
      <div className="text-center md:text-left max-w-3xl">

        {/* Hälsning */}
        <p className="text-lg sm:text-xl text-gray-400">
          Hello, I'm
        </p>

        <p className="mt-4 text-gray-600 max-w-xl">
  I build modern, responsive web applications with React and Node.js,
  focusing on clean code and user-friendly solutions.
</p>



        {/* Namn */}
        <section aria-labelledby="hero-title">
  <h1 id="hero-title">Görkem Göker</h1>
</section>

        {/* Titel */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 mt-2">
          Frontend / Fullstack Developer
        </p>

        {/* Knappar */}
      <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
  {["HTML", "CSS", "SASS", "JavaScript", "TypeScript", "React", "Node.js", "REST API"].map(
    (tech) => (
      <span
        key={tech}
        className="text-sm bg-gray-200 px-3 py-1 rounded-full"
      >
        {tech}
      </span>
    )
  )}
</div>

      </div>
    </section>
  );
};

export default Hero;
export {};
