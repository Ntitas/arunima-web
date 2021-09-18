import { Card } from "react-bootstrap";

const Widget = (props) => {
  return (
    <Card className="shadow text-center bg-light">
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        <Card.Title className="fw-bold">{props.data.title}</Card.Title>
        <Card.Subtitle className="m-2 text-muted">
          {props.data.subTitle}
        </Card.Subtitle>
        <Card.Text className="text-center">Arunima Group</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Widget;
