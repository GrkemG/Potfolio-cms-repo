import { useState } from "react";

const Contact: React.FC = () => {
  // State för formuläret
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Hantera ändringar
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Skicka formulär (frontend-simulering)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Kontaktformulär:", formData);

    setTimeout(() => {
      alert("Tack! Ditt meddelande har skickats.");
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section section-light">
      <div className="page animate-fadeIn">

        {/* Rubrik */}
        <p className="section-label">Hör av dig</p>
        <h2 className="section-title">Kontakt</h2>

        {/* Kontaktinfo */}
        <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
          <p><strong>Namn:</strong> Görkem Göker</p>
          <p><strong>E-post:</strong> gorkem.goker9@gmail.com</p>
          <p><strong>Telefon:</strong> 076-119 24 18</p>
        </div>

        {/* Formulär */}
        <div className="card">
          <form onSubmit={handleSubmit}>

            <div className="grid grid-2">
              <div>
                <label>Namn</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.7rem", marginTop: "0.3rem" }}
                />
              </div>

              <div>
                <label>E-post</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.7rem", marginTop: "0.3rem" }}
                />
              </div>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <label>Meddelande</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                style={{ width: "100%", padding: "0.7rem", marginTop: "0.3rem" }}
              />
            </div>

            <div style={{ marginTop: "2rem" }}>
              <button className="btn" disabled={isLoading}>
                {isLoading ? "Skickar..." : "Skicka meddelande"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
export {};
