import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Dropdown from "./Dropdown";
import DropVehicle from "./DropVehicle";
import Totaltime from "./Totaltime";
import Header from "./Header";  
import { useAlert } from 'react-alert'


const FetchData = () => {
  const history = useHistory();
  const alert = useAlert()
  const [destList, setDestList] = useState([]);
  const [vehList, setVehList] = useState([]);
  const [token,setToken] = useState('');

  var [finalTime,setFinalTime] = useState(0);
  var [totalTimeReq,setTotalTimeReq] = useState({})

  const [finalResult,setFinalResult] = useState();

  const calTotTime = (dest,time) =>{
    totalTimeReq[dest] = time
    console.log(totalTimeReq)
    console.log(allTimeReq)
    setFinalTime((Object.values(totalTimeReq)).reduce((a,b)=>a+b,0))
    
  }



  const planetDistance = {};

  const baseURL = "https://findfalcone.herokuapp.com/";

  const [choosenDest,setChoosenDest] = useState({})
  const [choosenVeh,setChoosenVeh] = useState({});

  const[pld,setPld] = useState(0)

  // const selectedVehicleList = [];
  // const selectedDestList = [];
  // const [choosenVehList,setChoosenVehList] = useState([]);
  const [allTimeReq,setAllTimeReq] = useState()

  const setPd = () => {
    destList.map((item) => {
      return (planetDistance[item.name] = item.distance);
    });
  };

  const updateChoosenDest = (item, key) => {
    console.log(key in choosenDest);
    console.log(key);
    console.log(item);
    choosenDest[key] = item;
    console.log(choosenDest);
    
  };

  const updateChoosenVeh = (item, key) => {
    console.log(key in choosenVeh);
    console.log(item);
    choosenVeh[key] = item;
    console.log(choosenVeh);
    
  };

  const reset =(key)=>{
    delete choosenVeh[key]
  }

  const getDest = () => {
    fetch(`${baseURL}planets`)
      .then((res) => res.json())
      .then((jsonData) => {
        setDestList(jsonData);
      });
  };
  const getVeh = () => {
    fetch(`${baseURL}vehicles`)
      .then((res) => res.json())
      .then((jsonData) => {
        setVehList(jsonData);
      });
  };

  const getToken = async ()=>{
    const response = await fetch(`${baseURL}token`,{
      method: 'POST',
      headers: {
        'Accept' : 'application/json'
      }
    });
    try{
      let data =await response.json();
      setToken(data.token);
    }catch(err){
      console.log(err)
    }
  }
  const getFalcon = async (body)=>{
    const response = await fetch(`${baseURL}find`,{
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' :'application/json',
      },
      body : JSON.stringify(body),
    });
    try{
      let data = await response.json();
      setFinalResult(data)
      console.log(finalResult)
      return(data)
    }catch(err){
      console.log(err)
      return(null)
    }

  }
  
  
  const total = (dis)=>{
    let totalDis = pld + dis;
    setPld(totalDis)
   }

  //  const reduceVehCount = (key)=> {
  //    vehList[key].
  //  }

  const findFalcone =  async() => {
    
    let selectedVehicleList = Object.values(choosenVeh);
    console.log(selectedVehicleList);
    let selectedDestList = Object.values(choosenDest);
    console.log(selectedDestList);
    console.log(token)
    if (token) {
      let requestBody = {
        token: token,
        planet_names: selectedDestList,
        vehicle_names: selectedVehicleList,
      };
      if(selectedDestList.length == 4 && selectedVehicleList.length == 4){
        let result = await getFalcon(requestBody)
      console.log(result)
      if(result['status']=='success'){
        history.push({
          pathname:'/ResultSuccess',
          state:{data: result,time:finalTime}
        })
      }
      if(result.status=='false'){
        history.push('/ResultFailure')
      }
      }else {
        alert.show('Plese select all destinations and vehicles')
      }
      
    }
  };
  useEffect(()=>{
    
  },[choosenVeh])

  useEffect(() => {
    getDest();
    getVeh();
    getToken();
  }, []);

  return (
    <div className="container">
      
      <div className="content">
        <div className="row">
          {setPd()}
          {console.log(planetDistance)}
          {console.log(choosenDest)}
          {console.log(choosenVeh)}
          {console.log(token)}
          
          <div className=" col-12 col-md-6 ">
            <div className=" d-flex m-3">
              <div>
                <Dropdown                
                destList={destList}
                vehList={vehList}
                fun={updateChoosenDest}
                dest="dest1"
                title="Select Destination"
                choosenDest={choosenDest}
              />
              </div>
              <div className="mx-4">
                <DropVehicle
                calTotTime = {calTotTime}
                allTimeReq = {allTimeReq}
                vehList={vehList}
                fun={updateChoosenVeh}
                reset={reset}
                dest="dest1"
                pd={planetDistance}
                title="Choose Vehicle"
                choosenVeh={choosenVeh}
                choosenDest={choosenDest}

              />
              </div>
              
              
            </div>
          </div>
          <div className=" col-12 col-md-6 ">
            <div className="d-flex m-3">
              <div>
                <Dropdown
              
                destList={destList}
                vehList={vehList}
                fun={updateChoosenDest}
                dest="dest2"
                title="Select Destination"
                choosenDest={choosenDest}
              />
              </div>
              <div className="mx-4">
                <DropVehicle
                calTotTime = {calTotTime}
                allTimeReq = {allTimeReq}
                vehList={vehList}
                fun={updateChoosenVeh}
                dest="dest2"
                reset={reset}
                pd={planetDistance}
                title="Choose Vehicle"
                choosenVeh={choosenVeh}
                choosenDest={choosenDest}
              />
              </div>
              
            </div>
          </div>
          <div className=" col-12 col-md-6 ">
            <div className="d-flex m-3 ">
              <div >
                <Dropdown
              
                destList={destList}
                vehList={vehList}
                fun={updateChoosenDest}
                dest="dest3"
                title="Select Destination"
                choosenDest={choosenDest}
              />
              </div>
              <div className="mx-4">
                <DropVehicle
                calTotTime = {calTotTime}
                allTimeReq = {allTimeReq}
                vehList={vehList}
                fun={updateChoosenVeh}
                dest="dest3"
                reset={reset}
                pd={planetDistance}
                title="Choose Vehicle"
                choosenVeh={choosenVeh}
                choosenDest={choosenDest}
              />
              </div>
              
            </div>
          </div>
          <div className=" col-12 col-md-6 ">
            <div className="d-flex m-3">
              <div>
                <Dropdown
             
                destList={destList}
                vehList={vehList}
                fun={updateChoosenDest}
                dest="dest4"
                title="Select Destination"
                choosenDest={choosenDest}
              />
              </div>
              <div className="mx-4">
                <DropVehicle
                calTotTime = {calTotTime}
                allTimeReq = {allTimeReq}
                vehList={vehList}
                fun={updateChoosenVeh}
                fun2={findFalcone}
                dest="dest4"
                reset={reset}
                pd={planetDistance}
                title="Choose Vehicle"
                choosenVeh={choosenVeh}
                choosenDest={choosenDest}
              />
              </div>
              
            </div>
            {console.log(totalTimeReq)}
          </div>
          {console.log(pld)}
          <div className="d-flex justify-content-center pt-5">
            
            <br/>
            <h4><span>Total time required : {finalTime} </span></h4>
          </div>
        </div>
        <div className="d-flex justify-content-center p-5">
        <button type="button" className="btn btn-primary " onClick={()=>{findFalcone()}}
          
        >Find Falcon</button>
        </div>
      </div>
    </div>
  );
};

export default FetchData;
