import * as React from 'react';

interface Submission {
  type: 'contact' | 'quote';
  name: string;
  email: string;
  phone: string;
  message?: string;
  service?: string;
  createdAt: string;
}

interface EmailDigestProps {
  submissions: Submission[];
}

export const EmailDigest: React.FC<Readonly<EmailDigestProps>> = ({
  submissions,
}) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
    <h1 style={{ color: '#0066cc' }}>New Service Requests Digest</h1>
    <p>You have {submissions.length} new requests in the last 30 minutes.</p>

    <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />

    {submissions.map((sub, index) => (
      <div key={index} style={{ marginBottom: '30px', padding: '15px', border: '1px solid #f0f0f0', borderRadius: '8px' }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>
          {sub.type === 'quote' ? '🏷️ Quote Request' : '📧 Contact Message'} - {sub.name}
        </h2>
        <p><strong>Email:</strong> {sub.email}</p>
        <p><strong>Phone:</strong> {sub.phone}</p>
        {sub.service && <p><strong>Service:</strong> {sub.service}</p>}
        {sub.message && <p><strong>Message:</strong> {sub.message}</p>}
        <p style={{ fontSize: '12px', color: '#999' }}>Submitted at: {new Date(sub.createdAt).toLocaleString()}</p>
      </div>
    ))}

    <footer style={{ marginTop: '40px', fontSize: '12px', color: '#666' }}>
      <p>Sparkle & Shine Cleaning Services - Automated Notification System</p>
    </footer>
  </div>
);
