import React, { useState } from 'react';
import TableContainer from 'Components/Common/TableContainerReactTable';
import { Card, CardHeader, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, CardBody } from 'reactstrap';
import { documentsData } from 'common/data/builder';

const statusOptions = [
    { value: 'approve', label: 'Approve' },
    { value: 'pending', label: 'Pending' },
    { value: 'reject', label: 'Reject' },
];

const DocumentsTable = () => {
    const [data, setData] = useState(documentsData);
    const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});

    const columns = [
        { header: 'Document ID', accessorKey: 'documentId', enableColumnFilter: false },
        { header: 'File Name', accessorKey: 'fileName', enableColumnFilter: false },
        { header: 'Description', accessorKey: 'description', enableColumnFilter: false },
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
                    <Dropdown isOpen={!!dropdownOpen[rowIndex]} toggle={() => setDropdownOpen(prev => ({ ...prev, [rowIndex]: !prev[rowIndex] }))} size="sm">
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
        <React.Fragment>
            <Card>
                <CardHeader>
                    <div className="text-end">
                        <Input
                            type="text"
                            placeholder="Search"
                            className="rounded-2  py-2 mb-3"
                            style={{ maxWidth: 300, display: 'inline-block', background: '#1a1d21', border: '1px solid #e5e7eb' }}
                        />
                    </div>
                </CardHeader>
                <CardBody>
                    <TableContainer
                        columns={columns}
                        data={data}
                        customPageSize={5}
                        tableClass="table-centered align-middle table-nowrap mb-0"
                        theadClass="text-muted table-light" />
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default DocumentsTable;