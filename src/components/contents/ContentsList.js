import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import ContentDataService from "./../../services/content.services";

const ContentsList = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getContents();
  }, []);

  const getContents = async () => {
    const data = await ContentDataService.getAllContents();
    const contents = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    const sortedContents = contents.sort(function(a, b) {
      return new Date(a.serviceDate) - new Date(b.serviceDate)
    }).reverse();

    setContents(sortedContents);
  };

  const deleteHandler = async (id) => {
    await ContentDataService.deleteContent(id);
    getContents();
  };

  return (
    <div className="container">
      <h1>주보</h1>
      <Link to="/contents/new">Add new</Link>
      <table className="row table table-stripped text-left mt-5">
        <thead className="col-12">
          <tr className="row">
            <th scope="col" className="col-2">Created Date</th>
            <th scope="col" className="col-2">Service Date</th>
            <th scope="col" className="col-7">Title</th>
            <th scope="col" className="col-1">Remove</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((doc, index) => {
            return (
            <tr key={index} className="row">
              <td className="col-2">
                { new Date(doc.createdAt.seconds*1000).toLocaleDateString() }
              </td>
              <td className="col-2">
                { doc.serviceDate }
              </td>
              <td className="col-7">
                <Link to={`/contents/${doc.id}`}>
                  {doc.message.title} by {doc.message.messageBy}
                </Link>
              </td>
              <td className="col-1">
                <button
                  className="btn btn-danger"
                  onClick={(e) => deleteHandler(doc.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContentsList;