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
  gap:4vw;
  padding-left:2.5vw;
  padding-right:2.5vw;
;`
let arr = new Array(10).fill("")
console.log(data.articles)
const CardList = () => {
  return (
    <Cards>
{data.articles.map((ele,i)=>{
 return <Card title={ele.title} desc ={ele.description} img={ele.image}/>
})}
    </Cards>
  );
};

export default CardList;
