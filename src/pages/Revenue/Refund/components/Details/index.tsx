import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardBody,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";

const RefundViewModal = ({ isOpen, toggle, agreement }: any) => {
  const [open, setOpen] = useState("1");

  const toggleAccordion = (id: string) => {
    open === id ? setOpen("") : setOpen(id);
  };

  // Custom styles for accordion to remove highlighting
  const accordionStyles = `
    .accordion-header-no-highlight .accordion-button {
      background-color: transparent !important;
      box-shadow: none !important;
      border: none !important;
    }
    .accordion-header-no-highlight .accordion-button:not(.collapsed) {
      background-color: transparent !important;
      color: inherit !important;
      box-shadow: none !important;
    }
    .accordion-header-no-highlight .accordion-button:focus {
      box-shadow: none !important;
      border: none !important;
    }
  `;

  return (
    <>
      <style>{accordionStyles}</style>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        size="lg"
        centered
        backdrop="static"
        className="edit-user-modal"
      >
        <ModalHeader
          toggle={toggle}
          className="border-bottom-0 p-4"
          style={{ fontSize: "1.25rem", fontWeight: 600 }}
        >
          Transaction Details
        </ModalHeader>{" "}
        <ModalBody className="px-4 pt-0">
          <Accordion open={open} toggle={toggleAccordion} className="mb-3">
            <AccordionItem>
              <AccordionHeader
                targetId="1"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "none",
                }}
                className="accordion-header-no-highlight"
              >
                <span style={{ fontSize: "1rem", fontWeight: 600 }}>
                  Payment Summary
                </span>
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <div className="p-3">
                  <div className="mb-3 d-flex justify-content-between">
                    <span style={{ color: "#4B5563", fontSize: "0.938rem" }}>
                      Asking Price
                    </span>
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 500,
                      }}
                    >
                      $20,000
                    </span>
                  </div>

                  <hr style={{ margin: "1rem 0", borderColor: "#e5e7eb" }} />

                  <div className="mb-3 d-flex justify-content-between">
                    <span style={{ color: "#4B5563", fontSize: "0.938rem" }}>
                      Inspection Report
                    </span>
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 500,
                      }}
                    >
                      $100
                    </span>
                  </div>

                  <div className="mb-3 d-flex justify-content-between">
                    <span style={{ color: "#4B5563", fontSize: "0.938rem" }}>
                      Rental Agreement
                    </span>
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 500,
                      }}
                    >
                      1.00%
                    </span>
                  </div>

                  <div className="mb-3 d-flex justify-content-between">
                    <span style={{ color: "#4B5563", fontSize: "0.938rem" }}>
                      Taxes & Duty
                    </span>
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 500,
                      }}
                    >
                      0.25%
                    </span>
                  </div>

                  <div className="mb-3 d-flex justify-content-between">
                    <span style={{ color: "#4B5563", fontSize: "0.938rem" }}>
                      Identity Verification
                    </span>
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 500,
                      }}
                    >
                      0.25%
                    </span>
                  </div>

                  <div className="mb-3 d-flex justify-content-between">
                    <span style={{ color: "#4B5563", fontSize: "0.938rem" }}>
                      Transport & Logistics
                    </span>
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 500,
                      }}
                    >
                      0.25%
                    </span>
                  </div>

                  <div className="mb-3 d-flex justify-content-between">
                    <span style={{ color: "#4B5563", fontSize: "0.938rem" }}>
                      RealWealthy Fees
                    </span>
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 500,
                      }}
                    >
                      4.00%
                    </span>
                  </div>

                  <div
                    className="mb-4 d-flex justify-content-between"
                    style={{
                      borderBottom: "1px solid #e5e7eb",
                      paddingBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 600,
                      }}
                    >
                      Total
                    </span>
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 600,
                      }}
                    >
                      6.00%
                    </span>
                  </div>

                  <div className="mb-3 d-flex justify-content-between">
                    <span style={{ color: "#4B5563", fontSize: "0.938rem" }}>
                      Fees
                    </span>
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 500,
                      }}
                    >
                      $1,200
                    </span>
                  </div>

                  <div className="mb-3 d-flex justify-content-between">
                    <span style={{ color: "#4B5563", fontSize: "0.938rem" }}>
                      Total Expense
                    </span>
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 500,
                      }}
                    >
                      $21,200
                    </span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 600,
                      }}
                    >
                      Remaining Balance
                    </span>
                    <span
                      style={{
                        // color: "#111827",
                        fontSize: "0.938rem",
                        fontWeight: 600,
                      }}
                    >
                      $20,000
                    </span>
                  </div>
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>

          <Card style={{ border: "1px solid #e5e7eb", boxShadow: "none" }}>
            <CardBody className="p-4">
              <h5
                className="mb-4"
                style={{ fontSize: "1rem", fontWeight: 600 }}
              >
                Balance Refund
              </h5>

              <div className="mb-3 d-flex justify-content-between align-items-center">
                <span
                  style={{
                    //  color: "#ffffff",
                    fontSize: "0.938rem",
                  }}
                >
                  Status
                </span>
                <div className="d-flex align-items-center gap-2">
                  <span
                    className="px-2 py-1 rounded"
                    style={{
                      // backgroundColor: "#000000",
                      // color: "#92400E",
                      fontSize: "0.813rem",
                    }}
                  >
                    Pending
                  </span>
                  <Button
                    color="link"
                    className="p-0"
                    style={{
                      // color: "#ffffff",
                      textDecoration: "none",
                      fontSize: "0.938rem",
                    }}
                  >
                    Pay Now
                  </Button>
                </div>
              </div>

              <div className="mb-3 d-flex justify-content-between">
                <span
                  style={{
                    //  color: "#4B5563",
                    fontSize: "0.938rem",
                  }}
                >
                  Amount
                </span>
                <span
                  style={{
                    // color: "#ffffff",
                    fontSize: "0.938rem",
                    fontWeight: 500,
                  }}
                >
                  $20,000
                </span>
              </div>

              <div className="mb-3 d-flex justify-content-between">
                <span
                  style={{
                    // color: "#ffffff",
                    fontSize: "0.938rem",
                  }}
                >
                  Payment Method
                </span>
                <span
                  style={{
                    // color: "#111827",
                    fontSize: "0.938rem",
                    fontWeight: 500,
                  }}
                >
                  Bank Transfer
                </span>
              </div>

              <div className="mb-3 d-flex justify-content-between">
                <span
                  style={{
                    //  color: "#ffffff",
                    fontSize: "0.938rem",
                  }}
                >
                  Date
                </span>
                <span
                  style={{
                    // color: "#ffffff",
                    fontSize: "0.938rem",
                    fontWeight: 500,
                  }}
                >
                  22 Oct, 2020 12:30 PM
                </span>
              </div>

              <div className="d-flex justify-content-between">
                <span
                  style={{
                    // color: "#4B5563",
                    fontSize: "0.938rem",
                  }}
                >
                  User
                </span>
                <span
                  style={{
                    // color: "#ffffff",
                    fontSize: "0.938rem",
                    fontWeight: 500,
                  }}
                >
                  Robert Fox
                </span>
              </div>
            </CardBody>
          </Card>
        </ModalBody>
        <ModalFooter className="border-top-0 p-4">
          <Button
            color="light"
            onClick={toggle}
            style={{
              minWidth: 100,
              backgroundColor: "#F3F4F6",
              border: "none",
              // color: "#374151",
              fontWeight: 500,
            }}
          >
            Close{" "}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default RefundViewModal;
