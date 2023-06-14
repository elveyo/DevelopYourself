import { Route, Routes } from "react-router";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import About from "./components/WelcomePage/About";
import UserCompany from "./components/WelcomePage/UserCompany";
import Footer from "./components/WelcomePage/Footer";
import PracticeDashboard from "./components/CodePractice/PracticeDashboard";
import Compete1v1 from "./components/CodePractice/compete/Compete1v1";
import Dashboard from "./components/Dashboard/Dashboard";

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
            </>
          }
        />
        <Route path="code-practice" element={<PracticeDashboard />} />
        <Route path="code-practice/1v1" element={<Compete1v1 />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
