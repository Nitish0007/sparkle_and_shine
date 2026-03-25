import * as React from 'react';

interface Submission {
  type: 'contact' | 'quote';
  name: string;
  email: string;
  phone: string;

  // Contact specific
  message?: string;
  subject?: string;

  // Quote specific
  address?: string;
  service?: string;
  propertyType?: string;
  bedrooms?: string;
  bathrooms?: string;

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
      <div key={index} style={{ marginBottom: '20px', padding: '12px', border: '1px solid #f0f0f0', borderRadius: '6px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h2 style={{ margin: 0, fontSize: '16px', color: '#333' }}>
            {sub.type === 'quote' ? '🏷️ Quote Request' : '📧 Contact'} - {sub.name}
          </h2>
          <span style={{ fontSize: '11px', color: '#999' }}>
            {new Date(sub.createdAt).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>

        <div style={{ fontSize: '13px', lineHeight: '1.5', color: '#555' }}>
          <p style={{ margin: '4px 0' }}>
            <strong>Contact:</strong> {sub.email}  |  {sub.phone}
          </p>

          {sub.type === 'contact' && sub.subject && (
            <p style={{ margin: '4px 0' }}>
              <strong>Subject:</strong> {sub.subject}
            </p>
          )}

          {sub.type === 'quote' && (
            <p style={{ margin: '4px 0' }}>
              <strong>Details:</strong> {[sub.service, sub.propertyType, sub.bedrooms ? `${sub.bedrooms} Bed` : '', sub.bathrooms ? `${sub.bathrooms} Bath` : ''].filter(Boolean).join(' • ')}
              {sub.address && <><br /><strong>Address:</strong> {sub.address}</>}
            </p>
          )}

          {sub.message && (
            <div style={{ margin: '8px 0 0 0', padding: '8px 10px', backgroundColor: '#f9f9f9', borderLeft: '3px solid #e0e0e0', color: '#444' }}>
              <strong>{sub.type === 'quote' ? 'Additional Details:' : 'Message:'}</strong>
              <br />
              <em>"{sub.message}"</em>
            </div>
          )}
        </div>
      </div>
    ))}

    <footer style={{ marginTop: '40px', fontSize: '12px', color: '#666' }}>
      <p>Sparkle & Shine Cleaning Services - Automated Notification System</p>
    </footer>
  </div>
);
