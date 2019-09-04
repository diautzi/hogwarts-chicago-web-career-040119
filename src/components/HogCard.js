import React from 'react'
// import hog-imgs from '../hog-imgs/'


export default class HogCard extends React.Component {

    state = {
      display: false
    }


    hogCardContent = (props) => {

      return (
        <div>
          <div className="content">
            <a className="header">{this.props.hog.name}</a>
            <div className="meta">
              <span className="greased">{this.props.hog.greased ? "Greased" : "Not greased"}</span>
            </div>
            <div className="meta">
              <span className="specialty">{this.props.hog.specialty}</span>
            </div>
            <div className="description">
              {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="user icon"></i>
              {this.props.hog['highest medal achieved']}
              </a>
          </div>
        </div>
      )

    }

    handleClick = (event) => {
        this.setState({
          display: !this.state.display
        })
    }


  render() {

    let pigName = this.props.hog.name.toLowerCase().replace(/ /g, "_")
    let pigPic = require(`../hog-imgs/${pigName}.jpg`)
    const content = null
    return(
        <div>
          <div className="ui card" onClick={this.handleClick} >
            <img src={pigPic}></img>
            { this.state.display ? this.hogCardContent() : <button> Click For Details</button>}

          </div>
        </div>
      )
    }
}
