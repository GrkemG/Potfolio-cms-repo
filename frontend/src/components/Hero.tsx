const Hero = () => {
  return (
    <section className="hero section-light">
      <div className="page hero-content animate-fadeIn">

        <p className="hero-subtitle">Hello, I'm</p>

        <h1 className="hero-title">Görkem Göker</h1>

        <p className="hero-role">Frontend / Fullstack Developer</p>

        <p className="hero-text">
          I build modern, responsive web applications with React and Node.js,
          focusing on clean code and user-friendly solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button">
            View Projects
          </a>
          <a href="#contact" className="button outline">
            Contact
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
