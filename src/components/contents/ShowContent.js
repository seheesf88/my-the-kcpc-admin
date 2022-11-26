import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentDataService from "./../../services/content.services";

function ShowContent() {
  const [content, setContent] = useState({})
  const navigate = useNavigate(); 

  useEffect(() => {
    const contentId = window.location.pathname.split('/')[2]
    getContent(contentId);
  }, []);

  const getContent = async (id) => {
    const res = await ContentDataService.getContent(id);
    setContent(res.data());
  };

  const routeChange = () =>{ 
    const contentId = window.location.pathname.split('/')[2]
    navigate(`/contents/${contentId}/edit`);
  }


  return (
    <div className="container my-5">
      <h3>{content.serviceDate} - {content.message?.title} </h3>
      <h5>Preview dd</h5>
      <p>Youtube key: {content.youtubeKey}</p>
      <div className="row justify-content-end">
        <button className="col-1" onClick={routeChange}>Edit</button>
        <button className="col-1">Download</button>
      </div>
      <div className="row mt-3">
        <div className="">
          <table className="table table-bordered text-center">
            <tbody>
              <tr>
                <td>묵도/일어서서</td>
                <td colSpan="2">예배로의 부르심</td>
              </tr>
              <tr>
                <td colSpan="1">신앙고백</td>
                <td>사도신경</td>
                <td rowSpan="2">
                  <div>찬양의 시간</div>
                  <div>{content.openingHymnForMainService?.hymn}</div>
                  <div>{content.openingHymnForMainService?.hymnBy}</div>
                </td>
              </tr>
              <tr>
                <td>찬송</td>
                <div>{content.openingHymnForFirstService}</div>
              </tr>
              <tr>
                <td>대표기도</td>
                <td colSpan="2">
                  {content.prayer}
                </td>
              </tr>
              <tr>
                <td>찬양</td>
                <td>
                  <div>{content.anthemForFirstService?.hymn}</div>
                  <div>{content.anthemForFirstService?.hymnBy}</div>
                </td>
                <td>
                  <div>{content.anthemForMainService?.hymn}</div>
                  <div>{content.anthemForMainService?.hymnBy}</div>
                </td>
              </tr>
              <tr>
                <td>말씀</td>
                <td colSpan="2">
                  <div>{content.message?.title}</div>
                  <div>{content.message?.script}</div>
                  <div>{content.message?.messageBy}</div>
                </td>
              </tr>
              <tr>
                <td>헌금</td>
                <td colSpan="2">
                  헌금위헌:
                  {content.offertoryBy}
                </td>
              </tr>
              <tr>
                <td>광고</td>
                <td colSpan="2">{content.announcementBy}</td>
              </tr>
              <tr>
                <td>찬송</td>
                <td colSpan="2">{content.doxology}</td>
              </tr>
              <tr>
                <td>축도</td>
                <td colSpan="2">{content.benedictionBy}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ShowContent