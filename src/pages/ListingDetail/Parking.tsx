import React from 'react';
import { Row, Col, InputGroup, InputGroupText, Input } from 'reactstrap';

// Dummy data, replace with your API/data
const parkingData = [
  { type: 'Surfacelot', fee: 200 },
//   { type: 'Garage', fee: 300 },
  // Add more if needed
];

const Parking = () => {
  if (!parkingData || parkingData.length === 0) {
    return (
      <div className="bg-light rounded p-4 text-center">
        <span className="text-muted">No Parking Details</span>
      </div>
    );
  }

  return (
    <div>
      <Row className="mb-2">
        <Col md={6}>
          <label className="form-label">Types of Parking</label>
        </Col>
        <Col md={6}>
          <label className="form-label">Parking Fee</label>
        </Col>
      </Row>
      {parkingData.map((item, idx) => (
        <Row className="mb-3" key={idx}>
          <Col md={6}>
          <Input type="text" value={item.type} readOnly />
          </Col>
          <Col md={6}>
            <InputGroup>
              <InputGroupText>$</InputGroupText>
              <Input type="text" value={item.fee} readOnly />
            </InputGroup>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Parking;