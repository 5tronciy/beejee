import React from "react";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <CustomNavbar />
      <AppRouter />
    </div>
  );
}

export default App;
