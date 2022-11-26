import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import ContentDataService from "./../../services/content.services";

const AddContent = ({ id, setBookId }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }

    const newContent = {
      title,
      date
    };

    try {
      await ContentDataService.addContent(newContent);
      setMessage({ error: false, msg: "New content added successfully!" });
      navigate("/contents");
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setDate("");
  };

  // const editHandler = async () => {
  //   setMessage("");
  //   try {
  //     const docSnap = await BookDataService.getBook(id);
  //     console.log("the record is :", docSnap.data());
  //     setTitle(docSnap.data().title);
  //     setAuthor(docSnap.data().author);
  //     setStatus(docSnap.data().status);
  //   } catch (err) {
  //     setMessage({ error: true, msg: err.message });
  //   }
  // };

  // useEffect(() => {
  //   console.log("The id here is : ", id);
  //   if (id !== undefined && id !== "") {
  //     editHandler();
  //   }
  // }, [id]);
 
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="duedate">
            <Form.Control
              type="date"
              name="duedate"
              placeholder="Due date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
   
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddContent;