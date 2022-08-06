import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Card from "./Card";
import data from "../data";
const Cards = styled.div`
  display:flex;
  flex-wrap:wrap;
  padding:20px;
  width:100vw;
  gap:2%;
;`
let arr = new Array(10).fill("")
const CardList = () => {
  return (
    <Cards>
{arr.map((ele,i)=>{
 return <Card index ={i}/>
})}
    </Cards>
  );
};

export default CardList;
