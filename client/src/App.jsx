import React, { 

} from 'react';
import {

} from './styles';
import { 
    
} from '@ant-design/icons';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import Registerpage from './components/views/RegisterPage/RegisterPage';

function App() {
    return (
      <Router>
        <div>
            
          <Switch>
            <Route exact path="/" component={ LandingPage } />
            <Route path="/login" component={ LoginPage } />
            <Route path="/register" component={ Registerpage } />
          </Switch>
        </div>
      </Router>
    );
};

export default App;