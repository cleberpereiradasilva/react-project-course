import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
    return(
        <Router>
            
        </Router>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
