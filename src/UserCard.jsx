import React from "react";
import axios from "axios";

class UserCard extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/hyperdonutloop')
    .then(response => {
      console.log(response);
      this.setState({
        users: response
      })
    })
    .catch(error => {
      console.log("the data was not returned", error);
    })
  }

  render() {

    return (
      <div>This is My App</div>
    )



  }



}

export default UserCard;