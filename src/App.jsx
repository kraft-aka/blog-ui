import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Write from "./pages/Write";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import UserDashboard from "./pages/UserDashboard";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./providers/authProvider";
import ProtectedRoutes from "./utils/protectedRoutes";
import PublicRoutes from "./utils/PublicRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/write" element={<Write />} />
          </Route>
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<PublicRoutes />}>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
        <Toaster position="top-right" />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
