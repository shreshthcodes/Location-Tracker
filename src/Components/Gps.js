
import { useState } from "react";
import Button from "./Button";
import Map from "./Map";
import navigate from "./Nativgate";
const Gps=()=>{
    const [position,setposition]=useState({})
    const [flag,setflag]=useState(false);
    const successfn=(pos)=>{
        setflag(true)
        setposition(pos);
    }
    const failfn=(err)=>{
        console.log("error with the location tracking",err)
    }
    const getPosition=()=>{
     navigate.gps(successfn,failfn)
    }
    const resetLocation=()=>{
        setflag(false)
        setposition({})
    }
    const primary="btn btn-primary";
    const danger="btn btn-danger mb-1";
    if(flag)
    return(<>
    <div className="flexy">
    <Button color={danger} props="Clear Location" fn={resetLocation}/>
    </div>
    <div style={{border:"2px solid black", borderRadius:"8px"}}>
    <Map  pos={position}/>
    </div>
    </>
    )
    else
    return(
        <div className="flexy">
        <Button color={primary} props="Know your location" fn={getPosition}/>
        </div>
    )
}
export default Gps;