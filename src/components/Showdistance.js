import React, {useState} from 'react';


const initDis = 0;

const total = (dis)=>{
 let totalDis = initDis + dis;
 return totalDis;
}

const Showdistance = (props) => {
    return (
        <div>
            <h3>{props.item}</h3>
        </div>
    )

    //Object.values(props.choosenVeh).indexOf(opt.name) > -1  || 
}

export default Showdistance
