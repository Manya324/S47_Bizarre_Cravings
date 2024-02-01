import "./App.css";
import HomePage from "../src/components/HomePage";
import Data from "./components/Data";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/data" element={<Data />}/>
      </Routes>
    </>
  );
}

export default App;
