import React from "react";

function CreateCard (props) {

  return (
    <div className="user-card">
      <img src={props.user.avatar_url} width=
      "100"></img>
      <h2>{props.user.name}</h2>
      <p>{props.user.bio}</p>
      <p>{props.user.location}</p>

    </div>
  )



}

export default CreateCard;