import TableContainer from "Components/Common/TableContainerReactTable";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, DropdownItem, DropdownMenu, DropdownToggle, Input, Spinner, UncontrolledDropdown } from "reactstrap";

interface AccountApprovalsProps {
    data: any[];
    loading: boolean;
}

const AccountApprovals: React.FC<AccountApprovalsProps> = ({ data, loading }) => {
    const navigate = useNavigate();
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
            header: 'Account Type',
            accessorKey: 'accountType',
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
                                const id = row.original.id;
                                const type = row.original.accountType;
                              
                                if (type === "User") {
                                  navigate(`/user-details/${id}`);
                                } else if (type === "Builder") {
                                  navigate(`/builder-detail/${id}`);
                                } else if (type === "Inspector") {
                                  navigate(`/inspector-details/${id}`);
                                } else {
                                  // fallback route if needed
                                  navigate(`/listing-detail/${id}`);
                                }
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
            <Card>
                <CardBody>
                    {loading
                        ? <div className="text-center"><Spinner animation="border" variant="primary" /></div>
                        :
                        <div>
                            <div className="text-end">
                                <Input
                                    type="text"
                                    placeholder="Search"
                                    className="rounded-2  py-2 mb-3"
                                    style={{ maxWidth: 300, display: 'inline-block', border: '1px solid #e5e7eb' }}
                                />
                            </div>
                            <div>
                                <TableContainer
                                    columns={columns}
                                    data={data}
                                    customPageSize={5}
                                    tableClass="table-centered align-middle table-nowrap mb-0"
                                    theadClass="text-muted table-light"
                                />
                            </div>
                        </div>}
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default AccountApprovals;