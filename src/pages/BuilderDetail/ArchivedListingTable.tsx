import React from 'react';
import { Spinner } from 'reactstrap';
import TableContainer from 'Components/Common/TableContainerReactTable';

interface ArchivedListingTableProps {
    data: any[];
    loading: boolean;
}

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
        cell: () => (
            <span style={{ cursor: 'pointer' }}>
                <i className="ri-more-2-fill" style={{ fontSize: 20, color: '#6b7280' }}></i>
            </span>
        ),
    },
];

const ArchivedListingTable: React.FC<ArchivedListingTableProps> = ({ data, loading }) => {
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