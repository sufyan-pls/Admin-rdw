import TableContainer from 'Components/Common/TableContainerReactTable';
import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, Spinner, UncontrolledDropdown } from 'reactstrap';
import TransactionDetailsModal from '../Modals/TransactionDetailModal';
// import TransactionDetailModal from 'pages/Users/UserDetailPage/Modals/TransactionDetailModal';

interface ApprovedListingProps {
    data: any;
    loading: boolean;
}

const PaymentsListing = ({ data, loading }: ApprovedListingProps) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedPerson, setSelectedPerson] = React.useState(null);

    const columns = [
        { header: "Invoice NO", accessorKey: "invoiceNo", enableColumnFilter: false },
        { header: 'Property Address', accessorKey: 'propertyAddress', enableColumnFilter: false },
        {header:'Builder', accessorKey:'builder', enableColumnFilter: false},
        { header: 'Date', accessorKey: 'date', enableColumnFilter: false },
        { header: 'Inspection Type', accessorKey: 'inspectionType', enableColumnFilter: false },
        { header: 'Amount', accessorKey: 'amount', enableColumnFilter: false },
        {
            header: 'Status',
            accessorKey: 'status',
            enableColumnFilter: false,
            cell: (cell: any) => {
                switch (cell.getValue()) {
                    case "Paid":
                        return (<span className="badge rounded-pill bg-success text-uppercase "> {cell.getValue()}</span>);
                    case "Pending":
                        return (<span className="badge rounded-pill bg-warning text-uppercase "> {cell.getValue()}</span>);
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
    );
};

export default PaymentsListing;
