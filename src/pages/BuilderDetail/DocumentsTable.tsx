import TableContainer from 'Components/Common/TableContainerReactTable';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Input, Row } from 'reactstrap';

const DocumentsTable = () => {
    const columns = [
        {
            Header: 'Document ID',
            accessor: 'documentId',
            enableColumnFilter: false,
        },
        {

        }
    ];
    
    
    return (
        <React.Fragment>
           <Card>
            <CardHeader>
                <div className="text-end">
                <Input 
                type="text"
                placeholder="Search"
                className="rounded-2  py-2 mb-3"
                style={{ maxWidth: 300, display: 'inline-block', background: '#1a1d21', border: '1px solid #e5e7eb' }}
                />
                </div>
            </CardHeader>
            {/* <CardBody>
                <TableContainer
                // columns={columns}
                // data={data}
                />
            </CardBody> */}
           </Card>
        </React.Fragment>
    );
};

export default DocumentsTable;