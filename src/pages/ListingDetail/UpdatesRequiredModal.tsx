import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input } from 'reactstrap';

interface UpdatesRequiredModalProps {
  isOpen: boolean;
  toggle: () => void;
  setCallToAction: (callToAction: boolean) => void;
}

const reasonOptions = [
  'Inspection Incomplete',
  'Insufficient data provided in the report',
  'Additional Information required on Inspection Report',
  'Some sections require additional information or clarification.',
  'Others',
];

const UpdatesRequiredModal: React.FC<UpdatesRequiredModalProps> = ({ isOpen, toggle, setCallToAction }) => {
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle} className="fw-bold">Updates required</ModalHeader>
      <ModalBody className="pt-0 pb-2 px-3 px-md-4">
        <hr className="mt-3"/>
        <FormGroup className="mb-4">
          <Label className="fw-bold mb-2">Select Reason</Label>
          <Input
            type="select"
            value={selectedReason}
            onChange={e => setSelectedReason(e.target.value)}
            style={{ height: 48, fontSize: 16 }}
          >
            <option value="" disabled>Select Reason</option>
            {reasonOptions.map((reason, idx) => (
              <option key={idx} value={reason}>{reason}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label className="fw-bold mb-2">Write Reason</Label>
          <Input
            type="textarea"
            rows={5}
            placeholder="write custom reason..."
            value={customReason}
            onChange={e => setCustomReason(e.target.value)}
            style={{ fontSize: 16, resize: 'none' }}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter className="justify-content-end">
        <Button color="danger" onClick={toggle}>Cancel</Button>
        <Button color="success" onClick={() => { setCallToAction(true); toggle() }}>Request Revision</Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdatesRequiredModal; 