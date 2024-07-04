import {useState, useEffect}  from 'react';
import React from 'react'
import ReactDOM from 'react-dom/client'
//mport { Link } from 'react-router-dom';
import Head from '../components/Head'
//import HttpCommon from './lib/HttpCommon';
//import CrudIndex from './test/CrudIndex';
//
const dataItems: any[] = [
  {id:1, title: "title_1"},
  {id:2, title: "title_2"},
  {id:3, title: "title_3"},
];
let items: any[] = [];
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
  const testProc = async function(){
    console.log("testProc" + new Date().toString() );
    pageItems = dataItems;
    setUpdatetime(new Date().toString());
  }
  //
  return(
  <div  className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <hr />
    <h1 className="text-4xl font-bold my-2">Test.tsx !!</h1>
    <hr className="my-2" />
    <button className="btn-purple" onClick={()=>testProc()}>Test
    </button>    
    <hr className="my-1" />
    {pageItems.map((item: any ,index: number) => {
    return (
    <div key={index}>
        <h3 className="text-3xl font-bold">{item.title}</h3>
        <span>ID: {item.id}, {item.createdAt}</span>
        <hr />
    </div>
    )
    })}
  </div>
  );
}
//
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
/*
<a href={`/test/show?id=${item.id}`}>
  <button className="btn-outline-purple ms-2">Show</button>
</a>
*/
