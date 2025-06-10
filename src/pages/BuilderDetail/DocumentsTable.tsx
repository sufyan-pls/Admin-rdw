import TableContainer from "Components/Common/TableContainerReactTable";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Button,
} from "reactstrap";
import classnames from "classnames";
import classNames from "classnames";
import VerificationDocuments from "pages/Documents/VerificationDocuments";
import ProperyContracts from "pages/Documents/PropertyContracts";
import ListingDocuments from "pages/Documents/ListingDocuments";

const DocumentsTable = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeDocType, setActiveDocType] = useState("verification");

  const columns = [
    {
      Header: "Document ID",
      accessor: "documentId",
      enableColumnFilter: false,
    },
    {},
  ];
  return (
    <React.Fragment>
      <div className="mb-3">
        <Row>
          <Col sm={12}>
            {" "}
            <div className="d-flex gap-2 ">
              <Button
                color={activeDocType === "verification" ? "light" : "secondary"}
                className="pt-2"
                style={{ height: "48px" }}
                outline={activeDocType !== "verification"}
                onClick={() => setActiveDocType("verification")}
              >
                Verification Documents
              </Button>
              <Button
                color={activeDocType === "property" ? "light" : "secondary"}
                className="pt-2"
                style={{ height: "48px" }}
                outline={activeDocType !== "property"}
                onClick={() => setActiveDocType("property")}
              >
                Property Contracts
              </Button>
              <Button
                color={activeDocType === "listing" ? "light" : "secondary"}
                className="pt-2"
                style={{ height: "48px" }}
                outline={activeDocType !== "listing"}
                onClick={() => setActiveDocType("listing")}
              >
                Listing Documents
              </Button>
            </div>
          </Col>
        </Row>{" "}
      </div>

      {activeDocType === "verification" && <VerificationDocuments />}

      {activeDocType === "property" && <ProperyContracts />}

      {activeDocType === "listing" && <ListingDocuments />}
    </React.Fragment>
  );
};

export default DocumentsTable;
