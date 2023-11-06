import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import ContentDataService from "./../../services/content.services";
import ContentForm from "./../../components/forms/ContentForm"

const EditContent = () => {
  const [message, setMessage] = useState({ error: false, msg: "" });
  const navigate = useNavigate();
  const contentId = window.location.pathname.split('/')[2]

  const editHandler = async (id, data) => {
    setMessage("");
    try {
      await ContentDataService.updateContent(id, data);
      navigate(`/contents/${id}`);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };
 
  return (
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
      <ContentForm addContent={editHandler} contentId={contentId}/>
    </div>
  );
};

export default EditContent;