import React, { useState } from 'react';
import './styles/Form.css'

const ContactForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleFormToggle = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log('Correo:', email);
    console.log('Teléfono:', phone);
    console.log('Mensaje:', message);
    // Restablecer los campos del formulario
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="contact-form">
      {showForm ? (
        <button className="contact-btn" onClick={handleFormToggle}>
          Contactar
        </button>
      ) : (
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
