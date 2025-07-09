const usersWidgetsData = [
    {
      id: 1,
      icon: "ri-building-4-line",
      label: "Total Users",
      counter: "358",
      badge: "ri-arrow-up-s-fill",
      badgeColor: "success",
      percentage: "6.24",
      decimal: "2",
      prefix: "$",
      separator: ",",
    },
    {
      id: 2,
      icon: "ri-check-fill",
      label: "Approved",
      counter: "185",
      badge: "ri-arrow-up-s-fill",
      badgeColor: "success",
      percentage: "3.67",
      decimal: "2",
      prefix: "$",
      separator: ",",
    },
    {
      id: 3,
      icon: "ri-error-warning-line",
      label: "Pending",
      counter: "163",
      percentage: "4.80",
      decimal: "2",
      prefix: "$",
      separator: ",",
    },
    {
      id: 4,
      icon: "ri-error-warning-line",
      label: "Rejected",
      counter: "10",
      percentage: "4.80",
      decimal: "2",
      prefix: "$",
      separator: ",",
    },
  ];

  const ApprovedUsersData = [
    { id: '#737', name: 'Floyd Miles', email: 'kenzi.lawson@example.com', phoneNumber: '(684) 555-0102', createdAt: '22 Oct, 2020 12:30 PM', updatedAt: '22 Oct, 2020 12:30 PM', status: 'Approved' },
    { id: '#737', name: 'Eleanor Pena', email: 'deanna.curtis@example.com', phoneNumber: '(316) 555-0116', createdAt: '24 May, 2020 12:30 PM', updatedAt: '24 May, 2020 12:30 PM', status: 'Approved' },
    { id: '#737', name: 'Arlene McCoy', email: 'debbie.baker@example.com', phoneNumber: '(405) 555-0128', createdAt: '21 Sep, 2020 12:30 PM', updatedAt: '21 Sep, 2020 12:30 PM', status: 'Approved' },
    { id: '#737', name: 'Wade Warren', email: 'jessica.hanson@example.com', phoneNumber: '(480) 555-0103', createdAt: '17 Oct, 2020 12:30 PM', updatedAt: '17 Oct, 2020 12:30 PM', status: 'Approved' },
    { id: '#737', name: 'Annette Black', email: 'alma.lawson@example.com', phoneNumber: '(808) 555-0111', createdAt: '8 Sep, 2020 12:30 PM', updatedAt: '8 Sep, 2020 12:30 PM', status: 'Approved' },
    { id: '#737', name: 'Cody Fisher', email: 'sara.cruz@example.com', phoneNumber: '(252) 555-0126', createdAt: '8 Sep, 2020 12:30 PM', updatedAt: '8 Sep, 2020 12:30 PM', status: 'Approved' },
    { id: '#737', name: 'Marvin McKinney', email: 'debra.holt@example.com', phoneNumber: '(704) 555-0127', createdAt: '24 May, 2020 12:30 PM', updatedAt: '24 May, 2020 12:30 PM', status: 'Approved' },
    { id: '#737', name: 'Cameron Williamson', email: 'willie.jennings@example.com', phoneNumber: '(209) 555-0104', createdAt: '1 Feb, 2020 12:30 PM', updatedAt: '1 Feb, 2020 12:30 PM', status: 'Approved' },
    { id: '#737', name: 'Arlene McCoy', email: 'debbie.baker@example.com', phoneNumber: '(405) 555-0128', createdAt: '21 Sep, 2020 12:30 PM', updatedAt: '21 Sep, 2020 12:30 PM', status: 'Approved' },
    { id: '#737', name: 'Wade Warren', email: 'jessica.hanson@example.com', phoneNumber: '(480) 555-0103', createdAt: '17 Oct, 2020 12:30 PM', updatedAt: '17 Oct, 2020 12:30 PM', status: 'Approved' },
    { id: '#737', name: 'Annette Black', email: 'alma.lawson@example.com', phoneNumber: '(808) 555-0111', createdAt: '8 Sep, 2020 12:30 PM', updatedAt: '8 Sep, 2020 12:30 PM', status: 'Approved' },
];

const PendingUsersData = [
  { id: '#737', name: 'Floyd Miles', email: 'kenzi.lawson@example.com', phoneNumber: '(684) 555-0102', createdAt: '22 Oct, 2020 12:30 PM', updatedAt: '22 Oct, 2020 12:30 PM', status: 'Pending' },
  { id: '#737', name: 'Eleanor Pena', email: 'deanna.curtis@example.com', phoneNumber: '(316) 555-0116', createdAt: '24 May, 2020 12:30 PM', updatedAt: '24 May, 2020 12:30 PM', status: 'Pending' },
  { id: '#737', name: 'Arlene McCoy', email: 'debbie.baker@example.com', phoneNumber: '(405) 555-0128', createdAt: '21 Sep, 2020 12:30 PM', updatedAt: '21 Sep, 2020 12:30 PM', status: 'Pending' },
  { id: '#737', name: 'Wade Warren', email: 'jessica.hanson@example.com', phoneNumber: '(480) 555-0103', createdAt: '17 Oct, 2020 12:30 PM', updatedAt: '17 Oct, 2020 12:30 PM', status: 'Pending' },
  { id: '#737', name: 'Annette Black', email: 'alma.lawson@example.com', phoneNumber: '(808) 555-0111', createdAt: '8 Sep, 2020 12:30 PM', updatedAt: '8 Sep, 2020 12:30 PM', status: 'Pending' },
  { id: '#737', name: 'Cody Fisher', email: 'sara.cruz@example.com', phoneNumber: '(252) 555-0126', createdAt: '8 Sep, 2020 12:30 PM', updatedAt: '8 Sep, 2020 12:30 PM', status: 'Pending' },
  { id: '#737', name: 'Marvin McKinney', email: 'debra.holt@example.com', phoneNumber: '(704) 555-0127', createdAt: '24 May, 2020 12:30 PM', updatedAt: '24 May, 2020 12:30 PM', status: 'Pending' },
  { id: '#737', name: 'Cameron Williamson', email: 'willie.jennings@example.com', phoneNumber: '(209) 555-0104', createdAt: '1 Feb, 2020 12:30 PM', updatedAt: '1 Feb, 2020 12:30 PM', status: 'Pending' },
  { id: '#737', name: 'Arlene McCoy', email: 'debbie.baker@example.com', phoneNumber: '(405) 555-0128', createdAt: '21 Sep, 2020 12:30 PM', updatedAt: '21 Sep, 2020 12:30 PM', status: 'Pending' },
  { id: '#737', name: 'Wade Warren', email: 'jessica.hanson@example.com', phoneNumber: '(480) 555-0103', createdAt: '17 Oct, 2020 12:30 PM', updatedAt: '17 Oct, 2020 12:30 PM', status: 'Pending' },
  { id: '#737', name: 'Annette Black', email: 'alma.lawson@example.com', phoneNumber: '(808) 555-0111', createdAt: '8 Sep, 2020 12:30 PM', updatedAt: '8 Sep, 2020 12:30 PM', status: 'Pending' },
];

const RejectedUsersData = [
  { id: '#737', name: 'Floyd Miles', email: 'kenzi.lawson@example.com', phoneNumber: '(684) 555-0102', createdAt: '22 Oct, 2020 12:30 PM', updatedAt: '22 Oct, 2020 12:30 PM', status: 'Rejected' },
  { id: '#737', name: 'Eleanor Pena', email: 'deanna.curtis@example.com', phoneNumber: '(316) 555-0116', createdAt: '24 May, 2020 12:30 PM', updatedAt: '24 May, 2020 12:30 PM', status: 'Rejected' },
  { id: '#737', name: 'Arlene McCoy', email: 'debbie.baker@example.com', phoneNumber: '(405) 555-0128', createdAt: '21 Sep, 2020 12:30 PM', updatedAt: '21 Sep, 2020 12:30 PM', status: 'Rejected' },
  { id: '#737', name: 'Wade Warren', email: 'jessica.hanson@example.com', phoneNumber: '(480) 555-0103', createdAt: '17 Oct, 2020 12:30 PM', updatedAt: '17 Oct, 2020 12:30 PM', status: 'Rejected' },
  { id: '#737', name: 'Annette Black', email: 'alma.lawson@example.com', phoneNumber: '(808) 555-0111', createdAt: '8 Sep, 2020 12:30 PM', updatedAt: '8 Sep, 2020 12:30 PM', status: 'Rejected' },
  { id: '#737', name: 'Floyd Miles', email: 'kenzi.lawson@example.com', phoneNumber: '(684) 555-0102', createdAt: '22 Oct, 2020 12:30 PM', updatedAt: '22 Oct, 2020 12:30 PM', status: 'Rejected' },
  { id: '#737', name: 'Eleanor Pena', email: 'deanna.curtis@example.com', phoneNumber: '(316) 555-0116', createdAt: '24 May, 2020 12:30 PM', updatedAt: '24 May, 2020 12:30 PM', status: 'Rejected' },
  { id: '#737', name: 'Arlene McCoy', email: 'debbie.baker@example.com', phoneNumber: '(405) 555-0128', createdAt: '21 Sep, 2020 12:30 PM', updatedAt: '21 Sep, 2020 12:30 PM', status: 'Rejected' },
  { id: '#737', name: 'Wade Warren', email: 'jessica.hanson@example.com', phoneNumber: '(480) 555-0103', createdAt: '17 Oct, 2020 12:30 PM', updatedAt: '17 Oct, 2020 12:30 PM', status: 'Rejected' },
  { id: '#737', name: 'Annette Black', email: 'alma.lawson@example.com', phoneNumber: '(808) 555-0111', createdAt: '8 Sep, 2020 12:30 PM', updatedAt: '8 Sep, 2020 12:30 PM', status: 'Rejected' },
];

const propertiesData = [
  {
      id: "#8324",
      address: "8502 Preston Rd. Inglewood, Maine 98380",
      listedFor: "Rent",
      builder: "Realtor",
      escrow: "$3,450",
      refund: "$2,000",
      status: "Pending",
  },
  {
      id: "#5652",
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      listedFor: "Rent",
      builder: "Realtor",
      escrow: "$2,560",
      refund: "$2,000",
      status: "Complete",
  },
  {
      id: "#5675",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      listedFor: "Sale",
      builder: "Realtor",
      escrow: "$2,550",
      refund: "$2,000",
      status: "Complete",
  },
  {
      id: "#7897",
      address: "3891 Ranchview Dr. Richardson, California 62639",
      listedFor: "Sale",
      builder: "Realtor",
      escrow: "$3,200",
      refund: "$2,000",
      status: "Complete",
  },
];

const documentsListingData = [
  {
      documentId: '1',
      fileName: 'file1.pdf',
      type: 'PDF',
      size: '1MB',
      createdAt: '2024-06-01',
      updatedAt: '2024-06-02',
      status: 'pending', // backend se aane wala status
      downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
      documentId: '2',
      fileName: 'file2.pdf',
      type: 'PDF',
      size: '1MB',
      createdAt: '2024-06-01',
      updatedAt: '2024-06-02',
      status: 'approve', // backend se aane wala status
      downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
      documentId: '3',
      fileName: 'file3.pdf',
      type: 'PDF',
      size: '1MB',
      createdAt: '2024-06-01',
      updatedAt: '2024-06-02',
      status: 'reject', // backend se aane wala status
      downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
];

const paymentsListingData = [
  {
    transactionId: "#91734",
    invoiceNo: "#91734",
    createdAt: "October 25, 2019 12:30 PM",
    updatedAt: "October 25, 2019 12:30 PM",
    amount: "$3,550",
    type: "Earnest Deposit",
    status: "Paid",
  },
  {
    transactionId: "-",
    invoiceNo: "#8734",
    createdAt: "October 30, 2017 12:30 PM",
    updatedAt: "October 30, 2017 12:30 PM",
    amount: "$20,000",
    type: "Balance Refund",
    status: "Pending",
  },
  {
    transactionId: "#8492",
    invoiceNo: "#8492",
    createdAt: "February 29, 2012 12:30 PM",
    updatedAt: "February 29, 2012 12:30 PM",
    amount: "$3,500,000",
    type: "Earnest Deposit",
    status: "Paid",
  },
];

const propertyInformationModalFirstComponentData = {
  name: "Oakwood West",
  address: "8502 Preston Rd. Inglewood, Maine 98380",
  status: "Pending",
  builderName: "Realtor",
  isVerifiedBuilder: true,
  listedFor: "Rent",
  propertyType: "Single Family",
  imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80", // Sample image
};

const rentInformationData = {
  rentPeriod: {
    start: "Jan 2024",
    end: "Jul 2024",
  },
  createdAt: "22 Oct, 2020 12:30 PM",
  updatedAt: "24 May, 2020 12:30 PM",
  balanceDue: "$20,000",
};

 const cardDocumentsListingData=[
  { type: "Contract", name: "Contract Document", size: "623 KBs", downloadUrl: "/path/to/file.pdf" },
  { type: "Invoice", name: "Invoice Jan 2024", size: "120 KBs", downloadUrl: "/path/to/invoice.pdf" },
];

export {usersWidgetsData, ApprovedUsersData, PendingUsersData, RejectedUsersData, propertiesData, documentsListingData, paymentsListingData, propertyInformationModalFirstComponentData, rentInformationData, cardDocumentsListingData};