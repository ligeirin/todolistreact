"use client";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import ToDoForm from "./components/form";
import ToDo from "./components/todo";
import ToDoService from "./services/toDoService";

import Card from "react-bootstrap/Card";
import { Alert, Button, Stack } from "react-bootstrap";

export default function Home() {
  let service = new ToDoService();

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertVariant, setAlertVariant] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const [editingID, setEditingID] = useState("");

  const [content, setContent] = useState("");
  const [urgency, setUrgency] = useState(1);

  const [result, setResult] = useState([]);

  function update() {
    service.get().then((res: any) => {
      setResult(
        res.items.map((item: any) => {
          return (
            <ToDo
              id={item.id}
              content={item.content}
              created={item.created}
              urgency={item.urgency}
              handleDeleteButton={() => handleDelete(item.id)}
              handleEditButton={() => handleEdit(item.id)}
            ></ToDo>
          );
        })
      );
    });
  }

  update();

  function handleSave() {
    if (editingID == "") {
      service.create({ content, urgency }).then((created) => {
        update();
      });
      showAlert("success", "Afazer registrado com sucesso");
    } else {
      service.update(editingID, { content, urgency }).then((updated) => {
        update();
      });
      setEditingID("");
      showAlert("warning", "Afazer atualizado com sucesso");
    }

    setContent("");
    setUrgency(1);
  }

  function handleDelete(id: string) {
    service.delete(id).then((deleted) => {
      update();
    });
    showAlert("danger", "Afazer removido com sucesso");
  }

  function handleEdit(id: string) {
    let arr: any = result.slice();

    let index = arr.findIndex((a: any) => a.props.id == id);

    if (index == -1) return;

    setEditingID(id);
    setContent(arr[index].props.content);
    setUrgency(arr[index].props.urgency);
  }

  function showAlert(variant: string, message: string) {
    setAlertVariant(variant);
    setAlertVisible(true);
    setAlertMessage(message);
    window.setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
  }

  return (
    <>
      <div className="position-absolute top-0 end-0">
        <Stack>
          <Alert show={alertVisible} variant={alertVariant}>
            {alertMessage}
          </Alert>
        </Stack>
      </div>

      <Card className="my-3 mx-auto wrapper">
        <Card.Header>To-Do List</Card.Header>
        <Card.Body>
          <ToDoForm
            content={content}
            contentChange={(e: any) => setContent(e.target.value)}
            urgency={urgency}
            urgencyChange={(e: any) => setUrgency(e.target.value)}
            handleSaveButton={handleSave}
          ></ToDoForm>

          {result}
        </Card.Body>
      </Card>
    </>
  );
}
