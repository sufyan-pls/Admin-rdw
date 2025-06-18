import TableContainer from 'Components/Common/TableContainerReactTable';
import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, Spinner, UncontrolledDropdown } from 'reactstrap';
// import UserEditModal from '../Modal/UserEditModal';
import { useNavigate } from 'react-router-dom';
import TransactionDetailModal from '../Modals/TransactionDetailModal';
// import UserEditModal from 'pages/Users/Modal/UserEditModal';

interface ApprovedListingProps {
    data: any;
    loading: boolean;
}

const PaymentsListing = ({ data, loading }: ApprovedListingProps) => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedPerson, setSelectedPerson] = React.useState(null);

    const columns = [
        { header: "Transaction ID", accessorKey: "transactionId", enableColumnFilter: false },
        { header: "Invoice NO", accessorKey: "invoiceNo", enableColumnFilter: false },
        { header: 'Created At', accessorKey: 'createdAt', enableColumnFilter: false },
        { header: 'Updated At', accessorKey: 'updatedAt', enableColumnFilter: false },
        { header: 'Amount', accessorKey: 'amount', enableColumnFilter: false },
        { header: 'Type', accessorKey: 'type', enableColumnFilter: false },
        {
            header: 'Status',
            accessorKey: 'status',
            enableColumnFilter: false,
            cell: (cell: any) => {
                switch (cell.getValue()) {
                    case "Paid":
                        return (<span className="badge rounded-pill bg-warning text-uppercase "> {cell.getValue()}</span>);
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
            <TransactionDetailModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(false)}
                person={selectedPerson}
            />
        </React.Fragment>
    );
};

export default PaymentsListing;
