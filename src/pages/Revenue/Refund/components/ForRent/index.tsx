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
import RefundViewModal from "../Details";

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

export default function ForRentPage() {
  const [activeTab, setActiveTab] = useState("2"); // Changed from "1" to "2"
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
    <div>
      <div className="max-w-4xl">
        {/* General Header */}

        <React.Fragment>
          <Card>
            <CardBody>
              <div className="text-center">
                {" "}
                <CardBody className="pt-0">
                  <TabContent activeTab={activeTab} className="pt-3">
                    {/* TAB 2 For RENT */}
                    <TabPane tabId="2" className="active show">
                      <div className="table-responsive">
                        <Table
                          className="align-middle paginationTable"
                          style={{ minWidth: 900 }}
                        >
                          <thead>
                            <tr>
                              <th>
                                Property ID{" "}
                                <span
                                  style={{
                                    fontSize: "1rem",
                                    verticalAlign: "middle",
                                  }}
                                ></span>
                              </th>
                              <th>
                                Builder{" "}
                                <span
                                  style={{
                                    fontSize: "1rem",
                                    verticalAlign: "middle",
                                  }}
                                ></span>
                              </th>
                              <th>Customer</th>
                              <th>Address</th>
                              <th>Property Type</th>

                              <th>Created At</th>
                              <th>Updated At</th>
                              <th>Refund Type</th>
                              <th>Refund Amount</th>
                              <th>Status</th>

                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {paginatedData.map((row, idx) => (
                              <tr key={idx}>
                                <td>{row.propertyId}</td>
                                <td>{row.builder}</td>
                                <td>{row.customer}</td>
                                <td>{row.address}</td>
                                <td>{row.propertyType}</td>
                                <td>{row.createdAt}</td>
                                <td>{row.updatedAt}</td>
                                <td>{row.refundType}</td>
                                <td>{row.refundAmount}</td>
                                {/* <td>{row.status}</td> */}
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
                                {/* <td>{row.action}</td> */}

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
                                        style={{
                                          fontSize: 20,
                                          color: "#6b7280",
                                        }}
                                      ></i>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                      <DropdownItem
                                        onClick={() =>
                                          handlePropertyDetails(row)
                                        }
                                      >
                                        {/* <i className="ri-eye-line me-2"></i>{" "} */}
                                        View{" "}
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
                          Showing {paginatedData.length} of{" "}
                          {filteredData.length} Entries
                        </div>
                        <Pagination className="mb-0">
                          <PaginationItem disabled={currentPage === 1}>
                            <PaginationLink
                              previous
                              onClick={() => setCurrentPage(currentPage - 1)}
                            />
                          </PaginationItem>
                          {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem
                              active={currentPage === i + 1}
                              key={i}
                            >
                              <PaginationLink
                                onClick={() => setCurrentPage(i + 1)}
                              >
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
                  </TabContent>
                </CardBody>
              </div>
            </CardBody>
            <RefundViewModal
              isOpen={editModalOpen}
              toggle={() => setEditModalOpen(false)}
              user={selectedUser}
            />
          </Card>
        </React.Fragment>
      </div>
    </div>
  );
}
