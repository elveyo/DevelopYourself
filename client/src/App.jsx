import React from "react";
import { Route, Routes } from "react-router";
import WelcomePage from "./components/WelcomePage";
import About from "./components/About";
import UserCompany from "./components/UserCompany";
import Footer from "./components/Footer";
import PracticeDashboard from "./components/CodePractice/compete/PracticeDashboard";
import Compete1v1 from "./components/CodePractice/compete/compete1v1";
import PracticePage from "./components/CodePractice/practice/PracticePage";
import AdnanGalijasevic from "./components/CodePractice/profile/AdnanGalijasevic";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WelcomePage />
              <About />
              <UserCompany />
              <Footer />
            </>
          }
        />
        <Route path="code-practice" element={<PracticeDashboard />} />
        <Route path="/1v1" element={<Compete1v1 />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route
          path="/profile/AdnanGalijasevic"
          element={<AdnanGalijasevic />}
        />
      </Routes>
    </>
  );
}

export default App;
