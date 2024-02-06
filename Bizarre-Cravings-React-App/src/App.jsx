import "./App.css";
import HomePage from "../src/components/HomePage";
import Data from "./components/Data";
import { Routes, Route } from "react-router-dom";
import NewPage from "./components/NewPage";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/data" element={<Data />}/>
          <Route path="/addItem" element={<NewPage/>} />
      </Routes>
    </>
  );
}

export default App;
