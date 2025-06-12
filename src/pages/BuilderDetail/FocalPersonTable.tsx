import { focalPersonData } from 'common/data/builder';
import TableContainer from 'Components/Common/TableContainerReactTable';
import React from 'react';
import { Card, CardBody, CardHeader, DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown } from 'reactstrap';
import FocalPersonDetailsModal from './FocalPersonDetailsModal';
// import FocalPersonDetailsModal from './FocalPersonDetailsModal';

const FocalPersonTable = () => {
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
            header: 'Role Assigned',
            accessorKey: 'roleAssigned',
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
                    case "approved":
                        return (<span className="badge rounded-pill bg-success text-uppercase "> {cell.getValue()}</span>);
                    case "Pending":
                        return (<span className="badge rounded-pill  bg-warning text-uppercase"> {cell.getValue()}</span>);
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
                                setSelectedPerson(row.original);
                                setModalOpen(true);
                            }}
                            className="d-flex align-items-center"
                        >
                            <i className="ri-eye-line me-2"></i> View Details
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            ),
        },
    ];

    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <div className="text-end">
                        <Input
                            type="text"
                            placeholder="Search"
                            className="rounded-2  py-2 mb-3"
                            style={{ maxWidth: 300, display: 'inline-block', border: '1px solid #e5e7eb' }}
                        />
                    </div>
                </CardHeader>
                <CardBody>
                    <TableContainer
                        columns={columns}
                        data={focalPersonData}
                        customPageSize={5}
                        tableClass="table-centered align-middle table-nowrap mb-0"
                        theadClass="text-muted table-light" />
                </CardBody>
            </Card>
            <FocalPersonDetailsModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(false)}
                person={selectedPerson}
            />
        </React.Fragment>
    );
};

export default FocalPersonTable;
