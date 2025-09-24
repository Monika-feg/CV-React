import { HashRouter, Route, Routes } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import Nevbar from "./componets/Nevbar";
import Footer from "./componets/Footer";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import WorkExperience from "./pages/WorkeExperience";
import "./css/App.css";

function App() {
  return (
    <Theme
      appearance="light"
      accentColor="violet"
      style={{ background: "transparent" }}
    >
      <HashRouter>
        <Nevbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/workexperience" element={<WorkExperience />} />
        </Routes>
        <Footer />
      </HashRouter>
    </Theme>
  );
}

export default App;
