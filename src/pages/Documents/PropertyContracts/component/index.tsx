import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Badge,
} from "reactstrap";

const PropertyDocumentViewModal = ({ isOpen, toggle, agreement }: any) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      size="xl"
      centered
      backdrop="static"
      className="edit-user-modal"
    >
      <ModalHeader toggle={toggle} className="border-bottom-0 mb-4">
        Agreement to Sell Property
      </ModalHeader>
      <ModalBody className="pt-0 pb-2 px-4">
        <div>
          <ol>
            <li>
              SALE AND PURCHASE: ________________Christina
              Sunday________________("Seller") and ________________Abigail
              Wealth________________ ("Buyer") agree to sell and buy on the
              terms and conditions specified below the property described as:
              Address: 573 Westlake Blv, Malibu, CA 90265 together with all
              existing improvements and attached items, including all fixtures,
              built-in furnishings, appliances (including but not limited to
              range(s), microwave(s), refrigerator(s), dishwasher(s), window
              HVAC unit(s), washer(s), and dryer(s), ceiling fan(s), light
              fixtures, attached wall-to-wall carpeting, rods, draperies and
              other window treatments) as of Effective Date. The real and
              personal property described above as included in the purchase is
              referred to as the "Property." Personal property listed in this
              Contract is included in the purchase price, has no contributory
              value and is being left for Seller’s convenience.
            </li>
            <li>
              PURCHASE PRICE: _______________________________ ($12,995,000)
              <div style={{ marginTop: "0.5em" }}>
                {["a.", "b.", "c.", "d."].map((label, index) => {
                  const texts = [
                    "$1,299,500 Refundable earnest money deposit to be held in trust by Seller.",
                    "$50,000 Conveyance taken subject to existing liens; principal balances $11,645,500 (If the principal balances are less than stated herein on day of closing, the purchase price shall be reduced to reflect this difference; if the principal balance(s) is more than stated herein, then Buyer’s required cash payment shall be reduced accordingly.)",
                    "$__________ Seller financing; terms",
                    "$__________ Cash, certified or cashier’s check on closing and delivery of deed (or such greater or lesser amount as may be necessary to complete payment of purchase price after credits, adjustments and prorations).",
                  ];
                  return (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginTop: "0.5em",
                      }}
                    >
                      <span style={{ width: "1.5em" }}>
                        <strong>{label}</strong>
                      </span>
                      <p style={{ margin: 0 }}>{texts[index]}</p>
                    </div>
                  );
                })}
              </div>
            </li>
            <li>
              FINANCING: Buyer shall have the same number of days as the Closing
              Date, including extensions, to obtain financing suitable to the
              Buyer’s requirements. As applicable by law, should the Buyer give
              notice to the Seller prior to the end of this “Financing Period,”
              that Buyer elects to cancel this Contract (the “Cancellation
              Notice”), this Contract shall terminate. If Buyer does not deliver
              the Cancellation Notice the Contract shall continue. Buyer may
              additionally cancel this agreement at any time before closing due
              to a) dissatisfaction with or inability to obtain adequate due
              diligence information on the property, or b) inability to obtain
              financing. In either event, Buyer shall be refunded any money, if
              any, paid to Seller. If Seller files for bankruptcy under chapters
              7, 11, 12 or 13 of the United States Bankruptcy Code during this
              contract period, Seller agrees not to reject, initiate steps to
              reject, attempt to modify or initiate an attempt to modify this
              agreement. However, Buyer does realize that the Court may order
              otherwise due to circumstances beyond Seller’s control.
            </li>
            <li>
              CLOSING DATE; OCCUPANCY: Unless the Closing Date is specifically
              extended as described below, the Closing Date shall prevail over
              all other time periods including, but not limited to, inspection
              and financing periods. The Closing Date for this Contract is
              ________________________________("Closing Date"). Seller
              acknowledges that this transaction may require tremendous amounts
              of the Buyer’s time and effort to complete and factors outside of
              the Buyer’s control, such as coordinating suitable lien payoffs,
              may require the projected closing date to be extended. To be fair
              to the Buyer for all the work required to bring this transaction
              to a close, as well as the unforeseeable factors that may inhibit
              the closing from taking place as scheduled, Seller grants the
              buyer the ability to make the unilateral decision to extend the
              closing date for up to three (3) months from the Closing Date
              without any notice to the seller or any additional consideration.
              Closing may take place in a physical location or may be conducted
              by mail or electronic means and the escrow/title/closing agent for
              both the Buyer and the Seller sides of this transaction shall be
              chosen solely by Buyer. Upon full execution of this agreement, all
              rights and obligations of this agreement will automatically extend
              through the date of the actual closing. Prior to closing the
              Seller will (a) have removed all personal items and trash from the
              Property and swept the Property clean and (b) deliver the deed,
              occupancy and possession, along with all keys, garage door openers
              and access codes, to Buyer. In the event Property is currently
              inhabited by Seller, Seller agrees to move out prior to closing
              and the Property shall be unoccupied at the time of closing. The
              Buyer, at its option, may choose to take the Property subject to
              one or more residential leases in which case the Seller as the
              lessor shall, not less than 15 days prior to closing, furnish to
              Buyer copies of any and all written leases. Seller shall, at
              closing, deliver and assign all original leases to the Buyer.
            </li>
            <li>
              CLOSING PROCEDURE; COSTS: In addition to other expenses provided
              in this Contract, Seller and Buyer will be responsible for the
              following costs associated with this transaction indicated below.
              <div style={{ marginTop: "0.5em" }}>
                {[
                  "Seller Costs: To be paid at time of closing, Seller Costs shall include any taxes, surtaxes or fees for recording the deed; recording fees for documents needed to cure title; Buyer’s title insurance, repairs to warranted items; wood-destroying organism treatment (if any) and costs associated with closing out open permits and obtaining required permits for unpermitted existing improvements.",
                  "Buyer Costs: Taxes and recording fees on notes and mortgages, Loan expenses, Lender's title policy, Inspections, Flood insurance, homeowner insurance, hazard insurance; pre-paids.",
                  "Title Evidence and Insurance: Seller will provide an abstract as specified in Paragraph 9(a) as title evidence. Seller will pay for the owner's title policy and Buyer will select the title agent. Seller will pay fees for title searches prior to closing, including tax search and lien search fees title examination fees and closing fees, and Buyer will pay fees for title searches after closing (if any).",
                  "Prorations: Property Taxes, Homeowner Association or Condominium Association Dues and/or Assessments (if any), and all other prorations, shall be prorated through the day of Closing. Cash at closing shall be increased or decreased as may be required by said prorations. [CONTENT OMITTED]",
                  "Special Assessment by Public Body: Regarding special assessments imposed by a public body, Seller will pay (i) the full amount of liens that are certified, confirmed and ratified before closing and (ii) the amount of the last estimate of the assessment if an improvement is substantially completed as of Effective Date but has not resulted in a lien before closing, and Buyer will pay all other amounts. If special assessments may be paid in installments Buyer shall pay installments due after closing.",
                  'Tax Withholding: Buyer and Seller will comply with the Foreign Investment in Real Property Tax Act, which may require Seller to provide additional cash at closing if Seller is a "foreign person" as defined by federal law.',
                  "Association(s): Seller will be responsible for paying any Homeowner’s or Condominium Association transfer, estoppel or other fees imposed by the Association in order to close this property.",
                  "Leases: If this is an income property, Seller shall provide Buyer with an accounting and assignment of security deposits at closing. Seller agrees to defend and indemnify Buyer for any and all claims, judgments and lawsuits related to the wrongful withholding of security deposits that arose out of events or circumstances arising before closing of title. This clause shall survive closing of title.",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginTop: "0.5em",
                    }}
                  >
                    <span style={{ width: "1.5em" }}>
                      <strong>{String.fromCharCode(97 + idx)}.</strong>
                    </span>
                    <p style={{ margin: 0 }}>{text}</p>
                  </div>
                ))}
              </div>
            </li>
            <li>
              REAL PROPERTY DISCLOSURE: Seller represents that Seller does not
              know of any facts that materially affect the value of the
              Property, including but not limited to violations of governmental
              laws, rules and regulations, other than those that Buyer can
              readily observe or that are known by or have been disclosed to
              Buyer. If membership in a homeowners&apos; association is
              mandatory, an association disclosure summary shall be provided by
              Seller to Buyer and Buyer reserves the right to cancel this
              Agreement if homeowners’ association terms and conditions are
              unsuitable to Buyer. Seller warrants that there are no judgments
              threatening the equity of this property, and that there is no
              bankruptcy pending or contemplated by any title holder. Seller
              agrees not to encumber the property with any new liens or increase
              any lines of credit currently against the property starting from
              the date of execution of this contract through the date of
              closing.
            </li>
            <li>
              MAINTENANCE, INSPECTIONS AND REPAIR: Seller will keep the Property
              in the same condition from Effective Date until closing, except
              any repairs required by this Contract, including lawns, shrubs,
              pool (if any).Seller will provide a key for property access so
              that Buyer can show partners, lenders, inspectors/contractors and
              other interested parties prior to closing. Seller agrees to keep
              all utilities, including, but not limited to, water, electricity
              and gas, turned on and functioning throughout the duration of this
              Agreement and until this transaction has closed. Seller warrants
              that the appliances currently in place at the time of this
              agreement will be the same appliances that are contained in the
              sale at the time of closing. At closing, Seller will assign all
              assignable repair and treatment contracts to Buyer and provide
              Buyer with paid receipts for all work done on the Property
              pursuant to the terms of this Contract. At closing, Seller will
              provide Buyer with any written documentation that all open permits
              have been closed out and that Seller has obtained required permits
              for improvements to the Property.
              <br />
              (1) Warranty: Seller warrants that property improvements,
              buildings or structures, the appliances, roof, plumbing non-leased
              major appliances and heating, cooling, mechanical, electrical,
              security, sprinkler, septic and plumbing systems, seawall, dock
              and pool equipment, if any, are and will be maintained in working
              condition until closing; that the structures (including roofs,
              doors and windows) and pool, if any, are structurally sound and
              watertight; and that torn or missing screens and missing roof
              tiles will be repaired or replaced. Seller warrants that all open
              permits will be closed out and that Seller will obtain any
              required permits for improvements to the Property prior to Closing
              Date. This clause shall survive closing of title.
              <br />
              (2) Professional Inspection: Buyer and/or its assigns may, at
              Buyer’s expense, have the property inspected. This Agreement is
              subject to such inspection and Buyer may cancel this Agreement
              based on what is discovered from a detailed inspection of the
              property.
              <br />
              (3) Wood-Destroying Organisms: “Wood-destroying organism” means
              arthropod or plant life, including termites, powder-post beetles,
              old house borers and wood-decaying fungi, that damages or infests
              seasoned wood in a structure, excluding fences. Buyer may, at
              Seller’s expense, have the Property inspected by a licensed pest
              control business to determine the existence of past or present
              wood-destroying organism infestation and damage caused by
              infestation. If the inspector finds evidence of infestation or
              damage, Seller will deliver a copy of the inspector&apos;s written
              report to Buyer within 5 days from the date of the inspection. If
              Seller previously treated the Property for the type of
              wood-destroying organisms found, Seller does not have to treat the
              Property again if (i) there is no visible live infestation, and
              (ii) Seller transfers to Buyer at closing a current full treatment
              warranty for the type of wood-destroying organisms found.
              Otherwise, Seller will have 5 days from receipt of the
              inspector&apos;s report to have reported damage estimated by a
              licensed building or general contractor and corrective treatment
              estimated by a licensed pest control business. Seller will have
              treatments and repairs made by an appropriately licensed person at
              Seller’s expense.
            </li>
            <li>
              RISK OF LOSS: If this Property is damaged prior to transfer of
              title, Buyer has the option of choosing to either accept any
              insurance proceeds with the title to the property in “as is”
              condition, or canceling this Agreement and return of all deposits.
            </li>
            <li>
              TITLE: Seller to deliver to Buyer Fee Simple title by a Warranty
              and/or Grant Deed free from any liens, restrictions, encumbrances,
              or easements not specifically referenced in this agreement or that
              currently are not of public record.
              <div style={{ marginTop: "0.5em" }}>
                {[
                  "Title Evidence: Title evidence will show legal access to the Property and marketable title of record in Seller in accordance with current title standards adopted by the state Bar, subject only to the following title exceptions, none of which prevent residential use of the Property: covenants, easements and restrictions of record; matters of plat; existing zoning and government regulations; oil, gas and mineral rights of record if there is no right of entry; current taxes; mortgages that Buyer will take over subject to; and encumbrances that Seller will discharge at or before closing. Seller will, at least 2 days prior to closing, deliver to Buyer a title insurance commitment issued by a licensed title insurer in the amount of the purchase price and subject only to title exceptions set forth in this Contract.",
                  "Title Examination: Buyer will examine the title evidence and deliver written notice to Seller, prior to closing, of any defects that make the title unmarketable. Seller will cure the defects at Seller&apos;s expense. If Seller is unable to cure the defects, Seller will deliver written notice to Buyer and Buyer can either cancel this Contract or accept title with existing defects and close the transaction.",
                  "Survey: Buyer may, at Buyer&apos;s expense, have the Property surveyed and deliver written notice to Seller, within 5 days from receipt of survey but no later than closing, of any encroachments on the Property, encroachments by the Property&apos;s improvements on other lands or deed restriction or zoning violations. Any such encroachment or violation will be treated in the same manner as a title defect and Buyer&apos;s and Seller&apos;s obligations will be determined in accordance with subparagraph (b) above.",
                  "Memorandum: Seller authorizes Buyer to record a Memorandum of Agreement with respect to this contract in the public records upon execution hereof.",
                  "Subject To Existing Financing: In the event Buyer is purchasing the Property subject to any existing mortgage(s) or other liens or encumbrances; (i) Seller agrees and understands that Buyer is not assuming any responsibility for any mortgages or other lien it takes over subject to. (ii) Seller assigns its rights to any tax and insurance escrows held by said mortgage holder(s) or its (their) assigns to Buyer. (iii) Seller will grant to Buyer a limited power of attorney to deal with the lender(s) and insurance provider(s) with respect to this property. MISCELLANEOUS",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginTop: "0.5em",
                    }}
                  >
                    <span style={{ width: "1.5em" }}>
                      <strong>{String.fromCharCode(97 + idx)}.</strong>
                    </span>
                    <p style={{ margin: 0 }}>{text}</p>
                  </div>
                ))}
              </div>
            </li>
            <li>
              EFFECTIVE DATE; TIME; FORCE MAJEURE:
              <div style={{ marginTop: "0.5em" }}>
                {[
                  "Effective Date: The &quot;Effective Date&quot; of this Contract is the date on which the last of the parties initials or signs and delivers the final offer or counteroffer.",
                  "Time: All time periods will be computed in business days (a &quot;business day· is every calendar day except Saturday, Sunday and national legal holidays). If any deadline falls on a Saturday, Sunday or national legal holiday, performance will be due the next business day. All time periods will end at 5:00 p.m. local time (meaning in the county where the Property is located) of the appropriate day.",
                  "Force Majeure: Buyer or Seller shall not be required to perform any obligation under this Contract or be liable to each other for damages so long as the performance or non-performance of the obligation is delayed, caused or prevented by an act of God or force majeure. An &quot;act of God&quot; or &quot;force majeure&quot; is defined as hurricanes, earthquakes, floods, fire, unusual transportation delays, wars, insurrections and any other cause not reasonably within the control of the Buyer or Seller and which by the exercise of due diligence the non-performing party is unable in whole or in part to prevent or overcome. All time periods, including Closing Date, will be extended (not to exceed 30 days) for the period that the force majeure or act of God is in place. In the event that such &quot;act of God&quot; or &quot;force majeure&quot; event continues beyond the 30 days in this sub-paragraph, either party may cancel the Contract by delivering written notice to the other and Buyer&apos;s deposit shall be refunded.",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginTop: "0.5em",
                    }}
                  >
                    <span style={{ width: "1.5em" }}>
                      <strong>{String.fromCharCode(97 + idx)}.</strong>
                    </span>
                    <p style={{ margin: 0 }}>{text}</p>
                  </div>
                ))}
              </div>
            </li>
            <li>
              NOTICES; COUNTERPARTS: All notices shall be in writing and will be
              delivered to the parties by mail, personal delivery or electronic
              media. Any notice, document, or item delivered to or received by
              an attorney representing a party will be as effective as if
              delivered to or by that party. It is hereby understood by Seller
              that the Buyer has made full disclosure that he/she may be a
              licensed real estate agent. This agreement may be executed in
              counterparts and by facsimile or digital signatures. This
              Agreement becomes effective as of the date of the last signature.
            </li>
            <li>
              COMPLETE AGREEMENT: This Contract is the entire agreement between
              Buyer and Seller. The terms &quot;Buyer,&quot; and
              &quot;Seller,&quot; may be singular or plural. No prior or present
              agreements will bind Buyer or Seller unless incorporated into this
              Contract. Modifications of this Contract will not be binding
              unless in writing, signed or initialed and delivered by the party
              to be bound. Signatures, initials, documents referenced in this
              Contract, counterparts and written modifications communicated
              electronically or on paper will be acceptable for all purposes,
              including delivery, and will be binding. Handwritten or
              typewritten terms inserted in or attached to this Contract prevail
              over preprinted terms. If any provision of this Contract is or
              becomes invalid or unenforceable, all remaining provisions will
              continue to be fully effective. Buyer and Seller will use
              diligence and good faith in performing all obligations under this
              Contract.
            </li>
            <li>
              MARKETING: Upon execution of this Agreement, Buyer will be
              operating as a principal in the purchase of Seller’s property,
              will have an equitable interest in this property and therefore
              will have the right to market the property in any way Buyer deems
              fit; including but not limited to; listing the Property on the
              Multiple Listing Service (MLS), placing a sign on the property,
              advertising the property for sale, for rent or for rent to own as
              well as showing the property to prospective buyers/tenants. Buyer
              may also assign its rights to this Agreement. This Contract is
              binding on the heirs, administrators, executors, personal
              representatives and assigns of Buyer and Seller.
            </li>
            <li>
              DEFAULT AND DISPUTE RESOLUTION:
              <div style={{ marginTop: "0.5em" }}>
                {[
                  "Buyer Default: If Buyer fails to perform any of the covenants of this contract, all money paid to Seller by Buyer as of the event of default shall be retained by or for the account of) the Seller as consideration for the execution of this contract and as agreed liquidated damages in full and final settlement of any and all claims for damages;",
                  "Seller Default: If Seller fails to perform any of the covenants of this Contract, or sells the property to another buyer, any money paid by Buyer to Seller pursuant to this contract, as of the event of default, shall be returned to Buyer on demand and the Buyer shall be entitled to receive any proceeds received by the Seller, as liquidated damages from the sale of the property to another buyer; or the Buyer may elect to seek specific performance instead, at the Buyer’s option.",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginTop: "0.5em",
                    }}
                  >
                    <span style={{ width: "1.5em" }}>
                      <strong>{String.fromCharCode(97 + idx)}.</strong>
                    </span>
                    <p style={{ margin: 0 }}>{text}</p>
                  </div>
                ))}
              </div>
            </li>
            <li>
              DISPUTE RESOLUTION: This Contract will be construed under the laws
              of the state where the Property is located. All controversies,
              claims and other matters in question arising out of or relating to
              this transaction or this Contract or its breach will be settled as
              follows: Buyer and Seller will have 30 days from the date a
              dispute arises between them to attempt to resolve the matter
              through mediation, failing which the parties will resolve the
              dispute through neutral binding arbitration in the county where
              the Property is located. The arbitrator may not alter the Contract
              terms or award any remedy not provided for in this Contract. The
              award will be based on the greater weight of the evidence and will
              state findings of fact and the contractual authority on which it
              is based. If the parties agree to use discovery, it will be in
              accordance with the state Rules of Civil Procedure and the
              arbitrator will resolve all discovery-related disputes. Mediation
              and Arbitration; Expenses: &quot;Mediation&quot; is a process in
              which parties attempt to resolve a dispute by submitting it to an
              impartial mediator who facilitates the resolution of the dispute
              but who is not empowered to impose a settlement on the parties.
              Mediation will be in accordance with the rules of the American
              Arbitration Association (&quot;AAA&quot;) or other mediator agreed
              on by the parties. The parties will equally divide the mediation
              fee, if any. &quot;Arbitration&quot; is a process in which the
              parties resolve a dispute by a hearing before a neutral person who
              decides the matter and whose decision is binding on the parties.
              Arbitration will be in accordance with the rules of the AAA. Each
              party to any arbitration will pay its own fees, costs and
              expenses, including attorneys&apos; fees, and will equally split
              the arbitrators&apos; fees and administrative fees of arbitration.
            </li>
            <li>
              CONTRACT NOTICE: By signing below, each party does hereby
              acknowledge and agree that each has been given an opportunity to
              review this Agreement with its/his/her own legal counsel and has
              either done so or has voluntarily waived the right to do so, and
              further acknowledges that each is signing this Agreement of
              its/his/her own free will and accord. Accordingly, this Agreement
              shall not be construed against either party by reason of drafting
              or preparation thereof.
            </li>{" "}
            <li>
              ADDITIONAL TERMS: The parties have set their hands to execute this
              Agreement
            </li>
          </ol>
        </div>
      </ModalBody>
      {/* <ModalFooter className="border-top-0 pt-4 pb-3 px-4 justify-content-end">
        <Button
          color="light"
          onClick={toggle}
          style={{ minWidth: 100, marginRight: 8 }}
        >
          Close
        </Button>
        <Button color="primary" style={{ minWidth: 100 }}>
          Download PDF
        </Button>
        <Button color="success" style={{ minWidth: 100, marginLeft: 8 }}>
          Execute Agreement
        </Button>
      </ModalFooter> */}
    </Modal>
  );
};

export default PropertyDocumentViewModal;
