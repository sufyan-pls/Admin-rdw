import BreadCrumb from "Components/Common/BreadCrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import Widgets from "./Widgets";
import BuilderTable from "./BuilderTable";

const Builder = () => {
  document.title = "Builder";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="Builder" pageTitle="RealWealtdy" /> */}
          <BreadCrumb 
            title="Builder" 
            pageTitles={[
              { label: "RealWealtdy", path: "/" },
              { label: "Builder" }
            ]}
          />
          <Row>
            <Widgets />
          </Row>
          <BuilderTable />
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Builder;
