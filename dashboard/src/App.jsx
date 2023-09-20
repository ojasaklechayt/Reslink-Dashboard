// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import "./styles/tailwind.css";
import Sidebar from "./components/sidebar/sidebar";
import Background from "./assets/background.svg";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <>
      <div className="bg-[#1F2129]">
        <img
          className="absolute h-screen w-screen opacity-[60%]"
          src={Background}
          alt="Background"
        />
        <div className="flex flex-row">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
