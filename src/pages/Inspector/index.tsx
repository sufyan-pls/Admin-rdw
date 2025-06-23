import BreadCrumb from "Components/Common/BreadCrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import ManageInspectorTable from "./Components/ManageInspectorTable";
import { inspectorWidgetsData } from "common/data/Inspector";
import Widgets from "Components/Common/Widgets";

const Inspector = () => {
  document.title = "Inspector";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb 
            title="Inspector" 
            pageTitles={[
              { label: "RealWealtdy", path: "/" },
              { label: "Inspector" }
            ]}
          />
          <Row>
            <Widgets data={inspectorWidgetsData} />
          </Row>
          <ManageInspectorTable />
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Inspector;
