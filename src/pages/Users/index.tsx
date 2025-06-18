import BreadCrumb from "Components/Common/BreadCrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import Widgets from "./Components/Widgets";
import ManageUsersTable from "./Components/ManageUsersTable";

const Users = () => {
  document.title = "Users";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb 
            title="Users" 
            pageTitles={[
              { label: "RealWealtdy", path: "/" },
              { label: "Users" }
            ]}
          />
          <Row>
            <Widgets />
          </Row>
          <ManageUsersTable />
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Users;
