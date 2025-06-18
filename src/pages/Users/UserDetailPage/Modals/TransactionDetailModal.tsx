import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const TransactionDetailModal = ({ isOpen, toggle, user }: any) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle} size="lg" centered backdrop="static" className="edit-user-modal">
            <ModalHeader toggle={toggle} className="border-bottom-0 pb-0">Transaction Details</ModalHeader>
            <ModalBody className="pt-0 pb-2 ">
                <hr className="mt-3 mb-4" />
                <div className="d-flex flex-column gap-2">
                    <Row>
                        <Col>
                            <h6 className="fw-bold">Earnest Deposit</h6>
                        </Col>
                    </Row>
                    <Row className="flex flex-row justify-content-between w-full">
                        <Col className="flex flex-column">
                            <h6 className="fw-bold">Transaction ID</h6>
                            <p>1234567890</p>
                        </Col>
                        <Col className="flex flex-column">
                            <h6 className="fw-bold">Invoice NO</h6>
                            <p>#123455</p>
                        </Col>
                        <Col className="flex flex-column">
                            <h6 className="fw-bold">Invoice To</h6>
                            <p>Robert Fox</p>
                        </Col>
                    </Row>
                </div>
                <div className="border rounded mb-3" style={{ overflow: "hidden" }}>
                    <table className="table mb-0">
                        <thead>
                            <tr className="bg-light">
                                <th className="fw-bold border-0" style={{ width: "50%" }}>Status</th>
                                <th className="text-end border-0">
                                    <span className="badge rounded-pill bg-success px-3 py-2" style={{fontWeight: 500}}>Paid</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fw-bold border-0">Amount</td>
                                <td className="text-end border-0">$30,550</td>
                            </tr>
                            <tr>
                                <td className="fw-bold border-0">Date</td>
                                <td className="text-end border-0">12 December, 2023</td>
                            </tr>
                            <tr>
                                <td className="fw-bold border-0">Time</td>
                                <td className="text-end border-0">12:30 PM</td>
                            </tr>
                            <tr>
                                <td className="fw-bold border-0">Payment Method</td>
                                <td className="text-end border-0">Bank Transfer</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default TransactionDetailModal;