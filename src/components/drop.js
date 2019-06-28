import React, { Component } from 'react';
class Drop extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (<div>
      <div className="btn-group">
        <button type="button" className="btn  btn-secondary btn-lg  bg-color-black dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          choisir la categorie
    </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Plomberie</a>
          <a className="dropdown-item" href="#">Forgeron</a>
          <a className="dropdown-item" href="#">Macon</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
    </div >)


  }}

  export default Drop