import React from 'react';
import { Row, Col } from 'reactstrap';

// Dummy data, replace with your API/data
const laundry = [
  "Washer/Dryer In Unit",
  "Laundry Facility",
  // Add/remove as needed
];

const Laundry = () => {
  if (!laundry || laundry.length === 0) {
    return (
      <div className="bg-light rounded p-4 text-center">
        <span className="text-muted">No Amenities</span>
      </div>
    );
  }

  // Split amenities into rows of 3
  const rows = [];
  for (let i = 0; i < laundry.length; i += 3) {
    rows.push(laundry.slice(i, i + 3));
  }

  return (
    <div>
      {rows.map((row, idx) => (
        <Row className="mb-2" key={idx}>
          {row.map((laundry, j) => (
            <Col md={4} key={j} className="d-flex align-items-center mb-2">
              <i className="ri-check-line me-2" style={{ fontSize: 20, color: "#555" }}></i>
              <span style={{ fontSize: 15 }}>{laundry}</span>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Laundry;