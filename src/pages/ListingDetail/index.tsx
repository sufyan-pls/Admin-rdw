import BreadCrumb from 'Components/Common/BreadCrumb';
import React, { useState } from 'react';
import { Container } from 'reactstrap';
import Information from './Information';
import './ListingDetail.css';
import ReviewListing from './ReviewListing';
import Action from './Action';
import InspectionDetails from './InspectionDetails';
import CompanyInspection from './CompanyInspection';

const ListingDetail = () => {
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
                        <Information />
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', paddingBottom: '20px'}}>
                        <div className="listing-detail-left">
                            <ReviewListing />
                        </div>
                        <div className="listing-detail-right">
                            <Action action={action} setAction={setAction}/>
                            {action === 'Approve & Assign Inspector' && <InspectionDetails />}
                            {action === 'Make Live' && <CompanyInspection />}
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default ListingDetail;   
