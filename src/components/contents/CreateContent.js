import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import ContentDataService from "./../../services/content.services";
import ContentForm from './ContentForm';

const CreateContent = ({ id, setBookId }) => {
  const [message, setMessage] = useState({ error: false, msg: "" });
  const navigate = useNavigate();

  const addContent = async (newContent) => {
    try {
      await ContentDataService.addContent(newContent);
      setMessage({ error: false, msg: "New content added successfully!" });
      navigate("/contents");
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
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
        <ContentForm addContent={addContent} />
      </div>
    </>
  );
};

export default CreateContent;