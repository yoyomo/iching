import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import Model from './model';
import Update from './update';
import View from './view';
import Subscriptions from './subscriptions';
import 'tachyons'; 
import './css';

ReactDOM.render(<Root model={Model} update={Update} view={View} subscriptions={Subscriptions}/>, document.getElementById("root"));
