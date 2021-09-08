import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Header from "./Header";

const ResultFailure = () => {
  const history = useHistory();

  return (
    <>
    <Header/>
      <div>
        <section className='justify-content-center m-5 p-3' style={{'backgroundColor':'orangered'}}>
            <h5 className='d-flex p-2 justify-content-center' >Mission Failed!</h5>
            <h5 className='d-flex p-2 justify-content-center'> Queen Falcon wasn't found in any of the choosen planets. Please try again finding in some other planets</h5>
        </section>
        <section className='d-flex p-5 justify-content-center'>
      <button 
        onClick={()=>{
            history.push('/')
        }}
      >
            Try again
      </button>
      </section>
      </div>
    </>
  );
};

export default ResultFailure;
