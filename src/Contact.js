// Contact.js

import React from 'react';
import './Contact.css';

function Contact() {
return (
<div className="container">
<form>
<label htmlFor="name">Name</label>
<input type="text" id="name" name="name" required />
<label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required />

    <label htmlFor="subject">Subject</label>
    <input type="text" id="subject" name="subject" required />

    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" required></textarea>

    <button type="submit">Send Message</button>
  </form>
  <div>
    <h2>Contact Us</h2>
    <p>Feel free to contact us with any questions or concerns you may have. Our team is available 24/7 to answer your inquiries and provide you with the best possible care for your pets.</p>
<p>Address: 123 Main St, Anytown, USA</p>
<p>Phone: (123) 456-7890</p>
<p>Email: info@veterinaryclinic.com</p>
</div>
</div>
);
}

export default Contact;
