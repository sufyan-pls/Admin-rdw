import { cardDocumentsListingData, propertyInformationModalFirstComponentData } from "common/data/users";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import PropertyInfoCard from "../Components/propertyInfoCard";
import CompanyInspectionDetailCard from "../Components/CompanyInspectionDetailCard";
// import PropertyInfoCard from "../Components/PropertyInfoCard";
// import RentInfoCard from "../Components/RentInfoCard";
// import DocumentsCard from "../Components/DocumentsCard";
// import CompanyInspectionDetailCard from "../Components/CompanyInspectionDetailCard";
// import SecondaryInspectionDetailCard from "../Components/SecondaryInspectionDetailCard";

const PropertyInformationModal = ({ isOpen, toggle, propertyId }: any) => {
    const data = propertyInformationModalFirstComponentData;
    return (
        <Modal isOpen={isOpen} toggle={toggle} size="lg" centered backdrop="static" className="edit-user-modal">
            <ModalHeader toggle={toggle} className="border-bottom-0 pb-0">Property Information</ModalHeader>
            <hr className="mt-4" />
            <ModalBody>
                <div>
                    <PropertyInfoCard data={data} />
                </div>
                <div className="my-3">
                    <CompanyInspectionDetailCard />
                </div>
                {/* <div className="my-3">
                    <h6 className="fw-bold">Details</h6>
                    <div className="d-flex flex-row gap-3">
                        <div className="w-50"><RentInfoCard /></div>
                        <div className="w-50"><DocumentsCard documents={cardDocumentsListingData} /></div>
                    </div>
                </div>
                <div className="my-1">
                    <h6 className="fw-bold">Inspections</h6>
                    <div className="d-flex flex-row gap-3">
                        <div className="w-50"><CompanyInspectionDetailCard /></div>
                        <div className="w-50"><SecondaryInspectionDetailCard /></div>
                    </div>
                </div> */}
            </ModalBody>
        </Modal>
    );
}

export default PropertyInformationModal;