import BreadCrumb from 'Components/Common/BreadCrumb'
import React from 'react'
import { Container, Row } from 'reactstrap'
import PropertyStatusCard from './Components/PropertyWidgets';
import ManagePropertiesTable from './Components/ManagePropertiesTable';
// import ManagePropertiesTable from './Components/ManagePropertiesTable';

const propertyStatusData = {
    icon: "bx bx-home",
    title: "Total Properties",
    total: 358,
    items: [
        { label: "Approved", value: 300 },
        { label: "Pending", value: 58 },
        { label: "Rejected", value: 58 },
        { label: "Awaiting Inspection", value: 58 },
    ],
};

const propertyDealsData = {
    icon: "bx bx-dollar",
    title: "Property Deals",
    total: 242,
    items: [
        { label: "Total Sold", value: 80 },
        { label: "Total Rented", value: 120 },
        { label: "Ongoing Deals", value: 42 },
    ],
};

const Properties = () => {
    document.title = "Properties";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb
                        title="Properties"
                        pageTitles={[
                            { label: "RealWealtdy", path: "/" },
                            { label: "Properties" }
                        ]}
                    />
                    <div className="d-flex flex-row w-100 gap-3">
                        <div className='w-50'><PropertyStatusCard
                            icon={propertyStatusData.icon}
                            title={propertyStatusData.title}
                            total={propertyStatusData.total}
                            items={propertyStatusData.items}
                        /></div>
                        <div className='w-50'><PropertyStatusCard
                            icon={propertyDealsData.icon}
                            title={propertyDealsData.title}
                            total={propertyDealsData.total}
                            items={propertyDealsData.items}
                        /></div>
                    </div>
                    <div>
                        <ManagePropertiesTable />
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Properties