const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-200 py-6">
      {/* Länkar */}
      <div className="flex justify-center gap-6 mb-4 text-gray-700">
        <a
          href="https://github.com/GrkemG"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/g%C3%B6rkem-g%C3%B6ker-13b31231b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>

        <a
          href="mailto:"
          className="hover:underline"
        >
          Email
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Görkem Göker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
export {};
