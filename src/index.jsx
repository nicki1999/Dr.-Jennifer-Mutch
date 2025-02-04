import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./components/layout/Header";

//use NavLink for navigation
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Header></Header>
    </div>
);