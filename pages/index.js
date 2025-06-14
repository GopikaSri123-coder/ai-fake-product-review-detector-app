// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>AI Fake Product Review Detector</h1>
      <p>Welcome! This tool helps detect fake product reviews using AI.</p>
      <nav style={{ marginTop: '1.5rem' }}>
        <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
