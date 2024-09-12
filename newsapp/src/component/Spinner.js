import React, { Component } from 'react'


export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src="{loading}" alt="loading" />
      </div>
    )
  }
}

export default Spinner
