import BreadCrumb from "Components/Common/BreadCrumb";
import DocumentsTable from "pages/BuilderDetail/DocumentsTable";
import Widgets from "pages/DashboardCrm/Widgets";
import React from "react";
import { Container, Row } from "reactstrap";
// import Widgets from './Widgets';
// import BuilderTable from './BuilderTable';

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
          <DocumentsTable />
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Documents;
