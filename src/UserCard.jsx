import React from "react";
import axios from "axios";
import CreateCard from "./CreateCard";

class UserCard extends React.Component {

  state = {
    users: []
  };

//fetching user data from GitHub API//

  componentDidMount() {       
    axios
    .get('https://api.github.com/users/hyperdonutloop')
    .then(response => {
      console.log(response);
      this.setState({
        users: [response.data]
      })
    })
    .catch(error => {
      console.log("the data was not returned", error);
    })
  }

//line 17 -setting data to state 

  render() {

    return (
      <div className="user-card">
        <h1>Hyper Donut Loop</h1>
        {this.state.users.map(users => (<CreateCard
        img={users.avatar_url}
        name={users.name}
        bio={users.bio}
        location={users.location}
        />
        ))}
      </div>
    )

  }

}

export default UserCard;