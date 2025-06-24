import TableContainer from 'Components/Common/TableContainerReactTable';
import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, Spinner, UncontrolledDropdown } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import InspectorEditModal from '../Modal/InspectorEditModal';
interface ApprovedListingProps {
    data: any;
    loading: boolean;
}

const ApprovedListing = ({ data, loading }: ApprovedListingProps) => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedPerson, setSelectedPerson] = React.useState(null);

    const columns = [
        {
            header: 'ID',
            accessorKey: 'id',
            enableColumnFilter: false,
        },
        {
            header: 'Name',
            accessorKey: 'name',
            enableColumnFilter: false,
        },
        {
            header: 'Email',
            accessorKey: 'email',
            enableColumnFilter: false,
        },
        {
            header: 'Phone Number',
            accessorKey: 'phoneNumber',
            enableColumnFilter: false,
        },
        {
            header: 'Created At',
            accessorKey: 'createdAt',
            enableColumnFilter: false,
        },
        {
            header: 'Updated At',
            accessorKey: 'updatedAt',
            enableColumnFilter: false,
        },
        {
            header: 'Status',
            accessorKey: 'status',
            enableColumnFilter: false,
            cell: (cell: any) => {
                switch (cell.getValue()) {
                    case "Approved":
                        return (<span className="badge rounded-pill bg-success text-uppercase "> {cell.getValue()}</span>);
                    default:
                        return (<span className="badge rounded-pill  bg-danger text-uppercase"> {cell.getValue()}</span>);
                }
            },
        },
        {
            header: 'Action',
            accessorKey: 'action',
            enableColumnFilter: false,
            cell: ({ row }: { row: any }) => (
                <UncontrolledDropdown direction="start">
                    <DropdownToggle tag="span" style={{ cursor: 'pointer' }}>
                        <i className="ri-more-2-fill" style={{ fontSize: 20, color: '#6b7280' }}></i>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem
                            onClick={() => {
                                navigate(`/inspector-details/${row.original.id}`);
                            }}
                            className="d-flex align-items-center"
                        >
                            <i className="ri-eye-line me-2"></i> View Details
                        </DropdownItem>
                        <DropdownItem
                            onClick={() => {
                                setSelectedPerson(row.original);
                                setModalOpen(true);
                            }}
                            className="d-flex align-items-center"
                        >
                            <i className="ri-pencil-line me-2"></i> Edit Inspector
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
            <InspectorEditModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(false)}
                person={selectedPerson}
            />
        </React.Fragment>
    );
};

export default ApprovedListing;
