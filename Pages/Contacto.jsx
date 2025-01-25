import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura tu Service ID, Template ID y Public Key
    const serviceID = 'service_gmqlsoj';
    const templateID = 'template_eqwlbgl';
    const publicKey = 'tZvCiFBCWev95X6k4';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert('Gracias por contactarme. Próximamente responderé tu mensaje.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('Hubo un error al enviar tu mensaje. Inténtalo nuevamente.');
      });
  };

  return (
    <section className="contacto">
      <h2 id="title-contacto" className="title-section">Contacto</h2>
      <div className="card-contacto">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};
