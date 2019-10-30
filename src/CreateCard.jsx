import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: inline-block;
  width: 450px;
  height: 250px;
  background-color: #a0a4d9;
  margin: 48px auto: 0;
  padding: 15px;
  border-radius: 10px;
    
`;

function CreateCard (props) {

  return (
    <CardWrapper>
    <div className="user-card">
      <img src={props.user.avatar_url} width=
      "100"></img>
      <h2>{props.user.name}</h2>
      <p>{props.user.bio}</p>
      <p>{props.user.location}</p>
    </div>
    </CardWrapper>
  )



}

export default CreateCard;