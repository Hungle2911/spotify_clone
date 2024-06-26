import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeMain from "./components/HomeMain";
import HomePage from "./routes/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/main" element={<MainPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
