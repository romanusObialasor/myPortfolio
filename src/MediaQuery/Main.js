import React, { useState } from "react";
import HeaderComponents from "./HeaderComponents";
import Slider from "./Slider";

const Main = () => {
  const [dis, setDis] = useState(false)
  const Toggle = () =>{
    setDis(!dis)
  }

  return (
    <div>
      <HeaderComponents dis={dis} />
      <Slider dis={dis} Toggle={Toggle}/>
    </div>
  );
};

export default Main;
