import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

// components
import NavBar from "./components/layouts/NavBar";
// auth
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
// pages
import Home from "./pages/home/Home";
import ContentsList from "./pages/contents/ContentsList";
import CreateContent from "./pages/contents/CreateContent";
import ContentDetails from "./pages/contents/ContentDetails";
import EditContent from "./pages/contents/EditContent";

import Gallery from "./pages/gallery/PhotosList";
import CreatePhoto from "./pages/gallery/CreatePhoto";

import Offering from "./pages/offering/Offering";
import Announcements from "./pages/announcements/Announcements";
import Broadcasting from "./pages/broadcasting/Broadcasting";

function App() {
  return (
    <AuthContextProvider>
      <NavBar />
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
              <ContentsList />
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
              <ContentDetails />
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
          path="/annoucements"
          element={
            <ProtectedRoute>
              <Announcements />
            </ProtectedRoute>
          }
        />
        <Route
          path="/broadcasting"
          element={
            <ProtectedRoute>
              <Broadcasting />
            </ProtectedRoute>
          }
        />
        <Route
          path="/offering"
          element={
            <ProtectedRoute>
              <Offering />
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
    </AuthContextProvider>
  );
}

export default App;