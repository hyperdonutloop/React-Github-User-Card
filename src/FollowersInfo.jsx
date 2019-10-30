import React from "react";
import styled from "styled-components";

const FWrapper = styled.div`
  p {
    color: #FFFFFF;
    font-size: .8rem;
    
    
  }
`;

function FollowersInfo (props) {

  return (
    <FWrapper>
    <div className="followers-card">
      <p>{props.name}</p>
    </div>
    </FWrapper>
  )


}

export default FollowersInfo;