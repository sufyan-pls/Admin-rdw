import BreadCrumb from "Components/Common/BreadCrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import DocumentsTables from "./DocumentsTables";
// import Widgets from './Widgets';

const Documents = () => {
  document.title = "Documents";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb 
            title="Documents" 
            pageTitles={[
              { label: "RealWealtdy", path: "/" },
              { label: "Documents" }
            ]}
          />
          {/* <Row>
            <Widgets />
          </Row> */}
          {/* <BuilderTable /> */}
          <DocumentsTables />
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Documents;
