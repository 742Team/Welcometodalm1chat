import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Download from "./pages/Download";
import About from "./pages/Download";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content-wrap">
          <Header />

          <Routes>
            <Route path="/download" element={<Download />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
