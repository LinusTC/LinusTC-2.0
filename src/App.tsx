import CV from "./Views/CV";
import MainPage from "./Views/MainPage";
import { Routes, HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="CV" element={<CV />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
