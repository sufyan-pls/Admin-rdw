import BreadCrumb from "Components/Common/BreadCrumb";
import BuilderTable from "pages/Builder/BuilderTable";
import React from "react";
import { Container, Row } from "reactstrap";
import WidgetsRevenue from "./Widgets";
import RevenuePage from "./components";
// import BuilderTable from "./BuilderTable";

const Revenue = () => {
  document.title = "Revenue";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb 
            title="Revenue" 
            pageTitles={[
              { label: "RealWealtdy", path: "/" },
              { label: "Revenue" }
            ]}
          />
          <Row>
            <WidgetsRevenue />
          </Row>
          <RevenuePage />
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Revenue;
