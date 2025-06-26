import React from 'react';
import { Row, Col, InputGroup, InputGroupText, Input } from 'reactstrap';

const UnitDetails = () => {
    return (
        <div>
            <Row className="my-3">
                <Col md={4} className="mb-3 mb-md-0">
                    <label className="form-label">Beds</label>
                    <Input type="text" value="02" readOnly />
                </Col>
                <Col md={4} className="mb-3 mb-md-0">
                    <label className="form-label">Baths</label>
                    <Input type="text" value="02" readOnly />
                </Col>
                <Col md={4}>
                    <label className="form-label">Size</label>
                    <InputGroup>
                        <Input type="text" value="280" readOnly />
                        <InputGroupText>Sq Ft.</InputGroupText>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={6} className="mb-3 mb-md-0">
                    <label className="form-label">Date Available</label>
                    <Input type="text" value="Jan 24,2024" readOnly />
                </Col>
                <Col md={6}>
                    <label className="form-label">Total Price</label>
                    <InputGroup>
                        <InputGroupText>$</InputGroupText>
                        <Input type="text" value="3,250,000" readOnly />
                    </InputGroup>
                </Col>
            </Row>
        </div>
    );
};

export default UnitDetails;