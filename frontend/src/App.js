
import './csv/App.css';
import "react-toastify/dist/ReactToastify.css"
import { Route, Switch,Redirect} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import Order from './components/Order';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">             
         <ToastContainer/>
         <NavBar/>
         <Switch>                                    
            <Route path="/cart" exact component={Cart} />
            <Route path="/order" exact component={Order} />
            <Route path="/not-found" exact component={NotFound} />
            <Route path="/" exact  component={Home} />
            <Redirect to="/not-found" />             
         </Switch>          
    </div> 
  );
}

export default App;
