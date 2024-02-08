import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AppContext from "../contexts/AppContext.js";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AppContext);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
