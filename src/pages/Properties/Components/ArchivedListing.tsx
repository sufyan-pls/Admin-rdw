import TableContainer from 'Components/Common/TableContainerReactTable';
import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Spinner, UncontrolledDropdown } from 'reactstrap';
// import PropertyInformationModal from '../Modals/PropertyInformationModal';
// import PropertyInformationModal from '../Modals/PropertyInformationModal';

interface ArchivedListingProps {
    data: any;
    loading: boolean;
}

const ArchivedListing = ({ data, loading }: ArchivedListingProps) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedPerson, setSelectedPerson] = React.useState(null);

    const columns = [
        { header: "Property ID", accessorKey: "id", enableColumnFilter: false },
        { header: "Builder", accessorKey: "builder", enableColumnFilter: false },
        { header: "Address", accessorKey: "address", enableColumnFilter: false },
        { header: "Property Type", accessorKey: "propertyType", enableColumnFilter: false },
        { header: "Listing Type", accessorKey: "listingType", enableColumnFilter: false },
        {
            header: 'Status',
            accessorKey: 'status', // yahan data me 'listingStatus' hai
            enableColumnFilter: false,
            cell: (cell: any) => {
                switch (cell.getValue()) {
                    case "Pending":
                        return (<span className="badge rounded-pill bg-warning text-uppercase "> {cell.getValue()}</span>);
                    case "Live":
                        return (<span className="badge rounded-pill bg-success text-uppercase "> {cell.getValue()}</span>);
                    case "Deal In Progress":
                        return (<span className="badge rounded-pill bg-info text-uppercase "> {cell.getValue()}</span>);
                    default:
                        return (<span className="badge rounded-pill  bg-warning text-uppercase"> {cell.getValue()}</span>);
                }
            },
        },
        {
            header: 'Company Inspection',
            accessorKey: 'companyInspection', // yahan data me 'listingStatus' hai
            enableColumnFilter: false,
            cell: (cell: any) => {
                switch (cell.getValue()) {
                    case "Pending":
                        return (<span className="badge rounded-pill bg-warning text-uppercase "> {cell.getValue()}</span>);
                    case "Approved":
                        return (<span className="badge rounded-pill bg-success text-uppercase "> {cell.getValue()}</span>);
                    case "Rejected":
                        return (<span className="badge rounded-pill bg-danger text-uppercase "> {cell.getValue()}</span>);
                    default:
                        return (<span className="badge rounded-pill  bg-warning text-uppercase"> {cell.getValue()}</span>);
                }
            },
        },
        {
            header: 'Secondary Inspection',
            accessorKey: 'secondaryInspection', // yahan data me 'listingStatus' hai
            enableColumnFilter: false,
            cell: (cell: any) => {
                switch (cell.getValue()) {
                    case "Pending":
                        return (<span className="badge rounded-pill bg-warning text-uppercase "> {cell.getValue()}</span>);
                    case "Approved":
                        return (<span className="badge rounded-pill bg-success text-uppercase "> {cell.getValue()}</span>);
                    case "Rejected":
                        return (<span className="badge rounded-pill bg-danger text-uppercase "> {cell.getValue()}</span>);
                    default:
                        return (<span className="badge rounded-pill  bg-warning text-uppercase"> {cell.getValue()}</span>);
                }
            },
        },
        {
            header: "Action",
            accessorKey: "action",
            enableColumnFilter: false,
            cell: ({ row }: { row: any }) => (
                <UncontrolledDropdown direction="start">
                    <DropdownToggle tag="span" style={{ cursor: 'pointer' }}>
                        <i className="ri-more-2-fill" style={{ fontSize: 20, color: '#6b7280' }}></i>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem
                             onClick={() => {
                                setSelectedPerson(row.original.id);
                                setModalOpen(true);
                            }}
                            className="d-flex align-items-center"
                        >
                            <i className="ri-eye-line me-2"></i> View 
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                
            ),
        },
    ];

    return (
        <React.Fragment>
            {loading
                ? <div className="text-center"><Spinner animation="border" variant="primary" /></div>
                : <TableContainer
                    columns={columns}
                    data={data}
                    customPageSize={5}
                    tableClass="table-centered align-middle table-nowrap mb-0"
                    theadClass="text-muted table-light"
                />
            }
            {/* <PropertyInformationModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(false)}
                propertyId={selectedPerson}
            /> */}
        </React.Fragment>
    );
};

export default ArchivedListing;
