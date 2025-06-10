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
import classnames from "classnames";
import classNames from "classnames";
import VerifiedDocumentViewModal from "../VerificationDocuments/component";
import PropertyDocumentViewModal from "./component";

type StatusType = "Approved" | "Suspended" | "Rejected";

const statusColor: Record<StatusType, string> = {
  Approved: "secondary",
  Suspended: "warning",
  Rejected: "danger",
};

const staticData = [
  {
    id: "#737",
    name: "Floyd Miles",
    builder: "Kenzi",
    address: "123 Main St, Springfield, USA",
    created: "22 Oct, 2020 12:30 PM",
    updated: "22 Oct, 2020 12:30 PM",
  },
  {
    id: "#737",
    name: "Eleanor Pena",
    builder: "Deanna",
    address: "456 Elm St, Springfield, USA",
    created: "24 May, 2020 12:30 PM",
    updated: "24 May, 2020 12:30 PM",
  },
  {
    id: "#737",
    name: "Arlene McCoy",
    builder: "Debbie",
    address: "789 Oak St, Springfield, USA",
    created: "21 Sep, 2020 12:30 PM",
    updated: "21 Sep, 2020 12:30 PM",
  },
  {
    id: "#737",
    name: "Wade Warren",
    builder: "Jessica",
    address: "321 Pine St, Springfield, USA",
    created: "17 Oct, 2020 12:30 PM",
    updated: "17 Oct, 2020 12:30 PM",
  },
  {
    id: "#737",
    name: "Annette Black",
    builder: "Alma",
    address: "654 Maple St, Springfield, USA",
    created: "8 Sep, 2020 12:30 PM",
    updated: "8 Sep, 2020 12:30 PM",
  },
  {
    id: "#737",
    name: "Cody Fisher",
    builder: "Sara",
    address: "987 Cedar St, Springfield, USA",
    created: "8 Sep, 2020 12:30 PM",
    updated: "8 Sep, 2020 12:30 PM",
  },
  {
    id: "#737",
    name: "Marvin McKinney",
    builder: "Debra",
    address: "159 Spruce St, Springfield, USA",
    created: "24 May, 2020 12:30 PM",
    updated: "24 May, 2020 12:30 PM",
  },
  {
    id: "#737",
    name: "Cameron Williamson",
    builder: "Willie",
    address: "753 Birch St, Springfield, USA",
    created: "1 Feb, 2020 12:30 PM",
    updated: "1 Feb, 2020 12:30 PM",
  },
];

const ProperyContracts = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeDocType, setActiveDocType] = useState("verification");
  const pageSize = 8;
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredData = staticData.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.builder.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

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
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => setActiveTab("1")}
                      style={{ cursor: "pointer" }}
                    >
                      Sold
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classNames({ active: activeTab === "2" })}
                      onClick={() => setActiveTab("2")}
                      style={{ cursor: "pointer" }}
                    >
                      Rented
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => setActiveTab("3")}
                      style={{ cursor: "pointer" }}
                    >
                      Deal In Progress
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
                    background: "#1a1d21",
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
            {/* <h4>Listing Verification Documents </h4>
            <p>Listing documents will be displayed here.</p> */}{" "}
            {/* <Paper sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
              />
            </Paper> */}
            <CardBody className="pt-0">
              <TabContent activeTab={activeTab} className="pt-3">
                <TabPane tabId="1">
                  <div className="table-responsive">
                    <Table
                      className="align-middle paginationTable"
                      style={{ minWidth: 900 }}
                    >
                      <thead>
                        <tr>
                          <th>
                            ID{" "}
                            <span
                              style={{
                                fontSize: "1rem",
                                verticalAlign: "middle",
                              }}
                            ></span>
                          </th>
                          <th>
                            User{" "}
                            <span
                              style={{
                                fontSize: "1rem",
                                verticalAlign: "middle",
                              }}
                            ></span>
                          </th>
                          <th>Builder</th>
                          <th>Address</th>
                          <th>Created At</th>
                          <th>Updated At</th>

                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedData.map((row, idx) => (
                          <tr key={idx}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.builder}</td>
                            <td>{row.address}</td>
                            <td>{row.created}</td>
                            <td>{row.updated}</td>

                            <td>
                              <UncontrolledDropdown direction="start">
                                <DropdownToggle
                                  tag="span"
                                  data-bs-toggle="dropdown"
                                  aria-expanded={false}
                                  style={{ cursor: "pointer" }}
                                >
                                  <i
                                    className="ri-more-2-fill"
                                    style={{ fontSize: 20, color: "#6b7280" }}
                                  ></i>
                                </DropdownToggle>
                                <DropdownMenu>
                                  {/* <DropdownItem
                                                             onClick={() =>
                                                               navigate(`/builder-detail/${row.id}`)
                                                           
                                                             }
                                                           >
                                                             <i className="ri-eye-line me-2"></i> View
                                                             Details
                                                           </DropdownItem> */}
                                  <DropdownItem onClick={() => handleEdit(row)}>
                                    <i className="ri-eye-line me-2"></i> View
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="text-muted" style={{ fontSize: 15 }}>
                      Showing {paginatedData.length} of {filteredData.length}{" "}
                      Entries
                    </div>
                    <Pagination className="mb-0">
                      <PaginationItem disabled={currentPage === 1}>
                        <PaginationLink
                          previous
                          onClick={() => setCurrentPage(currentPage - 1)}
                        />
                      </PaginationItem>
                      {[...Array(totalPages)].map((_, i) => (
                        <PaginationItem active={currentPage === i + 1} key={i}>
                          <PaginationLink onClick={() => setCurrentPage(i + 1)}>
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem disabled={currentPage === totalPages}>
                        <PaginationLink
                          next
                          onClick={() => setCurrentPage(currentPage + 1)}
                        />
                      </PaginationItem>
                    </Pagination>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="text-center py-5 text-muted">
                    No Rendted Data
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div className="text-center py-5 text-muted">
                    No Deal In Progress Data
                  </div>
                </TabPane>
              </TabContent>
            </CardBody>
          </div>
        </CardBody>
        <PropertyDocumentViewModal
          isOpen={editModalOpen}
          toggle={() => setEditModalOpen(false)}
          user={selectedUser}
        />
      </Card>
    </React.Fragment>
  );
};

export default ProperyContracts;
