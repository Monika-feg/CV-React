import "../css/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <header>
        <h1>Kontakta mig</h1>
        <p>Jag ser fram emot att höra från dig!</p>
      </header>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Kontaktuppgifter</h2>

          <div className="contact-item">
            <h3>📧 E-post</h3>
            <a
              href="mailto:monika.engstrom.88@gmail.com"
              className="contact-link"
            >
              monika.engstrom.88@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <h3>📱 Telefon</h3>
            <a href="tel:+46722255705" className="contact-link">
              +46722255705
            </a>
          </div>

          <div className="contact-item">
            <h3>📍 Plats</h3>
            <p>Tidaholm, Sverige</p>
          </div>
        </div>

        <div className="contact-message">
          <h2>Låt oss prata!</h2>
          <p>
            Är du intresserad av att veta mer om mina färdigheter inom
            Java-utveckling eller har du en spännande möjlighet att erbjuda? Jag
            är alltid öppen för nya utmaningar och samarbeten.
          </p>
          <p>
            Som student på Campus Värnamo söker jag aktivt efter praktikplatser
            och framtida anställningsmöjligheter inom mjukvaruutveckling.
          </p>
        </div>
      </section>
    </div>
  );
}
