import React from "react";
import styled from "styled-components";

import NavBar from "./components/NavBar";
import CardList from "./components/CardList";
const Label = styled.div`
  width:100vw;
  text-align:center;
  font-size:larger;
  font-weight:bold;
  margin-top:10px;
;`
function App() {
  return (
    <>
      <NavBar />
      <Label>
      List of articles
      </Label>
      <CardList />
    </>
  );
}

export default App;
