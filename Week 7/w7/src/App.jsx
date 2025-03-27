import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App() {
  return (
    <div>
      <div>
        <button onClick={()=>{
          window.location.href="/"
        }}
        >Landing Page</button>
        <button onClick={()=>{
          window.location.href="/Dashboard"
        }}>Dashboard Page</button>
        
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
