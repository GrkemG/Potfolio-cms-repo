const Hero: React.FC = () => {
  return (
    <section className="hero section-dark">
      <div className="page hero-content animate-fadeIn">

        <p className="hero-subtitle">
          Hej, jag heter
        </p>

        <h1 className="hero-title">
          Görkem Göker
        </h1>

        <p className="hero-role">
          Frontend / Fullstack-utvecklare
        </p>

        <p className="hero-text">
          Jag bygger moderna och responsiva webbapplikationer med React och Node.js,
          med fokus på ren kod och användarvänliga lösningar.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button">
            Visa projekt
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;
export {};
