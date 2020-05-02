import React from "react";
import ReactDOM from "react-dom";

export default class extends React.Component {

  constructor(props) {
    super(props)

    this.model = props.model;
    this.update = props.update;
    this.view = props.view;
    this.ignite = props.ignite;
    this.subscriptions = props.subscriptions;

    this.state = {...this.model};
  }

  componentDidMount() {
    if(this.ignite) this.ignite(this.dispatch, this.update);
  }

  dispatch = (action) => {
    const oldState = {...this.state};
    const reduction = [].concat(action(oldState, this.subscriptions));
    const newState = reduction[0];
    const effects = reduction.slice(1);

    this.setState(newState, () => effects.map(effect => effect(this.dispatch, this.update)));
  }

  render = () => this.view(this.dispatch, this.update, {...this.state})
};
