import React, { useState } from 'react';
import { Card, CardBody, Row, Col, Badge, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import EditBuilderModal from './EditBuilderModal';

const BasicInformation = () => {
    const [status, setStatus] = useState('Active');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    // Dummy data
    const info = {
        avatar: '',
        realtor: 'realtor@email.com',
        approved: true,
        builderId: '#876',
        phone: '(684) 555-0102',
        taxId: '723748191027',
        createdAt: 'Jan 04, 2024 12:30 PM',
    };

    const handleEdit = (user: any) => {
        setSelectedUser(user);
        setEditModalOpen(true);
    };

    return (
        <Card className="mb-3 " style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
            <CardBody className="pb-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="fw-semibold" style={{ fontSize: 18 }}>Basic Information</div>
                    <Button color="link" className="text-muted d-flex align-items-center" style={{ fontSize: 15 }} onClick={() => handleEdit(info)}>
                        Edit <i className="ri-pencil-line ms-1 text-muted"></i>
                    </Button>
                </div>
                <hr className="mt-0 mb-3" />
                <div className="align-items-center justify-content-start" style={{ gap: 40, display: 'flex', flexDirection: 'row' }}>
                    <div className="d-flex flex-row " style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'start', gap: 20 }}>
                        <div className="rounded-circle bg-secondary bg-opacity-25" style={{ width: 70, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="ri-user-3-line" style={{ fontSize: 38, color: '#ced4da' }}></i>
                        </div>
                        <div className="d-flex flex-row mt-3" style={{ gap: 20 }}>
                            <div >
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start' }}><span className="fw-semibold" style={{ fontSize: 16 }}>Realtor </span>{info.approved && <Badge color="success" className="ms-2 px-2 py-1 text-muted" style={{ fontWeight: 500, fontSize: 13, background: '#f3f4f6', border: 'none' }}>Approved</Badge>}</div>
                                <span className="text-muted" style={{ fontSize: 15 }}>{info.realtor}</span>
                            </div>
                            <div >
                                <span className="fw-semibold" style={{ fontSize: 16 }}>Builder ID</span>
                                <p className="text-muted" style={{ fontSize: 15 }}>{info.builderId}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Row className="align-items-center" style={{ gap: 50 }}>
                            <Col className="d-flex flex-column">
                                <span className="fw-semibold" style={{ fontSize: 16, whiteSpace: 'nowrap' }}>Phone Number</span>
                                <span className="text-muted" style={{ fontSize: 15, whiteSpace: 'nowrap' }}>{info.phone}</span>
                            </Col>
                            <Col className="d-flex flex-column">
                                <span className="fw-semibold" style={{ fontSize: 16, whiteSpace: 'nowrap' }}>Tax Identification Number</span>
                                <span className="text-muted" style={{ fontSize: 15, whiteSpace: 'nowrap' }}>{info.taxId}</span>
                            </Col>
                            <Col className="d-flex flex-column">
                                <span className="fw-semibold" style={{ fontSize: 16, whiteSpace: 'nowrap' }}>Created At</span>
                                <span className="text-muted" style={{ fontSize: 15, whiteSpace: 'nowrap' }}>{info.createdAt}</span>
                            </Col>
                            <Col className="d-flex flex-column mt-2">
                                <span className="fw-semibold" style={{ fontSize: 16, whiteSpace: 'nowrap' }}>Status</span>
                                <div className="d-flex align-items-center">
                                    <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)} direction="down">
                                        <DropdownToggle
                                            caret
                                            color="light"
                                            className="w-100 text-start px-2 py-1"
                                            style={{
                                                fontWeight: 500,
                                                fontSize: 15,
                                                border: '1px solid ', // Yeh line add kar dein
                                                borderRadius: 6
                                            }}
                                        >
                                            {status}
                                        </DropdownToggle>
                                        <DropdownMenu end style={{ minWidth: 130 }}>
                                            <DropdownItem onClick={() => setStatus('Active')}>Active</DropdownItem>
                                            <DropdownItem onClick={() => setStatus('Suspended')}>Suspended</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </CardBody>
            <EditBuilderModal isOpen={editModalOpen} toggle={() => setEditModalOpen(false)} user={selectedUser} />
        </Card>
    );
};

export default BasicInformation;
