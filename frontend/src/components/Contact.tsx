import { useState } from "react";

const Contact: React.FC = () => {
  // State för formulärfält
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Hanterar ändringar i inputfält
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Hanterar submit (just nu endast frontend-logik)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Här kan du senare koppla backend / API
    console.log("Kontaktformulär skickat:", formData);

    // Simulerar skickat formulär
    setTimeout(() => {
      alert("Meddelandet har skickats (frontend-simulering).");
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Rubriker */}
        <p className="text-lg text-gray-500 uppercase tracking-wider">
          Get in touch
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Contact Me
        </h2>

        {/* Kontaktuppgifter */}
        <div className="mt-6 text-gray-700 space-y-2">
          <p>
            <strong>Namn:</strong> Görkem Göker
          </p>
          <p>
            <strong>Email:</strong> gorkem.goker9@gmail.com
          </p>
          <p>
            <strong>Telefon:</strong> 0761192418
          </p>
        </div>

        {/* Kontaktformulär */}
        <div className="mt-10 bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            
            {/* Namn + Email */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <label className="text-lg font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            {/* Meddelande */}
            <div className="flex flex-col mt-6">
              <label className="text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="mt-2 p-3 border border-gray-300 rounded-lg"
                placeholder="Your message"
                required
              />
            </div>

            {/* Submit */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Message"}
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
