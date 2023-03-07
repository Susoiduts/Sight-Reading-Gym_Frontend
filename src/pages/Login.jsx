import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login({ setLoggedIn, loggedIn, setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://ssg-backend.onrender.com/auth/login",
        {
          email,
          password,
        }
      );
      console.log(res.data);
      localStorage.setItem("authtoken", res.data);
      setToken(() => res.data);
      setLoggedIn(true);
    } catch (err) {
      console.log(err);
      setMessage(err.response.data);
    }
  };

  return loggedIn ? (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 24
      }}
    >
      you are now logged in
    </div>
  ) : (
    <div className="container" style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          sx={{ maxWidth: "300px" }}
        />
        <br />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          sx={{ maxWidth: "300px" }}
        />
        <br />
        <Button variant="contained" type="submit" color="primary">
          Log In
        </Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
