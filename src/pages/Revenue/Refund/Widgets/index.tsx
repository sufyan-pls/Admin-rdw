import { refundWidgets } from "common/data/refunds";
import React from "react";
import CountUp from "react-countup";
import { Card, CardBody, Col } from "reactstrap";

const WidgetsRefunds = () => {
  return (
    <React.Fragment>
      {(refundWidgets || []).map((item: any, key: number) => (
        <Col lg={3} md={4} key={key}>
          <Card>
            <CardBody className="custom-widget-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 ms-3">
                  <p className="text-uppercase fw-semibold fs-13 text-muted mb-1">
                    {item.label}
                  </p>
                  <h4 className=" mb-0"> {item.counter}</h4>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default WidgetsRefunds;
