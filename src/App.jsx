import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Details from "./components/Details";
import Card from "./components/Card";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={< Card />}></Route>
        <Route path="/posts/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
