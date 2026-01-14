const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 md:px-12 bg-gray-100"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left">

        {/* Rubrik */}
        <p className="text-lg text-gray-500 uppercase tracking-wider">
          Lär känna mig
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Om mig
        </h2>

        {/* Kort introduktion */}
        <p className="mt-6 text-gray-700 leading-relaxed">
          {/*
            Här skriver du 2–3 meningar om dig själv.
            Exempel:
            - Vad du studerar eller har studerat
            - Ditt intresse för utveckling
            - Vad som motiverar dig
          */}
          Jag är en motiverad mjukvaruutvecklare med ett starkt intresse för
          webbutveckling. Jag tycker om att bygga moderna applikationer och
          utvecklar ständigt mina tekniska färdigheter.
        </p>

        {/* Fördjupning */}
        <p className="mt-4 text-gray-700 leading-relaxed">
          {/*
            Här kan du skriva lite mer detaljerat:
            - Hur du arbetar i projekt
            - Frontend / backend
            - Struktur, problemlösning och kvalitet
          */}
          Mitt huvudfokus ligger på att skapa användarvänliga, responsiva och
          underhållbara applikationer med hjälp av moderna webbteknologier.
        </p>

        {/* Fakta-rutor */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Fokusområden */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fokusområden
            </h3>
            <p className="text-gray-700">
              Frontendutveckling, backendlogik, REST API:er samt ren och
              strukturerad kod.
            </p>
          </div>

          {/* Mål */}
          <div className="border border-gray-300 p-6 rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mål
            </h3>
            <p className="text-gray-700">
              Att utvecklas som fullstack-utvecklare och bidra till verkliga
              projekt med hög kvalitet, prestanda och skalbarhet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
export {};
