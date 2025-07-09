import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col, Card, CardHeader, CardBody, Collapse } from 'reactstrap';

interface ViewDetailTransactionDetailModalProps {
    isOpen: boolean;
    toggle: () => void;
}

const ViewDetailTransactionDetailModal: React.FC<ViewDetailTransactionDetailModalProps> = ({ isOpen, toggle }) => {
    const [openCollapse, setOpenCollapse] = useState(true);
    const toggleCollapse = () => setOpenCollapse(!openCollapse);

    return (
        <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
            <ModalHeader toggle={toggle} className="fw-bold">Transaction Details</ModalHeader>
            <ModalBody className="pt-0 pb-2 px-3 px-md-4">
                <hr className="mt-3" />
                <Row className="mb-4">
                    <Col xs={6}>
                        <div className="fw-bold mb-2">Payment</div>
                        <div className="mb-1"><span className="fw-bold">Purpose</span><br />Inspection Report</div>
                    </Col>
                    <Col xs={6} className="text-end">
                        <div className="fw-bold mb-2">Property Details</div>
                        <div><a href="#" className="fw-normal text-dark" style={{ textDecoration: 'underline' }}>8502 Preston Rd.</a></div>
                        <div>Inglewood, Maine 98380</div>
                    </Col>
                </Row>
                <div className="border rounded mb-3" style={{ overflow: "hidden" }}>
                    <table className="table mb-0">
                        <thead>
                            <tr className="bg-light">
                                <th className="fw-bold border-0" style={{ width: "50%" }}>Status</th>
                                <th className="text-end border-0">
                                    <span className="badge rounded-pill bg-success px-3 py-2" style={{ fontWeight: 500 }}>Paid</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fw-bold border-0">Amount Due</td>
                                <td className="text-end border-0">$30,550</td>
                            </tr>
                            <tr>
                                <td className="fw-bold border-0">Payment Method</td>
                                <td className="text-end border-0">Bank Transfer</td>
                            </tr>
                            <tr>
                                <td className="fw-bold border-0">User</td>
                                <td className="text-end border-0">Robert Fox</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Payment Summary Card with Collapse */}
                <Card className="mb-0 border">
                    <CardHeader
                        onClick={toggleCollapse}
                        style={{ cursor: 'pointer', background: '#f7f8fa' }}
                        className="d-flex justify-content-between align-items-center p-3"
                    >
                        <span className="fw-bold text-dark">Payment Summary</span>
                        <i className={`ri-arrow-${openCollapse ? 'up' : 'down'}-s-line`} style={{ fontSize: '1.25rem' }}></i>
                    </CardHeader>
                    <Collapse isOpen={openCollapse}>
                        <CardBody className="p-2">
                            <table className="table mb-0">
                                <tbody>
                                    <tr>
                                        <td className="fw-bold border-0" style={{width: '60%'}}>Asking Price</td>
                                        <td className="text-end border-0" style={{width: '40%'}}>$20,000</td>
                                    </tr>
                                    <tr><td colSpan={2}><hr className="my-2" /></td></tr>
                                    <tr>
                                        <td className="border-0">Inspection Report</td>
                                        <td className="text-end border-0">$100</td>
                                    </tr>
                                    <tr>
                                        <td className="border-0">Rental Agreement</td>
                                        <td className="text-end border-0">1.00%</td>
                                    </tr>
                                    <tr>
                                        <td className="border-0">Taxes & Duty</td>
                                        <td className="text-end border-0">0.25%</td>
                                    </tr>
                                    <tr>
                                        <td className="border-0">Identity Verification</td>
                                        <td className="text-end border-0">0.25%</td>
                                    </tr>
                                    <tr>
                                        <td className="border-0">Transport & Logistics</td>
                                        <td className="text-end border-0">0.25%</td>
                                    </tr>
                                    <tr>
                                        <td className="border-0">RealWealthy Fees</td>
                                        <td className="text-end border-0">4.00%</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold border-0">Total</td>
                                        <td className="text-end border-0">6.00%</td>
                                    </tr>
                                    <tr><td colSpan={2}><hr className="my-2" /></td></tr>
                                    <tr>
                                        <td className="fw-bold border-0">Fees</td>
                                        <td className="text-end border-0">$1,200</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold border-0">Total Expense</td>
                                        <td className="text-end border-0">$21,200</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold border-0">Remaining Balance</td>
                                        <td className="text-end border-0">$20,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </CardBody>
                    </Collapse>
                </Card>
            </ModalBody>
            <ModalFooter className="justify-content-end">
                <Button color="danger" onClick={toggle}>Cancel</Button>
                <Button color="success" onClick={toggle}>Make Payment</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ViewDetailTransactionDetailModal; 