import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import Hello from './Hello';

import 'tachyons';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App/>
    ,document.getElementById('root')
);






// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(
//     <React.StrictMode>
//     <h1>Hello world</h1>
//     <App />
//     </React.StrictMode>,
//   document.getElementById('root')
// );

//ReactDOM.render(<Hello greetings="Hello React Nenja Ajith"/>,document.getElementById('root'));


reportWebVitals();
