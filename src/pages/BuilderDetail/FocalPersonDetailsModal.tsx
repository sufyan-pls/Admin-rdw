import { documentsData } from "common/data/builder";
import TableContainer from "Components/Common/TableContainerReactTable";
import { useState } from "react";
import { Badge, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const statusOptions = [
    { value: 'approve', label: 'Approve' },
    { value: 'pending', label: 'Pending' },
    { value: 'reject', label: 'Reject' },
];

const FocalPersonDetailsModal = ({ isOpen, toggle, user }: any) => {
    const [status, setStatus] = useState('Active');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [data, setData] = useState(documentsData);
    const [tabledropdownOpen, setTableDropdownOpen] = useState<{ [key: number]: boolean }>({});
    const info = {
        avatar: '',
        realtor: 'realtor@email.com',
        approved: true,
        builderId: '#876',
        phone: '(684) 555-0102',
        taxId: '723748191027',
        createdAt: 'Jan 04, 2024 12:30 PM',
    };

    const columns = [
        
        { header: 'File Name', accessorKey: 'fileName', enableColumnFilter: false },
       
        { header: 'Type', accessorKey: 'type', enableColumnFilter: false },
        { header: 'Size', accessorKey: 'size', enableColumnFilter: false },
        { header: 'Created At', accessorKey: 'createdAt', enableColumnFilter: false },
        { header: 'Updated At', accessorKey: 'updatedAt', enableColumnFilter: false },
        {
            header: 'Status',
            accessorKey: 'status',
            enableColumnFilter: false,
            cell: ({ row, getValue }: { row: any, getValue: any }) => {
                const value = getValue();
                const rowIndex = row.index;

                const handleStatusChange = (newStatus: string) => {
                    setData(prev =>
                        prev.map((doc, idx) =>
                            idx === rowIndex
                                ? { ...doc, status: newStatus }
                                : doc
                        )
                    );
                };

                return (
                    <Dropdown isOpen={!!tabledropdownOpen[rowIndex]} toggle={() => setTableDropdownOpen(prev => ({ ...prev, [rowIndex]: !prev[rowIndex] }))} size="sm">
                        <DropdownToggle caret color="light" style={{ minWidth: 100 }}>
                            {statusOptions.find(opt => opt.value === value)?.label || 'Select'}
                        </DropdownToggle>
                        <DropdownMenu>
                            {statusOptions.map(opt => (
                                <DropdownItem
                                    key={opt.value}
                                    active={value === opt.value}
                                    onClick={() => handleStatusChange(opt.value)}
                                >
                                    {opt.label}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                );
            }
        },
        {
            header: 'Action',
            accessorKey: 'action',
            enableColumnFilter: false,
            cell: ({ row }: { row: any }) => {
                const fileUrl = row.original.downloadUrl;
                const handleDownload = () => {
                    const link = document.createElement('a');
                    link.href = fileUrl;
                    link.setAttribute('download', '');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                };
                return (
                    <span
                        onClick={handleDownload}
                        style={{ color: '#e5e7eb', fontSize: 28, cursor: 'pointer' }}
                        title="Download"
                    >
                        <i className="ri-download-cloud-line"></i>
                    </span>
                );
            },
        }
    ];

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="lg" centered backdrop="static" className="edit-user-modal" style={{ maxWidth: '45%' }}>
            <ModalHeader toggle={toggle} className="border-bottom-0 pb-0">Focal Person Details</ModalHeader>
            <ModalBody className="pt-0 pb-2 px-3 px-md-4">
                <div className="row">
                    <hr className="mt-3"/>
                    <h5 className="mb-0">Basic Information</h5>
                    <hr className="mt-3"/>
                    <div className="col-12">
                        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 gap-md-4">
                            <div className="d-flex flex-column flex-sm-row align-items-start gap-3 ">
                                <div className="rounded-circle bg-secondary bg-opacity-25" style={{ width: 70, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <i className="ri-user-3-line" style={{ fontSize: 38, color: '#ced4da' }}></i>
                                </div>
                                <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-4 my-2">
                                    <div>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <span className="fw-semibold" style={{ fontSize: 16 }}>Realtor</span>
                                            {info.approved && <Badge color="success" className="px-2 py-1 text-muted" style={{ fontWeight: 500, fontSize: 13, background: '#f3f4f6', border: 'none' }}>Approved</Badge>}
                                        </div>
                                        <span className="text-muted" style={{ fontSize: 15 }}>{info.realtor}</span>
                                    </div>
                                    <div>
                                        <span className="fw-semibold" style={{ fontSize: 16 }}>Builder ID</span>
                                        <p className="text-muted mb-0" style={{ fontSize: 15 }}>{info.builderId}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-4 mt-3 mt-md-0">
                                <div>
                                    <span className="fw-semibold d-block" style={{ fontSize: 16 }}>Phone Number</span>
                                    <div className="text-muted" style={{ fontSize: 15 }}>{info.phone}</div>
                                </div>
                                <div>
                                    <span className="fw-semibold d-block" style={{ fontSize: 16 }}>Created At</span>
                                    <div className="text-muted" style={{ fontSize: 15 }}>{info.createdAt}</div>
                                </div>
                                <Col className="d-flex flex-column ">
                                <span className="fw-semibold" style={{ fontSize: 16, whiteSpace: 'nowrap' }}>Status</span>
                                <div className="d-flex align-items-center">
                                    <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)} direction="down">
                                        <DropdownToggle
                                            caret
                                            color="light"
                                            className="w-100 text-start px-2 py-1"
                                            style={{
                                                background: '#23272b',
                                                fontWeight: 500,
                                                fontSize: 15,
                                                color: '#fff',
                                                border: '1px solid ', // Yeh line add kar dein
                                                borderRadius: 6
                                            }}
                                        >
                                            {status}
                                        </DropdownToggle>
                                        <DropdownMenu end style={{ minWidth: 130 }}>
                                            <DropdownItem onClick={() => setStatus('Active')}>Active</DropdownItem>
                                            <DropdownItem onClick={() => setStatus('Suspended')}>Suspended</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </Col>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-3"/>
                    <h5 className="mb-0">Verification Documents</h5>
                    <hr className="mt-3"/>
                    <TableContainer
                        columns={columns}
                        data={data}
                        customPageSize={5}
                        tableClass="table-centered align-middle table-nowrap mb-0"
                        theadClass="text-muted table-light" />
                </div>
            </ModalBody>
        </Modal>
    )
}

export default FocalPersonDetailsModal;
