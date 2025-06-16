import React from 'react';
import { Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

interface Document {
    id: number;
    title: string;
    size: string;
}

const documents: Document[] = [
    { id: 1, title: 'Title Deed', size: '623 KBs' },
    { id: 2, title: 'Certificate of Occupancy', size: '623 KBs' },
    // Add more documents as needed
];

interface DocumentRowProps {
    title: string;
    size: string;
}

const DocumentRow: React.FC<DocumentRowProps> = ({ title, size }) => {
    return (
        <div className="mb-2">
            <div className="d-flex align-items-center item-start">
                <div
                    className="bg-light rounded-circle p-2 me-3"
                    style={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <i className="ri-file-pdf-line fs-3"></i>
                </div>
                <div>
                    <p className="mb-0">{title}</p>
                    <p>{size}</p>
                </div>
                <div className="ms-auto d-flex align-items-center gap-3">
                    <span
                        onClick={() => { }}
                        style={{ color: '#e5e7eb', fontSize: 28, cursor: 'pointer' }}
                        title="Download"
                    >
                        <i className="ri-download-cloud-line"></i>
                    </span>
                    <UncontrolledDropdown>
                        <DropdownToggle tag="button" className="btn btn-light">
                            Approve <i className="ri-arrow-down-s-line ms-1"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Approve</DropdownItem>
                            <DropdownItem>Reject</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </div>
        </div>
    );
};

const PropertyDocuments: React.FC = () => {
    // Split documents into rows of 2 for two-column layout
    const rows = [];
    for (let i = 0; i < documents.length; i += 2) {
        rows.push(documents.slice(i, i + 2));
    }

    return (
        <div>
            {rows.map((rowDocs, rowIdx) => (
                <Row key={rowIdx}>
                    {rowDocs.map((doc) => (
                        <Col md={6} className="mb-2" key={doc.id}>
                            <h6>{doc.title}</h6>
                            <DocumentRow title={doc.title} size={doc.size} />
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
};

export default PropertyDocuments;