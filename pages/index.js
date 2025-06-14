import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>AI Fake Product Review Detector</h1>
      <p>This app detects fake product reviews using AI.</p>
      <nav>
        <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
