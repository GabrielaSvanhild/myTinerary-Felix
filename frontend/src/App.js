import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


const App = () => {
   return(

   <BrowserRouter>
   <Switch>
      <Route exact path='/' component={Home} />
 {/*      <Route
         path='/lista'
         render={(props) => <Home {...props} invitados={invitados} />}
      />
      <Route
         path='/form'
         render={(props) => (
            <Formulario {...props} pushearInvitado={pushearInvitado} />
         )}
      />
      <Route path='/notFound' component={Cmpt404} />
      <Redirect to='/notFound' /> */}
   </Switch>
</BrowserRouter>
   )
  
}

export default App
