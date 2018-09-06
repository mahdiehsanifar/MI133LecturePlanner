import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/js/bootstrap.min'
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, test } from './data/store'
import home from './component/home/home';
import NavigationBar from './component/NavigationBar/NavigationBar';
const defaultStore = store
const main =
    <Provider store={defaultStore}>

        <Router>
            <div>
                <Route exact path="/home" component={home} />
                {/* <Link to="/home" ><button>Home</button></Link> */}
                <NavigationBar />
                <App />
            </div>
        </Router>
    </Provider>

test(defaultStore)



ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
