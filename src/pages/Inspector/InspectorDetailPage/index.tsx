import BreadCrumb from "Components/Common/BreadCrumb";
import React from "react";
import { Container, Row } from "reactstrap";
// import Widgets from "./Components/Widgets";
import { inspectorDetailWidgetsData } from "common/data/Inspector";
import Widgets from "Components/Common/Widgets";
import BasicInformation from "./Components/BasicInformation";


const InspectorDetailPage = () => {
  document.title = "Inspector Detail";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb 
            title="Inspector Detail" 
            pageTitles={[
              { label: "Inspector", path: "/inspector" },
              { label: "Inspector Detail" }
            ]}
          />
          <Row>
            <Widgets data={inspectorDetailWidgetsData} />
          </Row>
          <Row>
            <BasicInformation />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default InspectorDetailPage;
