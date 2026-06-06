import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SkinAnalysis from "./pages/SkinAnalysis";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<SkinAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}
