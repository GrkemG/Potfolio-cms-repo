const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 md:px-12 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left">

        {/* Rubrik */}
        <p className="text-lg text-gray-500 uppercase tracking-wider">
          Min bakgrund
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Erfarenhet
        </h2>

        {/* Kort sammanfattning */}
        <p className="mt-6 text-gray-700 leading-relaxed">
          {/*
            Här kan du sammanfatta din erfarenhet övergripande.
            Exempel:
            - Studier
            - Praktik
            - Egna projekt
          */}
          Jag har erfarenhet av både frontend- och backendutveckling genom
          studier, egna projekt och arbete med fullstack-applikationer.
        </p>

        {/* Erfarenhetskort */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Utbildning / Studier */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Utbildning
            </h3>
            <p className="text-gray-700">
              {/*
                Exempel:
                - Programnamn
                - Skola
                - År
              */}
              Studerar till fullstack-utvecklare med fokus på moderna
              webbapplikationer, systemdesign och databaser.
            </p>
          </div>

          {/* Praktik / Arbete */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Arbete & Praktik
            </h3>
            <p className="text-gray-700">
              {/*
                Exempel:
                - Praktikplats
                - Arbetsuppgifter
                - Tekniker
              */}
              Erfarenhet av att arbeta med riktiga projekt där jag utvecklat
              funktioner, hanterat API:er och samarbetat enligt agila metoder.
            </p>
          </div>

          {/* Tekniska färdigheter */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Tekniska färdigheter
            </h3>
            <p className="text-gray-700">
              {/*
                Exempel:
                - HTML, CSS, JavaScript
                - React, TypeScript
                - Node.js, REST API
              */}
              HTML, CSS, JavaScript, TypeScript, React, Node.js, Express,
              REST API:er samt versionshantering med Git.
            </p>
          </div>

          {/* Arbetsmetodik */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Arbetsmetodik
            </h3>
            <p className="text-gray-700">
              {/*
                Exempel:
                - Agilt arbete
                - Problemlösning
                - Struktur
              */}
              Jag arbetar strukturerat, problemlösande och med fokus på
              användarupplevelse, kodkvalitet och skalbarhet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
export {};
