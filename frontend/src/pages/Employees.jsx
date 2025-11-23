import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("/employees").then(res => setEmployees(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Employees</h1>
      {employees.map(e => (
        <div key={e.id} className="p-3 border mb-2">
          <p><b>Name:</b> {e.name}</p>
          <p><b>Role:</b> {e.role}</p>
          <p><b>Teams:</b> {e.Teams?.map(t => t.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
