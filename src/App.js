import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'


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
