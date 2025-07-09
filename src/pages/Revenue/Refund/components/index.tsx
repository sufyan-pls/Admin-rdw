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
  TabPane,
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import classNames from "classnames";
import PropertyDocumentViewModal from "pages/Documents/PropertyContracts/component";
import RefundViewModal from "./Details";
import ForSalePage from "./ForSale";
import ForRentPage from "./ForRent";

type StatusType = "Approved" | "Suspended" | "Rejected";

const statusColor: Record<StatusType, string> = {
  Approved: "secondary",
  Suspended: "warning",
  Rejected: "danger",
};

const staticData = [
  {
    propertyId: "#1001",
    builder: "Kenzi",
    customer: "Floyd Miles",
    address: "123 Main St, Springfield, USA",
    propertyType: "Apartment",
    createdAt: "22 Oct, 2020 12:30 PM",
    updatedAt: "22 Oct, 2020 12:30 PM",
    refundType: "Full",
    refundAmount: "$1,000",
    status: "Completed",
    action: "View",
  },
  {
    propertyId: "#1002",
    builder: "Deanna",
    customer: "Eleanor Pena",
    address: "456 Elm St, Springfield, USA",
    propertyType: "House",
    createdAt: "24 May, 2020 12:30 PM",
    updatedAt: "24 May, 2020 12:30 PM",
    refundType: "Partial",
    refundAmount: "$500",
    status: "Pending",
    action: "View",
  },
  {
    propertyId: "#1003",
    builder: "Debbie",
    customer: "Arlene McCoy",
    address: "789 Oak St, Springfield, USA",
    propertyType: "Condo",
    createdAt: "21 Sep, 2020 12:30 PM",
    updatedAt: "21 Sep, 2020 12:30 PM",
    refundType: "None",
    refundAmount: "$0",
    status: "Rejected",
    action: "View",
  },
  {
    propertyId: "#1004",
    builder: "Jessica",
    customer: "Wade Warren",
    address: "321 Pine St, Springfield, USA",
    propertyType: "Townhouse",
    createdAt: "17 Oct, 2020 12:30 PM",
    updatedAt: "17 Oct, 2020 12:30 PM",
    refundType: "Full",
    refundAmount: "$1,500",
    status: "Completed",
    action: "View",
  },
  {
    propertyId: "#1005",
    builder: "Alma",
    customer: "Annette Black",
    address: "654 Maple St, Springfield, USA",
    propertyType: "Villa",
    createdAt: "8 Sep, 2020 12:30 PM",
    updatedAt: "8 Sep, 2020 12:30 PM",
    refundType: "Partial",
    refundAmount: "$750",
    status: "Approved",
    action: "View",
  },
  {
    propertyId: "#1006",
    builder: "Sara",
    customer: "Cody Fisher",
    address: "987 Cedar St, Springfield, USA",
    propertyType: "Apartment",
    createdAt: "8 Sep, 2020 12:30 PM",
    updatedAt: "8 Sep, 2020 12:30 PM",
    refundType: "Full",
    refundAmount: "$900",
    status: "Completed",
    action: "View",
  },
  {
    propertyId: "#1007",
    builder: "Debra",
    customer: "Marvin McKinney",
    address: "159 Spruce St, Springfield, USA",
    propertyType: "House",
    createdAt: "24 May, 2020 12:30 PM",
    updatedAt: "24 May, 2020 12:30 PM",
    refundType: "None",
    refundAmount: "$0",
    status: "Rejected",
    action: "View",
  },
  {
    propertyId: "#1008",
    builder: "Willie",
    customer: "Cameron Williamson",
    address: "753 Birch St, Springfield, USA",
    propertyType: "Condo",
    createdAt: "1 Feb, 2020 12:30 PM",
    updatedAt: "1 Feb, 2020 12:30 PM",
    refundType: "Partial",
    refundAmount: "$300",
    status: "Pending",
    action: "View",
  },
];

export default function Refund() {
  const [activeTab, setActiveTab] = useState("1");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeDocType, setActiveDocType] = useState("verification");
  const pageSize = 8;
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredData = staticData.filter(
    (row) =>
      row.customer.toLowerCase().includes(search.toLowerCase()) ||
      row.builder.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const handleView = (user: any) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const handlePropertyDetails = (user: any) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };
  return (
        <React.Fragment>
          <h4 className="mb-3">Transactions</h4>
          <Card>
            <CardHeader>
              <div>
                <Row className="justify-content-between align-items-center">
                  <Col md={6} className="mt-3">
                    <Nav
                      tabs
                      className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3"
                    >
                      <NavItem>
                        <NavLink
                          className={classNames({ active: activeTab === "1" })}
                          onClick={() => setActiveTab("1")}
                          style={{ cursor: "pointer" }}
                        >
                          For Sale
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classNames({ active: activeTab === "2" })}
                          onClick={() => setActiveTab("2")}
                          style={{ cursor: "pointer" }}
                        >
                          For Rent
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md={6} className="text-end">
                    <Input
                      type="search"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                      }}
                      style={{
                        maxWidth: 300,
                        display: "inline-block",
                        border: "1px solid #e5e7eb",
                      }}
                      className="rounded-2 px-4 py-2"
                    />
                  </Col>
                </Row>
              </div>
            </CardHeader>
            <CardBody>
              <div className="text-center">
                <CardBody className="pt-0">
                  {" "}
                  <TabContent activeTab={activeTab} className="pt-3">
                    <TabPane
                      tabId="1"
                      className={activeTab === "1" ? "active show" : ""}
                    >
                      <ForSalePage />
                    </TabPane>

                    {/* TAB 2 For RENT */}
                    <TabPane
                      tabId="2"
                      className={activeTab === "2" ? "active show" : ""}
                    >
                      <ForRentPage />
                    </TabPane>
                  </TabContent>
                </CardBody>
              </div>
            </CardBody>{" "}
          </Card>
        </React.Fragment>
  );
}
