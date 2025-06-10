import BreadCrumb from "Components/Common/BreadCrumb";
import BuilderTable from "pages/Builder/BuilderTable";
import React from "react";
import { Container, Row } from "reactstrap";
import WidgetsRevenue from "./Widgets";
import WidgetsRefunds from "./Widgets";
import Refund from "./components";
// import BuilderTable from "./BuilderTable";

const Refunds = () => {
  document.title = "Revenue";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Revenue" pageTitle="RealWealtdy" />
          <Row>
            <WidgetsRefunds />
          </Row>
          <Refund />
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Refunds;
