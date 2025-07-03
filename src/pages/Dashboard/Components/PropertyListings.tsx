import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Input, Nav, NavItem, NavLink, Row } from 'reactstrap';
import ForRentListings from './ForRentListings';
import { forRentListings } from 'common/data/Dashboard';
import ForSaleListings from './ForSaleListings';

const PropertyListings = () => {
    const [activeTab, setActiveTab] = useState('for-rent-listings');
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
                                    active={activeTab === 'for-rent-listings'}
                                    onClick={() => setActiveTab('for-rent-listings')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    For Rent Listings
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={activeTab === 'for-sale-listings'}
                                    onClick={() => setActiveTab('for-sale-listings')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    For Sale Listings
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
                    {activeTab === 'for-rent-listings' && <ForRentListings data={forRentListings} loading={loading} />}
                    {activeTab === 'for-sale-listings' && <ForSaleListings data={forRentListings} loading={loading} />}
                </div>
            </CardBody>
        </Card>
    );
};

export default PropertyListings;