import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Card, CardBody, CardHeader, Col, Input, Nav, NavItem, NavLink, Row } from 'reactstrap';
import ApprovedListing from './ApprovedListing';
import { ApprovedPropertiesData, ArchivedPropertiesData, PendingPropertiesData, RejectedPropertiesData, RentedPropertiesData, SoldPropertiesData } from 'common/data/Properties';
import PendingListing from './PendingListing';
import RejectedListing from './RejectedListing';
import SoldListing from './SoldListing';
import RentedListing from './RentedListing';
import ArchivedListing from './ArchivedListing';



const ManagePropertiesTable = () => {

    const [activeTab, setActiveTab] = useState('Approved');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 7000);
    }, [activeTab]);

    console.log('Active Tab=>', activeTab);
    return (
       <Card>
        <CardHeader>
        <h6>Manage Users</h6>
        </CardHeader>
        <CardBody>
        <Row className="align-items-center">
                <Col>
                    <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-0">
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'Approved'})}
                            onClick={() => setActiveTab('Approved')}
                            style={{cursor: 'pointer'}}
                            >Approved</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'Pending'})}
                            onClick={() => setActiveTab('Pending')}
                            style={{cursor: 'pointer'}}
                            >Pending</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'Rejected'})}
                            onClick={() => setActiveTab('Rejected')}
                            style={{cursor: 'pointer'}}
                            >Rejected</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'Sold'})}
                            onClick={() => setActiveTab('Sold')}
                            style={{cursor: 'pointer'}}
                            >Sold</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'Rented'})}
                            onClick={() => setActiveTab('Rented')}
                            style={{cursor: 'pointer'}}
                            >Rented</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'Archived'})}
                            onClick={() => setActiveTab('Archived')}
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
            <Row className='mt-2'>
            {activeTab === 'Approved' && <ApprovedListing data={ApprovedPropertiesData} loading={loading}/>}
            {activeTab === 'Pending' && <PendingListing data={PendingPropertiesData} loading={loading}/>}
            {activeTab === 'Rejected' && <RejectedListing data={RejectedPropertiesData} loading={loading}/>}
            {activeTab === 'Sold' && <SoldListing data={SoldPropertiesData} loading={loading}/>}
            {activeTab === 'Rented' && <RentedListing data={RentedPropertiesData} loading={loading}/>}
            {activeTab === 'Archived' && <ArchivedListing data={ArchivedPropertiesData} loading={loading}/>}
            </Row>
        </CardBody>
       </Card>
    );
};

export default ManagePropertiesTable;
