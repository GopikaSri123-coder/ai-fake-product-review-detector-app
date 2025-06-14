// pages/about.js

import React from 'react';

export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Our AI Fake Review Detector</h1>
      <p style={styles.text}>
        Our application uses powerful AI models to detect fake product reviews from real ones.
        This helps customers make better shopping decisions by showing genuine feedback.
      </p>
      <h2 style={styles.subheading}>Why This Matters?</h2>
      <ul style={styles.list}>
        <li>Fake reviews mislead buyers.</li>
        <li>Genuine products lose visibility.</li>
        <li>Our AI helps improve trust in online shopping.</li>
      </ul>
      <p style={styles.text}>
        Built using Next.js and integrated with AI APIs, our system ensures a high accuracy in identifying suspicious reviews.
      </p>
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
  subheading: {
    fontSize: '1.8rem',
    marginTop: '20px',
    color: '#444',
  },
  text: {
    fontSize: '1.1rem',
    color: '#555',
  },
  list: {
    paddingLeft: '20px',
    color: '#555',
  }
};
