import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppViews from "./Views/app-views";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<AppViews />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
