import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Departments from './component/Departments/Departments';
import Service from './component/Service/Service';
import Header from './component/Home/Header/Header';
import Contact from './component/Contact/Contact';
import Detail from './component/Detail/Detail';
import Footer from './component/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './component/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      
        <BrowserRouter>
              <Header> </Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/department">
            <Departments></Departments>
            </Route>
            <Route path="/service">
            <Service></Service>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
              </Route>
            <Route  path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/appointbook/:id">
              <Detail></Detail>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;

