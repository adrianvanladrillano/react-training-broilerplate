import ReactDOM from 'react-dom';
import Main from './main'

// Bootstrap 5 Imports
// Pag bootstrap 5 gagamiten uncomment below code.

// import 'font-awesome/css/font-awesome.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Main laptop="mac" /></BrowserRouter>, document.getElementById('root'));