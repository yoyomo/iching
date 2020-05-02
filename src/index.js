import React from "react";
import ReactDOM from "react-dom";
import Root from "./core";
import Model from './model';
import Update from './update';
import View from './view';
import Ignite from './ignite';
import Subscriptions from './subscriptions';
import 'tachyons'; 
import './css';

ReactDOM.render(<Root model={Model} update={Update} view={View} ignite={Ignite} subscriptions={Subscriptions}/>, document.getElementById("root"));
