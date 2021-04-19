import "./App.css";
import Header from "./components/Header";
import Books from "./components/Books";
import Model from "react-modal";

Model.setAppElement("#root");
function App() {
  return (
    <div className="App">
      <Header />
      <Books />
    </div>
  );
}

export default App;
