import { useEffect } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Detail from './component/detail/box/detail.jsx';
import Home from './component/homepage/homepage';
import Basic from './component/login/login';

function App() {
  useEffect(() => {
    document.title = "Charomania"
 }, []);

  return (
    <div >
     <Redirect from='/' to='/login'/>
     <Switch>
     
    
     <Route exact path='/login' component={Basic}/>
      <Route exact path='/homepage' component={Home}/>
      <Route exact path='/details' component={Detail}/>
     
     </Switch>
    </div>
  );
}

export default App;
