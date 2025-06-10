import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { Phone, Mail } from "lucide-react";
import { Mail, Phone } from "feather-icons-react";

export default function SupportSection() {
  return (
    <div
    //   style={{
    //     backgroundColor: "#f9fafb",
    //     minHeight: "100vh",
    //     padding: "2rem",
    //   }}
    >
      <div className="max-w-4xl mx-auto">
        {/* General Header */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid #e5e7eb",
              padding: "1.25rem 1.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.125rem",
                fontWeight: "500",
                color: "#111827",
                margin: 0,
              }}
            >
              General
            </h2>
          </div>
        </div>

        {/* Contact Section */}
        <div style={{ marginBottom: "2rem" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h3
              style={{
                fontSize: "1.875rem",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "1rem",
              }}
            >
              Contact Us
            </h3>
            <p
              style={{
                color: "#6B7280",
                fontSize: "1.125rem",
                margin: 0,
              }}
            >
              Facing issues? We're here to help
            </p>
          </div>

          {/* Contact Information */}
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Row className="g-4">
              {/* Phone Contact */}
              <Col md={6}>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    padding: "1.5rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#F3F4F6",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Phone size={20} style={{ color: "#6B7280" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#6B7280",
                        fontSize: "1rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Our 24/7 customer service
                    </p>
                    <h4
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "500",
                        color: "#111827",
                        margin: 0,
                      }}
                    >
                      +1 234 567 890
                    </h4>
                  </div>
                </div>
              </Col>

              {/* Email Contact */}
              <Col md={6}>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    padding: "1.5rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#F3F4F6",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Mail size={20} style={{ color: "#6B7280" }} />
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#6B7280",
                        fontSize: "1rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Write us at
                    </p>
                    <h4
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "500",
                        color: "#111827",
                        margin: 0,
                      }}
                    >
                      realweltdy@mail.com
                    </h4>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Bottom Container */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
            minHeight: "calc(100vh - 500px)",
          }}
        ></div>
      </div>
    </div>
  );
}
