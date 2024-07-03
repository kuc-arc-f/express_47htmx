import {useState, useEffect}  from 'react';
import React from 'react'
import ReactDOM from 'react-dom/client'
//mport { Link } from 'react-router-dom';
import Head from '../components/Head'
import HttpCommon from './lib/HttpCommon';
import CrudIndex from './test/CrudIndex';
import CrudShow from './test/CrudShow';
//
let pageItems: any[] = [];
let pageItem: any = {};
let itemId: number = 0;
//
function Page(){
  const [updatetime, setUpdatetime] = useState<string>("");
  //
  useEffect(() => {
    (async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get('id') || "";
      itemId = Number(id);
//console.log(id);
      getItem(itemId);
    })()
  }, []);
  /**
   *
   * @param
   *
   * @return
   */
  const getItem = async function(id: number) {
      try{
          const item = await CrudShow.get(id);
          pageItem = item;
console.log(pageItem);
          setUpdatetime(new Date().toString());
      } catch (e) {
          console.error(e);
      } 
  }
  /**
   *
   * @param
   *
   * @return
   */
  const deleteItem = async function() {
    try{
        const result = await CrudShow.delete(itemId);
        if(result) {
            window.location.href = '/test';
        }
    } catch (e) {
        console.error(e);
    } 
  }
  /**
   *
   * @param
   *
   * @return
   */
  //
  return(
  <div  className="container mx-auto my-2 px-8 bg-white">
    <Head />
    <hr />
    <h1 className="text-4xl font-bold my-2">TestShow.tsx</h1>
    <hr className="my-2" />
    <h1 className="text-4xl font-bold">{pageItem.title}</h1>
    <p>ID: {pageItem.id}</p>
    <hr className="my-1" />
    <pre>{pageItem.content}</pre>
    <hr className="my-1" />
    <button onClick={()=>deleteItem()} className="btn-red"
    >delete</button>
  </div>
  );
}
//
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
/*
<hr className="my-2" />
*/
