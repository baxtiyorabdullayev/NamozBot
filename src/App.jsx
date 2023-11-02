import { Route, Routes } from "react-router-dom";

import MasjidList from "./pages/MasjidList";
import Navbar from "./components/Navbar";
import MasjidInfo from "./pages/MasjidInfo";

function App() {
  return (
    <div className=" p-3">
      <Navbar />
      <Routes>
        <Route path="/" element={<MasjidList />} />
        <Route path="/masjidInfo/:id" element={<MasjidInfo />} />
      </Routes>
    </div>
  );
}

export default App;
