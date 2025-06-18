import AssignInspectorModal from 'pages/ListingDetail/AssignInspectorModal';
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Collapse, Button, Row, Col } from 'reactstrap';
// import AssignInspectorModal from './AssignInspectorModal';

const SecondaryInspectionDetailCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false); // State for AssignInspectorModal
    const [transactionModalOpen, setTransactionModalOpen] = useState(false);
    const [updatesModalOpen, setUpdatesModalOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleAssignModal = () => setIsAssignModalOpen(!isAssignModalOpen);

    // const [callToAction, setCallToAction] = useState(false);

    // Dummy data for inspection details
    const inspectionData = {
        status: 'Complete',
        date: 'Jan 04, 2024 12:30 PM',
        payment: '$100',
        inspector: {
            id: 1,
            name: 'Dianne Russell',
            email: 'dianne.r@example.com',
            phone: '123-456-7890'
        }
    };

    // Dummy setAction function for demonstration purposes
    // In a real application, this would be passed as a prop from a parent component
    const dummySetAction = (action: string) => {
        console.log('Action set to:', action);
        // You would likely update a state or call an API here
    };

    return (
        <Card className="mb-3 border rounded-0 shadow-none">
            <CardHeader onClick={toggle} style={{ cursor: 'pointer' }} className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Secondary Inspection</h6>
                <div className="d-flex align-items-center">
                    <span className="badge bg-success text-light me-2">Pending</span>
                    <i className={isOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"} style={{ fontSize: '1.25rem' }}></i>
                </div>
            </CardHeader>
            <Collapse isOpen={isOpen}>
                <CardBody>
                    <Row className="mb-2">
                        <Col xs={4}>Status</Col>
                        <Col xs={8} className="text-end">
                            <span className="badge rounded-pill bg-success text-light">{inspectionData.status}</span>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col xs={4}>Date</Col>
                        <Col xs={8} className="text-end">{inspectionData.date}</Col>
                    </Row>
                    <Row className="mb-2">
                        <Col xs={4}>Payment</Col>
                        <Col xs={8} className="text-end">
                            {inspectionData.payment}
                        </Col>
                    </Row>
                    <Row className="mb-2 text-end">
                        <a href="#" className="ms-2 text-primary text-decoration-underline">View Details</a>
                    </Row>
                    {/* Inspector Box */}
                    <div className="mb-3">
                        <div className="mb-3">
                            <h6 className="mb-3">Inspector</h6>
                            <div className="border mb-0 d-flex align-items-center p-2" style={{ minHeight: '56px' }}>
                                <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                                    {/* Placeholder for avatar */}
                                </div>
                                <span className="ms-2 flex-grow-1" style={{ fontWeight: 500 }}>{inspectionData.inspector.name}</span>
                                <i className="ri-phone-line" style={{ fontSize: '1.25rem' }}></i>
                            </div>
                        </div>
                        <Button className="w-100 rounded-0" color="success" style={{ fontWeight: 500 }} onClick={toggleAssignModal}>
                            Change Inspector
                        </Button>
                    </div>
                    {/* Inspection Report Section */}
                    <div className="mb-3">
                        <h6 className="mb-3">Inspection Report</h6>
                        <div className="d-flex align-items-center mb-3">
                            <div className="rounded-circle bg-light d-flex justify-content-center align-items-center me-3" style={{ width: '48px', height: '48px' }}>
                                <i className="ri-file-text-line" style={{ fontSize: '2rem', color: '#222' }}></i>
                            </div>
                            <div className="flex-grow-1">
                                <div >Inspection Report</div>
                                <div >123 KBs</div>
                            </div>
                            <div>
                                <i className="ri-download-cloud-line" style={{ fontSize: '1.5rem', color: '#222', cursor: 'pointer' }}></i>
                            </div>
                        </div>
                        {/* Call to Action */}
                        <div
                            className="d-flex flex-column p-3 rounded mb-3"
                            style={{ background: '#f7f8fa', maxWidth: 400 }}
                        >
                            <div className="d-flex align-items-center mb-1">
                                <div
                                    className="rounded-circle d-flex justify-content-center align-items-center me-2"
                                    style={{
                                        width: 28,
                                        height: 28,
                                        background: '#f3f4f6',
                                        border: '1px solid #d1d5db',
                                    }}
                                >
                                    <i className="ri-error-warning-line" style={{ fontSize: 18, color: '#222' }}></i>
                                </div>
                                <span className="fw-bold" style={{ fontSize: 18 }}>Call to Action</span>
                            </div>
                            <div style={{ fontSize: 17, lineHeight: 1.3 }}>
                                Insufficient data provided in the<br />report
                            </div>
                        </div>
                        <h6 className="mb-3">Updated Report</h6>

                        <div className="d-flex align-items-center mb-3">
                            <div className="rounded-circle bg-light d-flex justify-content-center align-items-center me-3" style={{ width: '48px', height: '48px' }}>
                                <i className="ri-file-text-line" style={{ fontSize: '2rem', color: '#222' }}></i>
                            </div>
                            <div className="flex-grow-1">
                                <div >Inspection Report</div>
                                <div >123 KBs</div>
                            </div>
                            <div>
                                <i className="ri-download-cloud-line" style={{ fontSize: '1.5rem', color: '#222', cursor: 'pointer' }}></i>
                            </div>
                        </div>
                        {/* <Button className="w-100 rounded-0 mb-2" color="success" style={{ fontWeight: 500 }} onClick={() => setTransactionModalOpen(true)}>
                            Approve
                        </Button>
                        <Button className="w-100 rounded-0" color="danger" style={{ fontWeight: 500 }} onClick={() => { setUpdatesModalOpen(true)}}>
                            Call to Action
                        </Button> */}
                    </div>
                </CardBody>
            </Collapse>
            {/* Assign Inspector Modal */}
            <AssignInspectorModal isOpen={isAssignModalOpen} toggle={toggleAssignModal} setAction={dummySetAction} />
        </Card>
    );
};

export default SecondaryInspectionDetailCard;