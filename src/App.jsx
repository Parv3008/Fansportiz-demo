import "./App.css";
import './assets/fonts/jersey_m54/fonts.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
