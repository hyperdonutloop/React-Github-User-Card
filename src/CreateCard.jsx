import React from "react";

function CreateCard (props) {

  return (
    <div className="user-card">
      <img
      src="https://avatars0.githubusercontent.com/u/54790855?v=4"
      alt="profile-pic"
      width = "100"
      />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      <p>{props.location}</p>

    </div>
  )



}

export default CreateCard;