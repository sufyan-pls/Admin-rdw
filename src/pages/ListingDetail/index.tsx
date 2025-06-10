import BreadCrumb from 'Components/Common/BreadCrumb';
import React from 'react';
import { Container } from 'reactstrap';
import Information from './Information';
import './ListingDetail.css';

const ListingDetail = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid style={{ backgroundColor: 'blue' }}>
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
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <div className="listing-detail-left">
                            <div className="scrollable-content">
                                <h3>Scroll Down to Test Fixed Information Card</h3>
                                <p>This is test content to make the page scrollable. The Information card above should remain fixed at the top as you scroll down.</p>
                                <ul>
                                    {Array.from({ length: 100 }).map((_, i) => <li key={i}>Test Data Row {i + 1}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="listing-detail-right">
                            <p>This is side Div.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default ListingDetail;   
