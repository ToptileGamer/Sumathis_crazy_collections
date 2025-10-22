import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  // 🌈 Custom Order Logic
  const [numColors, setNumColors] = useState(1);
  const [colorInputs, setColorInputs] = useState([""]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleNumColorsChange = (e) => {
    const count = parseInt(e.target.value);
    setNumColors(count);
    setColorInputs(Array(count).fill(""));
  };

  const handleColorChange = (index, value) => {
    const newColors = [...colorInputs];
    newColors[index] = value;
    setColorInputs(newColors);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <section className="contact-section">
      <h2>💌 Contact & Custom Orders</h2>
      <p className="subtitle">
        We’d love to hear from you — send us a message or create your custom order! 🌷
      </p>

      <div className="contact-wrapper">
        {/* ✉️ Message Form */}
        <div className="contact-box">
          <h3>Send Us a Message 💬</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Write your message here..." rows="5"></textarea>
            <button type="submit">Send Message 💖</button>
          </form>
        </div>

        {/* 🎨 Custom Order Form */}
        <div className="contact-box">
          <h3>Place a Custom Order 🎀</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea
              placeholder="Describe your design or bracelet idea..."
              rows="4"
            ></textarea>

            {/* Style */}
            <label className="form-label">Preferred Style</label>
            <select>
              <option>Elegant & Minimal</option>
              <option>Colorful & Fun</option>
              <option>Boho & Beaded</option>
              <option>Friendship Theme</option>
              <option>Festival Special</option>
            </select>

            {/* Number of Colors */}
            <label className="form-label">Number of Colors</label>
            <select value={numColors} onChange={handleNumColorsChange}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n} Color{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>

            {/* Dynamic Color Inputs */}
            {colorInputs.map((_, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Enter Color ${index + 1}`}
                value={colorInputs[index]}
                onChange={(e) => handleColorChange(index, e.target.value)}
              />
            ))}

            {/* Upload Custom Design */}
            <label className="form-label">Upload Your Design (Optional)</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />

            {/* Live Preview */}
            {preview && (
              <div className="preview-box">
                <img src={preview} alt="Design Preview" />
                <p>Preview of your design 🌸</p>
              </div>
            )}

            <button type="submit">Submit Custom Order 💕</button>
          </form>
        </div>
      </div>

      <p className="contact-info">
        Currently taking orders through Instagram 💗
      </p>
      <p className="contact-info">
        <a
          href="https://instagram.com/sumathiscrazycollection"
          target="_blank"
          rel="noreferrer"
        >
          Message us on Instagram 🌷
        </a>
      </p>
    </section>
  );
};

export default Contact;
