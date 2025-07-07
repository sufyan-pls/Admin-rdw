import BreadCrumb from "Components/Common/BreadCrumb";
import React, { useState } from "react";
import { Container, NavItem, Nav, NavLink} from "reactstrap";
import VerificationDocuments from "./VerificationDocuments";
import ProperyContracts from "./PropertyContracts";
import ListingDocuments from "./ListingDocuments";


const Documents = () => {
  document.title = "Documents";
  const [activeTab, setActiveTab] = useState("Verification");
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

          <div>
            <Nav pills className="nav-success mb-4">
              <NavItem>
                <NavLink
                  active={activeTab === 'Verification'}
                  onClick={() => setActiveTab('Verification')}
                  style={{ cursor: 'pointer' }}
                >
                  Verification Documents
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={activeTab === 'Property'}
                  onClick={() => setActiveTab('Property')}
                  style={{ cursor: 'pointer' }}
                >
                  Property Contracts
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={activeTab === 'Listing'}
                  onClick={() => setActiveTab('Listing')}
                  style={{ cursor: 'pointer' }}
                >
                  Listing Documents
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <div>
            {activeTab === "Verification" && <VerificationDocuments />}
            {activeTab === "Property" && <ProperyContracts />}
            {activeTab === "Listing" && <ListingDocuments />}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Documents;
