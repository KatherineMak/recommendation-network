import React from 'react';
// import './App.css';
import {Products, UserLogin, UserRegister} from './components/containers';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Whoops404 from './components/ui/Whoops404';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Switch>
                {/*<Route exact path="/:id" component={Product} />*/}
                <Route path='/login' exact component={UserLogin}/>
                <Route path='/register' exact component={UserRegister}/>
                <Route path='/' exact component={Products}/>
                    {/*<IndexRoute component={ItemList} />*/}
                    {/*<Route path='admin' component={Admin} />*/}
                    {/*<Route path='genre' component={Genre} />*/}
                <Route component={Whoops404}/>
            </Switch>
        </Router>
    </Provider>
  );
}

export default App;
