import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Input, Nav, NavItem, NavLink, Row } from 'reactstrap';
import ForRentListings from './ForRentListings';
import { forRentListings, inspectionsData, refundData } from 'common/data/Dashboard';
import ForSaleListings from './ForSaleListings';
import InspectionListing from './InspectionListing';
import RefundsListing from './RefundsListing';


const Payments = () => {
    const [activeTab, setActiveTab] = useState('inspections');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 7000);
    }, []);

    return (
        <Card>
            <CardBody>
                <Row className="align-items-center">
                    <Col>
                        <Nav pills className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3">
                            <NavItem>
                                <NavLink
                                    active={activeTab === 'inspections'}
                                    onClick={() => setActiveTab('inspections')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Inspections
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={activeTab === 'refunds'}
                                    onClick={() => setActiveTab('refunds')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Refunds
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md={6} className="text-end">
                        <Input
                            type="text"
                            placeholder="Search"
                            className="rounded-2  py-2 mb-3"
                            style={{ maxWidth: 300, display: 'inline-block', border: '1px solid #e5e7eb' }}
                        />
                    </Col>
                </Row>
                <div>
                    {activeTab === 'inspections' && <InspectionListing data={inspectionsData} loading={loading} />}
                    {activeTab === 'refunds' && <RefundsListing data={refundData} loading={loading} />}
                </div>
            </CardBody>
        </Card>
    );
};

export default Payments;