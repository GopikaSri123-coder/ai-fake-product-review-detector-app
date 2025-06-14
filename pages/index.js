// pages/index.js

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return 
    <div style={styles.container}>
        <h1>AI Fake Product Review Detector</h1>
      <h1 style={styles.heading}>🕵️‍♀️ AI Fake Product Review Detector</h1>
      <p style={styles.text}>
        Welcome! This tool uses powerful AI to detect whether product reviews are genuine or fake.
        Help yourself shop smarter by avoiding misleading reviews.
      </p>

      <nav style={styles.nav}>
        <Link href="/about" style={styles.link}>About</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
      </nav>

      <p style={styles.text}>
        Get started by uploading a review or exploring how our AI works.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    fontSize: '2.8rem',
    color: '#0070f3',
  },
  text: {
    fontSize: '1.2rem',
    color: '#444',
    marginTop: '20px',
  },
  nav: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    fontSize: '1.1rem',
    color: '#0070f3',
    textDecoration: 'underline',
  },
};
<h1>AI-Based Product Review Detector 🚀</h1>
