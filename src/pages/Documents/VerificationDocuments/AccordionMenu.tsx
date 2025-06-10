import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

interface AccordionMenuProps {
  rowId: number;
  rowData: {
    id: string;
    name: string;
    email: string;
    status: string;
  };
}

const AccordionMenu: React.FC<AccordionMenuProps> = ({ rowId, rowData }) => {
  const [openAccordion, setOpenAccordion] = useState<string>("");

  const toggle = (id: string) => {
    setOpenAccordion(openAccordion === id ? "" : id);
  };

  return (
    <div className="accordion-wrapper" onClick={(e) => e.stopPropagation()}>
      <Accordion
        open={openAccordion}
        toggle={toggle}
        className="table-accordion"
      >
        <AccordionItem className="border-0">
          <AccordionHeader
            targetId={`doc-${rowId}`}
            className="p-0 d-flex align-items-center justify-content-center"
          >
            <i
              className="ri-menu-3-line"
              style={{ fontSize: 20, color: "#6b7280" }}
            ></i>
          </AccordionHeader>
          <AccordionBody accordionId={`doc-${rowId}`} className="p-0">
            <div className="p-2 border rounded mt-1">
              <div className="mb-2 border-bottom pb-2">
                <strong className="d-block">Document Info</strong>
                <small>
                  <strong>ID:</strong> {rowData.id}
                </small>
                <br />
                <small>
                  <strong>Status:</strong> {rowData.status}
                </small>
              </div>
              <div>
                <strong className="d-block">User Info</strong>
                <small>
                  <strong>Name:</strong> {rowData.name}
                </small>
                <br />
                <small>
                  <strong>Email:</strong> {rowData.email}
                </small>
              </div>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionMenu;
