import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Links } from "./components/Links";
import { Search } from "./components/Search";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Links />
      <Search />
      <Home />
    </div>
  );
}

export default App;
