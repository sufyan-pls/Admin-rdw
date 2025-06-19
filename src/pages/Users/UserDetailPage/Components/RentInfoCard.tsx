import React, { useState } from "react";
import { rentInformationData } from "common/data/users";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import ViewDetailTransactionDetailModal from '../Modals/ViewDetailTransactionDetailModal';

const RentInfoCard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="border p-3 h-100">
            <Row className="mb-2 align-items-center">
                <Col xs={6} className="fw-semibold">Rent Period</Col>
                <Col xs={6} className="text-end">{rentInformationData.rentPeriod.start} - {rentInformationData.rentPeriod.end}</Col>
            </Row>
            <Row className="mb-2 align-items-center">
                <Col xs={6} className="fw-semibold">Created at</Col>
                <Col xs={6} className="text-end">{rentInformationData.createdAt}</Col>
            </Row>
            <Row className="mb-2 align-items-center">
                <Col xs={6} className="fw-semibold">Updated at</Col>
                <Col xs={6} className="text-end">{rentInformationData.updatedAt}</Col>
            </Row>
            <Row className="mb-2 align-items-center">
                <Col xs={6} className="fw-semibold">Balance Due</Col>
                <Col xs={6} className="text-end">{rentInformationData.balanceDue}</Col>
            </Row>
            <Row>
                <Col xs={12} className="text-end">
                    <Link to="#" className="text-primary text-decoration-underline" style={{ cursor: "pointer" }} onClick={() => setModalOpen(true)}>
                        View Details
                    </Link>
                </Col>
            </Row>
            <ViewDetailTransactionDetailModal isOpen={modalOpen} toggle={() => setModalOpen(false)} />
        </div>
    );
};

export default RentInfoCard;