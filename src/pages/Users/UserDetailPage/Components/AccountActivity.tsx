import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import PropertiesListing from './PropertiesListing';
import { documentsListingData, paymentsListingData, propertiesData } from 'common/data/users';
import DocumentsListing from './DocumentsListing';
import PaymentsListing from './PaymentsListings';

const AccountActivity = () => {
    const [activeTab, setActiveTab] = useState('Properties');
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
            <h6>Account Activity</h6>
        </CardHeader>
        <CardBody>
            <Row className="mb-3">
                <Col md={6} >
                    <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-0">
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab === 'Properties'})}
                                onClick={() => setActiveTab('Properties')}
                                style={{cursor: 'pointer'}}>
                                Properties
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab === 'Documents'})}
                                onClick={() => setActiveTab('Documents')}
                                style={{cursor: 'pointer'}}>
                                Documents
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab === 'Payments'})}
                                onClick={() => setActiveTab('Payments')}
                                style={{cursor: 'pointer'}}>
                                Payments
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
            <Row>
                {activeTab === 'Properties' && <PropertiesListing data={propertiesData} loading={loading}/>}
                {activeTab === 'Documents' && <DocumentsListing documentsListingData={documentsListingData} loading={loading}/>}
                {activeTab === 'Payments' && <PaymentsListing data={paymentsListingData} loading={loading}/>}
            </Row>
        </CardBody>
    </Card>
  )
}

export default AccountActivity;