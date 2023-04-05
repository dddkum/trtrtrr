// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import './App.css';

function App() {
return (
<Router>
<nav>
<h1>Veterinary Clinic</h1>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/services">Services</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ul>
</nav>

<Route path="/" exact component={Home} />
<Route path="/about" component={About} />
<Route path="/services" component={Services} />
<Route path="/contact" component={Contact} />

<footer className="footer">
<p>© 2023 Veterinary Clinic</p>
<p><Link to="/contact">Contact Us</Link></p>
</footer>
</Router>
);
}

export default App;