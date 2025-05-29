import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

interface BreadCrumbProps {
    title: string;
    pageTitles: { label: string; path?: string }[]; // path is optional for non-link items
}

const BreadCrumb = ({ title, pageTitles }: BreadCrumbProps) => {
    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">{title}</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                {pageTitles.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={`breadcrumb-item${idx === pageTitles.length - 1 ? ' active' : ''}`}
                                        aria-current={idx === pageTitles.length - 1 ? 'page' : undefined}
                                    >
                                        {idx === pageTitles.length - 1 || !item.path ? (
                                            item.label
                                        ) : (
                                            <Link to={item.path}>{item.label}</Link>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </div>

                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BreadCrumb;