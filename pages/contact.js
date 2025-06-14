// pages/contact.js

import React from 'react';

export default function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.text}>
        We'd love to hear from you! If you have any questions, suggestions, or feedback about our AI Fake Review Detector, feel free to reach out.
      </p>

      <div style={styles.contactInfo}>
        <p><strong>Email:</strong> support@fakereviewdetector.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 123, Tech Park Road, Chennai - 600113, India</p>
      </div>

      <p style={styles.text}>You can also follow us on social media for updates and new features!</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
  },
  text: {
    fontSize: '1.1rem',
    color: '#555',
  },
  contactInfo: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderLeft: '4px solid #0070f3',
  }
};
