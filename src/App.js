import Home from "./Components/Home";
import Create from "./Components/Create";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import BlogDetails from "./Components/BlogDetails";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/create" element={<Create/>} />
            <Route path="/blogs/:id" element={<BlogDetails/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/about" element={(
              <div>
                <h1>This is About Page</h1>
              </div>
            )
            } />
            <Route path="/redirect" element={<Navigate to="/" />}  />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
