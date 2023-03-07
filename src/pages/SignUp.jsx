import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function SignUp({unlockedExercises}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const level = unlockedExercises;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://ssg-backend.onrender.com/auth/signup", {
        username,
        email,
        password,
        level,
      });
      console.log(res);
      setMessage(res.data);
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ maxWidth: 300 }}
          margin="normal"
        />
        <br />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ maxWidth: 300 }}
          margin="normal"
        />
        <br />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ maxWidth: 300 }}
          margin="normal"
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
