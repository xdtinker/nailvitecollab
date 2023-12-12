import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Browse, Account, Login } from "./pages";
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
        <Route path="/login" element={<Login />} />
      </Routes>
      <RenderNavbar />
      {/*<Footer />*/}
    </Router>
  );
};

export default App;
