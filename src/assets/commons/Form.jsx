import React, { useState } from 'react';
import './styles/form.css'

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Correo:', email);
    console.log('Teléfono:', phone);
    console.log('Mensaje:', message);
    setEmail('');
    setPhone('');
    setMessage('');
    setShowForm(false);
  };

  return (
    <div className="contact-form">
      <button className="contact-btn" onClick={handleFormToggle}>
        Contactar
      </button>
      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          <h2>Formulario de contacto</h2>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="phone">Número de teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label htmlFor="message">Información adicional:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <input type="submit" value="Enviar" />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
