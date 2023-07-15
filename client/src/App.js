// import {useLocation } from "react-router-dom";
// import NavBar from "./Components/NavBar/NavBar";
// import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Landing, Home, Form, Detail } from "./views";

function App() {
  // const { pathname } = useLocation();

  return (
    <div>
      {/* {pathname !== "/" && pathname !== "/create" && <NavBar />} */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
