import { useState } from "react";
import classnames from 'classnames';
import { Card, CardBody, Nav, NavItem, NavLink } from "reactstrap"
import Contract from "./Contract";
import PaymentDetails from "./PaymentDetails";

const DealInProgress = () => {
    const [activeTab, setActiveTab] = useState('Contract');
    return (
        <Card>
            <CardBody>
                <div>
                <Nav tabs className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-0">
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'Contract'})}
                            onClick={() => setActiveTab('Contract')}
                            style={{cursor: 'pointer'}}
                            >Contract</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({active: activeTab === 'PaymentDetails'})}
                            onClick={() => setActiveTab('PaymentDetails')}
                            style={{cursor: 'pointer'}}
                            >Payment Details</NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <div>
                    {activeTab === 'Contract' && <Contract />}
                    {activeTab === 'PaymentDetails' && <PaymentDetails />}
                </div>
            </CardBody>
        </Card>
    );
};

export default DealInProgress;  