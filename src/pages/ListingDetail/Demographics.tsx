import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';

// Dummy data
const transitData = [
  { name: 'JFK Airport', distance: '0.5 miles', type: 'International Airport' },
  { name: 'Western Avenue Station', distance: '0.5 miles', type: 'Underground Subway' },
  { name: '27th Street Station', distance: '0.5 miles', type: 'Underground Subway' },
  { name: 'Chicago Midway International', distance: '0.5 miles', type: 'International Airport' }
];

const parksData = [
  { name: 'Yosemite National Park', distance: '0.5 miles', type: 'Recreational Park' },
  { name: 'Patricia Green In Hayes Valley', distance: '0.5 miles', type: 'Recreational Park' }
];

const Demographics = () => {
  const [activeTab, setActiveTab] = useState('transit');

  // Select data based on tab
  const data = activeTab === 'transit' ? transitData : parksData;

  // Split data into rows of 2
  const rows = [];
  for (let i = 0; i < data.length; i += 2) {
    rows.push(data.slice(i, i + 2));
  }

  return (
    <div>
      <Nav pills className="nav nav-tabs nav-tabs-custom nav-success nav-justified ">
        <NavItem>
          <NavLink
            active={activeTab === 'transit'}
            onClick={() => setActiveTab('transit')}
            style={{ cursor: 'pointer', fontWeight: 500, fontSize: 18, textTransform: 'capitalize' }}
          >
            Transit
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeTab === 'park & recreation'}
            onClick={() => setActiveTab('park & recreation')}
            style={{ cursor: 'pointer', fontWeight: 500, fontSize: 18 }}
          >
            Parks & Recreation
          </NavLink>
        </NavItem>
      </Nav>
      <div className="mt-2">
        {rows.map((row, idx) => (
          <Row key={idx} className="mb-3">
            {row.map((item, j) => (
              <Col md={6} key={j} className="mb-3">
                <div
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: 4,
                    padding: '18px 20px',
                    background: '#fff',
                    minHeight: 90
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span style={{ fontWeight: 600, fontSize: 18 }}>{item.name}</span>
                    <span style={{ fontWeight: 500, fontSize: 17 }}>{item.distance}</span>
                  </div>
                  <div style={{ color: '#444', fontSize: 16 }}>{item.type}</div>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Demographics;