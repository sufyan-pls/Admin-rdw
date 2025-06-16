import React from 'react';
import { Row, Col } from 'reactstrap';

// Dummy data, replace with your API/data
const utilities = [
  "Gas",
  "Water",
  "Electricity",
  "Heat",
  "Trash Removal",
  "Sewer",
  "Cable",
  "Air Conditioning",
  // Add/remove as needed
];

const Utilities = () => {
  if (!utilities || utilities.length === 0) {
    return (
      <div className="bg-light rounded p-4 text-center">
        <span className="text-muted">No Amenities</span>
      </div>
    );
  }

  // Split amenities into rows of 3
  const rows = [];
  for (let i = 0; i < utilities.length; i += 3) {
    rows.push(utilities.slice(i, i + 3));
  }

  return (
    <div>
      {rows.map((row, idx) => (
        <Row className="mb-2" key={idx}>
          {row.map((utility, j) => (
            <Col md={4} key={j} className="d-flex align-items-center mb-2">
              <i className="ri-check-line me-2" style={{ fontSize: 20, color: "#555" }}></i>
              <span style={{ fontSize: 15 }}>{utility}</span>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Utilities;