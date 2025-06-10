import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Badge,
} from "reactstrap";

const VerifiedDocumentViewModal = ({ isOpen, toggle, agreement }: any) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      size="xl"
      centered
      backdrop="static"
      className="edit-user-modal"
    >
      <ModalHeader toggle={toggle} className="border-bottom-0 mb-4">
        Agreement to Sell Property
      </ModalHeader>
      <ModalBody className="pt-0 pb-2 px-4">
        {/* Document Header */}
        <div className="bg-light p-3 mb-4 rounded">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">Property Sale Agreement</h5>
              <small className="text-muted">
                Legal Document - Property Transaction
              </small>
            </div>
            <Badge color="success" className="px-3 py-2">
              Active Agreement
            </Badge>
          </div>
        </div>

        {/* Sale and Purchase Information */}
        <div className="fw-semibold mb-3" style={{ fontSize: 17 }}>
          1. Sale and Purchase Parties
        </div>
        <Form>
          <Row className="gy-3 mb-4">
            <Col md={6}>
              <FormGroup className="mb-2">
                <Label className="mb-1">Seller Name</Label>
                <Input type="text" defaultValue="Christina Sunday" readOnly />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-2">
                <Label className="mb-1">Buyer Name</Label>
                <Input type="text" defaultValue="Abigail Wealth" readOnly />
              </FormGroup>
            </Col>
          </Row>
        </Form>

        {/* Property Details */}
        <div className="fw-semibold mb-3" style={{ fontSize: 17 }}>
          Property Information
        </div>
        <Form>
          <Row className="gy-3 mb-4">
            <Col md={12}>
              <FormGroup className="mb-2">
                <Label className="mb-1">Property Address</Label>
                <Input
                  type="text"
                  defaultValue="573 Westlake Blv, Malibu, CA 90265"
                  readOnly
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup className="mb-2">
                <Label className="mb-1">Included Items</Label>
                <Input
                  type="textarea"
                  rows={3}
                  defaultValue="All existing improvements and attached items, including fixtures, built-in furnishings, appliances (range(s), microwaves, refrigerators, dishwasher(s), window HVAC unit(s), washers, dryers), ceiling fan(s), light fixtures, attached wall-to-wall carpeting, rods, draperies and other window treatments"
                  readOnly
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>

        {/* Purchase Price Details */}
        <div className="fw-semibold mb-3" style={{ fontSize: 17 }}>
          2. Purchase Price Breakdown
        </div>
        <Form>
          <Row className="gy-3 mb-4">
            <Col md={6}>
              <FormGroup className="mb-2">
                <Label className="mb-1">Total Purchase Price</Label>
                <Input type="text" defaultValue="$12,995,000" readOnly />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-2">
                <Label className="mb-1">Earnest Money Deposit</Label>
                <Input
                  type="text"
                  defaultValue="$1,299,500 (Refundable)"
                  readOnly
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-2">
                <Label className="mb-1">Additional Deposit</Label>
                <Input type="text" defaultValue="$50,000" readOnly />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-2">
                <Label className="mb-1">Subject to Existing Liens</Label>
                <Input type="text" defaultValue="$11,645,500" readOnly />
              </FormGroup>
            </Col>
          </Row>
        </Form>

        {/* Financing Terms */}
        <div className="fw-semibold mb-3" style={{ fontSize: 17 }}>
          3. Financing Terms
        </div>
        <Form>
          <Row className="gy-3 mb-4">
            <Col md={12}>
              <FormGroup className="mb-2">
                <Label className="mb-1">Financing Period</Label>
                <Input
                  type="textarea"
                  rows={2}
                  defaultValue="Buyer shall have the same number of days as the Closing Date to obtain financing. Buyer may cancel due to dissatisfaction with due diligence or inability to obtain financing."
                  readOnly
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>

        {/* Closing Information */}
        <div className="fw-semibold mb-3" style={{ fontSize: 17 }}>
          4. Closing Date & Occupancy
        </div>
        <Form>
          <Row className="gy-3 mb-4">
            <Col md={6}>
              <FormGroup className="mb-2">
                <Label className="mb-1">Closing Date</Label>
                <Input type="text" placeholder="To be determined" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-2">
                <Label className="mb-1">Extension Rights</Label>
                <Input
                  type="text"
                  defaultValue="Up to 3 months unilateral extension"
                  readOnly
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup className="mb-2">
                <Label className="mb-1">Occupancy Terms</Label>
                <Input
                  type="textarea"
                  rows={2}
                  defaultValue="Property shall be unoccupied at closing. Seller to remove all personal items and deliver keys, garage door openers, and access codes."
                  readOnly
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>

        {/* Closing Costs */}
        <div className="fw-semibold mb-3" style={{ fontSize: 17 }}>
          5. Closing Costs Allocation
        </div>
        <Row className="mb-4">
          <Col md={6}>
            <div className="border rounded p-3">
              <h6 className="text-primary mb-3">Seller Responsibilities</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">• Recording deed fees</li>
                <li className="mb-2">• Title cure documents</li>
                <li className="mb-2">• Buyer's title insurance</li>
                <li className="mb-2">• Warranted item repairs</li>
                <li className="mb-2">• Permit-related costs</li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="border rounded p-3">
              <h6 className="text-success mb-3">Buyer Responsibilities</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">• Loan expenses</li>
                <li className="mb-2">• Lender's title policy</li>
                <li className="mb-2">• Inspections</li>
                <li className="mb-2">• Insurance premiums</li>
                <li className="mb-2">• Recording fees on mortgages</li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Agreement Status */}
        <div className="fw-semibold mb-3" style={{ fontSize: 17 }}>
          Agreement Status
        </div>
        <Row className="align-items-center mb-3">
          <Col md={6} className="mb-2 mb-md-0">
            <FormGroup className="mb-0">
              <Label className="mb-1">Document Status</Label>
              <Input type="select" defaultValue="Draft">
                <option>Draft</option>
                <option>Under Review</option>
                <option>Executed</option>
                <option>Completed</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6} className="text-md-end text-start mt-2 mt-md-0">
            <Badge
              color="warning"
              className="px-3 py-2"
              style={{
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: 1,
              }}
            >
              Pending Execution
            </Badge>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter className="border-top-0 pt-4 pb-3 px-4 justify-content-end">
        <Button
          color="light"
          onClick={toggle}
          style={{ minWidth: 100, marginRight: 8 }}
        >
          Close
        </Button>
        <Button color="primary" style={{ minWidth: 100 }}>
          Download PDF
        </Button>
        <Button color="success" style={{ minWidth: 100, marginLeft: 8 }}>
          Execute Agreement
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default VerifiedDocumentViewModal;
