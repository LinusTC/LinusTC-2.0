import CV from "./Views/CV";
import MainPage from "./Views/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="CV" element={<CV />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
