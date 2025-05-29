import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane, Table, Input, Badge, Pagination, PaginationItem, PaginationLink, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classnames from 'classnames';
import EditBuilderModal from './EditBuilderModal';
import { useNavigate } from 'react-router-dom';
import { builderData } from 'common/data/builder';

type StatusType = 'Active' | 'Suspended' | 'Rejected';

const statusColor: Record<StatusType, string> = {
    'Active': 'secondary',
    'Suspended': 'warning',
    'Rejected': 'danger',
};

const BuilderTable = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const filteredData = builderData.filter(row =>
        row.name.toLowerCase().includes(search.toLowerCase()) ||
        row.email.toLowerCase().includes(search.toLowerCase()) ||
        row.phone.toLowerCase().includes(search.toLowerCase())
    );

    const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const totalPages = Math.ceil(filteredData.length / pageSize);

    const handleEdit = (user: any) => {
        setSelectedUser(user);
        setEditModalOpen(true);
    };

    const navigate = useNavigate();

    return (
        <Card className="mt-1">
            <CardHeader className="bg-#1a1d21 border-bottom-0 pb-0">
                <Row className="align-items-center">
                    <Col md={6}>
                        <h5 className="card-title mt-2">Manage Builder</h5>
                    </Col>
                </Row>
                <hr className="mt-3" />
                <Row className="justify-content-between align-items-center">
                    <Col md={6} className="mt-3">
                        <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3">
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => setActiveTab('1')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Approved
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => setActiveTab('2')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Pending
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => setActiveTab('3')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Rejected
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md={6} className="text-end">
                        <Input
                            type="search"
                            placeholder="Search"
                            value={search}
                            onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
                            style={{ maxWidth: 300, display: 'inline-block', background: '#1a1d21', border: '1px solid #e5e7eb' }}
                            className="rounded-2 px-4 py-2"
                        />
                    </Col>
                </Row>
            </CardHeader>
            <CardBody className="pt-0">
                <TabContent activeTab={activeTab} className="pt-3">
                    <TabPane tabId="1">
                        <div className="table-responsive">
                            <Table className="align-middle table-nowrap mb-0" style={{ minWidth: 900 }}>
                                <thead>
                                    <tr>
                                        <th>ID <span style={{ fontSize: '1rem', verticalAlign: 'middle' }}></span></th>
                                        <th>Name <span style={{ fontSize: '1rem', verticalAlign: 'middle' }}></span></th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedData.map((row, idx) => (
                                        <tr key={idx}>
                                            <td>{row.id}</td>
                                            <td>{row.name}</td>
                                            <td>{row.email}</td>
                                            <td>{row.phone}</td>
                                            <td>{row.created}</td>
                                            <td>{row.updated}</td>
                                            <td>
                                                <Badge color={statusColor[row.status as StatusType] || 'secondary'} pill style={{ fontWeight: 500, fontSize: 14, background: row.status === 'Active' ? '#f3f4f6' : '#fef3c7', color: row.status === 'Active' ? '#6b7280' : '#b45309', border: 'none' }}>{row.status}</Badge>
                                            </td>
                                            <td>
                                                <UncontrolledDropdown direction="start">
                                                    <DropdownToggle tag="span" data-bs-toggle="dropdown" aria-expanded={false} style={{ cursor: 'pointer' }}>
                                                        <i className="ri-more-2-fill" style={{ fontSize: 20, color: '#6b7280' }}></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem onClick={() => navigate(`/builder-detail/${row.id}`)}>
                                                            <i className="ri-eye-line me-2"></i> View Details
                                                        </DropdownItem>
                                                        <DropdownItem onClick={() => handleEdit(row)}>
                                                            <i className="ri-edit-line me-2"></i> Edit Builder
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div className="text-muted" style={{ fontSize: 15 }}>
                                Showing {paginatedData.length} of {filteredData.length} Entries
                            </div>
                            <Pagination className="mb-0">
                                <PaginationItem disabled={currentPage === 1}>
                                    <PaginationLink previous onClick={() => setCurrentPage(currentPage - 1)} />
                                </PaginationItem>
                                {[...Array(totalPages)].map((_, i) => (
                                    <PaginationItem active={currentPage === i + 1} key={i}>
                                        <PaginationLink onClick={() => setCurrentPage(i + 1)}>{i + 1}</PaginationLink>
                                    </PaginationItem>
                                ))}
                                <PaginationItem disabled={currentPage === totalPages}>
                                    <PaginationLink next onClick={() => setCurrentPage(currentPage + 1)} />
                                </PaginationItem>
                            </Pagination>
                        </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <div className="text-center py-5 text-muted">No Pending Data</div>
                    </TabPane>
                    <TabPane tabId="3">
                        <div className="text-center py-5 text-muted">No Rejected Data</div>
                    </TabPane>
                </TabContent>
            </CardBody>
            <EditBuilderModal isOpen={editModalOpen} toggle={() => setEditModalOpen(false)} user={selectedUser} />
        </Card>
    );
};

export default BuilderTable; 