import Home from './pages/Home'
import Cities from './pages/Cities'
import City from './pages/City'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import userActions from './redux/actions/userActions'


const App = (props) => {
   useEffect(() => {
      if (localStorage.getItem('token')) {
         props.logInLS(
            localStorage.getItem('token'),
            localStorage.getItem('firstName'),
            localStorage.getItem('src')
         )
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   return(
      <BrowserRouter>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cities' component={Cities} />
            <Route path='/notFound' component={NotFound}/>
            <Route path='/info-city/:id' component={City}/> 
            {!props.token && <Route path='/sign_in' component={SignIn} />}
            {!props.token && <Route path='/sign_up' component={SignUp} />}
            <Redirect to="/"/>
         </Switch>
      </BrowserRouter>
   )
  
}

const mapStateToProps = (state) => {
   return {
      token: state.user.token,
   }
}
const mapDispatchToProps = {
   logInLS: userActions.logInLS,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
