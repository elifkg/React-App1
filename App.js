import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import  Card  from './Card';
import Collapse from './Collapse'; 
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './components/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App(){
const user = false;

  return (
    
    <div>

      
      <div className="card-group">
         <Router>
            <Topbar/>
              
                <Routes>
                <Route  exact path="/" element={ <Home />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/write" element={ <Write />} />
                <Route path="/settings" element={ <Settings />} />
                <Route path="/post/:postId" element={ <Single />} />
                 <Route path="/register" element={<Register/>} />

                  
                </Routes>
                
              </Router>  
        
      </div>    
      
    
    </div>
  );
}

export default App;


