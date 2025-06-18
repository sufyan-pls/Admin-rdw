import TableContainer from 'Components/Common/TableContainerReactTable';
import React from 'react';
import {Spinner} from 'reactstrap';
import PropertyInformationModal from '../Modals/PropertyInformationModal';
// import PropertyInformationModal from '../Modals/PropertyInformationModal';

interface ApprovedListingProps {
    data: any;
    loading: boolean;
}

const PropertiesListing = ({ data, loading }: ApprovedListingProps) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedPerson, setSelectedPerson] = React.useState(null);

    const columns = [
        { header: "Property ID", accessorKey: "id", enableColumnFilter: false },
        { header: "Address", accessorKey: "address", enableColumnFilter: false },
        { header: "Listed For", accessorKey: "listedFor", enableColumnFilter: false },
        { header: "Builder", accessorKey: "builder", enableColumnFilter: false },
        { header: "Escrow", accessorKey: "escrow", enableColumnFilter: false },
        { header: "Refund", accessorKey: "refund", enableColumnFilter: false },
        {
            header: 'Status',
            accessorKey: 'status',
            enableColumnFilter: false,
            cell: (cell: any) => {
                switch (cell.getValue()) {
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
            <PropertyInformationModal
                isOpen={modalOpen}
                toggle={() => setModalOpen(false)}
                propertyId={selectedPerson}
            />
        </React.Fragment>
    );
};

export default PropertiesListing;
