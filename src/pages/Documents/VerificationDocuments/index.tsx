import TableContainer from "Components/Common/TableContainerReactTable";
import React, { useState, useRef, useEffect } from "react";
import "./AccordionStyles.css";
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
// AccordionMenu component removed as we use inline accordion now
import classnames from "classnames";
import classNames from "classnames";
import VerifiedDocumentViewModal from "./component";
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
    email: "kenzi.lawson@example.com",
    created: "22 Oct, 2020 12:30 PM",
    updated: "22 Oct, 2020 12:30 PM",
    AccountType: "User",
    status: "Approved",
  },
  {
    id: "#737",
    name: "Eleanor Pena",
    email: "deanna.curtis@example.com",
    created: "24 May, 2020 12:30 PM",
    updated: "24 May, 2020 12:30 PM",
    AccountType: "Builder",

    status: "Approved",
  },
  {
    id: "#737",
    name: "Arlene McCoy",
    email: "debbie.baker@example.com",
    created: "21 Sep, 2020 12:30 PM",
    updated: "21 Sep, 2020 12:30 PM",
    AccountType: "Inspector",

    status: "Suspended",
  },
  {
    id: "#737",
    name: "Wade Warren",
    email: "jessica.hanson@example.com",
    created: "17 Oct, 2020 12:30 PM",
    updated: "17 Oct, 2020 12:30 PM",
    AccountType: "Focal Person",

    status: "Suspended",
  },
  {
    id: "#737",
    name: "Annette Black",
    email: "alma.lawson@example.com",
    created: "8 Sep, 2020 12:30 PM",
    updated: "8 Sep, 2020 12:30 PM",
    AccountType: "Builder",

    status: "Rejected",
  },
  {
    id: "#737",
    name: "Cody Fisher",
    email: "sara.cruz@example.com",
    created: "8 Sep, 2020 12:30 PM",
    updated: "8 Sep, 2020 12:30 PM",
    AccountType: "User",

    status: "Rejected",
  },
  {
    id: "#737",
    name: "Marvin McKinney",
    email: "debra.holt@example.com",
    created: "24 May, 2020 12:30 PM",
    updated: "24 May, 2020 12:30 PM",
    AccountType: "Inspector",

    status: "Suspended",
  },
  {
    id: "#737",
    name: "Cameron Williamson",
    email: "willie.jennings@example.com",
    created: "1 Feb, 2020 12:30 PM",
    updated: "1 Feb, 2020 12:30 PM",
    AccountType: "Focal Person",
    status: "Suspended",
  },
];

const VerificationDocuments = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeDocType, setActiveDocType] = useState("verification");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState("");
  const [accordionHeight, setAccordionHeight] = useState<
    Record<string, number>
  >({});
  const accordionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pageSize = 8;

  const filteredData = staticData.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase())
  );

  // Update accordion height whenever accordion state changes
  useEffect(() => {
    // Small delay to ensure DOM has updated
    const timeoutId = setTimeout(() => {
      Object.keys(accordionRefs.current).forEach((key) => {
        const element = accordionRefs.current[key];
        if (element) {
          setAccordionHeight((prev) => ({
            ...prev,
            [key]: open === key ? element.scrollHeight : 0,
          }));
        }
      });
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [open]);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalPages = Math.ceil(filteredData.length / pageSize);
  // These columns are for the react-table if you need them later
  const reactTableColumns = [
    {
      Header: "Document ID",
      accessor: "documentId",
      enableColumnFilter: false,
    },
    {},
  ];

  // Handle viewing document details
  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  }; // Toggle accordion row
  const toggle = (id: string) => {
    // This is a table row accordion
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };
  // This function was removed as we now use AccordionMenu component

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
                      Approved
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classNames({ active: activeTab === "2" })}
                      onClick={() => setActiveTab("2")}
                      style={{ cursor: "pointer" }}
                    >
                      Pending
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => setActiveTab("3")}
                      style={{ cursor: "pointer" }}
                    >
                      Rejected
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
                    {" "}
                    <Table
                      className="align-middle paginationTable"
                      style={{ minWidth: 900 }}
                    >
                      {" "}
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
                            Name{" "}
                            <span
                              style={{
                                fontSize: "1rem",
                                verticalAlign: "middle",
                              }}
                            ></span>
                          </th>
                          <th>Email</th>
                          <th>Created At</th>
                          <th>Updated At</th>
                          <th>Account Type</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedData.map((row, idx) => (
                          <React.Fragment key={idx}>
                            <tr
                              className={
                                open === `row-${idx}` ? "table-active" : ""
                              }
                            >
                              <td>{row.id}</td>
                              <td>{row.name}</td>
                              <td>{row.email}</td>
                              <td>{row.created}</td>
                              <td>{row.updated}</td>
                              <td>{row.AccountType}</td>
                              <td>
                                <Badge
                                  color={
                                    statusColor[row.status as StatusType] ||
                                    "secondary"
                                  }
                                  pill
                                  style={{
                                    fontWeight: 500,
                                    fontSize: 14,
                                    background:
                                      row.status === "Active"
                                        ? "#f3f4f6"
                                        : "#fef3c7",
                                    color:
                                      row.status === "Active"
                                        ? "#6b7280"
                                        : "#b45309",
                                    border: "none",
                                  }}
                                >
                                  {row.status}
                                </Badge>
                              </td>
                              <td
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggle(`action-${idx}`);
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                <i
                                  className={`ri-arrow-${
                                    open === `action-${idx}` ? "down" : "right"
                                  }-s-line accordion-icon ${
                                    open === `action-${idx}` ? "rotated" : ""
                                  }`}
                                  style={{ fontSize: 18 }}
                                ></i>
                              </td>
                            </tr>

                            {/* Accordion content row */}
                            <tr className="accordion-row">
                              <td colSpan={8} style={{ padding: 0 }}>
                                <div
                                  ref={(el) =>
                                    (accordionRefs.current[`action-${idx}`] =
                                      el)
                                  }
                                  className={`accordion-content ${
                                    open === `action-${idx}` ? "open" : ""
                                  }`}
                                >
                                  {open === `action-${idx}` && (
                                    <div className="p-3 bg-light border-top border-bottom">
                                      <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h5 className="fw-bold mb-0">
                                          Verification Documents
                                        </h5>
                                        <Button
                                          color="link"
                                          className="text-decoration-none"
                                        >
                                          View Details
                                        </Button>
                                      </div>
                                      <Row className="mt-4">
                                        <Col md={4}>
                                          <div className="border rounded p-3">
                                            <h6>National ID</h6>
                                            <div className="d-flex align-items-center mt-3">
                                              <div
                                                className="bg-light rounded-circle p-2 me-3"
                                                style={{
                                                  width: 48,
                                                  height: 48,
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                }}
                                              >
                                                <i className="ri-file-pdf-line fs-3"></i>
                                              </div>
                                              <div>
                                                <p className="mb-0">
                                                  National ID
                                                </p>
                                                <small className="text-muted">
                                                  623 KBs
                                                </small>
                                              </div>
                                              <div className="ms-auto d-flex align-items-center">
                                                <Button
                                                  color="light"
                                                  className="btn-sm rounded-circle p-1 me-2"
                                                  style={{
                                                    width: "32px",
                                                    height: "32px",
                                                  }}
                                                >
                                                  <i className="ri-download-line"></i>
                                                </Button>
                                                <UncontrolledDropdown>
                                                  <DropdownToggle
                                                    tag="button"
                                                    className="btn btn-light"
                                                  >
                                                    Approve{" "}
                                                    <i className="ri-arrow-down-s-line ms-1"></i>
                                                  </DropdownToggle>
                                                  <DropdownMenu>
                                                    <DropdownItem>
                                                      Approve
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                      Reject
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                      Request More Info
                                                    </DropdownItem>
                                                  </DropdownMenu>
                                                </UncontrolledDropdown>
                                              </div>
                                            </div>
                                          </div>
                                        </Col>
                                        <Col md={4}>
                                          <div className="border rounded p-3">
                                            <h6>Passport</h6>
                                            <div className="d-flex align-items-center mt-3">
                                              <div
                                                className="bg-light rounded-circle p-2 me-3"
                                                style={{
                                                  width: 48,
                                                  height: 48,
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                }}
                                              >
                                                <i className="ri-file-pdf-line fs-3"></i>
                                              </div>
                                              <div>
                                                <p className="mb-0">Passport</p>
                                                <small className="text-muted">
                                                  623 KBs
                                                </small>
                                              </div>
                                              <div className="ms-auto d-flex align-items-center">
                                                <Button
                                                  color="light"
                                                  className="btn-sm rounded-circle p-1 me-2"
                                                  style={{
                                                    width: "32px",
                                                    height: "32px",
                                                  }}
                                                >
                                                  <i className="ri-download-line"></i>
                                                </Button>
                                                <UncontrolledDropdown>
                                                  <DropdownToggle
                                                    tag="button"
                                                    className="btn btn-light"
                                                  >
                                                    Approve{" "}
                                                    <i className="ri-arrow-down-s-line ms-1"></i>
                                                  </DropdownToggle>
                                                  <DropdownMenu>
                                                    <DropdownItem>
                                                      Approve
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                      Reject
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                      Request More Info
                                                    </DropdownItem>
                                                  </DropdownMenu>
                                                </UncontrolledDropdown>
                                              </div>
                                            </div>
                                          </div>
                                        </Col>
                                        <Col md={4}>
                                          <div className="border rounded p-3">
                                            <h6>Live Image</h6>
                                            <div className="d-flex align-items-center mt-3">
                                              <div
                                                className="bg-light rounded-circle p-2 me-3"
                                                style={{
                                                  width: 48,
                                                  height: 48,
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                }}
                                              >
                                                <i className="ri-file-image-line fs-3"></i>
                                              </div>
                                              <div>
                                                <p className="mb-0">
                                                  Live Image
                                                </p>
                                                <small className="text-muted">
                                                  623 KBs
                                                </small>
                                              </div>
                                              <div className="ms-auto d-flex align-items-center">
                                                <Button
                                                  color="light"
                                                  className="btn-sm rounded-circle p-1 me-2"
                                                  style={{
                                                    width: "32px",
                                                    height: "32px",
                                                  }}
                                                >
                                                  <i className="ri-download-line"></i>
                                                </Button>
                                                <UncontrolledDropdown>
                                                  <DropdownToggle
                                                    tag="button"
                                                    className="btn btn-light"
                                                  >
                                                    Approve{" "}
                                                    <i className="ri-arrow-down-s-line ms-1"></i>
                                                  </DropdownToggle>
                                                  <DropdownMenu>
                                                    <DropdownItem>
                                                      Approve
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                      Reject
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                      Request More Info
                                                    </DropdownItem>
                                                  </DropdownMenu>
                                                </UncontrolledDropdown>
                                              </div>
                                            </div>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  )}
                                </div>
                              </td>
                            </tr>
                          </React.Fragment>
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
                    No Pending Data
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div className="text-center py-5 text-muted">
                    No Rejected Data
                  </div>
                </TabPane>
              </TabContent>
            </CardBody>
          </div>
        </CardBody>
        {/* <VerifiedDocumentViewModal
          isOpen={editModalOpen}
          toggle={() => setEditModalOpen(false)}
          user={selectedUser}
        /> */}
      </Card>
    </React.Fragment>
  );
};

export default VerificationDocuments;
