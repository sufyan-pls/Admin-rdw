import { Button } from "reactstrap";

const Contract = () => {
    return (
        <div className="mt-3">
            <div>
                <h6 className="fw-bold">Agreement to sell real estate</h6>
                <p>Please carefully review the agreement to sell real estate before signing.</p>
            </div>
            <div className="w-100">
                <iframe
                    src="sample.pdf"
                    style={{
                        width: "100%",
                        height: "500px",
                        border: "1px solid #ccc",
                        borderRadius: "8px"
                    }}
                    title="Agreement Document"
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                <Button color="success" className="rounded-0 text-white text-start">Print</Button>
            </div>
        </div>
    );
}

export default Contract;