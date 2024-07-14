import React from "react";
import ReactDOM from "react-dom";
import Card from './Card';
import "./index.css";
import Sdata from "./Sdata";

function ncard(val){

    return(
        <Card
        imgscr={val.imgscr}
        sname={val.sname}
        title={val.title}
        link={val.link}
        />
    );
}


ReactDOM.render(
<>
<h1 className="heading_style"> Top 5 nature photos of pexels</h1>

{Sdata.map(ncard)}

</>, document.getElementById("root"));