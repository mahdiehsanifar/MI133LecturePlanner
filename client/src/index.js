import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store, test } from './data/store'
import home from './component/home/home';
import login from './component/login/login';
import './component/NavigationBar/NavigationBar.css';
import BaseLayout from './component/baselayout/baselayout';
import register from './register/register';
const defaultStore = store
const main = <Provider store={defaultStore}>
    <Router>
        <div className="container">        
            <BaseLayout exact path="/" component={home} />
            <Route path="/login" component={login} />
            <Route path="/register" component={register} />
        </div>
    </Router>
</Provider>

test(defaultStore)

ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
