import "./Dropdown.css";
import { useState } from "react";



const Dropdown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [filter, setFilter] = useState(props.title);
  const destList = props.destList;
  const dest = props.dest;

  return (
    <div className="dropdown">
      <div className="dropdrown-btn " style={{'width':'23vh'}} onClick={() => setIsActive(!isActive)}>
        {filter}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {destList.map((opt) => (
            <div className={ (Object.values(props.choosenDest).indexOf(opt.name) > -1) ? "dropdown-item disabled" : "dropdown-item " } onClick={() => {
              let data = {}
              
              data[props.dest] = opt.name
              setIsActive(false)
              setFilter(opt.name)
              console.log(opt.name)
              props.fun(opt.name,props.dest)
             
              }}>
              {opt.name} ({opt.distance} )
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
