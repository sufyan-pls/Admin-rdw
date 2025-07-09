import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

const InspectionDetails = () => {
    return (
        <Card>
            <CardHeader>
                <h6>Inspection Details</h6>
            </CardHeader>
            <CardBody className="d-flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                
                    <div className="text-center">
                        <div
                            className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                            style={{
                                width: '70px',
                                height: '70px',
                            }}
                        >
                            <i className="ri-error-warning-line fs-1" style={{ color: '#6b7280' }}></i>
                        </div>
                        <p className="text-muted fw-bold fs-5">Inspection Pending!</p>
                    </div>
            </CardBody>
        </Card>
    );
};

export default InspectionDetails;