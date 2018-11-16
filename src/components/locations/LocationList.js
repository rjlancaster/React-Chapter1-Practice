import React, { Component } from 'react'


export default class LocationList extends Component {
  render() {
    return (
      <article>
        <h1>Locations</h1>
        <section><b>Nashville South</b>
        <p>300 Elberta St</p>
        <p>Nashville, TN  37210</p>
        <p>615-416-2797</p></section>
        <section><b>Nashville East</b>
        <p>1015 McClurkin Ave</p>
        <p>Nashville, TN 37206</p>
        <p>615-423-0200</p></section>
      </article>
    )
  }
}