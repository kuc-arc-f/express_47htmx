import {useState, useEffect}  from 'react';
import React from 'react'
import ReactDOM from 'react-dom/client'
//mport { Link } from 'react-router-dom';
import Head from '../components/Head'
import CrudIndex from './Login/CrudIndex';
//
let pageItems: any[] = [];
//
function Page(){
  const [updatetime, setUpdatetime] = useState<string>("");
  //
  useEffect(() => {
    (async () => {
    })()
  }, []);
  //
  const loginProc = async function(){
    //console.log("testProc" + new Date().toString() );
    const resulte = await CrudIndex.login();
    if(resulte) {
      alert("OK, login");
    }else{
      alert("NG, login");
    }
//    setUpdatetime(new Date().toString());
  }
  //
  return(
  <div  className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <h1 className="text-4xl font-bold my-2">Login!</h1>
    <hr className="my-1" />
    <hr className="my-2" />
    <label className="text-2xl font-bold my-2">Email:</label>
    <input type="text" id="email" name="email"
    className="input_text" /> 
    <hr className="my-2" />
    <label className="text-2xl font-bold my-2">Password:</label>
    <input type="text" id="password" name="password"
    className="input_text" /> 
    <hr className="my-2" />
    <button className="btn-purple" onClick={()=>loginProc()}>Login
      </button>
  </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
/*
<hr className="my-2" />
<button className="btn-purple" onClick={()=>testProc()}>Test
</button>    
*/
