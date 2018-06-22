import React, { Component } from 'react';

class Accordion extends Component {

  render() {
    return (
      <div className="accordion">
        <div className="tab">Tab 1</div>
        <div className="panel">Panel</div>

        <div className="tab">Tab 2</div>
        <div className="panel">Panel</div>

        <div className="tab">Tab 3</div>
        <div className="panel">Panel</div>

        <div className="tab">Tab 4</div>
        <div className="panel">Panel</div>
      </div>
    );
  }
}

export default Accordion;
