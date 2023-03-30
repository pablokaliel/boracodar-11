import { Routes,Route } from "react-router-dom";
import CreateAccount from "./Pages/create";
import Home from "./Pages/home";

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<CreateAccount />} />
  </Routes>
  </div>
  );
}

export default App;
