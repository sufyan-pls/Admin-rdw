import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
// Import your table components
import PropertyListingTable from './PropertyListingTable';
import DocumentsTable from './DocumentsTable';
import FocalPersonTable from './FocalPersonTable';


const NavTabs = () => {
    const [activeTab, setActiveTab] = useState('property');

    return (
        <div>
            <Nav pills className="nav-success mt-4 mb-4">
                <NavItem>
                    <NavLink
                        active={activeTab === 'property'}
                        onClick={() => setActiveTab('property')}
                        style={{ cursor: 'pointer' }}
                    >
                        Property Listing
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        active={activeTab === 'documents'}
                        onClick={() => setActiveTab('documents')}
                        style={{ cursor: 'pointer' }}
                    >
                        Documents
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        active={activeTab === 'focal'}
                        onClick={() => setActiveTab('focal')}
                        style={{ cursor: 'pointer' }}
                    >
                        Focal Person
                    </NavLink>
                </NavItem>
            </Nav>

            {/* Render the selected component */}
            {activeTab === 'property' && <PropertyListingTable />}
            {activeTab === 'documents' && <DocumentsTable />}
            {activeTab === 'focal' && <FocalPersonTable />}
        </div>
    );
};

export default NavTabs;
