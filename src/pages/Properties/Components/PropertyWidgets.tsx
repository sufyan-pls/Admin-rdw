import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

interface StatusItem {
    label: string;
    value: number | string;
}

interface PropertyStatusCardProps {
    icon: string;
    title: string;
    total: number | string;
    items: StatusItem[]; // 3 ya 4 items
}

const PropertyStatusCard: React.FC<PropertyStatusCardProps> = ({
    icon,
    title,
    total,
    items,
}) => {
    return (
        <Card>
            <CardHeader>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="avatar-sm flex-shrink-0">
                        <span className="avatar-title bg-light text-dark rounded-circle fs-3">
                            <i className={"align-middle " + icon}></i>
                        </span>
                    </div>
                    <div className="ms-3">
                        <span className="fw-semibold">{title}</span>
                    </div>
                    <div className="ms-auto fs-3 fw-bold">{total}</div>
                </div>
            </CardHeader>
            <CardBody>
                <div style={{ width: '100%', justifyContent: 'space-between',alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                    {items.slice(0, 4).map((item, idx) => (
                        <div key={idx}>
                            <div className="text-muted">{item.label}</div>
                            <div className="fw-bold fs-5">{item.value}</div>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
};

export default PropertyStatusCard;