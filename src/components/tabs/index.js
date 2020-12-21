import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./styles.css";

export class TabManager extends Component {
  state = {}

  render() {
    const { activeTab, handleTab, tabs, color} = this.props;
    return (
      <div className="tab-manager">
        {tabs.map(({ label, value }) => (
          <div
            className={`tab ${value === activeTab ? `selected-tab-${color}` : ''}`}
            onClick={() => { handleTab(value); }}
          >
            {label}
          </div>
        ))}
      </div>
    );
  }
}

TabManager.propTypes = {
  activeTab: PropTypes.number.isRequired,
  handleTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(Object).isRequired,
};
