import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";


const skills = [
  "Python",
  "Pandas",
  "NumPy",
  "SQL",
  "Power BI",
  "Excel",
  "Kafka",
  "NLP",
  "IoT",
  "Embedded Systems",
];

const languages = [
  "English - Fluent",
  "Tamil - Fluent",
  "Kannada - Native",
  "Telugu - Intermediate",
];

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Titan Company Pvt Ltd",
    period: "Jan 2024 - Jul 2024",
    details:
      "Collected and analyzed production and infrastructure data to support process improvements and operational decision making.",
  },
  {
    title: "Dashboard Developer",
    company: "Freelance Projects",
    period: "Aug 2024 - Present",
    details:
      "Built interactive Power BI dashboards, visual analytics, and report automation for small businesses and learning portfolios.",
  },
  {
    title: "AI Data Project",
    company: "Personal Portfolio",
    period: "2025",
    details:
      "Created voice search and recommendation demos using Python, NLP, Kafka streaming, and the TMDB API.",
  },
];

function Visual3D() {
  return (
    <div className="portfolio-visual" aria-hidden="true">
      <div className="css-visual">
        <div className="css-orbit"></div>
        <div className="css-orbit"></div>
        <div className="css-orbit"></div>
        <div className="css-cube">
          <span>SQL</span>
          <span>BI</span>
          <span>AI</span>
          <span>PY</span>
          <span>XL</span>
          <span>DA</span>
        </div>
      </div>

      <div className="data-bars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Canvas className="scene" camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[2, 2, 5]} />
        <Stars radius={80} depth={40} count={900} factor={4} fade />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
      </Canvas>

      <main className="page-content">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Data Analyst Portfolio</p>
            <h1>Thanushree M</h1>
            <p className="role">Aspiring Data Analyst</p>
            <p className="summary">
              Strong foundation in data manipulation and visualization, with hands-on interest in
              SQL, Power BI, Excel, Python, and AI-enabled product ideas.
            </p>

            <div className="hero-actions">
              {/* Removed 'Email Me' and 'Call' buttons as requested */}
            </div>
          </div>

          <Visual3D />
        </section>

        <section className="info-grid" aria-label="Portfolio overview">
          <article>
            <h2>About</h2>
            <p>
              I enjoy turning raw information into useful, readable insights. My work combines
              database thinking, dashboard design, and practical problem solving for real-world
              data tasks.
            </p>
          </article>
          <article>
            <h2>Experience</h2>
            <p>
              Intern at Titan Company Pvt Ltd, where I observed transformers, generators, AC units,
              plant infrastructure, industrial networks, and wireless connectivity.
            </p>
          </article>
          <article>
            <h2>Education</h2>
            <p>
              BE ECE at Anna University RC, Coimbatore with CGPA 7.9/10. HSC 94% and SSLC 86% at
              Holly Cross Matric Higher Secondary School.
            </p>
          </article>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools I Work With</h2>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section-block experience-section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>My Work Journey</h2>
          </div>
          <div className="experience-grid">
            {experiences.map((item) => (
              <article className="experience-card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-period">{item.period}</p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section">
          <article>
            <p className="eyebrow">Languages</p>
            <h2>Communication</h2>
            <div className="language-list">
              {languages.map((language) => (
                <span key={language}>{language}</span>
              ))}
            </div>
          </article>

          <article>
            <p className="eyebrow">Certifications</p>
            <p>Complete SQL Bootcamp: From Zero to Hero</p>
            <p>Office Masters Power BI Workshop</p>
          </article>
        </section>

        <section className="contact-section">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s Connect</h2>
            <p>
              Open to data analyst internships, dashboard projects, and beginner-friendly data
              opportunities.
            </p>
            <div className="contact-links">
              <a href="tel:+918248126726">+91 8248126726</a>
              <a href="mailto:thanumuniraj0106@gmail.com">thanumuniraj0106@gmail.com</a>
              {/* Removed LinkedIn button as requested */}
            </div>
          </div>

          <form className="contact-box">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="your@email.com" />
            </label>
            <label>
              Message
              <textarea placeholder="Write a short message"></textarea>
            </label>
            <button type="button">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}
