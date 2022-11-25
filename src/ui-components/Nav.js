import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { useUserAuth } from "./../context/UserAuthContext";


function Nav() {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">
          <img src="/kcpc_logo.png" alt="kcpc logo" width="200" height="35"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contents" className="nav-link active">Contents</Link>
            </li>
            <li className="nav-item">
              <Link to="/contents" className="nav-link active">Announcements</Link>
            </li>
            <li className="nav-item">
              <Link to="/contents" className="nav-link disabled">Resources</Link>
            </li>
          </ul>
        </div>
        <button type="button" className ="btn btn-primary" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </nav>
  )
}

export default Nav