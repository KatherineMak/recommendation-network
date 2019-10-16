import React from 'react';
// import './App.css';
import {Products, UserLogin, UserRegister, AppMenu} from './components/containers';
import { Provider } from 'react-redux';
import storeFactory from './store/configureStore'
// import configureStore from './store/configureStore';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Whoops404 from './components/ui/Whoops404';

const store = storeFactory()
// const store = configureStore();

window.React = React
window.store = store

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Route component={AppMenu} />
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
