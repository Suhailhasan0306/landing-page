import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Sammunat</h2>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Build Your Future With Sammunat</h1>
        <p>
          Sammunat is a modern platform helping students and professionals grow
          with real-world experience and opportunities.
        </p>
        <button
          onClick={() =>
            window.alert("Thank you for applying! We will contact you soon.")
          }
        >
          Apply for Internship
        </button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Sammunat?</h2>
        <div className="feature-box">
          <div className="card">
            <h3>Real Projects</h3>
            <p>Work on industry-level projects and build strong experience.</p>
          </div>
          <div className="card">
            <h3>Expert Mentorship</h3>
            <p>Learn directly from experienced professionals.</p>
          </div>
          <div className="card">
            <h3>Career Growth</h3>
            <p>Boost your skills and increase job opportunities.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Sammunat is focused on empowering talent by providing meaningful
          internships and learning experiences. Our goal is to bridge the gap
          between education and industry.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get In Touch</h2>
        <p>Email: contact@sammunat.com</p>
        <p>Location: USA</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Sammunat. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
