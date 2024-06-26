import { Route, Routes } from "react-router-dom";

import HomePage from "./routes/HomePage";
import MainPage from "./routes/MainPage";
function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
