import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ContentDataService from "./../../services/content.services";

const ContentsList = ({ getBookId }) => {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    getContents();
  }, []);

  const getContents = async () => {
    const data = await ContentDataService.getAllContents();
    console.log(data.docs);
    setContents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ContentDataService.deleteContent(id);
    getContents();
  };
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.date}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getBookId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ContentsList;