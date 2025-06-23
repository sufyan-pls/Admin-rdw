import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Card, CardBody, CardHeader, Col, Input, Nav, NavItem, NavLink, Row } from 'reactstrap';
import { ApprovedUsersData, PendingUsersData, RejectedUsersData } from 'common/data/users';
import ApprovedListing from './ApprovedListing';
import PendingListing from './PendingListing';
import RejectedListing from './RejectedListing';


const ManageInspectorTable = () => {

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
        <h6>Manage Inspectors</h6>
        </CardHeader>
        <CardBody>
        <Row className="align-items-center mb-2">
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
            {activeTab === 'Approved' && <ApprovedListing data={ApprovedUsersData} loading={loading}/>}
            {activeTab === 'Pending' && <PendingListing data={PendingUsersData} loading={loading}/>}
            {activeTab === 'Rejected' && <RejectedListing data={RejectedUsersData} loading={loading}/>}
            </div>
        </CardBody>
       </Card>
    );
};

export default ManageInspectorTable;
