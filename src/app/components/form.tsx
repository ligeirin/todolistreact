import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ToDoForm({
  content,
  contentChange,
  urgency,
  urgencyChange,
  handleSaveButton,
}: any) {
  return (
    <Form>
      <Row>
        <Col xs={7}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              onChange={contentChange}
              value={content}
              placeholder="To-Do"
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Form.Group className="mb-3">
            <Form.Select onChange={urgencyChange} value={urgency}>
              <option value={0} disabled>
                Urgency
              </option>
              <option value={1}>Low</option>
              <option value={2}>Medium</option>
              <option value={3}>High</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button variant="success" onClick={handleSaveButton}>
            Salvar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
