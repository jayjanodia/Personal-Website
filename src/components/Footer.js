import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon-linkedin.svg";
import navIcon2 from "../assets/img/nav-icon-facebook.svg";
import navIcon3 from "../assets/img/nav-icon-instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jay-janodia-46b266ab/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/jayjanodia/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://instagram.com/j_j_1998/?igshid=YmMyMTA2M2Y=">
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
