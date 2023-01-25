import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./components/App";


// const express = require('express');
// const app_exp = express();
// const PORT = 8080;

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);

// app_exp.listen(PORT, () => {
//     console.log('Server starting in port 8080');
// });
