import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import Hero from './components/Hero';
import Side from './components/Side';
// background = {
//   "backgroundColor": "black"
// };

ReactDOM.render(
  <React.StrictMode>
    <div style={{ backgroundColor: "#0a192f" }}>
      <Navbar />
      <Side />
      <div class="container" >
        <Hero />
        <About />
        <App />
      </div>
    </div>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
