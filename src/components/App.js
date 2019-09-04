import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import FilterHog from './FilterHog'
import hogs from '../porkers_data';


class App extends Component {

  state = {
    hogs: hogs,
    search: ""
  }

  desiredHogs = () => {
    let tempHogs = [...this.state.hogs]
    let filteredHogs = tempHogs
  }


  render() {
    return (
      <div className="App">
          <FilterHog />
          <Nav />
          <HogList hogs={hogs}/>
      </div>
    )
  }
}
export default App;
