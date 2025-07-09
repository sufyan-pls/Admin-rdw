import BreadCrumb from "Components/Common/BreadCrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import BasicInformation from "./BasicInformation";
import NavTabs from "./NavTabs";
import { builderDetailWidgets } from "common/data/builder";
import Widgets from "Components/Common/Widgets";

const BuilderDetail = () => {
  document.title = "Builder Detail";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <BreadCrumb title="Builder Detail" pageTitle="Builder" /> */}
          <BreadCrumb 
            title="Builder Detail" 
            pageTitles={[
              { label: "Builder", path: "/builder" },
              { label: "Builder Detail" }
            ]}
          />
          <Row>
            <Widgets data={builderDetailWidgets} />
          </Row>
          <div>
            <BasicInformation />
          </div>
          <div>
            <NavTabs />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BuilderDetail;
