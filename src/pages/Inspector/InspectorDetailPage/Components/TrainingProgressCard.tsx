import { Card, CardBody, CardHeader, Table } from "reactstrap"

const TrainingProgressCard = () => {
    return (
        <Card className="border rounded-0 shadow-none">
            <CardHeader className="border-bottom">
                <h5 className="fw-semibold mb-0">Training Progress</h5>
            </CardHeader>
            <CardBody className="p-0">
                <Table borderless className="mb-0">
                    <tbody>
                        <tr>
                            <td className="fw-semibold" style={{ width: '40%' }}>Status</td>
                            <td className="text-end" style={{ width: '60%' }}>
                                <span className="badge rounded-pill bg-success text-white px-3 py-1" style={{ fontWeight: 500, fontSize: '1rem', background: '#f3f4f6' }}>Complete</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="fw-semibold">Date Completed</td>
                            <td className="text-end">October 25, 2019 12:30 PM</td>
                        </tr>
                        <tr>
                            <td className="fw-semibold">Certificate</td>
                            <td className="text-end">
                                <a href="#" className="fw-normal  text-decoration-underline text-primary">Award Certificate</a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}

export default TrainingProgressCard;