import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home'
import HealthyFood from "./pages/healthyFood"
import Exercises from "./pages/Exercises"
import BMI from "./pages/BMICalculator"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component ={Home}/>
          <Route path="/healthyFood" exact component ={HealthyFood}/>
          <Route path="/Exercises" exact component ={Exercises}/>
          <Route path="/BMI" exact component ={BMI}/>
          <Route path="/About" exact component ={About}/>
          <Route path="/Contact" exact component ={Contact}/>
        </Switch >
        <Footer />
      </Router>
    </div>
  );
}

export default App;
