import React from 'react'
import hogs from '../porkers_data';
import HogCard from './HogCard.js'


export default class HogList extends React.Component {

state = {hogs: hogs}
hogsCards = () => {
  return hogs.map(hog => <HogCard hog={hog} /> )
}

  render() {
    return(
      <div className="ui cards eight wide columns">
        {this.hogsCards()}
      </div>
    )
  }
}
