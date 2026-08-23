import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactPage.css";

const TOPICS = [
  "General enquiry",
  "Order & shipping",
  "Bridal & bulk orders",
  "Press & collaborations",
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: TOPICS[0],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const updateField = (field) => (event) => {
    setForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: "" }));
    }
  };

  const validate = () => {
    const next = {};

    if (form.name.trim().length < 2) {
      next.name = "Please tell us your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    if (form.message.trim().length < 10) {
      next.message = "A few more words would help us help you.";
    }

    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    setStatus("sending");
    setErrors({});

    window.setTimeout(() => {
      try {
        const existing = JSON.parse(
          localStorage.getItem("sixYardsMessages") || "[]"
        );
        localStorage.setItem(
          "sixYardsMessages",
          JSON.stringify([
            ...existing,
            { ...form, sentAt: new Date().toISOString() },
          ])
        );
      } catch {
        /* storage unavailable — submission still acknowledged */
      }

      setStatus("sent");
    }, 800);
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      topic: TOPICS[0],
      message: "",
    });
    setStatus("idle");
  };

  return (
    <>
      <div className="contact-page">
        <Navbar variant="solid" />

        <section className="contact-hero">
          <span>THE SIX YARDS</span>
          <h1>
            Let&rsquo;s
            <em> talk.</em>
          </h1>
          <p>
            Questions about an order, a piece you love, or a
            celebration we can be part of — write to us and a
            real person will write back.
          </p>
        </section>

        <section className="contact-body">

          {/* LEFT — DETAILS */}

          <aside className="contact-details">
            <div className="contact-detail-block">
              <span>EMAIL</span>
              <a href="mailto:hello@thesixyards.example">
                hello@thesixyards.example
              </a>
            </div>

            <div className="contact-detail-block">
              <span>PHONE</span>
              <p>+91 00000 00000</p>
              <p className="muted">Mon–Sat · 11:00 – 19:00 IST</p>
            </div>

            <div className="contact-detail-block">
              <span>VISIT</span>
              <p>Jaipur · Delhi · Mumbai</p>
              <Link to="/stores" className="contact-stores-link">
                FIND A STORE <span>↗</span>
              </Link>
            </div>

            <div className="contact-response-note">
              <span className="dot"></span>
              We reply within 24 hours, seven days a week.
            </div>
          </aside>


          {/* RIGHT — FORM */}

          <div className="contact-form-panel">

            {status === "sent" ? (
              <div className="contact-success" role="status">
                <span className="contact-success-mark">✓</span>
                <h2>
                  Message
                  <em> received.</em>
                </h2>
                <p>
                  Thank you, {form.name.split(" ")[0] || "friend"}.
                  Your note is with our team and we&rsquo;ll reply
                  to <strong>{form.email}</strong> within 24 hours.
                </p>
                <button type="button" onClick={resetForm}>
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <span className="contact-form-label">
                  SEND US A MESSAGE
                </span>

                <div className="contact-field-row">
                  <div className={`contact-field ${errors.name ? "invalid" : ""}`}>
                    <label htmlFor="contact-name">NAME *</label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={updateField("name")}
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <em className="contact-error">{errors.name}</em>
                    )}
                  </div>

                  <div className={`contact-field ${errors.email ? "invalid" : ""}`}>
                    <label htmlFor="contact-email">EMAIL *</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={updateField("email")}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <em className="contact-error">{errors.email}</em>
                    )}
                  </div>
                </div>

                <div className="contact-field-row">
                  <div className="contact-field">
                    <label htmlFor="contact-phone">PHONE (OPTIONAL)</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={updateField("phone")}
                      placeholder="+91"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-topic">TOPIC</label>
                    <select
                      id="contact-topic"
                      value={form.topic}
                      onChange={updateField("topic")}
                    >
                      {TOPICS.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={`contact-field ${errors.message ? "invalid" : ""}`}>
                  <label htmlFor="contact-message">MESSAGE *</label>
                  <textarea
                    id="contact-message"
                    rows="6"
                    value={form.message}
                    onChange={updateField("message")}
                    placeholder="Tell us about the piece, the order or the occasion…"
                  ></textarea>
                  {errors.message && (
                    <em className="contact-error">{errors.message}</em>
                  )}
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "SENDING…" : "SEND MESSAGE ↗"}
                </button>

                <p className="contact-form-note">
                  Demo form — messages are stored on your device only.
                </p>
              </form>
            )}

          </div>

        </section>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
