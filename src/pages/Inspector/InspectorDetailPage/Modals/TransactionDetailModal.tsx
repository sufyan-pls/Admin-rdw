import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

interface TransactionDetailsModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const TransactionDetailsModal: React.FC<TransactionDetailsModalProps> = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
      <ModalHeader toggle={toggle} className="fw-bold">Transaction Details</ModalHeader>
      <ModalBody className="pt-0 pb-2 px-3 px-md-4">
        <hr className="mt-3 mb-4" />
        {/* Top Row: Payment Info */}
        <div className="mb-4">
          <div className="fw-bold mb-2">Payment</div>
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ verticalAlign: 'top', width: '33%' }}>
                  <div className="fw-semibold mb-1">Transaction ID</div>
                  <div>817491036</div>
                </td>
                <td style={{ verticalAlign: 'top', width: '33%' }}>
                  <div className="fw-semibold mb-1">Invoice No.</div>
                  <div>#91734</div>
                </td>
                <td style={{ verticalAlign: 'top', width: '34%', textAlign: 'right' }}>
                  <div className="fw-semibold mb-1">Property Details</div>
                  <div>
                    <a href="#" className="fw-normal text-dark text-decoration-underline">8502 Preston Rd.</a><br />
                    <span className="d-block">Inglewood, Maine 98380</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Status and Details Card */}
        <div className="border rounded mb-0">
          <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom" style={{ background: '#f6f7f9' }}>
            <span className="fw-semibold">Status</span>
            <span className="badge rounded-pill bg-success text-white px-3 py-1" >Paid</span>
          </div>
          <table className="w-100" style={{ fontSize: '1rem' }}>
            <tbody>
              <tr>
                <td className="fw-semibold px-4 py-3" style={{ width: '50%' }}>Amount</td>
                <td className="text-end px-4 py-3" style={{ width: '50%' }}>$100</td>
              </tr>
              <tr>
                <td className="fw-semibold px-4 py-3">Inspection Type</td>
                <td className="text-end px-4 py-3">Company</td>
              </tr>
              <tr>
                <td className="fw-semibold px-4 py-3">Payment Method</td>
                <td className="text-end px-4 py-3">Bank Transfer</td>
              </tr>
              <tr>
                <td className="fw-semibold px-4 py-3 align-top">Inspector</td>
              </tr>
              <tr>
              <td className="px-4 py-3">
                  <div className="border rounded d-flex align-items-center justify-content-between p-2 w-full" style={{ minHeight: '56px', width: '100%' }}>
                    <div className="rounded-circle" style={{ background: '#d6d8d9', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                    <span style={{ fontWeight: 500, marginLeft: 16, marginRight: 'auto' }}>Dianne Russell</span>
                    <i className="ri-phone-line" style={{ fontSize: '1.25rem' }}></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ModalBody>
      <ModalFooter className="justify-content-end">
        <Button color='danger' onClick={toggle} className='rounded-0'>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default TransactionDetailsModal; 