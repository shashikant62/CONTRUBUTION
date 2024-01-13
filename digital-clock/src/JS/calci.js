import React,{useState} from "react";
import "../CSS/calci.css";
const Clock=()=>{
    let time=new Date().toLocaleTimeString();
    let date=new Date().toLocaleDateString();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()]
    const [timer,settime]=useState(time);
    const updatetime=()=>{
        time=new Date().toLocaleTimeString();
        settime(time);
    }
    setInterval(updatetime,1000);
    return(<>
    <div className="main">
        <h1 id="time">{time}</h1>
        <h3 id="date">{date}</h3>
        <h3 id="day">{day}</h3>
    </div>
    </>)
}

export default Clock;