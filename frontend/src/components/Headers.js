import axios from "axios";
import React from "react";
import { data } from "../data";

class Headers extends React.Component {
  // 

  state = {
    persons: []
  }

  componentDidMount() {
    const id = window.name;
    // console.log(id)
    axios.get(`http://127.0.0.1:5000/${id}`)
      .then(res => {
        const persons = res.data.userinfo;
        this.setState({ persons });
      })
    
  }
  
  render() {
    return (
      <header className="custemrow">
        <div>
          <a href={window.location.pathname} className="custembrand">
            eco
          </a>
        </div>
        <div className="custemheader-img">
          {this.state.persons.map((person) => 
          <img
            src={person.image}
            className="custemround"
            alt={person.name}
            />
          )}
        </div>
      </header>
    );
  };
}
export default Headers;
