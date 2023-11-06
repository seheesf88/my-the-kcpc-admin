import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import ContentDataService from "./../../services/content.services";
import ContentForm from "./../../components/forms/ContentForm"

const CreateContent = () => {
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