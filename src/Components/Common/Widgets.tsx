import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

interface WidgetItem {
  id: number;
  icon: string;
  label: string;
  counter: number | string;
}

interface WidgetsProps {
  data: WidgetItem[];
}

const formatCurrency = (value: number | string) => {
  // Ensure value is a number
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return value;
  return `$${num.toLocaleString('en-US')}`;
};

const Widgets: React.FC<WidgetsProps> = ({ data }) => {
  return (
    <>
      {(data || []).map((item, idx) => (
        <Col lg={3} md={4} key={item.id || idx}>
          <Card>
            <CardBody className="custom-widget-body">
              <div className="d-flex align-items-center">
                <div className="avatar-sm flex-shrink-0">
                  <span className="avatar-title bg-light text-dark rounded-circle fs-3">
                    <i className={"align-middle " + item.icon}></i>
                  </span>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="fw-semibold fs-13 text-dark mb-1">{item.label}</p>
                  <h4 className="mb-0">
                    {item.label.toLowerCase().includes('earning')
                      ? formatCurrency(item.counter)
                      : item.counter}
                  </h4>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Widgets;