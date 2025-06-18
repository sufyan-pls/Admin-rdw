import React from "react";
import { Row, Col } from "reactstrap";
import { FaRegImage, FaCheckCircle } from "react-icons/fa";

export interface PropertyInfoCardProps {
  name: string;
  address: string;
  status: string;
  builderName: string;
  isVerifiedBuilder?: boolean;
  listedFor: string;
  propertyType: string;
  imageUrl?: string;
}

const PropertyInfoCard: React.FC<{ data: PropertyInfoCardProps }> = ({ data }) => {
  return (
    <div className="border d-flex flex-row h-100" style={{ minHeight: 200 }}>
      {/* Left: Image or Placeholder */}
      <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: '40%', minHeight: 200 }}>
        {data?.imageUrl ? (
          <img src={data.imageUrl} alt="property" style={{ maxWidth: '100%', maxHeight: 190, objectFit: 'cover' }} />
        ) : (
          <FaRegImage size={48} color="#888" />
        )}
      </div>
      {/* Right: Details */}
      <div className="p-3" style={{ width: '60%' }}>
        <div className="mb-2">
          <h5 className="fw-bold mb-1">{data?.name}</h5>
          <div className="text-muted">{data?.address}</div>
        </div>
        <Row className="gy-2">
          <Col xs={6} className="d-flex flex-column">
            <h6 className="fw-semibold">Status</h6>
            <div className="w-10"><span className="badge rounded-pill bg-success text-light px-4 py-1" >{data?.status || 'Pending'}</span></div>
          </Col>
          <Col xs={6} className="d-flex flex-column">
            <span className="fw-semibold">Builder Name</span>
            <span>
              {data?.builderName || 'Realtor'}
              {data?.isVerifiedBuilder && (
                <FaCheckCircle color="#4caf50" title="Verified" style={{ verticalAlign: 'middle', marginLeft: 4 }} />
              )}
            </span>
          </Col>
          <Col xs={6} className="d-flex flex-column">
            <span className="fw-semibold">Listed For</span>
            <span>{data?.listedFor || 'Rent'}</span>
          </Col>
          <Col xs={6} className="d-flex flex-column">
            <span className="fw-semibold">Property Type</span>
            <span>{data?.propertyType || 'Single Family'}</span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PropertyInfoCard; 