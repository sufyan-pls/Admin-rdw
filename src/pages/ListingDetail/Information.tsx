import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

const info = {
    propertyId: '#876',
    builderName: 'Builder Name',
    address: '123 Main St, Anytown, USA',
    propertyType: 'Single Family',
    createdAt: 'Jan 04, 2024 12:30 PM',
    status: 'Pending',
};

// Helper to get badge class based on status
const getStatusBadgeClass = (status: string) => {
    switch (status) {
        case 'Live':
            return 'badge rounded-pill bg-success text-uppercase';
        case 'Rejected':
            return 'badge rounded-pill bg-danger text-uppercase';
        case 'Pending':
            return 'badge rounded-pill bg-warning text-uppercase';
        default:
            return 'badge rounded-pill bg-secondary text-uppercase';
    }
};

const Information = () => {    
    return (
        <Card className="rounded-0">
            <CardHeader className="my-2">
                <h6>Information</h6>
            </CardHeader>
            <CardBody>
                <Row className="gy-3">
                    <Col xs={12} md={2} className="d-flex flex-column">
                        <span className="fw-semibold" style={{ fontSize: 16 }}>Property ID</span>
                        <span className="text-muted" style={{ fontSize: 15 }}>{info.propertyId}</span>
                    </Col>
                    <Col xs={12} md={2} className="d-flex flex-column">
                        <span className="fw-semibold" style={{ fontSize: 16 }}>Builder</span>
                        <span className="text-muted" style={{ fontSize: 15 }}>{info.builderName}</span>
                    </Col>
                    <Col xs={12} md={3} className="d-flex flex-column">
                        <span className="fw-semibold" style={{ fontSize: 16 }}>Address</span>
                        <span className="text-muted" style={{ fontSize: 15 }}>{info.address}</span>
                    </Col>
                    <Col xs={12} md={2} className="d-flex flex-column">
                        <span className="fw-semibold" style={{ fontSize: 16 }}>Property Type</span>
                        <span className="text-muted" style={{ fontSize: 15 }}>{info.propertyType}</span>
                    </Col>
                    <Col xs={12} md={2} className="d-flex flex-column">
                        <span className="fw-semibold" style={{ fontSize: 16 }}>Status</span>
                        <span className={getStatusBadgeClass(info.status)} style={{ fontSize: 13, maxWidth: 80 }}>{info.status}</span>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default Information;
