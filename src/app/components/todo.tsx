import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ToDo({
  id,
  content,
  urgency,
  created,
  handleDeleteButton,
  handleEditButton,
}: any) {
  function formatDate(date: string) {
    let d = new Date(date);

    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${d.getFullYear()}`;
  }

  function evaluateUrgency(u: any): {
    bg: "success" | "warning" | "danger";
    text: "dark" | "light";
    content: "Low" | "Medium" | "High";
  } {
    return u == 1
      ? { bg: "success", text: "light", content: "Low" }
      : u == 2
      ? { bg: "warning", text: "dark", content: "Medium" }
      : { bg: "danger", text: "light", content: "High" };
  }

  return (
    <Card border={evaluateUrgency(urgency).bg} className="m-3">
      <Card.Header>
        <Badge
          bg={evaluateUrgency(urgency).bg}
          text={evaluateUrgency(urgency).text}
        >
          Urgency {evaluateUrgency(urgency).content}
        </Badge>
      </Card.Header>
      <Card.Body>
        <Container fluid>
          <Row>
            <Col className="d-flex align-items-center p-0" sm={7}>
              {content}
            </Col>
            <Col className="d-flex align-items-center p-0" sm={3}>
              {formatDate(created)}
            </Col>
            <Col className="d-flex align-items-center p-0" sm={1}>
              <Button variant="warning" onClick={handleEditButton}>
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
              </Button>
            </Col>
            <Col className="d-flex align-items-center p-0 ps-1" sm={1}>
              <Button variant="danger" onClick={handleDeleteButton}>
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
