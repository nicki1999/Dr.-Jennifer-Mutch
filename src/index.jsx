import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./components/layout/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Experties from "./components/Experties";
import Articles from "./components/Articles";
//use NavLink for navigation
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header></Header>
    <Introduction></Introduction>
    <About></About>
    <Experties></Experties>
    <Articles></Articles>
  </div>
);
