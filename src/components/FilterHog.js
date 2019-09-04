import React from 'react'

export default class FilterHog extends React.Component {
  render() {
    return(

          <div className="ui item">
            <label> Sort by: </label>
              <form>
                <select className="ui selection dropdown" name="sort">
                  <option value="name" >Name</option>
                  <option value="weight">Weight</option>
                  </select>
              </form>
          </div>
     )
  }
}
