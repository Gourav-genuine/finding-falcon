import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Header from "./Header";

const ResultSuccess = () => {
    const history = useHistory();
    const location = useLocation();
  const data = location.state.data;
  const time = location.state.time;
  return (
    <>
        <Header/>
        <div className='container justify-content-center '>

        
      <section className=" flex-wrap justify-content-center m-5 p-3 " style={{'backgroundColor':'aquamarine'}} >
        <h5 className="d-flex p-2 justify-content-center">
          Success! Congratulations on Finding Falcon. King Shan is mightly
          pleased.
        </h5>
        <h5 className='d-flex p-2 justify-content-center'>Time taken: {time}</h5>
        <h5 className='d-flex p-2 justify-content-center'>Planet found: {data["planet_name"]}</h5>
      </section>
      <section className='d-flex p-5 justify-content-center'>
      <button 
        onClick={()=>{
            history.push('/')
        }}
      >
            Start again
      </button>
      </section>
      </div>
    </>
  );
};

export default ResultSuccess;
