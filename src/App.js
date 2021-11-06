import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
           
          </Route>
          <Route path="/users">
            
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router >
    </div >
  );
}

export default App;
