import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Browse, Account, Auth } from "./pages";
import "./App.css";
const RenderNavbar = () => {
  const currentPath = window.location.pathname;

  if (currentPath === "/") {
    return null;
  }
  return <Navbar />;
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <RenderNavbar />
      <Footer />
    </Router>
  );
};

export default App;
