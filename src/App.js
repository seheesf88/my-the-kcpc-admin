import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// components
import Login from "./components/Login/Login";
import Signup from "./components/Signup";

import Nav from "./ui-components/Nav";
import Home from "./components/Home/Home";
import Contents from "./components/contents/ContentsList";
import CreateContent from "./components/contents/CreateContent";
import ShowContent from "./components/contents/ShowContent";
import EditContent from "./components/contents/EditContent";
import Gallery from "./components/gallery/PhotosList";
import CreatePhoto from "./components/gallery/CreatePhoto";

function App() {
  return (
    <div>
      <UserAuthContextProvider>
        <Nav />
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents"
            element={
              <ProtectedRoute>
                <Contents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/new"
            element={
              <ProtectedRoute>
                <CreateContent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/:id"
            element={
              <ProtectedRoute>
                <ShowContent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contents/:id/edit"
            element={
              <ProtectedRoute>
                <EditContent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gallery"
            element={
              <ProtectedRoute>
                <Gallery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gallery/new"
            element={
              <ProtectedRoute>
                <CreatePhoto />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;