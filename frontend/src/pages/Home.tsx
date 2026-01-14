import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <main className="home">

      {/* HERO – mörk / fokus */}
      <section className="section section-dark">
        <Hero />
      </section>

      {/* ABOUT */}
      <section className="section section-light">
        <div className="page animate-fadeIn">
          <About />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section section-dark">
        <div className="page animate-fadeIn">
          <Experience />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section section-light">
        <div className="page animate-fadeIn">
          <Projects />
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-dark">
        <div className="page animate-fadeIn">
          <Contact />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
export {};
