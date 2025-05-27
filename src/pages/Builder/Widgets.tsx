import React from 'react';
import CountUp from "react-countup";
import { Card, CardBody, Col } from 'reactstrap';
import { builderWidgets } from 'common/data/builder';

const Widgets = () => {
    return (
        <React.Fragment>
            {(builderWidgets || []).map((item:any, key:number) => (
                <Col lg={3} md={4} key={key}>
                    <Card>
                        <CardBody className="custom-widget-body">
                            <div className="d-flex align-items-center">
                                <div className="avatar-sm flex-shrink-0">
                                    <span className="avatar-title bg-light text-primary rounded-circle fs-3">
                                        <i className={"align-middle " + item.icon}></i>
                                    </span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="text-uppercase fw-semibold fs-13 text-muted mb-1">{item.label}</p>
                                    <h4 className=" mb-0"> {item.counter}
                                    </h4>
                                </div>
                                {/* <div className="flex-shrink-0 align-self-end">
                                <span className={`badge bg-${item.badgeColor}-subtle text-${item.badgeColor}`}><i className={"align-middle me-1 " + item.badge}></i>{item.percentage} %<span>
                                </span></span></div> */}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </React.Fragment>
    );
};

export default Widgets;