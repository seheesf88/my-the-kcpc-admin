import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// components
import Login from "./components/Login/Login";
import Signup from "./components/Signup";

import Nav from "./ui-components/Nav";
import Home from "./components/Home/Home";
import Contents from "./components/Contents/ContentsList";
import AddContent from "./components/Contents/AddContent";

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
                <AddContent />
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