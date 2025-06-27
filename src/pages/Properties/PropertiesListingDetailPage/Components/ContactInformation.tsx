import React from 'react';
import { Row, Col, Input } from 'reactstrap';
import { PhoneInput as InternationalPhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

// Dummy data (replace with your API/backend data)
const contactData = {
  firstName: 'James',
  lastName: 'Will',
  hideMyName: true,
  email: 'jameswill@email.com',
  phone: '+123456789012',
  contactPreference: 'Phone'
};

const ContactInformation = () => {
  const [phone, setPhone] = React.useState(contactData.phone);

  return (
    <div className='mb-3'>
      <Row className="mb-3">
        <Col md={6} className="mb-3 mb-md-0">
          <label className="form-label">First Name</label>
          <Input type="text" value={contactData.firstName} readOnly />
        </Col>
        <Col md={6}>
          <label className="form-label">Last Name</label>
          <Input type="text" value={contactData.lastName} readOnly />
        </Col>
      </Row>

      {contactData.hideMyName && (
        <Row className="mb-3">
          <Col xs={12} className="d-flex align-items-center" style={{ fontSize: 18 }}>
            <i className="ri-check-line me-2" style={{ fontSize: 22 }}></i>
            <span>Hide My Name</span>
          </Col>
        </Row>
      )}

      <Row className="mb-3">
        <Col md={6} className="mb-3 mb-md-0">
          <label className="form-label">Email Address</label>
          <Input type="email" value={contactData.email} readOnly />
        </Col>
        <Col md={6}>
          <label className="form-label">Phone Number</label>
          <InternationalPhoneInput
            value={phone}
            onChange={setPhone}
            inputClassName="form-control"
            disabled
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <label className="form-label">Contact Preference</label>
          <Input type="text" value={contactData.contactPreference} readOnly />
        </Col>
      </Row>
    </div>
  );
};

export default ContactInformation;