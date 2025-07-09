import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardImg,
} from "reactstrap";

// Style for the cover photo container
const coverPhotoStyle = {
  height: "150px",
  width: "100%",
  position: "relative" as const,
  backgroundColor: "#f8f9fa",
  borderRadius: "8px 8px 0 0",
  overflow: "visible",
};

const SettingsPage: React.FC = () => {
  const [coverPhoto, setCoverPhoto] = useState<string | undefined>(undefined);
  const [profilePhoto, setProfilePhoto] = useState<string | undefined>(
    undefined
  );
  const coverPhotoInputRef = useRef<HTMLInputElement>(null);
  const profilePhotoInputRef = useRef<any>(null); // Changed to any to work with Reactstrap Input
  const [photo, setPhoto] = useState<string | undefined>(undefined);

  const [basicInfo, setBasicInfo] = useState({
    name: "Floyd",
    email: "kenzi.lawson@example.com",
    phone: "(684) 555-0102",
    location: "8502 Preston Rd. Inglewood, Maine 98380",
  });
  const [password, setPassword] = useState("");

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setPhoto(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCancel = () => {
    // Reset logic here
  };

  const handleSave = () => {
    // Save logic here
  };
  return (
    <Container fluid className="px-4">
      {" "}
      <h4 className="mb-4">General</h4>{" "}
      <Card className="mb-1">
        <div style={coverPhotoStyle}>
          {coverPhoto ? (
            <img
              src={coverPhoto}
              alt="Cover"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div className="d-flex align-items-center justify-content-center h-100">
              <Button
                color="light"
                className="position-absolute"
                style={{ top: "10px", right: "10px" }}
                onClick={() => coverPhotoInputRef.current?.click()}
              >
                <i className="ri-image-add-line me-1"></i> Add Cover Photo
              </Button>
            </div>
          )}
          <input
            type="file"
            ref={coverPhotoInputRef}
            hidden
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                const reader = new FileReader();
                reader.onload = (ev) =>
                  setCoverPhoto(ev.target?.result as string);
                reader.readAsDataURL(e.target.files[0]);
              }
            }}
          />{" "}
          <div
            className="text-center"
            style={{
              position: "absolute",
              bottom: "-70px",
              left: 0,
              right: 0,
              zIndex: 2,
            }}
          >
            <div className="position-relative d-inline-block">
              <img
                src={photo || "https://i.pravatar.cc/120?img=12"}
                alt="Profile"
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #fff",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <Button
                color="light"
                size="sm"
                className="position-absolute"
                style={{
                  bottom: "20px",
                  right: "0px",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  padding: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => profilePhotoInputRef.current?.click()}
              >
                <i className="ri-pencil-fill fs-5"></i>
              </Button>
              <input
                ref={profilePhotoInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>{" "}
        <CardBody>
          {" "}
          <div style={{ marginTop: "80px" }}>
            <h5 className="card-title mb-3">Basic Info</h5>
            <hr className="mt-0" style={{ opacity: 0.1 }} />
            <Form>
              <Row>
                <Col md={3}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={basicInfo.name}
                      onChange={handleBasicInfoChange}
                      placeholder="Enter your name"
                      className="form-control-light"
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={basicInfo.email}
                      onChange={handleBasicInfoChange}
                      placeholder="Enter your email"
                      className="form-control-light"
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={basicInfo.phone}
                      onChange={handleBasicInfoChange}
                      placeholder="Enter your phone number"
                      className="form-control-light"
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={basicInfo.location}
                      onChange={handleBasicInfoChange}
                      placeholder="Enter your location"
                      className="form-control-light"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </CardBody>
      </Card>
      <Card className="mb-4">
        <CardBody>
          {" "}
          <h5 className="card-title mb-3">Security</h5>
          <hr className="mt-0" style={{ opacity: 0.1 }} />
          <Form>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="password">Update Password</Label>{" "}
                  <div className="d-flex align-items-center gap-3 w-100">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Enter new password"
                      className="form-control-light flex-grow-1"
                    />
                    <Button
                      color="success"
                      // size="sm"
                      style={{ width: "120px" }}
                    >
                      Update
                    </Button>
                  </div>
                </FormGroup>
              </Col>{" "}
            </Row>
          </Form>
          <div className="d-flex justify-content-end gap-2 mt-4">
            <Button color="danger" onClick={handleCancel}>
              Cancel
            </Button>
            <Button color="success" onClick={handleSave}>
              Save
            </Button>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default SettingsPage;
