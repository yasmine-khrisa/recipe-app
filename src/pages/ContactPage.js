import React, { useState } from 'react';
// Contact page with POST API integration
function ContactPage() {
  const [form, setForm]               = useState({ name: '', email: '', message: '' });
  const [loading, setLoading]         = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError]             = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.name,
          body: form.message,
          email: form.email,
          userId: 1,
        }),
      });
      const data = await response.json();
      console.log('POST Response:', data);
      setApiResponse(data);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send. Check your internet.');
    }
    setLoading(false);
  };

  return (
    <div className="container py-5">
      <h1 className="page-title">📬 Contact Us</h1>
      <div className="mb-3">
        <small className="text-muted">
          API: jsonplaceholder.typicode.com &nbsp;|&nbsp;
          <span className="badge bg-success">POST</span>
        </small>
      </div>

      {apiResponse && (
        <div className="alert alert-success">
          <h5>✅ Message Sent! Server Response:</h5>
          <p className="mb-0">Post created with <strong>ID: {apiResponse.id}</strong></p>
          <small className="text-muted">{JSON.stringify(apiResponse)}</small>
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold">Your Name</label>
                <input type="text" name="name" className="form-control"
                  value={form.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input type="email" name="email" className="form-control"
                  value={form.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea name="message" className="form-control" rows="4"
                  value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-danger w-100" disabled={loading}>
                {loading
                  ? <><span className="spinner-border spinner-border-sm me-2" />Sending...</>
                  : '📤 Send via POST API'}
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-5 ms-3">
          <div className="card shadow-sm p-4">
            <h6 className="fw-bold text-danger">How POST API works:</h6>
            <hr />
            <p className="small">1️⃣ User fills the form</p>
            <p className="small">2️⃣ <code>fetch()</code> called with <code>method: 'POST'</code></p>
            <p className="small">3️⃣ Data sent in <code>body</code> as JSON</p>
            <p className="small">4️⃣ Server returns new post with an ID</p>
            <p className="small mb-0">5️⃣ We display the response ✅</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;