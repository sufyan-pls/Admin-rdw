import BreadCrumb from "Components/Common/BreadCrumb";
import DocumentsTable from "pages/BuilderDetail/DocumentsTable";
import Widgets from "pages/DashboardCrm/Widgets";
import React from "react";
import { Container, Row } from "reactstrap";
import SettingsPage from "./components";
// import Widgets from './Widgets';
// import BuilderTable from './BuilderTable';

const SettingsUI = () => {
  document.title = "Settings";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb 
            title="Settings" 
            pageTitles={[
              { label: "RealWealtdy", path: "/" },
              { label: "Settings" }
            ]}
          />
          {/* <Row>
            <Widgets />
          </Row> */}

          <SettingsPage />
        </Container>
      </div>
    </React.Fragment>
  );
};
export default SettingsUI;
