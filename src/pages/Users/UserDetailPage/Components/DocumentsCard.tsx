import React from "react";
import { Row, Col } from "reactstrap";
import { FiDownload } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi2";

export interface DocumentItem {
  type: string;
  name: string;
  size: string;
  downloadUrl: string;
}

const DocumentsCard: React.FC<{ documents: DocumentItem[] }> = ({ documents }) => {
  return (
    <div className="border h-100">
      <div className="border-bottom p-3 pb-2">
        <h6 className="fw-bold mb-0">Documents</h6>
      </div>
      {documents.map((doc, idx) => (
        <div key={idx} className={"p-3 d-flex align-items-center justify-content-between" + (idx !== 0 ? " border-top" : "") }>
          <div className="w-100">
            <div className="fw-semibold mb-2">{doc.type}</div>
            <div className="d-flex align-items-center">
              <span className="d-flex align-items-center justify-content-center bg-light rounded-circle me-3" style={{ width: '48px', height: '48px' }}>
                <i className="ri-file-text-line" style={{ fontSize: '2rem', color: '#222' }}></i>
              </span>
              <div>
                <div className="fw-bold">{doc.name}</div>
                <div className="text-muted" style={{ fontSize: 14 }}>{doc.size}</div>
              </div>
            </div>
          </div>
          <a href={doc.downloadUrl} download className="ms-3 mt-4 text-dark" title="Download" style={{ fontSize: 22 }}>
            <i className="ri-download-cloud-line" style={{ fontSize: '1.5rem', color: '#222', cursor: 'pointer' }}></i>
          </a>
        </div>
      ))}
    </div>
  );
};

export default DocumentsCard;
