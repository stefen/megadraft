/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React, {Component} from "react";


export default class ToolbarItem extends Component {
  constructor(props) {
    super(props);
  }

  toggleAction(action) {
    if (action.toggle) {
      action.toggle(!action.active);
    }
  }

  render() {
    const Icon = this.props.item.icon;

    if (this.props.item.type == "separator") {
      return (
        <li className="item">
          <button><Icon /></button>
        </li>
      );
    }

    const activeClass = this.props.active ? " active": "";
    const className = `item ${activeClass}`;

    return (
      <li className={className}>
        <button onClick={() => this.toggleAction(this.props)}><Icon /></button>
      </li>
    );
  }
}