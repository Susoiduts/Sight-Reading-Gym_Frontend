import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CourseOverview from "./pages/CourseOverview";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import CoursePage from "./pages/CoursePage";
import SignUp from "./pages/SignUp";

function App() {
  const [unlockedExercises, setUnlockedExercises] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("authtoken"));

  //TODO: making sure data course curriculum is displayed
  useEffect(() => {
    if (token) {
      fetch('https://ssg-backend.onrender.com/level', {
        headers: {
          'authtoken': `${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          setLoggedIn(true);
          setUnlockedExercises(data.level);
        })
        .catch(error => {
          console.error('Error fetching user level:', error);
        });
    }
  }, [token]);

  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setToken={setToken}/>
      {/* <div>{unlockedExercises}</div> */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<CourseOverview unlockedExercises={unlockedExercises} />} />
        <Route path="/course/:id" element={<CoursePage unlockedExercises={unlockedExercises} setUnlockedExercises={setUnlockedExercises} token={token} loggedIn={loggedIn}/>} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setToken={setToken}/>} />
        <Route path="/signup" element={<SignUp unlockedExercises={unlockedExercises}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
}

export default App;
