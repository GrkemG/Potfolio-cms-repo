// About – information om dig
// Här beskriver du vem du är, vad du kan och vad du fokuserar på

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 md:px-12 bg-gray-100"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left">

        {/* Rubrik */}
        <p className="text-lg text-gray-500 uppercase tracking-wider">
          Get to know more
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          About Me
        </h2>

        {/* Kort introduktion */}
        <p className="mt-6 text-gray-700 leading-relaxed">
          {/* 
            Skriv 2–3 meningar om dig själv här.
            Exempel:
            - Vad du studerar / studerat
            - Vad du gillar inom utveckling
            - Vad du siktar på
          */}
          I am a motivated software developer with a strong interest in web
          development. I enjoy building modern applications and continuously
          improving my technical skills.
        </p>

        {/* Fördjupning */}
        <p className="mt-4 text-gray-700 leading-relaxed">
          {/*
            Här kan du skriva mer detaljerat:
            - Vad du jobbar med i projekt
            - Frontend / backend
            - Samarbete, problemlösning, struktur
          */}
          My main focus is on creating user-friendly, responsive and maintainable
          applications using modern web technologies.
        </p>

        {/* Kort fakta-rutor */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Fokus */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Focus Areas
            </h3>
            <p className="text-gray-700">
              {/* Exempel: */}
              Frontend development, backend logic, REST APIs and clean code
              structure.
            </p>
          </div>

          {/* Mål */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Goals
            </h3>
            <p className="text-gray-700">
              {/* Exempel: */}
              To grow as a fullstack developer and contribute to real-world
              projects with high quality and scalability.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
export {};
