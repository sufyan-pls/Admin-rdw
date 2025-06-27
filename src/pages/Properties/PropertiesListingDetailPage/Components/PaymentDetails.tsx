import { useState } from "react";

const paymentData = [
    {
      buyer: "Robert Fox",
      paymentMethod: "Bank Transfer",
      paymentStatus: "Pending",
    },
  ];

const paymentSummary = {
  salePrice: "$2,000,000",
  expenses: [
    { label: "Inspection Report", value: "$100" },
    { label: "Deed Recording", value: "1.00%" },
    { label: "Taxes & Duty", value: "0.25%" },
    { label: "Identity Verification", value: "0.25%" },
    { label: "Transport & Logistics", value: "0.25%" },
    { label: "RealWealtdy Fees", value: "4.00%" },
    { label: "Total", value: "6.00%", bold: true },
  ],
  fees: "$120,000",
  totalExpense: "$100,000",
  remainingBalance: "$20,000",
  refundStatus: "Pending",
};

const PaymentDetails = () => {

    return (
        <div className="mt-3">
            <div className="shadow p-3 mb-2 bg-light rounded-0">
                <h6>Buyers Details</h6>
            </div>
            <div className="d-flex flex-row mt-3 justify-content-between">
                <div className="d-flex flex-column">
                    <h6 className="fw-bold">Buyer</h6>
                    <p>{paymentData[0].buyer}</p>
                </div>
                <div className="d-flex flex-column">
                    <h6 className="fw-bold">Payment Method</h6>
                    <p>{paymentData[0].paymentMethod}</p>
                </div>
                <div className="d-flex flex-column">
                    <h6 className="fw-bold">Payment Status</h6>
                    <p className="badge rounded-pill bg-success">{paymentData[0].paymentStatus}</p>
                </div>
            </div>
            <div className="shadow p-3 mb-2 bg-light rounded-0">
                <h6>Payment Summary</h6>
            </div>
            <div className="mt-3" style={{ border: "1px solid #eee", borderRadius: 6, background: "#fff", padding: 20 }}>
                {/* Sale Price */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="fw-bold" style={{ fontSize: 18 }}>Sale Price</span>
                    <span className="fw-bold" style={{ fontSize: 18 }}>{paymentSummary.salePrice}</span>
                </div>
                <hr style={{ margin: "0 0 16px 0" }} />
                {/* Expenses Table */}
                <div className="mb-3">
                  {paymentSummary.expenses.map((item, idx) => (
                    <div className="d-flex justify-content-between align-items-center mb-2" key={item.label}>
                      <span style={{ fontWeight: item.bold ? 600 : 400 }}>{item.label}</span>
                      <span style={{ fontWeight: item.bold ? 600 : 400 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <hr style={{ margin: "0 0 16px 0" }} />
                {/* Fees, Total Expense, Remaining Balance */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-bold">Fees</span>
                    <span className="fw-bold">{paymentSummary.fees}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span>Total Expense</span>
                    <span>{paymentSummary.totalExpense}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-bold" style={{ fontWeight: 700 }}>Remaining Balance</span>
                    <span className="fw-bold" style={{ fontWeight: 700 }}>{paymentSummary.remainingBalance}</span>
                  </div>
                </div>
                <hr style={{ margin: "0 0 16px 0" }} />
                {/* Refund Status */}
                <div className="d-flex justify-content-between align-items-center">
                  <span>Refund Status</span>
                  <div className="d-flex flex-column align-items-center">
                    <span className="badge rounded-pill bg-success mb-2">{paymentSummary.refundStatus}</span>
                    <a href="#" style={{ color: "#6b7280", textDecoration: "underline", fontSize: 15 }}>View Details</a>
                  </div>
                </div>
            </div>
        </div>
    )
};

export default PaymentDetails;