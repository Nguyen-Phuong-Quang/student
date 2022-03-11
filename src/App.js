import { Route, Routes, Link } from "react-router-dom";

import "./App.css"
import Page1 from "./pages/info/Page1"
import Page2 from "./pages/point/Page2"
import Page3 from "./pages/contact/Page3";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/student/" element={<Page1 />} />
        <Route path="/student/page_2" element={<Page2 />} />
        <Route path="/student/page_3" element={<Page3 />} />
      </Routes>

      <div className="paging">
        <nav>
          <ul>
            <li>
              <Link className="page_number" to="/student/">1</Link>
            </li>
            <li>
              <Link className="page_number" to="/student/page_2">2</Link>
            </li>
            <li>
              <Link className="page_number" to="/student/page_3">3</Link>
            </li>
          </ul>
        </nav>
      </div>
      
    </div>
  );
}

export default App;
