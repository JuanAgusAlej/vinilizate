import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={""} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
