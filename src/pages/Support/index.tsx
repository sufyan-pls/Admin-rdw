import BreadCrumb from "Components/Common/BreadCrumb";
import DocumentsTable from "pages/BuilderDetail/DocumentsTable";
import Widgets from "pages/DashboardCrm/Widgets";
import SettingsPage from "pages/Settings/components";
import React from "react";
import { Container, Row } from "reactstrap";
import SupportSection from "./components";
// import Widgets from './Widgets';

const SupportUI = () => {
  document.title = "Support";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Support" pageTitles={[{ label: "RealWealtdy", path: "/" }, { label: "Support" }]} />
          {/* <Row>
            <Widgets />
          </Row> */}

          <SupportSection />
        </Container>
      </div>
    </React.Fragment>
  );
};
export default SupportUI;
