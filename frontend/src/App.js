import Home from './pages/Home'
import Cities from './pages/Cities'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import NotFound from './pages/NotFound';


const App = () => {
   return(
      <BrowserRouter>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cities' component={Cities} />
            <Route path='/notFound' component={NotFound}/>
            <Redirect to="/notFound"/>
         </Switch>
      </BrowserRouter>
   )
  
}

export default App
