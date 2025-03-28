import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
const Dashboard = lazy(()=> import('./components/Dashboard'))
const Landing  = lazy(()=> import('./components/Landing'))

function App() {
  // for lazy loading we have to use the Suspense API and it is must be there
  return (
    <div>
      <div> 
        {/* <button onClick={()=>{
          window.location.href="/"
        }}
        >Landing Page</button>
        <button onClick={()=>{
          window.location.href="/Dashboard"
        }}>Dashboard Page</button>
        this one is not the feasible way because it reloads the whole web page.
        */}
      </div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard Page
      </button>
    </div>
  );
}
export default App;
