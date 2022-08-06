import React, { useState } from "react";
import styled from "styled-components";

import Title from "./Title";
const Wrapper = styled.div`
width:17%;
height:40vh;
position:relative;
margin-bottom:40px;

`
const Back = styled.div`
background-color:red;
width:100%;
height:100%;
display:flex;
text-align:center;
padding:10px;
justify-content:center;
align-items:center;
position:absolute;
border-radius:10px;
// &:hover{
//   cursor:pointer;
//   transform:rotateY(180deg);
//   transition-property:transform;
//   transition-duration:2s;
// }
`
  ;
const Front = styled.div`
display:flex;
color:white;
text-align:center;
flex-direction:column;
align-items:center;
width:100%;
height:100%;
background-color:RGB(196, 179, 169);
padding:10px;
position:absolute;
border-radius:10px;
backface-visibility: hidden;

&:hover{
  cursor:pointer;
  transform:rotateY(180deg);
  transition-property:transform;
  transition-duration:2s;
}
`;
const Description = styled.p`
`;
const Card = ({ index, description }) => {
  let [flip, setFlip] = useState(false)
  return (
    <Wrapper>
      <Back 
      style={flip === true ? {
        cursor: "pointer",
        transform: "rotateY(180deg)",
        transitionProperty: "transform",
        transitionDuration: "2s"
      } : {}}
      >
        <p style={{transform: "rotateY(180deg)"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempore.</p>
      </Back>
      <Front  onMouseLeave={()=>{
        setFlip(false)
      }} onMouseEnter={() => {
        setFlip(true)
      }}>

        <h3>
          Article {index + 1}
        </h3>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptate quaerat rem officia mollitia magni sequi dolorem excepturi modi. Facere!
        </Description>
      </Front>
    </Wrapper>
  );
};

export default Card;
