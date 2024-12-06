// Filename - components/Footer.js

import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="mt-10 width-full">
      {/* <h1
				style={{
					color: "green",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				A Computer Science Portal for Geeks!
			</h1> */}
      <FooterContainer>
        <Row>
          <Column>
            <Heading>Legal</Heading>
            <FooterLink>
              <Link to={"/policy/returnpolicy"}>Return Policy</Link>
            </FooterLink>
            <FooterLink >
              <Link to={"/policy/privacypolicy"}>Privacy Policy</Link>
            </FooterLink>

            <FooterLink >
              <Link to={"/policy/refundpolicy"}>Refund Policy</Link>
            </FooterLink>
            <FooterLink >
              <Link to={"/policy/termsService"}>Terms Of Service</Link>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Get To Know Us</Heading>
            <FooterLink href="#">About Us</FooterLink>
            {/* <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">FAQ's</FooterLink> */}
          </Column>
          <Column>
            <Heading>Customer Care</Heading>
            <FooterLink href="#"><Link to={"/contactus"}>Contact Us</Link></FooterLink>
            <FooterLink href="#">Email : support@bliss.com</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
