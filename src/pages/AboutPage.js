import React from 'react';
// About page
function AboutPage() {
  const features = [
    { icon: '⚛️', title: 'React Hooks', desc: 'useState and useEffect' },
    { icon: '🌐', title: 'GET API', desc: 'TheMealDB — fetch meals' },
    { icon: '📤', title: 'POST API', desc: 'JSONPlaceholder — send data' },
    { icon: '🗺️', title: 'React Router', desc: 'Multi-page navigation' },
    { icon: '🎨', title: 'Styled Components', desc: 'CSS-in-JS styling' },
    { icon: '🌍', title: 'Context API', desc: 'Global favorites state' },
  ];

  return (
    <div className="container py-5 text-center">
      <h1 className="page-title">About This App</h1>
      <p className="lead text-muted">
        Built with React.js for CSE3201 — Designing Human Centered Software.
      </p>
      <div className="row mt-4">
        {features.map((item, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm h-100">
              <div style={{ fontSize: '2rem' }}>{item.icon}</div>
              <h5 className="mt-2">{item.title}</h5>
              <p className="text-muted small">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;