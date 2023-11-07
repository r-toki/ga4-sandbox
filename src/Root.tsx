import { Link, Outlet } from "react-router-dom";

export function Root() {
  return (
    <div>
      <div style={{ display: "flex", gap: "8px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/me">Me</Link>
      </div>
      <Outlet />
    </div>
  );
}
