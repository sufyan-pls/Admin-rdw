import BreadCrumb from "Components/Common/BreadCrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import SettingsPage from "./components";

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
          <SettingsPage />
        </Container>
      </div>
    </React.Fragment>
  );
};
export default SettingsUI;
