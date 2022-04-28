import { Navigate } from "react-router-dom";

export default function RequiredAuth({ children }) {
  const fakeAuth = true;

  if (!fakeAuth) return <Navigate to={"/login"} />;

  return children;
}
