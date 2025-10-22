import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const Contact = () => {
  const [numColors, setNumColors] = useState(1);
  const [sending, setSending] = useState(false);
  const [colorValues, setColorValues] = useState([""]);

  const colorOptions = [
    "Red", "Pink", "White", "Black", "Blue", "Yellow", "Green", "Purple", "Orange"
  ];

  const styleOptions = [
    "Casual", "Festive", "Elegant", "Traditional", "Modern", "Cute"
  ];

  const handleColorChange = (index, value) => {
    const newColors = [...colorValues];
    newColors[index] = value;
    setColorValues(newColors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const form = e.target;
    const templateParams = {
      name: form.name.value,
      email: form.email.value,
      message: form.message?.value || "",
      style: form.style?.value || "",
      colors: colorValues.join(", "),
      description: form.description?.value || "",
      design: form.design?.files[0]?.name || "None",
    };

    emailjs.send(
      "service_1780hn6",
      "template_eoj7d9v",
      templateParams,
      "dTrFGG1s35hxdYEBP"
    )
    .then(
      () => {
        // Auto-reply to customer
        emailjs.send(
          "service_1780hn6",
          "YOUR_AUTOREPLY_TEMPLATE_ID",
          { name: form.name.value, email: form.email.value },
          "dTrFGG1s35hxdYEBP"
        );

        alert("Thank you! Your request has been sent 💖");
        form.reset();
        setNumColors(1);
        setColorValues([""]);
        setSending(false);
      },
      (err) => {
        console.error(err);
        alert("Oops! Something went wrong. Please try again.");
        setSending(false);
      }
    );
  };

  return (
    <section className="contact-section">
      <h2>Contact & Custom Orders</h2>
      <p className="subtext">
        Send us a message or place your custom order. We’ll bring your ideas to
        life! 🌸
      </p>

      <div className="contact-wrapper">
        {/* ================= Message Section ================= */}
        <div className="message-section">
          <h3>💌 Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="4"></textarea>
            <button type="submit" className="add-to-cart-btn">
              {sending ? "Sending..." : "Send Message 💖"}
            </button>
          </form>
        </div>

        {/* ================= Custom Order Section ================= */}
        <div className="custom-order-section">
          <h3>🎀 Place a Custom Order</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />

            {/* Preferred Style Dropdown */}
            <label>
              Preferred Style:
              <select name="style" required>
                <option value="">Select a style</option>
                {styleOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>

            {/* Number of Colors */}
            <label>
              Number of Colors:
              <input
                type="number"
                name="numColors"
                min="1"
                max="5"
                value={numColors}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setNumColors(val);
                  setColorValues(Array(val).fill(""));
                }}
              />
            </label>

            {/* Dynamic Color Dropdowns */}
            {colorValues.map((color, index) => (
              <select
                key={index}
                name={`color${index + 1}`}
                value={color}
                onChange={(e) => handleColorChange(index, e.target.value)}
                required
              >
                <option value="">Select Color {index + 1}</option>
                {colorOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            ))}

            <textarea
              name="description"
              placeholder="Extra Notes / Description"
              rows="3"
            ></textarea>

            <label>
              Upload Custom Design (optional):
              <input type="file" name="design" accept="image/*" />
            </label>

            <button type="submit" className="add-to-cart-btn">
              {sending ? "Sending..." : "Send Custom Order 💖"}
            </button>
          </form>
        </div>
      </div>

      <p className="contact-info">
        You can also DM us on Instagram:{" "}
        <a
          href="https://instagram.com/sumathiscrazycollection"
          target="_blank"
          rel="noopener noreferrer"
        >
          @sumathiscrazycollection
        </a>
      </p>
    </section>
  );
};

export default Contact;
