import "./styles.css";
import { Counter } from "./components/Counter";
import { List } from "./components/List";
export default function App() {
  return (
    <div className="App">
      <List />
      <Counter />
    </div>
  );
}
