import BreadCrumb from "Components/Common/BreadCrumb";
import React from "react";
import { Container, Row } from "reactstrap";
// import Widgets from "./Widgets";
// import BasicInformation from "./BasicInformation";
// import NavTabs from "./NavTabs";
// import ListingDetail from "pages/ListingDetail";
import BasicInformation from "./Components/BasicInformation";
import AccountActivity from "./Components/AccountActivity";

const BuilderDetail = () => {
  document.title = "Users Detais";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb 
            title="Users Detais" 
            pageTitles={[
              { label: "Users", path: "/users" },
              { label: "Users Detail" }
            ]}
          />
          <div>
            <BasicInformation />
          </div>
          <div>
            <AccountActivity />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BuilderDetail;
