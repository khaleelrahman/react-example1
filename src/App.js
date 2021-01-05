
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Detail from './component/detail/detail';
import Home from './component/homepage/homepage';
import Basic from './component/login/login';

function App() {
  return (
    <div className="App">
     
     <Switch>
     <Route exact path='/login' component={Basic}/>
      <Route exact path='/homepage' component={Home}/>
      <Route exact path='/details' component={Detail}/>
     
     </Switch>
    </div>
  );
}

export default App;
