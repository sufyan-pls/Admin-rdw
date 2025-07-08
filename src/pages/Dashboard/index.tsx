import BreadCrumb from 'Components/Common/BreadCrumb';
import React, { useEffect, useState } from 'react';
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import PropertyStatusCard from './Components/PropertyWidgets';
import PropertyListings from './Components/PropertyListings';
import AccountApprovals from './Components/AccountApprovals';
import { usersData } from 'common/data/Dashboard';
import Payments from './Components/Payments';

const propertyStatusData = {
    icon: "bx bx-home",
    title: "Total Properties",
    total: 358,
    items: [
        { label: "Approved", value: 300 },
        { label: "Pending", value: 58 },
        { label: "Rejected", value: 58 },
        { label: "Awaiting Inspection", value: 58 },
    ],
};

const propertyDealsData = {
    icon: "bx bx-dollar",
    title: "Total Revenue",
    total: 236358,
    items: [
        { label: "Total Sold", value: 80 },
        { label: "Total Rented", value: 120 },
        { label: "Ongoing Deals", value: 42 },
    ],
};

const totalUsersData = {
    icon: "bx bx-user",
    title: "Total Users",
    total: 120,
    items: [
      { label: "Approved", value: 80 },
      { label: "Pending", value: 40 },
    ],
  };
  
  const totalBuildersData = {
    icon: "bx bx-building",
    title: "Total Builders",
    total: 240,
    items: [
      { label: "Approved", value: 230 },
      { label: "Pending", value: 10 },
    ],
  };
  
  const totalInspectorsData = {
    icon: "bx bx-check",
    title: "Total Inspectors",
    total: 160,
    items: [
      { label: "Approved", value: 120 },
      { label: "Pending", value: 40 },
    ],
  };
  
  const pendingPaymentsData = {
    icon: "bx bx-dollar",
    title: "Pending Payments",
    total: 100,
    items: [
      { label: "Refunds", value: 30 },
      { label: "Inspection Report", value: 70 },
    ],
  };
  

const Dashboard = () => {
    document.title = "Dashboard";
    const [activeTab, setActiveTab] = useState('property-listings');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 7000);
    }, []);
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb
                        title="Dashboard"
                        pageTitles={[
                            { label: "RealWealtdy", path: "/" },
                            { label: "Dashboard" }
                        ]}
                    />
                     <div className="d-flex flex-row w-100 gap-3">
                        <div className='w-50'><PropertyStatusCard
                            icon={propertyStatusData.icon}
                            title={propertyStatusData.title}
                            total={propertyStatusData.total}
                            items={propertyStatusData.items}
                        /></div>
                        <div className='w-50'><PropertyStatusCard
                            icon={propertyDealsData.icon}
                            title={propertyDealsData.title}
                            total={
                                propertyDealsData.title === "Total Revenue"
                                    ? "$" + Number(propertyDealsData.total).toLocaleString("en-IN")
                                    : propertyDealsData.total
                            }
                            items={propertyDealsData.items}
                        /></div>
                    </div>
                    <div className='d-flex flex-row w-100 gap-3'>
                        <div className='w-25'><PropertyStatusCard
                            icon={totalUsersData.icon}
                            title={totalUsersData.title}
                            total={totalUsersData.total}
                            items={totalUsersData.items}
                        /></div>
                        <div className='w-25'><PropertyStatusCard
                            icon={totalBuildersData.icon}
                            title={totalBuildersData.title}
                            total={totalBuildersData.total}
                            items={totalBuildersData.items}
                        /></div>
                        <div className='w-25'><PropertyStatusCard
                            icon={totalInspectorsData.icon}
                            title={totalInspectorsData.title}
                            total={totalInspectorsData.total}
                            items={totalInspectorsData.items}
                        /></div>
                        <div className='w-25'><PropertyStatusCard
                            icon={pendingPaymentsData.icon}
                            title={pendingPaymentsData.title}
                            total={pendingPaymentsData.total}
                            items={pendingPaymentsData.items}
                        /></div>
                    </div>
                    <div>
                            <Nav pills className="nav-success mb-4">
                                <NavItem>
                                    <NavLink
                                        active={activeTab === 'property-listings'}
                                        onClick={() => setActiveTab('property-listings')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Property Listings
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        active={activeTab === 'account-approvals'}
                                        onClick={() => setActiveTab('account-approvals')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                       Account Approvals
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        active={activeTab === 'payments'}
                                        onClick={() => setActiveTab('payments')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Payments
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <div>
                            {activeTab === 'property-listings' && <PropertyListings />}
                            {activeTab === 'account-approvals' && <AccountApprovals data={usersData} loading={loading} />}
                            {activeTab === 'payments' && <Payments />}
                        </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;