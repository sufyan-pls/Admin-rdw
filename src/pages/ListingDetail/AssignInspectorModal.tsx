import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Nav, NavItem, NavLink, TabContent, TabPane, Input, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';

interface AssignInspectorModalProps {
  isOpen: boolean;
  toggle: () => void;
  setAction: (action: string) => void;
}

// Dummy Data for Employee and External Inspector
const employeeInspectors = [
  { id: 1, name: 'Dianne Russell', email: 'nathan.roberts@example.com' },
  { id: 2, name: 'Ronald Richards', email: 'michael.mitc@example.com' },
  { id: 3, name: 'Arlene McCoy', email: 'jackson.graham@example.com' },
  { id: 4, name: 'Brooklyn Simmons', email: 'debra.holt@example.com' },
];

const externalInspectors = [
  { id: 1, name: 'Arlene McCoy', email: 'jackson.graham@example.com' },
  { id: 2, name: 'Brooklyn Simmons', email: 'debra.holt@example.com' },
];

const AssignInspectorModal: React.FC<AssignInspectorModalProps> = ({ isOpen, toggle, setAction }) => {
  const [activeTab, setActiveTab] = useState('1'); // '1' for Employee, '2' for External Inspector

  const handleAssign = () => {
    setAction('Make Live');
    toggle(); // Close the modal
  };

  const toggleTab = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle} >Assign Inspector </ModalHeader>
      <ModalBody>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <Input type="text" placeholder="Inglewood, Maine 98380" />
        </div>
        <hr className="mb-4 mt-4"/> {/* Divider Line */}

        <h6 className="mb-3">Select Inspector</h6>

        <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              style={{cursor: 'pointer'}}
              onClick={() => { toggleTab('1'); }}
            >
              Employee
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              style={{cursor: 'pointer'}}
              onClick={() => { toggleTab('2'); }}
            >
              External Inspector
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            {employeeInspectors.map((inspector) => (
              <div key={inspector.id} className="py-2 px-3 border rounded mb-3">
                <Row className="d-flex align-items-center g-0">
                  <Col xs={9}>
                    <div className="d-flex align-items-center" style={{ gap: '3px' }}>
                      <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', overflow: 'hidden' }}>
                        <img src={`https://i.pravatar.cc/50?img=${inspector.id + 1}`} alt={inspector.name} className="rounded-circle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div>
                        <h6 className="mb-0">{inspector.name}</h6>
                        <p className="text-muted mb-0 mt-0" style={{ lineHeight: '1' }}><small>{inspector.email}</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={3} className="text-end">
                    <Button color="light" onClick={handleAssign}>Assign</Button>
                  </Col>
                </Row>
              </div>
            ))}
          </TabPane>
          <TabPane tabId="2">
            {externalInspectors.map((inspector) => (
              <div key={inspector.id} className="py-2 px-3 border rounded mb-3">
                <Row className="d-flex align-items-center g-0">
                  <Col xs={9}>
                    <div className="d-flex align-items-center" style={{ gap: '3px' }}>
                      <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', overflow: 'hidden' }}>
                        <img src={`https://i.pravatar.cc/50?img=${inspector.id + 5}`} alt={inspector.name} className="rounded-circle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div>
                        <h6 className="mb-0">{inspector.name}</h6>
                        <p className="text-muted mb-0 mt-0" style={{ lineHeight: '1' }}><small>{inspector.email}</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={3} className="text-end">
                    <Button color="light" onClick={handleAssign}>Assign</Button>
                  </Col>
                </Row>
              </div>
            ))}
          </TabPane>
        </TabContent>
        <div className="d-flex justify-content-end mt-4">
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AssignInspectorModal; 