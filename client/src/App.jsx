import React from "react";
import { Route, Routes } from "react-router";
import WelcomePage from "./components/WelcomePage";
import About from "./components/About";
import UserCompany from "./components/UserCompany";
import Footer from "./components/Footer";
import PracticeDashboard from "./components/CodePractice/PracticeDashboard";
import Compete1v1 from "./components/CodePractice/compete/Compete1v1";

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
        <Route path="code-practice/1v1" element={<Compete1v1 />} />
      </Routes>
    </>
  );
}

export default App;
