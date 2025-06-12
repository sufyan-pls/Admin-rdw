import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import UnitDetails from './UnitDetails';
import PropertyDocuments from './PropertyDocuments';
import AdditionalDocuments from './AdditionalDocuments';
import PropertyAmenities from './propertyAmenities';
import Utilities from './Utilities';
import Parking from './Parking';
import Laundry from './Laundry';
import Pets from './Pets';
import Media from './Media';
import Description from './Description';
import Demographics from './Demographics';
import ContactInformation from './ContactInformation';

const ReviewListing = () => {
    return (
        <Card className='rounded-0 h-100'>
            <CardHeader>
                <h6>Review Listing</h6>
            </CardHeader>
            <CardBody className="d-flex flex-column h-100">
                <div className="shadow p-3 mb-2 bg-light rounded">
                    <h6>Unit Deatils</h6>
                </div>
                <UnitDetails />
                <div className="shadow p-3 mb-3 bg-light rounded">
                    <h6>Property Documents</h6>
                </div>
                <PropertyDocuments />
                <div className="shadow p-3 mb-2 bg-light rounded">
                    <h6>Additional Documents</h6>
                </div>
                <AdditionalDocuments />
                <div className="shadow p-3 mb-2 bg-light rounded">
                    <h6>Property Amenities</h6>
                </div>
                <PropertyAmenities />
                <div className="shadow p-3 mb-2 bg-light rounded">
                    <h6>Utilities</h6>
                </div>
                <Utilities />
                <div className="shadow p-3 mb-2 bg-light rounded">
                    <h6>Parking</h6>
                </div>
                <Parking />
                <div className="shadow p-3 mb-2 bg-light rounded">
                    <h6>Laundry</h6>
                </div>
                <Laundry />
                <div className="shadow p-3 mb-2 bg-light rounded">
                    <h6>Pets</h6>
                </div>
                <Pets />
                    <div className="shadow p-3 mb-2 bg-light rounded">
                        <h6>Media</h6>
                    </div>
                <Media />
                <div className="shadow p-3 mb-3 bg-light rounded">
                    <h6>Description</h6>
                </div>
                <Description />
                <div className="shadow p-3 mb-2 bg-light rounded">
                    <h6>Demographics</h6>
                </div>
                <Demographics />
                <div className="shadow p-3 mb-2 bg-light rounded">
                    <h6>Contact Information</h6>
                </div>
                <ContactInformation />
            </CardBody>
        </Card>
    );
};

export default ReviewListing;   