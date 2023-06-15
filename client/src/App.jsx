import { Route, Routes } from "react-router";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import About from "./components/WelcomePage/About";
import UserCompany from "./components/WelcomePage/UserCompany";
import Footer from "./components/WelcomePage/Footer";
//import PracticeDashboard from "./components/CodePractice/PracticeDashboard";
import Compete1v1 from "./components/CodePractice/compete/Compete1v1";
import Dashboard from "./components/Dashboard/Dashboard";
import PracticeDashboard from "./components/CodePractice/compete/PracticeDashboard";
import PracticePage from "./components/CodePractice/practice/PracticePage";
import AdnanGalijasevic from './components/CodePractice/profile/AdnanGalijasevic'
import Jobs from "./components/Jobs/Jobs";

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
       <Route path="/1v1" element={<Compete1v1 />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="code-practice" element={<PracticeDashboard />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route
          path="/profile/AdnanGalijasevic"
          element={<AdnanGalijasevic />}
        />
                <Route path="/jobs" element={<Jobs />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
