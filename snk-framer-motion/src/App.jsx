import {Switch, Route, useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion"
import './App.css';
import Home  from "./pages/Home"
import About from "./pages/About"
import NewsLetter from "./pages/NewsLetter"



function App() {
  const location=useLocation();
  console.log(location);

  return (
    <div className="App">
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/newsLetter" exact component={NewsLetter}></Route>
        </Switch>
    </div>
  );
}

export default App;
