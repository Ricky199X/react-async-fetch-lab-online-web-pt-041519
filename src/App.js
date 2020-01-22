// create your App component here
import React, { Component } from "react"

export default class App extends Component {

   state = {
      peopleInSpace: []
   }


   componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
         .then(resp => resp.json())
         .then(data => {
            // we need to set the state with the people objects in the data array
            this.setState({
               peopleInSpace: data.people
            })
         })
   }

   render() {
      return(
         <div>
            {this.state.peopleInSpace.map(person => <ul>{person.name}</ul>)}
         </div>
      )
   }
}