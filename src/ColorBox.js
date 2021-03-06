import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newOpac = this.props.opacity - 0.1

    if ( newOpac > 0.1 ) {
      console.log(newOpac)
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newOpac} />
        </div>
      )
    } else {
      return null
    }
  }

}
