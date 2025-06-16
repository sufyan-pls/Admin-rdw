import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col } from 'reactstrap';

interface TransactionDetailsModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const TransactionDetailsModal: React.FC<TransactionDetailsModalProps> = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
      <ModalHeader toggle={toggle} className="fw-bold">Transaction Details</ModalHeader>
      <ModalBody className="pt-0 pb-2 px-3 px-md-4">
      <hr className="mt-3"/>
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
        <div className="border rounded mb-4">
          <Row className="align-items-center p-3 mx-1" style={{ background: '#f7f8fa' }}>
            <Col xs={6} className="fw-bold">Status</Col>
            <Col xs={6} className="text-end">
              <span className="badge bg-light text-dark px-3 py-1" style={{ fontWeight: 500 }}>Pending</span>
            </Col>
          </Row>
          <Row className="p-3 align-items-center">
            <Col xs={6} className="fw-bold">Amount Due</Col>
            <Col xs={6} className="text-end">$100</Col>
          </Row>
          <Row className="p-3 align-items-center">
            <Col xs={6} className="fw-bold">Inspection Type</Col>
            <Col xs={6} className="text-end">Company</Col>
          </Row>
          <Row className="p-3 align-items-center">
            <Col xs={6} className="fw-bold">Payment Method</Col>
            <Col xs={6} className="text-end">Bank Transfer</Col>
          </Row>
          <Row className="p-3 d-flex flex-column gap-2">
            <Col xs={6} className="fw-bold">Inspector</Col>
            <Col xs={6} >
              <div className="border rounded d-flex align-items-center p-2" style={{ minHeight: '56px' }}>
                <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}></div>
                <span className="ms-2 flex-grow-1" style={{ fontWeight: 500 }}>Dianne Russell</span>
                <i className="ri-phone-line" style={{ fontSize: '1.25rem' }}></i>
              </div>
            </Col>
          </Row>
        </div>
      </ModalBody>
      <ModalFooter className="justify-content-end">
        <Button color="danger"  onClick={toggle}>Cancel</Button>
        <Button color="success" onClick={toggle}>Make Payment</Button>
      </ModalFooter>
    </Modal>
  );
};

export default TransactionDetailsModal; 