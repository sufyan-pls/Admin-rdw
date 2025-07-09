import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Spinner, UncontrolledDropdown } from 'reactstrap';
import TableContainer from 'Components/Common/TableContainerReactTable';
import { useNavigate } from 'react-router-dom';

interface ArchivedListingTableProps {
    data: any[];
    loading: boolean;
}

const ArchivedListingTable: React.FC<ArchivedListingTableProps> = ({ data, loading }) => {
const navigate= useNavigate()

const columns = [
    {
        header: 'Property ID',
        accessorKey: 'propertyId',
        enableColumnFilter: false,
    },
    {
        header: 'Address',
        accessorKey: 'address',
        enableColumnFilter: false,
    },
    {
        header: 'Property Type',
        accessorKey: 'propertyType',
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
                case "Archived":
                    return (<span className="badge rounded-pill bg-primary text-uppercase"> {cell.getValue()}</span>);
                default:
                    return (<span className="badge rounded-pill  bg-warning text-uppercase"> {cell.getValue()}</span>);
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
                        onClick={() => navigate(`/listing-detail/${row.original.propertyId}`)}
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
        </React.Fragment>
    )
}

export default ArchivedListingTable;