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
              placeholder="Afazer"
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Form.Group className="mb-3">
            <Form.Select onChange={urgencyChange} value={urgency}>
              <option value={0} disabled>
                Urgência
              </option>
              <option value={1}>Baixa</option>
              <option value={2}>Média</option>
              <option value={3}>Alta</option>
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
