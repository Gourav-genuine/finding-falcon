import "./Dropdown.css";
import { useState } from "react";
import Totaltime from "./Totaltime";


const DropVehicle = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [filter, setFilter] = useState(props.title);
  const vehList = props.vehList;
  var dest = props.dest;
  var choosenDest = props.choosenDest;

  const[classVal,setClassVal] = useState("dropdrown-btn")

  const resetVal = (ele)=>{
    ele.total_no +=1
  }

  

  return (
    <div className="dropdown">
      <div className= {classVal} style={{'width':'20vh'}}
       onClick={(event) => {
          setIsActive(!isActive);
          setClassVal("dropdrown-btn pe-none ")
          
          const vehName = event.target.innerText
          
          props.vehList.map((item)=>{
            if(item.name == vehName){
              resetVal(item)
            }
            
          })
          const val = (event.target.innerText)
          {if(val !== "Choose Vehicle"){
           console.log( event.target)
          }}
        }}
      >
        {filter}
      </div>
      {isActive && (
        <div className="dropdown-content">{console.log(choosenDest)}
          {props.vehList.map((opt) => (
            <div
              className={
                opt.total_no == 0 ||
                (props.pd[choosenDest[props.dest]]) > opt.max_distance
                  ? "dropdown-item disabled"
                  : "dropdown-item "
              }
              onClick={(e) => {
                setClassVal("dropdrown-btn")
                let data = {};
                console.log(opt)
                opt.total_no -= 1;
                console.log(e.currentTarget)
                console.log(props.choosenVeh)
                console.log(props.choosenDest);
                console.log(props.dest);
                console.log(props.pd);
                let planeDis = (props.pd[props.choosenDest[props.dest]]);
                let timeReq = planeDis/opt.speed
                // props.allTimeReq[props.dest] = timeReq;
                // console.log(props.allTimeReq)
                props.calTotTime(dest,timeReq)
                
                // data[props.dest] = opt.name;
                setIsActive(false);
                setFilter(opt.name);
                console.log(opt.name);
                console.log(opt.max_distance);
                props.fun(opt.name, props.dest);
              }}
            >
              {opt.name} {opt.total_no}
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default DropVehicle;
