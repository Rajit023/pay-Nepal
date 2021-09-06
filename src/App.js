import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import TopNavbar from './components/Navbar.js'
function App() {
  return (
    <div>
    <TopNavbar />
    <Switch>
      <Route exact path = "/" component ={Home} />
      <Route exact path = "/about" component ={About} />
      <Route exact path = "/service" component ={Service} />
      <Route exact path = "/contact" component ={Contact} />
  <Redirect to ="/" />
  </Switch>
  </div>
  )
}

export default App;
