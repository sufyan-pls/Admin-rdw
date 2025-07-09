import React from 'react';
import {
    Modal, ModalHeader, ModalBody, ModalFooter,
    Row, Col, Form, FormGroup, Label, Input, Button, Badge
} from 'reactstrap';

const EditBuilderModal = ({ isOpen, toggle, user }: any) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle} size="lg" centered backdrop="static" className="edit-user-modal">
            <ModalHeader toggle={toggle} className="border-bottom-0 pb-0">Edit Builder</ModalHeader>
            <ModalBody className="pt-0 pb-2 px-4">
                {/* Image Upload Area */}
                <div className="bg-light d-flex flex-column align-items-center justify-content-center position-relative mb-4" style={{ height: 140, borderRadius: 0, border: 'none' }}>
                    <div className="position-absolute end-0 top-0 p-2">
                        <Button color="link" className="p-0 text-muted"><i className="ri-pencil-line"></i></Button>
                    </div>
                    <div className="rounded-circle bg-white d-flex align-items-center justify-content-center position-relative" style={{ width: 90, height: 90, border: '1px solid #e5e7eb', marginTop: 20 }}>
                        <i className="ri-image-line" style={{ fontSize: 32, color: '#bdbdbd' }}></i>
                        <Button color="link" className="position-absolute bottom-0 end-0 p-0" style={{ transform: 'translate(25%, 25%)' }}><i className="ri-pencil-line"></i></Button>
                    </div>
                </div>

                {/* Basic Info */}
                <div className="fw-semibold mb-3" style={{ fontSize: 17 }}>Basic Info</div>
                <Form>
                    <Row className="gy-3">
                        <Col md={4}>
                            <FormGroup className="mb-2">
                                <Label className="mb-1">First Name</Label>
                                <Input type="text" defaultValue={user?.firstName || ''} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup className="mb-2">
                                <Label className="mb-1">Last Name</Label>
                                <Input type="text" defaultValue={user?.lastName || ''} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup className="mb-2">
                                <Label className="mb-1">Email</Label>
                                <Input type="email" defaultValue={user?.email || ''} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup className="mb-2">
                                <Label className="mb-1">Phone Number</Label>
                                <Input type="text" defaultValue={user?.phone || ''} />
                            </FormGroup>
                        </Col>
                        <Col md={8}>
                            <FormGroup className="mb-2">
                                <Label className="mb-1">Location</Label>
                                <Input type="text" defaultValue={user?.location || ''} />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>

                {/* User Status */}
                <div className="fw-semibold mt-4 mb-2" style={{ fontSize: 17 }}>Builder Status</div>
                <Row className="align-items-center mb-3">
                    <Col md={6} className="mb-2 mb-md-0">
                        <FormGroup className="mb-0">
                            <Label className="mb-1">Account Status</Label>
                            <Input type="select" defaultValue={user?.accountStatus || 'Active'}>
                                <option>Active</option>
                                <option>Suspended</option>
                                <option>Rejected</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={6} className="text-md-end text-start mt-2 mt-md-0">
                        <Badge color="light" className="px-3 py-2 text-muted" style={{ fontWeight: 500, fontSize: 13, background: '#f3f4f6', border: 'none', letterSpacing: 1 }}>Approved</Badge>
                    </Col>
                </Row>

                {/* Security */}
                <div className="fw-semibold mt-4 mb-2" style={{ fontSize: 17 }}>Security</div>
                <Row className="align-items-center g-2">
                    <Col md={8} className="d-flex flex-column justify-content-end">
                        <FormGroup className="mb-0 w-100">
                            <Label className="mb-1">Update Password</Label>
                            <Input type="password" defaultValue={user?.password || ''} style={{ background: '#f4f8ff' }} />
                        </FormGroup>
                    </Col>
                    <Col md={4} className="d-flex align-items-center justify-content-end">
                        <Button color="light" className="w-100 h-100" style={{ background: '#f4f8ff', color: '#222', border: 'none' }}>Update</Button>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter className="border-top-0 pt-4 pb-3 px-4 justify-content-end">
                <Button color="light" onClick={toggle} style={{ minWidth: 100, marginRight: 8 }}>Cancel</Button>
                <Button color="primary" style={{ minWidth: 100 }}>Save</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditBuilderModal; 