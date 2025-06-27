import { Button, Card, CardBody, CardHeader, Row } from 'reactstrap';




const Action = () => {
    return (
        <Card>
            <CardHeader>
                <h6>Action</h6>
            </CardHeader>
            <CardBody>
                <div className="d-flex flex-column gap-3">
                <Row className="px-3">
                    <Button className='rounded-0' onClick={()=>{}} color='success'>Archive Property</Button>
                </Row>
                </div>
            </CardBody>
        </Card>
    );
};

export default Action;