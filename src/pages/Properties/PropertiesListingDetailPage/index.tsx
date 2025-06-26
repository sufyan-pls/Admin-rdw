import BreadCrumb from 'Components/Common/BreadCrumb';
import React, { useState } from 'react';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import './PropertyListingDetail.css';
import Information from './Components/Information';
import ReviewListing from './Components/ReviewListing';
import CompanyInspection from './Components/CompanyInspection';
import SecondaryInspection from './Components/SecondaryInspection';
// import ReviewListing from './ReviewListing';
// import Action from './Action';
// import InspectionDetails from './InspectionDetails';
// import CompanyInspection from './CompanyInspection';

const PropertiesListingDetailPage = () => {
    const [activeTab, setActiveTab] = useState('listing-detail');
    const [action, setAction] = useState('Approve & Assign Inspector');

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <div className="sticky-header-wrapper">
                        <BreadCrumb
                            title="Listing Detail"
                            pageTitles={[
                                { label: "Builder", path: "/builder" },
                                { label: "Builder Detail", path: "/builder-detail" },
                                { label: "Listing Detail" }
                            ]}
                        />
                        <div>
                        <Information />
                        </div>
                        <div>
                            <Nav pills className="nav-success mb-4">
                                <NavItem>
                                    <NavLink
                                        active={activeTab === 'listing-detail'}
                                        onClick={() => setActiveTab('listing-detail')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Listing Detail
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        active={activeTab === 'deal-in-progress'}
                                        onClick={() => setActiveTab('deal-in-progress')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Deal In Progress
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingBottom: '20px' }}>
                        <div className="listing-detail-left">
                            {activeTab === 'listing-detail' && <ReviewListing />}
                            {/* {activeTab === 'deal-in-progress' && <DealInProgress />} */}
                        </div>
                        <div className="listing-detail-right">
                            {/* <Action action={action} setAction={setAction}/> */}
                            {/* {action === 'Approve & Assign Inspector' && <InspectionDetails />} */}
                            {activeTab === 'listing-detail' && <CompanyInspection />}
                            {activeTab === 'listing-detail' && <SecondaryInspection />}
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default PropertiesListingDetailPage;   
