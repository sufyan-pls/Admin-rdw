import BreadCrumb from "Components/Common/BreadCrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import BuilderTable from "./BuilderTable";
import { builderWidgets } from "common/data/builder";
import Widgets from "Components/Common/Widgets";

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
            <Widgets data={builderWidgets} />
          </Row>
          <BuilderTable />
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Builder;
