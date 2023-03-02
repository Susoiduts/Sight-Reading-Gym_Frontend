import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CourseOverview from "./pages/CourseOverview";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import CoursePage from "./pages/CoursePage";

function App() {
  const [unlockedExercises, setUnlockedExercises] = useState([1]);

  return (
    <Router>
      <Navbar />
      <div>{unlockedExercises}</div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<CourseOverview unlockedExercises={unlockedExercises} />} />
        <Route path="/course/:id" element={<CoursePage unlockedExercises={unlockedExercises} setUnlockedExercises={setUnlockedExercises}/>} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
}

export default App;
