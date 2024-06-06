import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const validationErrors = {};
    if (!name) {
      validationErrors.name = 'Name is required';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!message) {
      validationErrors.message = 'Message is required';
    }
    setErrors(validationErrors);

    // If there are no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission logic here
      console.log('Form submitted successfully');
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;