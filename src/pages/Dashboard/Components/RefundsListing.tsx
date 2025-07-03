import TableContainer from 'Components/Common/TableContainerReactTable';
import ViewDetailTransactionDetailModal from 'pages/Users/UserDetailPage/Modals/ViewDetailTransactionDetailModal';
import React from 'react';
import { Spinner } from 'reactstrap';

interface RefundsListingProps {
    data: any[];
    loading: boolean;
}

const RefundsListing: React.FC<RefundsListingProps> = ({ data, loading }) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedPerson, setSelectedPerson] = React.useState(null);
    const columns = [
        {
            header: 'Property Id',
            accessorKey: 'propertyId',
            enableColumnFilter: false,
        },
        {
            header: 'Builder',
            accessorKey: 'builder',
            enableColumnFilter: false,
        },
        {
            header: 'Customer',
            accessorKey: 'customer',
            enableColumnFilter: false,
        },
        {
            header: 'Address',
            accessorKey: 'address',
            enableColumnFilter: false,
            cell: (cell: any) => {
                const value = cell.getValue();
                return value.length > 30 ? value.slice(0, 30) + "..." : value;
            }
        },
        {
            header: 'Property Type',
            accessorKey: 'propertyType',
            enableColumnFilter: false,
        },
        {
            header: 'Listed For',
            accessorKey: 'listedFor',
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
            header: 'Amount',
            accessorKey: 'amount',
            enableColumnFilter: false,
        },
        {
            header: 'Status',
            accessorKey: 'status',
            enableColumnFilter: false,
            cell: (cell: any) => {
                switch (cell.getValue()) {
                    case "Live":
                        return (<span className="badge rounded-pill bg-success text-uppercase "> {cell.getValue()}</span>);
                    case "Rejected":
                        return (<span className="badge rounded-pill  bg-danger text-uppercase"> {cell.getValue()}</span>);
                    case "Pending":
                        return (<span className="badge rounded-pill  bg-warning text-uppercase"> {cell.getValue()}</span>);
                    default:
                        return (<span className="badge rounded-pill  bg-danger text-uppercase"> {cell.getValue()}</span>);
                }
            },
        },
        {
            header: "Action",
            accessorKey: "action",
            enableColumnFilter: false,
            cell: ({ row }: { row: any }) => (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedPerson(row.original);
                  setModalOpen(true);
                }}
              >
                <i className="ri-eye-line" style={{ fontSize: 20, color: "#6b7280" }}></i>
              </span>
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
             <ViewDetailTransactionDetailModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(false)}
            />
        </React.Fragment>
    )
}

export default RefundsListing;
