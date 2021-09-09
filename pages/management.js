import { Container, Row, Col } from "react-bootstrap";

const Management = () => {
  return (
    <Container className="mt-3 min-vh-100">
      <Row>
        <Col sm="auto">
          <UserCard></UserCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Management;

const UserCard = () => {
  return <div>Management</div>;
};
