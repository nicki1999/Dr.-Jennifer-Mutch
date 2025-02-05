import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./components/layout/Header";
import About from "./components/About";

//use NavLink for navigation
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Header></Header>
        <About></About>
    </div>
);