import React from 'react';
import { Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// Dummy data, replace with your API/data
const documents = [
    {
        id: 1,
        title: 'Report',
        description: 'Document Description',
        size: '623 KBs',
    },
    {
        id: 2,
        title: 'Report',
        description: 'Document Description',
        size: '623 KBs',
    },
    // Add more objects as needed
];

interface DocumentRowProps {
    title: string;
    description: string;
    size: string;
}

const DocumentRow: React.FC<DocumentRowProps> = ({ title, description, size }) => (
    <Row className="align-items-center py-3">
        <Col xs="auto">
            <div
                className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 48, height: 48 }}
            >
                <i className="ri-file-pdf-line fs-3"></i>
            </div>
        </Col>
        <Col md={3}>
            <div style={{ fontSize: 15 }}>{title}</div>
            <div style={{ fontSize: 14 }}>{size}</div>
        </Col>
        <Col md={5}>
            <div style={{ fontSize: 15 }}>{description}</div>
        </Col>
        <Col md={3} className="d-flex align-items-center gap-3 justify-content-end">
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
        </Col>
    </Row>
);

const AdditionalDocuments = () => {
    return (
        <div>
            {documents.map((doc, idx) => (
                <React.Fragment key={doc.id}>
                    <DocumentRow
                        title={doc.title}
                        description={doc.description}
                        size={doc.size}
                    />
                    {idx !== documents.length - 1 && <hr className="my-0" />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default AdditionalDocuments;