import React, { useState } from "react";
import styled from "styled-components";

import Title from "./Title";
const Wrapper = styled.div`
width:15vw;
height:45vh;
position:relative;
margin-bottom:5vh;

`
const Back = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
justify-content:center;
align-items:center;
position:absolute;
border-radius:10px;
backgtound-color:blue;
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
`;
const Description = styled.p`
`;
const Card = ({ title, desc,img }) => {
  let [flip, setFlip] = useState(false)
  return (
    <Wrapper>
      <Back onMouseLeave={()=>{
        setFlip(false)
      }} 
      style={flip === true ? {
        cursor: "pointer",
        transform: "rotateY(180deg)",
        transitionProperty: "transform",
        transitionDuration: "2s"
      } : { cursor: "pointer",
      transform: "rotateY(0deg)",
      transitionProperty: "transform",
      transitionDuration: "2s"}}
      >
        <img src={img}  style={{transform: "rotateY(180deg)",width:"100%",height:"100%",borderRadius:"10px"}} />
      </Back>
      <Front style={flip === true ? {
        cursor: "pointer",
        transform: "rotateY(180deg)",
        transitionProperty: "transform",
        transitionDuration: "2s"
      } : { cursor: "pointer",
      transform: "rotateY(0deg)",
      transitionProperty: "transform",
      transitionDuration: "2s"}}
        onMouseEnter={() => {
        setFlip(true)
      }}>

        <h3>
         {title}
        </h3>
        <Description>
          {desc}
        </Description>
      </Front>
    </Wrapper>
  );
};

export default Card;
