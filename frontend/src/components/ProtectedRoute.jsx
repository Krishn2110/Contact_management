import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // If there is no token, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If token exists, render the dashboard (children)
  return children;
}