import React, { useState } from "react";
import ValueInput from "./ValueInput";
import ValueDisplay from "./ValueDisplay";

function AdminDashboard() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ValueInput setValue={setValue} />
      <ValueDisplay value={value} />
    </div>
  );
}

export default AdminDashboard;
