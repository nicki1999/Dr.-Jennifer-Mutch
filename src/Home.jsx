import Introduction from "./components/Home/Introduction";
import About from "./components/Home/About";
import Experties from "./components/Home/Experties";
import Articles from "./components/Home/Articles";
import Form from "./components/layout/Form";
export default function Home() {
  return (
    <div>
      <Introduction></Introduction>
      <Form></Form>

      <About></About>
      <Experties></Experties>
      <Articles></Articles>
    </div>
  );
}
