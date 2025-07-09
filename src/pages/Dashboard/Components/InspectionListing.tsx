import TableContainer from 'Components/Common/TableContainerReactTable';
import TransactionDetailsModal from 'pages/ListingDetail/TransactionDetailsModal';
import React from 'react';
import { Spinner } from 'reactstrap';
// import TransactionDetailsModal from 'pages/Inspector/InspectorDetailPage/Modals/TransactionDetailModal';

interface InspectionListingProps {
    data: any[];
    loading: boolean;
}

const InspectionListing: React.FC<InspectionListingProps> = ({ data, loading }) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedPerson, setSelectedPerson] = React.useState(null);
    const columns = [
        {
            header: 'Property Address',
            accessorKey: 'propertyAddress',
            enableColumnFilter: false,
        },
        {
            header: 'Property Type',
            accessorKey: 'propertyType',
            enableColumnFilter: false,
        },
        {
            header: 'Builder',
            accessorKey: 'builder',
            enableColumnFilter: false,
        },
        {
            header: 'Inspector',
            accessorKey: 'inspector',
            enableColumnFilter: false,
        },
        {
            header: 'Date',
            accessorKey: 'date',
            enableColumnFilter: false,
        },
        {
            header: 'Inspection Type',
            accessorKey: 'inspectionType',
            enableColumnFilter: false,
        },
        {
            header: 'Inspection Status',
            accessorKey: 'inspectionStatus',
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
             <TransactionDetailsModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(false)}
            />
        </React.Fragment>
    )
}

export default InspectionListing;
