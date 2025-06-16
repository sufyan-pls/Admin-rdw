import { Button, Card, CardBody, CardHeader, Row } from 'reactstrap';
import React, { useState } from 'react';
import AssignInspectorModal from './AssignInspectorModal';

interface ActionProps {
    action: string;
    setAction: (action: string) => void;
}

const Action = ({ action, setAction }: ActionProps) => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!modalOpen);

    return (
        <Card>
            <CardHeader>
                <h6>Action</h6>
            </CardHeader>
            <CardBody>
                <div className="d-flex flex-column gap-3">
                <Row className="px-3">
                    <Button className='rounded-0' onClick={toggleModal} color='success'>{action} </Button>
                </Row>
                <Row className="px-3">
                    <Button className='rounded-0' onClick={() => {}} color='danger'>Reject</Button>
                </Row>
                </div>
            </CardBody>
            <AssignInspectorModal isOpen={modalOpen} toggle={toggleModal} setAction={setAction} />
            
        </Card>
    );
};

export default Action;