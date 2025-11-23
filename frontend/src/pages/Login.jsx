import { useState } from "react";
import axios from "../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const res = await axios.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    window.location.href = "/employees";
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <input className="border p-2 w-full" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2 w-full mt-3" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 w-full mt-4" onClick={login}>Login</button>
    </div>
  );
}
