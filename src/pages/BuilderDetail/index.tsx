import BreadCrumb from "Components/Common/BreadCrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import Widgets from "./Widgets";
import BasicInformation from "./BasicInformation";
import NavTabs from "./NavTabs";

const BuilderDetail = () => {
    document.title = "Builder Detail";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb 
                        title="Builder Detail" 
                        pageTitles={[
                            { label: "Builder", path: "/builder" },
                            { label: "Builder Detail" }
                        ]}
                    />
                    <div >
                        <Widgets />
                    </div>
                    <div>
                        <BasicInformation />
                    </div>
                    <div>
                        <NavTabs />
                    </div>
                    
                </Container>
            </div>
        </React.Fragment>
    )
}

export default BuilderDetail;
