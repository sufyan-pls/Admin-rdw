import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Card, CardBody, CardHeader, Col, Input, Nav, NavItem, NavLink, Row } from 'reactstrap';
import ForRentListingTable from './ForRentListingTable';
import ForSaleListingTable from './ForSaleListingTable';
import { ArchivedListingData, forRentListingData, RentedListingData, SoldListingData } from 'common/data/builder';
import SoldListingTable from './SoldListingTable';
import RentedListingTable from './RentedListingTable';
import ArchivedListingTable from './ArchivedListingTable';


const PropertyListingTable = () => {

    const [activeTab, setActiveTab] = useState('RentListings');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 7000);
    }, []);

    return (
       <Card>
        <CardHeader>
            <Row className="align-items-center">
                <Col>
                    <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3">
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'RentListings'})}
                            onClick={() => setActiveTab('RentListings')}
                            style={{cursor: 'pointer'}}
                            >For Rent Listings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'saleListings'})}
                            onClick={() => setActiveTab('saleListings')}
                            style={{cursor: 'pointer'}}
                            >For Sale Listings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'soldListings'})}
                            onClick={() => setActiveTab('soldListings')}
                            style={{cursor: 'pointer'}}
                            >Sold Listings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'rentedListings'})}
                            onClick={() => setActiveTab('rentedListings')}
                            style={{cursor: 'pointer'}}
                            >Rented Listings</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'archivedListings'})}
                            onClick={() => setActiveTab('archivedListings')}
                            style={{cursor: 'pointer'}}
                            >Archived</NavLink>
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
        </CardHeader>
        <CardBody>
            {activeTab === 'RentListings' && <ForRentListingTable data={forRentListingData} loading={loading}/>}
            {activeTab === 'saleListings' && <ForSaleListingTable data={forRentListingData} loading={loading}/>}
            {activeTab === 'soldListings' && <SoldListingTable data={SoldListingData} loading={loading}/>}
            {activeTab === 'rentedListings' && <RentedListingTable data={RentedListingData} loading={loading}/>}
            {activeTab === 'archivedListings' && <ArchivedListingTable data={ArchivedListingData} loading={loading}/>}
        </CardBody>
       </Card>
    );
};

export default PropertyListingTable;
