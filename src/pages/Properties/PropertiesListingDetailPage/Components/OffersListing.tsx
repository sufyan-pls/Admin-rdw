import React from "react";

const offersData = [
  {
    amount: "$1,250,000",
    time: "22 Oct, 2020 12:30 PM",
    by: "Esther Howard",
    status: "Rejected",
  },
  {
    amount: "$1,750,000",
    time: "22 Oct, 2020 12:30 PM",
    by: "Courtney Henry",
    status: "Rejected",
  },
  {
    amount: "$1,150,000",
    time: "22 Oct, 2020 12:30 PM",
    by: "Kristin Watson",
    status: "Rejected",
  },
];

const cellStyle = {
  textAlign: "left" as const,
  padding: "12px",
  borderBottom: "1px solid #eee",
  // border: "none" // vertical lines hatane ke liye
};

const OffersListing: React.FC = () => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600, border: "1px solid #eee" }}>
        <thead>
          <tr style={{ background: "#fff" }}>
            <th style={cellStyle}>Offer Amount</th>
            <th style={cellStyle}>Time</th>
            <th style={cellStyle}>By</th>
            <th style={cellStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {offersData.map((offer, idx) => (
            <tr key={idx}>
              <td style={cellStyle}>{offer.amount}</td>
              <td style={cellStyle}>{offer.time}</td>
              <td style={cellStyle}>{offer.by}</td>
              <td style={cellStyle}>{offer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OffersListing;
