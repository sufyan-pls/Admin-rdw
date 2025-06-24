import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink, Row, Col, Input } from 'reactstrap';
import { InspectorInvoiceData, propertyInspectionListingData } from 'common/data/Inspector';
import PropertyInspectionListing from './PropertyInspectionListing';
import { documentsListingData, paymentsListingData } from 'common/data/users';
import DocumentsListing from './DocumentsListing';
import PaymentsListing from './PaymentListing';
import TrainingListing from './TrainingListing';

const AccountActivity = () => {
    const [activeTab, setActiveTab] = useState('Property Inspection');
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
                                className={classnames({active: activeTab === 'Property Inspection'})}
                                onClick={() => setActiveTab('Property Inspection')}
                                style={{cursor: 'pointer'}}>
                                Property Inspection
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
                                className={classnames({active: activeTab === 'Training'})}
                                onClick={() => setActiveTab('Training')}
                                style={{cursor: 'pointer'}}>
                                Training
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
                <Col md={6} className='d-flex justify-content-end'>
                {/* add search field here */}
                <Input 
                type="text"
                placeholder="Search"
                className="rounded-2  py-2 mb-3"
                style={{ maxWidth: 300, display: 'inline-block', border: '1px solid #e5e7eb' }}
                />
                </Col>
            </Row>
            <Row>
                {activeTab === 'Property Inspection' && <PropertyInspectionListing data={propertyInspectionListingData} loading={loading}/>}
                {activeTab === 'Documents' && <DocumentsListing documentsListingData={documentsListingData} loading={loading}/>}
                {activeTab === 'Training' && <TrainingListing />}
                {activeTab === 'Payments' && <PaymentsListing data={InspectorInvoiceData} loading={loading}/>}
            </Row>
        </CardBody>
    </Card>
  )
}

export default AccountActivity;