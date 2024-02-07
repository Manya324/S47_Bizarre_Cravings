import "./App.css";
import HomePage from "../src/components/HomePage";
import Data from "./components/Data";
import { Routes, Route } from "react-router-dom";
import NewPage from "./components/NewPage";
import UpdateItem from "./components/UpdateItem";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/data" element={<Data />}/>
          <Route path="/addItem" element={<NewPage/>} />
          <Route path="/update/:id" element={<UpdateItem/>} />
      </Routes>
    </>
  );
}

export default App;
