import React from 'react';
import { Row, Col } from 'reactstrap';

// Dummy data, replace with your API/data
const images = [
  { url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' },
  { url: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80' },
  { url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80' },
  { url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' },
  { url: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80' }
];
const videos = [
  { url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' },
  { url: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=400&q=80' },
  { url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80' }
];
const virtualTours = [
  { url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' },
  { url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80' }
];

const sectionData = [
  { label: 'Images', data: images },
  { label: 'Videos', data: videos },
  { label: 'Virtual Tours', data: virtualTours }
];

const overlayIconStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: 48,
  color: '#fff',
  opacity: 0.85,
  pointerEvents: 'none' as 'none',
  textShadow: '0 2px 8px #000'
};

const Media = () => {
  return (
    <div>
      {sectionData.map((section, idx) =>
        section.data && section.data.length > 0 && (
          <div key={section.label} className={idx > 0 ? 'mt-4' : ''}>
            <div className="d-flex align-items-center mb-2">
              <span style={{ fontWeight: 400, fontSize: 15 }}>{section.label}</span>
              <span
                className="bg-light rounded-pill ms-2"
                style={{
                  fontSize: 16,
                  padding: '2px 10px',
                  fontWeight: 500,
                  display: 'inline-block'
                }}
              >
                {section.data.length}
              </span>
            </div>
            <Row>
              {section.data.map((item, i) => (
                <Col
                  key={i}
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  className="mb-3"
                >
                  <div
                    style={{
                      background: '#edeeee',
                      borderRadius: 4,
                      width: '100%',
                      aspectRatio: '1/1',
                      minHeight: 120,
                      overflow: 'hidden',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src={item.url}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/300x300?text=No+Image'; }}
                    />
                    {section.label === 'Videos' && (
                      <i className="ri-play-circle-line" style={overlayIconStyle}></i>
                    )}
                    {section.label === 'Virtual Tours' && (
                      <i className="ri-vr-line" style={overlayIconStyle}></i>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )
      )}
    </div>
  );
};

export default Media;